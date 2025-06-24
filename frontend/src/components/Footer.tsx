import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Clock, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mishra Trader's</h3>
            <p className="mb-4 text-gray-300">
              Premium home improvement and hardware solutions in Nepal. 
              Quality products with professional service since 2018.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61552523245564" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-400 p-2 rounded-full hover:bg-secondary/40 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/9779804906236" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] p-2 rounded-full hover:bg-[#1da851] transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-secondary transition-colors">Get Quote</Link></li>
              <li>Email: <a href="mailto:mishratraders006@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">mishratraders006@gmail.com</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <span>Arjundhara-6, Dashpul, Jhapa, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+977 9804042126 / +977 9844042560</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>mishratraders006@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <a>WhatsApp: +977 9804906236</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-1" />
                <span>Every day: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to get the latest updates and promotions.
            </p>
            <div className="flex flex-col gap-3">
              <Input 
                placeholder="Your email"
                className="bg-white/10 border-0 focus-visible:ring-secondary text-white placeholder:text-gray-400" 
              />
              <Button variant="default" className="w-full bg-secondary hover:bg-secondary/90">Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mishra Trader's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;