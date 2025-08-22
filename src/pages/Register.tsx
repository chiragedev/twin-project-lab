import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, user } = useAuth();

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    await signUp(email, password, fullName);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side - Register Form */}
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
                <CardTitle className="text-2xl font-bold">Créer un compte</CardTitle>
                <CardDescription>
                  Rejoignez OCP Solutions pour accéder à nos produits chimiques de qualité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">👤 Nom complet</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Votre nom complet"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">📧 Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">🏢 Entreprise (optionnel)</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Nom de votre entreprise"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">🔒 Mot de passe</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Créer un mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>

                  <Button 
                    variant="ocp" 
                    className="w-full" 
                    size="lg" 
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Création..." : "🚀 Créer mon compte"}
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Déjà un compte ?{" "}
                  <Link to="/connexion" className="text-ocp-green hover:underline">
                    Se connecter
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
                <span className="text-3xl">⚗️</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Rejoignez OCP Solutions
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Accédez à notre catalogue complet de produits chimiques 
                et bénéficiez de nos services exclusifs.
              </p>
              <Button variant="outline-hero" size="lg" asChild>
                <Link to="/catalogue">
                  🛒 Découvrir nos produits
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;