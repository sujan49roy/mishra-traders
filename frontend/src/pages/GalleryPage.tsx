import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Helmet } from "react-helmet";

const categories = [
  { id: "all", name: "All Work" },
  { id: "aluminum", name: "Aluminum Works" },
  { id: "upvc", name: "UPVC Products" },
  { id: "railings", name: "Steel Railings" },
  { id: "ceiling", name: "False Ceilings" },
  { id: "paint", name: "Painting Projects" },
  { id: "hardware", name: "Hardware Solutions" }
];

const galleryItems = [
  {
    id: 1,
    category: "aluminum",
    title: "Modern Aluminum Window Installation",
    image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/12/Side-Hung-Aluminium-Window_0_1200.jpg.webp",
    description: "Custom aluminum window installation for a modern home in Kathmandu."
  },
  {
    id: 2,
    category: "aluminum",
    title: "Aluminum Sliding Doors",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDxDgZIWfkvWUuzMXCXw6DA82W1vPX8ZMbw&s",
    description: "Elegant aluminum sliding doors with security features for a commercial space."
  },
  {
    id: 3,
    category: "upvc",
    title: "UPVC Windows with Sound Insulation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ne9Rsa2yPjaX9DEYWXhwCfSFeA7ZZjulQg&s",
    description: "Soundproof UPVC windows installed in a residential apartment."
  },
  {
    id: 4,
    category: "upvc",
    title: "Designer UPVC Door",
    image:"https://www.neuffer.de/sites/de/files/img/frontdoors/l/upvc-door.jpg",
    description: "Custom-designed UPVC front door with decorative glass elements."
  },
  {
    id: 5,
    category: "railings",
    title: "Modern Staircase Railing",
    image: "https://i.pinimg.com/736x/01/b8/36/01b836d2198a861ba5cc6d742e5ca625.jpg",
    description: "Contemporary steel railing design for interior staircase."
  },
  {
    id: 6,
    category: "railings",
    title: "Balcony Steel Railing",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/11/361873994/ZX/HB/TT/13183293/ss-balcony-railing.jpg",
    description: "Durable and stylish balcony railing with custom design elements."
  },
  {
    id: 7,
    category: "ceiling",
    title: "POP False Ceiling",
    image: "https://lntsufin.com/storage/mediafiles/catalog/live/16376-1232/original/16376-1232_image_0.jpg",
    description: "Decorative POP false ceiling with recessed lighting for living room."
  },
  {
    id: 8,
    category: "ceiling",
    title: "Grid Ceiling Installation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDxpJXyntM55XPKyUX2vSXSZPo_SoSotdJQ&s",
    description: "Commercial grid ceiling installation with integrated lighting system."
  },
  {
    id: 9,
    category: "paint",
    title: "Interior Wall Painting",
    image: "https://paintingdrive.com/blog/wp-content/uploads/2024/03/image2-1.jpg",
    description: "Vibrant interior wall painting using premium quality paints."
  },
  {
    id: 10,
    category: "paint",
    title: "Exterior House Painting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf1iOhuxrsVt5336R6PgSAQAFRTki6eklWQ&s",
    description: "Complete exterior house painting project with weather-resistant finishes."
  },
  {
    id: 11,
    category: "hardware",
    title: "Custom Door Hardware",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZVJ9g_hBg_PvJUx3sqlQ4Y8RAbXV-6aOJA&s",
    description: "Premium door handles and locks installed for enhanced security."
  },
  {
    id: 12,
    category: "hardware",
    title: "Complete Hardware Solution",
    image: "https://mccoymart.com/post/wp-content/uploads/2020/06/blog-banner-building-materials-823x400-removebg-preview-1.png",
    description: "Comprehensive hardware solutions for kitchen and bathroom renovations."
  }
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  // DB gallery state
  interface DbItem { _id: string; title: string; description: string; imageUrl: string; }
  const [dbItems, setDbItems] = useState<DbItem[]>([]);
  const [dbLoading, setDbLoading] = useState(true);

  useEffect(() => {
    const loadDbItems = async () => {
      try {
        const res = await fetch("https://mishra-traders.onrender.com/api/gallery");
        if (!res.ok) throw new Error("Failed to fetch gallery");
        const data: DbItem[] = await res.json();
        setDbItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        setDbLoading(false);
      }
    };
    loadDbItems();
  }, []);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | Mishra Trader's</title>
        <meta 
          name="description" 
          content="Browse our gallery of completed projects showcasing our craftsmanship in aluminum, UPVC, railings, ceilings, painting and hardware installations." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <PageHeader 
            title="Our Work Gallery" 
            description="Browse through our portfolio of completed projects"
            backgroundImage="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1920&h=500&fit=crop"
          />
          
          <section className="py-16 bg-white">
            <div className="container">
              <Tabs defaultValue="all" onValueChange={setActiveCategory}>
                <div className="flex justify-center mb-12">
                  <TabsList className="h-auto flex-wrap">
                    {categories.map((category) => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="px-6 py-2"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                <TabsContent value={activeCategory} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredItems.map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <div 
                            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
                            onClick={() => setSelectedImage(item)}
                          >
                            <div className="relative h-64">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                            <div className="p-4 bg-white">
                              <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="overflow-hidden rounded-md">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Database uploads section */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <h2 className="text-2xl font-semibold mb-8 text-center">Latest Uploads</h2>
              {dbLoading ? (
                <p className="text-center">Loading...</p>
              ) : dbItems.length === 0 ? (
                <p className="text-center text-muted-foreground">No uploads yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dbItems.map((item) => (
                    <Dialog key={item._id}>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
                          <div className="relative h-64">
                            <img
                              src={`https://mishra-traders.onrender.com${item.imageUrl}`}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="p-4 bg-white">
                            <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="overflow-hidden rounded-md">
                            <img
                              src={`http://localhost:5000${item.imageUrl}`}
                              alt={item.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default GalleryPage;