import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import AdminSection from "@/components/AdminSection";
import { Helmet } from "react-helmet";
import { AlertTriangle } from "lucide-react";
import DataManagementTable from "@/components/DataManagementTable";

function AdminPage() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Mishra Trader's</title>
        <meta 
          name="description" 
          content="Admin dashboard for managing content on the Mishra Trader's website." 
        />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <PageHeader 
            title="Admin Dashboard" 
            description="Manage and upload content for your website"
            backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=500&fit=crop"
          />
          
          <section className="py-16 bg-white">
            <div className="container">
             
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="section-heading mb-8">Upload Content</h2>
                  <AdminSection />
                </div>
                
                <div>
                  <h2 className="section-heading mb-8">Content Management</h2>
                  <DataManagementTable />
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

export default AdminPage;