import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from "lucide-react";
import { Helmet } from "react-helmet";

function ContactPage() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
        try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) throw new Error("Failed to send message");
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      return;
    }
    // Show success message
    setFormSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    { 
      icon: <Phone className="w-8 h-8 text-primary" />, 
      title: "Phone", 
      details: ["+977 9804042126", "+977 9844042560"]
    },
    { 
      icon: <Mail className="w-8 h-8 text-primary" />, 
      title: "Email", 
      details: [
        <a 
          href="mailto:mishratraders006@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          key={0}
        >
          mishratraders06@gmail.com
        </a>
      ]
    },
    { 
      icon: <MapPin className="w-8 h-8 text-primary" />, 
      title: "Address", 
      details: ["Arjundhara-6, Dashpul", "Jhapa, Nepal"]
    },
    { 
      icon: <Clock className="w-8 h-8 text-primary" />, 
      title: "Business Hours", 
      details: ["Every day: 8:00 AM - 6:00 PM"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Mishra Trader's</title>
        <meta 
          name="description" 
          content="Get in touch with Mishra Trader's for inquiries about our home improvement services, product availability, or to request a quote." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <PageHeader 
            title="Contact Us" 
            description="We're here to help with any questions you may have"
            backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=500&fit=crop"
          />
          
          <section className="py-16 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="section-heading mb-8">Get In Touch</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <Card key={index} className="border-none shadow-md">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <div className="mb-4">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <div>
                            {item.details.map((detail, i) => (
                              <p key={i} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Map */}
                  <div className="rounded-lg overflow-hidden shadow-lg h-[300px] mb-8">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.9029834390647!2d87.9826575!3d26.6969778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b5ffdd4f3491%3A0x3884c0ba05688002!2sArjundhara-6%2C%20Dashpul%2C%20Jhapa!5e0!3m2!1sen!2snp!4v1718348899999!5m2!1sen!2snp"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mishra Trader's Location"
                    ></iframe>
                    <div className="mt-2">
                      <a 
                        href="https://maps.app.goo.gl/UTDxCGozWBBVSBet8" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm flex justify-center items-center"
                      >
                        <MapPin className="w-4 h-4 mr-1" /> View on Google Maps
                      </a>
                    </div>
                  </div>
               
                  
                  {/* Social Media */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                    <a 
                        href="https://www.facebook.com/profile.php?id=61552523245564" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-400 hover:bg-[#20BD5A] text-white px-4 py-2 rounded flex items-center gap-2

                        transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                        Connect With Us
                      </a>
                      <a 
                        href="https://wa.me/9779804906236" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded flex items-center transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" className="mr-2">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Chat Now
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div>
                  <h2 className="section-heading mb-8">Send Us a Message</h2>
                  
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message <span className="text-destructive">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={5}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                        </Button>
                        
                        {formSubmitted && (
                          <p className="text-center text-primary">
                            Thank you for your message! We'll get back to you soon.
                          </p>
                        )}
                      </form>
                    </CardContent>
                  </Card>
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

export default ContactPage;