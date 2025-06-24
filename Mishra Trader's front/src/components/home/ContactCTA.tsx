import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const ContactCTA = () => {
  return (
    <section 
      className="py-16 relative"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1520515848553-a0ca7ac5be6f?w=1920&h=600&fit=crop')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Home Improvement Project?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote.
          Our team of experts is ready to help bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">
              <MessageSquare className="mr-2 w-5 h-5" />
              Contact Us
            </Link>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-primary hover:bg-white hover:text-primary w-full sm:w-auto"
            asChild
          >
            <a href="tel:+9779804042126" onClick={() => {
              window.open("tel:+9779804042126", "_self");
            }}>
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-primary hover:bg-white hover:text-primary w-full sm:w-auto"
            asChild
          >
            <a href="https://wa.me/9779804906236" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;