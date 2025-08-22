import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
import Dashboard from "./pages/Dashboard";
import Connexion from "./pages/Connexion";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions" element={<Solutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
