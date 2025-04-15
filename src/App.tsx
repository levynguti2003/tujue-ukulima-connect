
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import RequireAuth from "@/components/auth/RequireAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticlesPage from "./pages/ArticlesPage";
import VideosPage from "./pages/VideosPage";
import AskExpertPage from "./pages/AskExpertPage";
import DashboardPage from "./pages/DashboardPage";
import MarketplacePage from "./pages/MarketplacePage";
import DroneServicesPage from "./pages/DroneServicesPage";
import AuthPage from "./pages/AuthPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/ask-expert" element={<AskExpertPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route 
              path="/dashboard" 
              element={
                <RequireAuth>
                  <DashboardPage />
                </RequireAuth>
              } 
            />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/drone-services" element={<DroneServicesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
