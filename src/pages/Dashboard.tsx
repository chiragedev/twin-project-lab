import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Package, TrendingUp, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";

const Dashboard = () => {
  const stats = [
    {
      title: "Commandes activés",
      value: "12",
      change: "+5.2%",
      icon: ShoppingCart,
      color: "text-ocp-blue"
    },
    {
      title: "Produits vendus", 
      value: "24",
      change: "+12.1%",
      icon: Package,
      color: "text-ocp-green"
    },
    {
      title: "Utilisateurs actifs",
      value: "3",
      change: "+2.4%", 
      icon: Users,
      color: "text-ocp-orange"
    }
  ];

  const recentActivities = [
    { id: 1, action: "Commande #1234", time: "Il y a 2h", status: "completed" },
    { id: 2, action: "Nouveau client", time: "Il y a 4h", status: "pending" },
    { id: 3, action: "Livraison #5678", time: "Il y a 1j", status: "completed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gradient-to-r from-ocp-green-dark to-ocp-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tableau de bord
          </h1>
          <p className="text-lg text-white/90">
            Bienvenue, Client OCP
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge 
                      variant={activity.status === 'completed' ? 'default' : 'secondary'}
                      className={activity.status === 'completed' ? 'bg-ocp-green text-white' : ''}
                    >
                      {activity.status === 'completed' ? 'Terminé' : 'En attente'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-ocp-green" />
                    <div>
                      <p className="font-medium">Voir le catalogue</p>
                      <p className="text-sm text-muted-foreground">Parcourir tous nos produits</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <ShoppingCart className="w-5 h-5 text-ocp-blue" />
                    <div>
                      <p className="font-medium">Nouvelle commande</p>
                      <p className="text-sm text-muted-foreground">Passer une commande rapide</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-ocp-orange" />
                    <div>
                      <p className="font-medium">Support client</p>
                      <p className="text-sm text-muted-foreground">Contacter notre équipe</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;