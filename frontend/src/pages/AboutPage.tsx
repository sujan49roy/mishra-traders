import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Trophy, Users, History, Workflow, Award, Clock } from "lucide-react";

function AboutPage() {
  const milestones = [
    { year: 2018, event: "Founded Mishra Trader's Hardware Portal in Arjundhara-6, Dashpul, Jhapa" },
    { year: 2019, event: "Expanded product line to include aluminum doors and windows" },
    { year: 2020, event: "Added UPVC frames and steel railing services" },
    { year: 2021, event: "Launched 2x2 interior ceiling and wall partition services" },
    { year: 2022, event: "Became authorized distributor for premium paint brands" },
    { year: 2023, event: "Integrated tempered glass and complete hardware solutions" }
  ];

  const stats = [
    { icon: <Trophy className="w-12 h-12 text-primary" />, value: "5+", label: "Years of Experience" },
    { icon: <Users className="w-12 h-12 text-primary" />, value: "100+", label: "Happy Clients" },
    { icon: <Workflow className="w-12 h-12 text-primary" />, value: "200+", label: "Projects Completed" }
  ];

  const team = [
    { 
      name: "Chhabilal Mishra", 
      position: "Founder & CEO", 
      bio: "With a strong vision for quality and customer satisfaction, Chhabilal leads Mishra Trader's with dedication and expertise.",
      image: "frontend\dist\assets\chhabi.jpg"
    },
    { 
      name: "Ramesh Mishra", 
      position: "Co-Founder & Operational Head", 
      bio: "Ramesh oversees daily operations and ensures smooth execution of all projects with attention to detail and efficiency.",
      image: "frontend\dist\assets\ramesh.jpg"
    },
    { 
      name: "Sujan Mishra", 
      position: "Technical Assistant", 
      bio: "Sujan provides technical support and ensures all projects meet our high standards of quality and craftsmanship.",
      image: "frontend\dist\assets\sujan.jpg"
    },
    { 
      name: "Ayush Mishra", 
      position: "Field Coordinator & Creative Support", 
      bio: "Ayush manages field operations and brings creative solutions to every project, ensuring client satisfaction.",
      image: "frontend\dist\assets\ayush.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Mishra Trader's</title>
        <meta 
          name="description" 
          content="Learn about Mishra Trader's history, mission, and our dedicated team providing premium home improvement solutions across Nepal since 2018." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <PageHeader 
            title="About Mishra Trader's" 
            description="Our journey, mission, and the team behind our success"
            backgroundImage="https://images.unsplash.com/photo-1488257457037-c00723019can?w=1920&h=500&fit=crop"
          />
          
          {/* Our Story Section */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-heading">Our Story</h2>
                  <p className="mb-6">
                    Mishra Trader's is a proudly Nepali-owned business based in Arjundhara-6, Dashpul, Jhapa, serving the local community since 2018. We specialize in the supply and installation of aluminum doors and windows, UPVC frames, steel railings, 2x2 interior ceilings, wall partitions, premium paints, tempered glass, and complete hardware solutions required to enhance both the appearance and functionality of homes and commercial spaces.
                  </p>
                  <p className="mb-6">
                    Our business is built on strong family values, craftsmanship, and commitment to customer satisfaction. Over the years, we've completed a variety of successful projects for individual homeowners, businesses, and contractors, all of whom are not just clients to us, but part of our growing community.
                  </p>
                  <p>
                    While we may not hold official awards yet, our projects and satisfied clients are a true reflection of our quality and trust in the local market. We are dedicated to providing the best service and products to our community.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1576906255654-9ca5e5a593de?w=800&h=600&fit=crop" 
                    alt="Mishra Trader's Workshop" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Milestones Section */}
          

         

          
          {/* Mission & Vision */}
          <section className="py-16 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="section-heading">Our Mission</h2>
                  <p className="mt-6">
                    At Mishra Trader's, our mission is to transform living and working spaces through innovative home improvement solutions that combine quality, functionality, and aesthetics. We strive to exceed customer expectations by delivering superior products, professional installations, and exceptional service.
                  </p>
                </div>
                <div>
                  <h2 className="section-heading">Our Vision</h2>
                  <p className="mt-6">
                    Our vision is to be Nepal's most trusted name in home improvement and hardware solutions, recognized for our unwavering commitment to quality, innovation, and customer satisfaction. We aim to grow our presence across the country while maintaining the personalized service that has been our hallmark.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Company Timeline */}
          <section className="py-16 bg-muted">
            <div className="container">
              <h2 className="section-heading text-center mx-auto mb-12">Our Journey</h2>
              
              <div className="relative border-l-2 border-primary ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
                {milestones.map((milestone, index) => (
                  <div key={index} className="mb-10 ml-8 md:ml-6 relative">
                    <div className="absolute -left-[44px] flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                      <History className="w-5 h-5" />
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center justify-center min-w-[80px] h-8 mr-4 bg-secondary text-white rounded text-sm font-medium">
                        {milestone.year}
                      </div>
                      <p className="">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Stats Section */}
          <section className="py-8 bg-muted">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="p-0 flex flex-col items-center">
                      <div className="mb-4">
                        {stat.icon}
                      </div>
                      <p className="text-4xl font-bold text-secondary mb-2">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="py-16 bg-white">
            <div className="container">
              <h2 className="section-heading text-center mx-auto mb-12">Our Leadership Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.position}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Work Hours */}
          <section className="py-16 bg-secondary text-white">
            <div className="container text-center">
              <div className="inline-flex items-center justify-center mb-6">
                <Clock className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
              
              <div className="max-w-2xl mx-auto">
                  <p className="text-2xl font-semibold">Every day</p>
                  <p className="text-4xl font-bold text-primary">8:00 AM - 6:00 PM</p>
                </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;