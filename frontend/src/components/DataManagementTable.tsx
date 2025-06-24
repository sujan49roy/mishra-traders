import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Star, FileText, Trash2 } from "lucide-react"
import { useState, useEffect } from "react"

type DataType = 'gallery' | 'products' | 'testimonials' | 'pdfs';

interface DataItem {
  _id: string;
  name?: string;
  title?: string;
  description?: string;
  content?: string;
  imageUrl?: string;
  pdfUrl?: string;
  rating?: number;
  createdAt: string;
}

const DataManagementTable = () => {
  const { toast } = useToast();
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<DataType>('gallery');
  const [refreshing, setRefreshing] = useState(false);

  // Helper: format date
  const formatDate = (d:string)=> new Date(d).toLocaleString('en-US',{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});

  // Helper: render cell based on field
  const renderCellContent = (item: any, field: string)=>{
    const val = item[field];
    if(field==='createdAt') return formatDate(val);
    if(field==='imageUrl'||field==='testimonialPhoto') return val ? <img src={`https://mishra-traders.onrender.com${val}`} alt="img" className="w-16 h-16 object-cover rounded"/> : '-';
    if(field==='pdfUrl') return val ? <a href={`https://mishra-traders.onrender.com${val}`} target="_blank" rel="noreferrer" className="text-primary underline flex items-center gap-1"><FileText className="w-4 h-4"/>PDF</a> : '-';
    if(field==='price') return val?`$${Number(val).toFixed(2)}`:'-';
    if(field==='rating') return val? (<div className="flex">{[...Array(5)].map((_,i)=><Star key={i} className={`w-4 h-4 ${i<val?'text-yellow-400':'text-gray-300'}`} />)}</div>):'-';
    return val??'-';
  };

  // Helper: determine headers per tab
  const getTableHeaders = ():string[]=>{
    const common=['Created'];
    switch(activeTab){
      case 'gallery': return ['Image','Title','Description',...common];
      case 'products': return ['Image','Name','Price','Category','Stock',...common];
      case 'testimonials': return ['Photo','Name','Content',...common];
      case 'pdfs': return ['PDF','Created'];
      default:return common;
    }
  };

  // Helper: fields list based on tab
  const getItemFields = (item: any): string[]=>{
    switch(activeTab){
      case 'gallery': return ['imageUrl','title','description','createdAt'];
      case 'products': return ['imageUrl','name','price','category','stock','createdAt'];
      case 'testimonials': return ['testimonialPhoto','name','content','createdAt'];
      case 'pdfs': return ['pdfUrl','createdAt'];
      default: return [];
    }
  };

  // Refresh trigger
  const refreshData = ()=>{setRefreshing(true); fetchData();};

  // Fetch data
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://mishra-traders.onrender.com/api/${activeTab}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setData(data.slice(0, 10)); // Show only first 10 items
    } catch (error) {
      toast({
        title: "Error fetching data",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      if (!window.confirm('Are you sure you want to delete this item?')) return;
      
      const response = await fetch(`https://mishra-traders.onrender.com/api/${activeTab}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete item');
      
      toast({
        title: "Success",
        description: "Item deleted successfully",
      });
      
      fetchData(); // Refresh data after deletion
    } catch (error) {
      toast({
        title: "Error deleting item",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        {['gallery', 'products', 'testimonials', 'pdfs'].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab as DataType)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Loading/Refresh State */}
      {loading || refreshing ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
          <span>{refreshing ? 'Refreshing...' : `Loading ${activeTab}...`}</span>
        </div>
      ) : (
        <div className="border rounded-md overflow-hidden">
          {/* Table Header */}
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                {getTableHeaders().map((header, index) => (
                  <TableHead key={index} className="text-left">
                    {header}
                  </TableHead>
                ))}
                <TableHead className="w-24" />
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={getTableHeaders().length + 1} className="text-center py-8">
                    No {activeTab} found. Start by adding some items.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item) => {
                  const fields = getItemFields(item);
                  return (
                    <TableRow key={item._id}>
                      {fields.map((key, index) => (
                        <TableCell key={index} className="p-4">
                          {renderCellContent(item, key)}
                        </TableCell>
                      ))}
                      <TableCell className="p-4">
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => handleDelete(item._id)}
                          className="flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

export default DataManagementTable
