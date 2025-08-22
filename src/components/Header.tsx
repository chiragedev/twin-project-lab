import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">OCP</span>
              </div>
              <span className="text-xl font-bold text-foreground">OCP Solutions</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/catalogue"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/catalogue" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Catalogue
            </Link>
            <Link
              to="/solutions"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/solutions" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Solutions
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/panier">
                <ShoppingCart className="w-4 h-4" />
              </Link>
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/dashboard">
                    <User className="w-4 h-4 mr-1" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/register">
                    S'inscrire
                  </Link>
                </Button>
                <Button variant="ocp" size="sm" asChild>
                  <Link to="/connexion">
                    CONNEXION
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;