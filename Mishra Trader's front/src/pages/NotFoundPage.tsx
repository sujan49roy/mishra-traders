import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Mishra Trader's</title>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="container max-w-md text-center">
            <div className="flex justify-center mb-6">
              <AlertCircle className="w-20 h-20 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">
                  <Home className="mr-2 w-4 h-4" />
                  Go to Homepage
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Go Back
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default NotFoundPage;