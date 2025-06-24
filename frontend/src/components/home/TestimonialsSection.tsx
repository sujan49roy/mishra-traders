import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Chiranjibi Adhikari",
    position: "Home Owner",
    quote: "The quality of UPVC windows installed by Mishra Trader's was outstanding. They provided excellent service from consultation to installation. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Pashupati Rimal",
    position: "Interior Designer",
    quote: "I've worked with Mishra Trader's on multiple projects. Their false ceiling work is immaculate and their team is always professional and punctual.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Ayush Dhakal",
    position: "Architect",
    quote: "The aluminum doors and windows provided by Mishra Trader's are of exceptional quality. Their attention to detail and craftsmanship is unmatched in Nepal.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "Suresh Tamang",
    position: "Contractor",
    quote: "Mishra Trader's delivered top-notch materials for my construction project. Their support team was incredibly helpful throughout the process.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-secondary text-white overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-primary after:left-0 after:-bottom-2">
            Client Testimonials
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Don’t just take our word for it – hear what our satisfied customers have to say.
          </p>
        </div>

        {/* Animated testimonial for small devices */}
        <div className="block md:hidden relative h-[280px] sm:h-[320px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out 
                ${index === currentSlide ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'}
              `}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 mx-auto max-w-md text-black">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="italic mb-6 text-sm sm:text-base">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-black/70 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid layout for larger screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 text-black">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="italic mb-6 text-sm sm:text-base">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-black/70 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
