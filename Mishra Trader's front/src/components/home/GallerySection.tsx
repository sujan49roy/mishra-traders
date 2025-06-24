import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "Aluminum Works",
    image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    category: "UPVC Windows",
    image: "https://www.datocms-assets.com/50974/1704260198-buy-double-glazing-online.jpg?auto=format"
  },
  {
    id: 3,
    category: "Steel Railings",
    image: "https://www.makwanaworld.com/images/Stainless-Steel%20Railing-Manufacturers.webp"
  },
  {
    id: 4,
    category: "Ceiling Works",
    image: "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-false-ceiling/_jcr_content/root/container/container_2072089177/teaser_copy_copy_1357209856.coreimg.jpeg/1722342117068/ceilings-5.jpeg"
  },
  {
    id: 5,
    category: "Paint Jobs",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    category: "Hardware Solutions",
    image: "https://mccoymart.com/post/wp-content/uploads/2020/06/blog-banner-building-materials-823x400-removebg-preview-1.png",
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Our Work Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Browse through our portfolio of completed projects showcasing our quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[240px] overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src={item.image} 
                alt={item.category} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-medium">{item.category}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/gallery">
              View Full Gallery
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;