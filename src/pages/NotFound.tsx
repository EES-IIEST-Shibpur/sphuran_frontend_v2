import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      {/* SEO Meta Tags */}
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist. Return to SPHURAN 4.0 homepage."
        noIndex={true}
      />
      
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <button 
          onClick={() => navigate('/')}
          className="text-primary underline hover:text-primary/90"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
