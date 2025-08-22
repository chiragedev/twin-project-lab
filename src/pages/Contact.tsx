import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gradient-to-r from-ocp-green-dark to-ocp-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nous Contacter
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner 
            dans vos projets industriels et répondre à toutes vos questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nom complet</label>
                    <Input placeholder="Votre nom" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="votre@email.com" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Sujet</label>
                  <Input placeholder="Objet de votre demande" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button variant="ocp" size="lg" className="w-full">
                  📧 Envoyer le message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-ocp-green mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@ocp-solutions.ma</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-ocp-green mt-0.5" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-sm text-muted-foreground">+212 5 22 23 30 00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-ocp-green mt-0.5" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-sm text-muted-foreground">
                      2-4 Rue Al Abtal, Hay Erraha<br />
                      20000 Casablanca, Maroc
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-ocp-green mt-0.5" />
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p className="text-sm text-muted-foreground">
                      Lun - Ven: 8h00 - 18h00<br />
                      Sam: 8h00 - 12h00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Support technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Besoin d'assistance technique ? Notre équipe d'ingénieurs 
                  est disponible pour vous conseiller.
                </p>
                <Button variant="outline" className="w-full">
                  📞 Support technique
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;