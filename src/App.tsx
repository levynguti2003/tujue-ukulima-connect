
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticlesPage from "./pages/ArticlesPage";
import VideosPage from "./pages/VideosPage";
import AskExpertPage from "./pages/AskExpertPage";
import MarketplacePage from "./pages/MarketplacePage";
import DroneServicesPage from "./pages/DroneServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/ask-expert" element={<AskExpertPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/drone-services" element={<DroneServicesPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/companies/:companyId" element={<CompanyDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
