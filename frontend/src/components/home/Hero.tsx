import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
          Premium Home Improvement & Hardware Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Transform your space with Mishra Trader's quality aluminum windows,
          UPVC doors, steel railings, false ceilings, paints, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <Link to="/services">
              Explore Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-primary hover:bg-white hover:text-secondary"
            asChild
          >
            <Link to="/quote">
              Request Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;