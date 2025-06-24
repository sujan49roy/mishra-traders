import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "aluminum", name: "Aluminum Windows & Doors" },
  { id: "upvc", name: "UPVC Windows & Doors" },
  { id: "railings", name: "Steel Railings" },
  { id: "ceiling", name: "False Ceiling" },
  { id: "paint", name: "Painting Services" },
  { id: "hardware", name: "Hardware Materials" },
  { id: "other", name: "Other Services" },
];

const QuoteForm = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    dimensions: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({
      ...prev,
      serviceType: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.phone || !formState.serviceType) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
        try {
      const res = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) throw new Error("Failed to send quote");
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again later.",
        variant: "destructive",
      });
      return;
    }
    // Show success state
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        dimensions: "",
        message: "",
      });
    }, 5000);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you soon with your personalized quote.",
    });
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Request a Quote</CardTitle>
        <CardDescription>
          Fill out the form below to get a personalized quote for your project
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formSubmitted ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quote Request Submitted!</h3>
            <p>
              Thank you for your interest in our services. One of our representatives will
              contact you soon with a personalized quote.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number <span className="text-destructive">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="serviceType" className="text-sm font-medium">
                Service Type <span className="text-destructive">*</span>
              </label>
              <Select 
                value={formState.serviceType} 
                onValueChange={handleServiceChange}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="dimensions" className="text-sm font-medium">
                Dimensions/Quantity
              </label>
              <Input
                id="dimensions"
                name="dimensions"
                value={formState.dimensions}
                onChange={handleChange}
                placeholder="e.g., 10x15 feet, 5 units, etc."
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Additional Details
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us more about your project requirements"
                rows={4}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit Quote Request
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default QuoteForm;