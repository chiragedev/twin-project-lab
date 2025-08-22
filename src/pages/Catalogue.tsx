import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import acidePhosphoriqueImg from "@/assets/acide-phosphorique.jpg";
import acideSulfuriqueImg from "@/assets/acide-sulfurique.jpg";
import dapEngraisImg from "@/assets/dap-engrais.jpg";
import tspEngraisImg from "@/assets/tsp-engrais.jpg";
import sulfateAmmoniumImg from "@/assets/sulfate-ammonium.jpg";
import ureeImg from "@/assets/uree.jpg";

// Sample product data matching the reference
const products = [
  {
    id: 1,
    name: "Acide Phosphorique",
    description: "L'acide phosphorique est utilisé dans la fabrication des engrais, des détergents et comme additif alimentaire.",
    price: "950,00 MAD",
    image: acidePhosphoriqueImg
  },
  {
    id: 2,
    name: "Acide Sulfurique", 
    description: "Utilisé dans l'industrie chimique, le traitement des métaux, et la fabrication de fertilisants.",
    price: "750,00 MAD",
    image: acideSulfuriqueImg
  },
  {
    id: 3,
    name: "DAP Engrais",
    description: "Engrais à base de phosphate d'ammonium, idéal pour le développement des cultures.",
    price: "600,00 MAD", 
    image: dapEngraisImg
  },
  {
    id: 4,
    name: "TSP Engrais",
    description: "Triple superphosphate, engrais phosphaté concentré pour une nutrition optimale.",
    price: "680,00 MAD",
    image: tspEngraisImg
  },
  {
    id: 5,
    name: "Sulfate d'Ammonium",
    description: "Engrais azoté et soufré, parfait pour les sols déficients en soufre.",
    price: "520,00 MAD",
    image: sulfateAmmoniumImg
  },
  {
    id: 6,
    name: "Urée 46%",
    description: "Engrais azoté à haute concentration, source d'azote la plus concentrée.",
    price: "480,00 MAD",
    image: ureeImg
  }
];

const Catalogue = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gradient-to-r from-ocp-green-dark to-ocp-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Catalogue Professionnel
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre gamme complète de solutions chimiques pour
            l'industrie minière, agricole et pharmaceutique. Qualité
            premium garantie.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Button variant="ocp" className="w-fit">
            📦 Tous produits
          </Button>
          <div className="flex-1 relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-ocp-green">{product.price}</span>
                  <Button variant="ocp" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun produit trouvé pour "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogue;