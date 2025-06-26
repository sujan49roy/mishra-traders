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
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t1.6435-9/171995245_3837086066382371_7449308429285386671_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEfaZSdrWDK7wDs7i9kknD1Vwq8BplEfZVXCrwGmUR9lf2AyaSbNnzjyK0HarxgxzVpvTo5tiXY1XwSQh5Q29GX&_nc_ohc=A9DJcBBdpx0Q7kNvwHQJy7w&_nc_oc=Adko39NITaJz8qcals6qfWye3ksDdW6mcTq_1C9yn20Y6mZJyty2aX75tECbwdFs3BhMTEf_0tsGBJQVDNq0ANtn&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=B8m2elfqFdvx0FeduzMW2A&oh=00_AfNHpA-BxHvLffcSeGR0SdFwmAS_7QCtRxiyrLysXmxgfA&oe=6884CF46"
    },
    { 
      name: "Ramesh Mishra", 
      position: "Co-Founder & Operational Head", 
      bio: "Ramesh oversees daily operations and ensures smooth execution of all projects with attention to detail and efficiency.",
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/412428238_122106705596149187_6377538531624920213_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEkTlTaq92Ka7e1qYFIBNYSP7Ck7XmWfbs_sKTteZZ9u5diAL92fev__JtZ6FO5ByfK8gDxUUCVLK41GoHp8HAZ&_nc_ohc=If5lyyQT4d8Q7kNvwGv6xk7&_nc_oc=Adkf6b_A2x_SMbx6tbRByvV9S3ak6z35EjzigiFe9W9MCdXGCvj_QGPDT0b_HGkP2p1hKkq7fXlp6dKW1jW4rh4T&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=89gM4SIziNxZRDXQJrQ7NA&oh=00_AfOJcUBROcVHLRFnNEfJxspzk8qqjXitTw4IAxZp2rX11g&oe=68632AAE"
    },
    { 
      name: "Sujan Mishra", 
      position: "Technical Assistant", 
      bio: "Sujan provides technical support and ensures all projects meet our high standards of quality and craftsmanship.",
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/480571740_1827254464773267_6531196375561500158_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGA9lXkUSZl1Wyf6oUGfpBEqQlHWH9Hm9ipCUdYf0eb2HIcjXbOi6mwJ7M5pedzieMdECLHBE-qV1WgoN9hiwkg&_nc_ohc=e1OhccGcY7QQ7kNvwFn8q8n&_nc_oc=AdkMkcCk4ZfCus3375xBlTXtKxvALTZjJFmyaB2HWlqRKPkrur_ZO8_0idhskkLJhktfPOX_3GRqHGzEqy2JV1u_&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=d1annnvyKKhvEh-Od-0T3w&oh=00_AfPDS-oZ8qURTCA0MbfQ60z9YCssAiQlaQOGx-a4CaeusA&oe=68630C81"
    },
    { 
      name: "Ayush Mishra", 
      position: "Field Coordinator & Creative Support", 
      bio: "Ayush manages field operations and brings creative solutions to every project, ensuring client satisfaction.",
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/473778631_122188336730149187_5821089131067095242_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGi7Urs8m4hBEIZS9KlCtSYQES4nrgytENARLieuDK0Qx6J3PmrbeOsWbGy3ErpY3ghbKYtVNk3QKWhm-8nZk4b&_nc_ohc=Bp5jzmK15PoQ7kNvwE-q4nq&_nc_oc=AdngG_8RKUFbo3ndg27JI4kavlgmOCajMJQNb1UHXyJvV2QC2vZ7RGyKOrszwXnY5JctX1aHgnR1ROorVzxwXZB0&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=o3Bj5YeuQcb41eM_xzUpuw&oh=00_AfPH9r-qNORwXse9DgISV_tteDeN0J6JGPe-ICacicHjig&oe=6862FF4C"
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