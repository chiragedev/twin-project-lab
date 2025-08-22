import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side - Login Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">OCP</span>
                </div>
                <span className="text-2xl font-bold">OCP Solutions</span>
              </Link>
            </div>

            <Card className="shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Connectez-vous</CardTitle>
                <CardDescription>
                  Accédez à votre espace client pour gérer vos commandes et télécharger vos factures
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">📧 admin@ocp.ma</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">🔒 ••••••••</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Se souvenir de moi</span>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-ocp-green hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <Button variant="ocp" className="w-full" size="lg" asChild>
                  <Link to="/dashboard">
                    🔐 Se connecter
                  </Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Pas encore de compte ?{" "}
                  <Link to="/register" className="text-ocp-green hover:underline">
                    S'inscrire
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side - Welcome Card */}
        <div className="hidden lg:flex items-center justify-center p-8 bg-gradient-to-br from-ocp-green to-ocp-green-light">
          <div className="text-center text-white max-w-md">
            <div className="mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🧪</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Bienvenue chez OCP Solutions
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Accédez à votre espace client pour gérer vos
                commandes et télécharger vos factures exclusives.
              </p>
              <Button variant="outline-hero" size="lg" asChild>
                <Link to="/catalogue">
                  🛒 Visiter le catalogue
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;