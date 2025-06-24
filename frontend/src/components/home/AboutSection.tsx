import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, ThumbsUp, Users, HeartHandshake } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Premium Quality",
      description: "We source only the highest quality materials for all our products and installations."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-primary" />,
      title: "Expert Craftsmanship",
      description: "Our team of skilled professionals ensures perfect installation every time."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Customer Focused",
      description: "We provide personalized solutions tailored to your specific requirements."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-primary" />,
      title: "After-Sales Support",
      description: "Our relationship doesn't end with installation - we're here for ongoing support."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src="https://scontent.fbir7-1.fna.fbcdn.net/v/t39.30808-6/493143987_122095192178854876_3569812792604739266_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE-DPJO2OOe7D6Vmz4p7WpTytcwrgzyJATK1zCuDPIkBIR-HlAkSO78caePGojMhRm_LGyQPFy6vdNkKruNS4lX&_nc_ohc=rPkM8OZj9zIQ7kNvwFOiAf9&_nc_oc=Adk3Z6Y0OLXJG7eCF7BRTCM3ISH_781EJyVE-oL-KzBBix0_2s8wNsz5yeE5fQZxiZhuEyJZnraesiTTg1lKOQ4j&_nc_zt=23&_nc_ht=scontent.fbir7-1.fna&_nc_gid=LGuzvg901x2dHq56c8TnoA&oh=00_AfPEzDuhYCZrtXOfBRkTZmHn1OKjipfiIZWRQMwHeufDgg&oe=686074E5" 
              alt="About Mishra Trader's" 
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
            
          </div>

          {/* Content Side */}
          <div>
            <h2 className="section-heading">About Mishra Trader's</h2>
            <p className="mb-6 text-lg">
              Mishra Trader’s is a proudly Nepali-owned business based in Arjundhara-6, Dashpul, Jhapa, serving the local community since 2018. We specialize in the supply and installation of aluminum doors and windows, UPVC frames, steel railings, 2x2 interior ceilings, wall partitions, premium paints, tempered glass, and complete hardware solutions required to enhance both the appearance and functionality of homes and commercial spaces.
            </p>
            <p className="mb-8 ">
             
              Over the years, we’ve completed a variety of successful projects for individual homeowners, businesses, and contractors, all of whom are not just clients to us, but part of our growing community. While we do not currently hold official awards, our projects and clients are a true reflection of our quality and trust in the local market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;