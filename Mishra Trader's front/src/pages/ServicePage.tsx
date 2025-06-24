import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const services = [
  {
    id: "aluminum",
    name: "Aluminum Windows & Doors",
    description: "Our aluminum windows and doors offer sleek design with durability, perfect for modern homes and commercial spaces. We provide custom sizes and a variety of finishes to match your architectural style.",
    features: ["Lightweight yet sturdy", "Weather resistant", "Low maintenance", "Multiple design options", "Energy efficient"],
    image: "https://mccoymart.com/post/wp-content/webp-express/webp-images/uploads/Aluminium-Doors-And-Windows-FI-850x400.jpg.webp",
  },
  {
    id: "upvc",
    name: "UPVC Windows & Doors",
    description: "UPVC windows and doors provide excellent insulation and soundproofing, making your home more energy-efficient and comfortable. Our UPVC products are designed for durability and require minimal maintenance.",
    features: ["Superior insulation", "Noise reduction", "Water resistant", "Fire resistant", "Long lifespan"],
    image: "https://primetechupvc.com/wp-content/uploads/2024/09/The-Best-uPVC-Windows-Doors-for-Your-Home-Will-Make-a-Statement.jpg",
  },
  {
    id: "railings",
    name: "Steel Railings",
    description: "Our custom-designed steel railings combine safety, durability, and aesthetic appeal for staircases, balconies, and terraces. Each railing is crafted to meet your specific requirements with precision engineering.",
    features: ["Custom designs", "High-grade steel", "Rust-resistant finishes", "Professional installation", "Modern and traditional styles"],
    image: "https://www.greenfox.co.uk/wp-content/uploads/2022/03/standard-steel-railing-500x500-1.jpg",
  },
  {
    id: "ceilings",
    name: "False Ceilings",
    description: "Transform your space with our elegant false ceiling solutions. We offer various designs including POP, grid, and gypsum options that enhance aesthetics while providing practical benefits like improved acoustics and heat insulation.",
    features: ["Custom designs", "Acoustic improvement", "Thermal insulation", "Conceals wiring and pipes", "Easy installation"],
    image: "https://i.etsystatic.com/17254828/r/il/9d5dcb/3422982814/il_570xN.3422982814_i5sa.jpg",
  },
  {
    id: "paints",
    name: "Paints & Colors",
    description: "Our high-quality paints and color solutions bring life to any space. We offer a wide range of options from premium brands with expert application services for interiors and exteriors.",
    features: ["Extensive color range", "Premium quality", "Interior & exterior options", "Eco-friendly options", "Expert application"],
    image: "https://indigopaints.com/wp-content/uploads/2021/08/shutterstock_151976957-900x600-1-1-1.webp",
  },
  {
    id: "hardware",
    name: "Hardware Materials",
    description: "Mishra Trader's stocks a comprehensive range of hardware materials for construction and home improvement projects. From basic tools to specialized equipment, we have everything you need for your project.",
    features: ["Wide product range", "Quality brands", "Professional advice", "Competitive pricing", "Bulk ordering available"],
    image: "https://mccoymart.com/post/wp-content/uploads/2020/06/blog-banner-building-materials-823x400-removebg-preview-1.png",
  }
];

function ServicePage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <Helmet>
        <title>Services | Mishra Trader's</title>
        <meta 
          name="description" 
          content="Explore our comprehensive range of home improvement services including aluminum windows, UPVC doors, steel railings, false ceilings, paints and hardware solutions." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <PageHeader 
            title="Our Services" 
            description="Comprehensive home improvement solutions tailored to your needs"
            backgroundImage="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=500&fit=crop"
          />
          
          <section className="py-16 bg-white">
            <div className="container">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-32 md:mb-16">
                  <TabsList className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-7 gap-2">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="aluminum">Aluminum</TabsTrigger>
                    <TabsTrigger value="upvc">UPVC</TabsTrigger>
                    <TabsTrigger value="railings">Railings</TabsTrigger>
                    <TabsTrigger value="ceilings">Ceilings</TabsTrigger>
                    <TabsTrigger value="paints">Paints</TabsTrigger>
                    <TabsTrigger value="hardware">Hardware</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </TabsContent>
                
                {services.map((service) => (
                  <TabsContent key={service.id} value={service.id} className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="rounded-lg w-full h-[400px] object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-4 text-secondary">{service.name}</h2>
                        <p className="mb-6 text-muted-foreground">{service.description}</p>
                        <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                        <ul className="list-disc pl-5 mb-6 space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <div className="flex gap-4">
                          <Button asChild>
                            <Link to="/quote">Request Quote</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to="/contact">Contact Us</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img 
        src={service.image} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
        <Link 
          to={`/services#${service.id}`} 
          className="text-primary font-medium inline-flex items-center hover:underline"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServicePage;