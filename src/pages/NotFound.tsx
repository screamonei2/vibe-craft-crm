
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="flex justify-center">
          <FileQuestion className="h-24 w-24 text-muted-foreground" />
        </div>
        <h1 className="text-5xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-muted-foreground">
          The page at <span className="font-medium">{location.pathname}</span> could not be found.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
