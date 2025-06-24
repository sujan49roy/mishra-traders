import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Search, Phone, Home, Wrench, Camera, Info, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4 mr-2" /> },
    { name: "Services", href: "/services", icon: <Wrench className="w-4 h-4 mr-2" /> },
    { name: "Gallery", href: "/gallery", icon: <Camera className="w-4 h-4 mr-2" /> },
    { name: "About Us", href: "/about", icon: <Info className="w-4 h-4 mr-2" /> },
    { name: "Contact", href: "/contact", icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={cn(
            "font-bold text-2xl transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>
            Mishra Trader's
          </span>
        </Link>

        {!isMobile ? (
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-secondary" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+9779804042126">
            <Button variant="outline" className="border-primary py-2 px-2 text-primary hover:bg-primary hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            </a>
          </nav>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className={isScrolled ? "text-primary" : "text-white"}>
              <Search className="w-5 h-5" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={isScrolled ? "text-primary" : "text-white"}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[280px] sm:w-[350px]">
                <div className="flex justify-between items-center mb-8 mt-2">
                  <h2 className="text-xl font-bold text-primary">Mishra Trader's</h2>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="flex items-center py-3 px-4 hover:bg-muted rounded-md"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  ))}
                  <a href="tel:+9779804906236" className="mt-4 w-full">
                    <Button className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                    </Button>
                    </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;