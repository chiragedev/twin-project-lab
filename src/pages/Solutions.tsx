import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Beaker, Leaf, Factory } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      title: "Solutions Minières",
      description: "Produits chimiques spécialisés pour l'extraction et le traitement des minerais phosphatés.",
      icon: Building,
      features: ["Acides concentrés", "Réactifs de flottation", "Equipements sur mesure"]
    },
    {
      title: "Solutions Agricoles", 
      description: "Gamme complète d'engrais phosphatés et composés pour l'agriculture moderne.",
      icon: Leaf,
      features: ["Engrais DAP/TSP", "Fertilisants composés", "Solutions nutritives"]
    },
    {
      title: "Solutions Industrielles",
      description: "Chimie fine et produits spécialisés pour diverses applications industrielles.",
      icon: Factory,
      features: ["Acides techniques", "Sels phosphatés", "Additifs industriels"]
    },
    {
      title: "Solutions Pharmaceutiques",
      description: "Ingrédients et excipients de qualité pharmaceutique certifiés.",
      icon: Beaker,
      features: ["Phosphates purs", "Additifs alimentaires", "Standards qualité USP/EP"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gradient-to-r from-ocp-green-dark to-ocp-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Solutions
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            OCP Solutions développe des solutions innovantes adaptées aux besoins spécifiques 
            de chaque secteur d'activité. Notre expertise couvre l'ensemble de la chaîne de valeur 
            des phosphates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-ocp-green/10 rounded-lg">
                    <solution.icon className="w-6 h-6 text-ocp-green" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-ocp-green rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-ocp-green-dark to-ocp-green rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'une solution sur mesure ?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Notre équipe d'ingénieurs développe des solutions personnalisées 
            pour répondre aux défis techniques les plus complexes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-hero" size="lg" asChild>
              <Link to="/contact">
                💬 Discuter de votre projet
              </Link>
            </Button>
            <Button variant="ocp" size="lg" className="bg-white text-ocp-green hover:bg-white/90" asChild>
              <Link to="/catalogue">
                📦 Voir le catalogue
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;