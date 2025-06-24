import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    title: "Aluminum Windows & Doors",
    description: "Premium quality aluminum framing solutions",
    image: "https://mccoymart.com/post/wp-content/webp-express/webp-images/uploads/Aluminium-Doors-And-Windows-FI-850x400.jpg.webp",
    link: "/services/aluminum"
  },
  {
    id: 2,
    title: "UPVC Windows & Doors",
    description: "Energy efficient and durable solutions",
    image: "https://primetechupvc.com/wp-content/uploads/2024/09/The-Best-uPVC-Windows-Doors-for-Your-Home-Will-Make-a-Statement.jpg",
    link: "/services/upvc"
  },
  {
    id: 3,
    title: "Steel Railings",
    description: "Custom designed railings for safety and style",
    image: "https://www.greenfox.co.uk/wp-content/uploads/2022/03/standard-steel-railing-500x500-1.jpg",
    link: "/services/railings"
  },
  {
    id: 4,
    title: "False Ceilings",
    description: "Modern ceiling solutions for any space",
    image: "https://i.etsystatic.com/17254828/r/il/9d5dcb/3422982814/il_570xN.3422982814_i5sa.jpg",
    link: "/services/ceilings"
  },
  {
    id: 5,
    title: "Paints & Colors",
    description: "High-quality paints in endless color options",
    image: "https://indigopaints.com/wp-content/uploads/2021/08/shutterstock_151976957-900x600-1-1-1.webp",
    link: "/services/paints"
  },
  {
    id: 6,
    title: "Hardware Materials",
    description: "Everything you need for construction & repairs",
    image: "https://mccoymart.com/post/wp-content/uploads/2020/06/blog-banner-building-materials-823x400-removebg-preview-1.png",
    link: "/services/hardware"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Explore our wide range of high-quality products and services for all your home improvement needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Link to={category.link} key={category.id}>
              <Card className="category-card h-[240px]">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover"
                />
                <div className="category-card-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-white/80">{category.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/services">
              View All Services
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;