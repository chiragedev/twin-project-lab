import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Innovation Chimique &<br />
          <span className="text-accent-foreground">Solutions Durables</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Leader dans les produits phosphatés, nous fournissons des solutions
          industrielles sur mesure et des équipements de pointe pour répondre à vos
          défis techniques les plus complexes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="ocp" size="lg" asChild>
            <Link to="/catalogue" className="text-base px-8">
              📦 EXPLORER LE CATALOGUE
            </Link>
          </Button>
          <Button variant="outline-hero" size="lg" asChild>
            <Link to="/contact" className="text-base px-8">
              💬 NOUS CONTACTER
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;