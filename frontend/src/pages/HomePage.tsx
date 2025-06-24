import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServiceCategories from "@/components/home/ServiceCategories";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactCTA from "@/components/home/ContactCTA";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Mishra Trader's - Home Improvement & Hardware Solutions</title>
        <meta 
          name="description" 
          content="Mishra Trader's provides premium home improvement and hardware solutions in Nepal, including aluminum windows, UPVC doors, steel railings, false ceilings, paints and hardware materials." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <Hero />
          <ServiceCategories />
          <AboutSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;