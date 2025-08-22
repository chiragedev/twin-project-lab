import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, Package } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import acidePhosphoriqueImg from "@/assets/acide-phosphorique.jpg";
import dapEngraisImg from "@/assets/dap-engrais.jpg";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Acide Phosphorique",
    price: 950,
    quantity: 2,
    image: acidePhosphoriqueImg
  },
  {
    id: 2,
    name: "DAP Engrais", 
    price: 600,
    quantity: 1,
    image: dapEngraisImg
  }
];

const Panier = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gradient-to-r from-ocp-green-dark to-ocp-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 text-white">
            <Package className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Votre Panier</h1>
          </div>
          <p className="text-lg text-white/90 mt-4">
            Finalisez votre commande et transformez vos projets en réalité
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Vos Produits Sélectionnés</h2>
                <Badge variant="secondary" className="bg-ocp-green/10 text-ocp-green">
                  {cartItems.length} {cartItems.length === 1 ? 'produit' : 'produits'}
                </Badge>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.price},00 MAD</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-medium text-ocp-green">
                        {(item.price * item.quantity).toLocaleString()},00 MAD
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {cartItems.length === 0 && (
                <div className="text-center py-12">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Votre panier est vide</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>📋</span>
                  <span>Récapitulatif</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Sous-total:</span>
                    <span>{subtotal.toLocaleString()},00 MAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison:</span>
                    <span className="text-ocp-green">Gratuite</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remise:</span>
                    <span>-</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span className="text-ocp-green">{total.toLocaleString()},00 MAD</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button variant="ocp" className="w-full" size="lg">
                    🚚 Passer la commande
                  </Button>
                  <Button variant="outline" className="w-full">
                    Continuer les achats
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;