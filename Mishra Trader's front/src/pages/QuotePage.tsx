import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileDown } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

interface Product { _id:string; name:string; description?:string; imageUrl?:string; price:number; stock:number; }
function QuotePage() {
  const [catalogOpen,setCatalogOpen]=useState(false);
  const [products,setProducts]=useState<Product[]>([]);
  const [loadingCatalog,setLoadingCatalog]=useState(false);

  const handleViewCatalog=async()=>{
    setCatalogOpen(true);
    if(products.length===0){
      setLoadingCatalog(true);
      try{
        const res=await fetch("http://localhost:5000/api/products");
        if(!res.ok) throw new Error("Failed to fetch products");
        const data:Product[]=await res.json();
        setProducts(data);
      }catch(err){console.error(err);}finally{setLoadingCatalog(false);} }
  };

  const handleDownloadPdf=async()=>{
    try{
      const res=await fetch("http://localhost:5000/api/pdfs");
      if(!res.ok) throw new Error("Failed to fetch pdf list");
      const pdfs: { _id:string; pdfUrl:string }[] = await res.json();
      if(pdfs.length>0){
        window.open(`http://localhost:5000${pdfs[0].pdfUrl}`,'_blank');
      } else {
        alert('No price list available');
      }
    }catch(err){console.error(err);alert('Error downloading PDF');}
  };
  const faqs = [
    {
      question: "How long does it take to get a quote?",
      answer: "We typically provide quotes within 24-48 hours for standard projects. Complex or custom projects may take a little longer as they require more detailed assessment."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free estimates for all our services. You can request a quote using our online form or by contacting us directly."
    },
    {
      question: "What information do I need to provide for an accurate quote?",
      answer: "For the most accurate quote, please provide details such as the type of service needed, dimensions, quantity, location, and any specific requirements or preferences. Photos are also helpful if available."
    },
    {
      question: "Do you offer site visits before providing a final quote?",
      answer: "Yes, for complex projects or installations, we often conduct a site visit to ensure the quote is accurate. This is scheduled at your convenience and there's no obligation."
    },
    {
      question: "Are your quotes binding?",
      answer: "Our quotes are valid for 30 days and include detailed breakdowns of costs. Once accepted, the price remains fixed unless there are significant changes to the scope of work."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept cash, bank transfers, and major credit cards. For larger projects, we typically request a deposit before starting work, with the balance due upon completion."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Request a Quote | Mishra Trader's</title>
        <meta 
          name="description" 
          content="Request a customized quote for Mishra Trader's home improvement services including aluminum windows, UPVC doors, steel railings, false ceilings and more." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <PageHeader 
            title="Request a Quote" 
            description="Get a customized estimate for your project"
            backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=500&fit=crop"
          />
          
          <section className="py-16 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="section-heading mb-8">Get Your Personalized Quote</h2>
                  <p className="mb-6">
                    Whether you're planning a home renovation, building a new structure, or need specific hardware materials, we're here to provide you with competitive pricing and expert advice.
                  </p>
                  <p className="mb-6">
                    Fill out the form with your project details, and our team will prepare a customized quote based on your specific requirements. Our quotes are detailed, transparent, and come with no obligations.
                  </p>
                  <p className="mb-8">
                    Need help determining specifications or quantities? Don't worry! Our experts can guide you through the process and help you make the best choices for your project.
                  </p>
                  
                  <div className="bg-muted rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Why request a quote from us?</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Detailed breakdown of costs with no hidden charges</li>
                      <li>Competitive pricing on all our products and services</li>
                      <li>Expert recommendations to optimize your budget</li>
                      <li>Quick response time (typically within 24-48 hours)</li>
                      <li>Flexible scheduling options for installations</li>
                      <li>No obligation to proceed after receiving the quote</li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-8">
                    {/* View catalog */}
                    <Dialog open={catalogOpen} onOpenChange={setCatalogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2" onClick={handleViewCatalog}>
                          <FileDown className="w-4 h-4" />
                          View Product Catalog
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <h3 className="text-xl font-semibold mb-4">Product Catalog</h3>
                        {loadingCatalog ? (
                          <p>Loading...</p>
                        ) : products.length===0 ? (
                          <p>No products found.</p>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-auto">
                            {products.map(prod=> (
                              <div key={prod._id} className="border rounded-md p-4 flex flex-col">
                                {prod.imageUrl && (
                                  <img src={`http://localhost:5000${prod.imageUrl}`} alt={prod.name} className="w-full h-40 object-cover mb-2 rounded" />
                                )}
                                <h4 className="font-semibold">{prod.name}</h4>
                                {prod.description && <p className="text-sm text-muted-foreground mb-2">{prod.description}</p>}
<div className="mt-auto flex justify-between text-sm">
  <span className="font-medium text-primary">Rs. {prod.price.toLocaleString()}</span>
  <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground">Stock: {prod.stock}</span>
</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    {/* Download price PDF */}
                    <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadPdf}>
                      <FileDown className="w-4 h-4" />
                      Download Price PDF
                    </Button>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default QuotePage;