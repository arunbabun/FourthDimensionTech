import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import DataServices from "@/pages/services/data";
import CloudEngineering from "@/pages/services/cloud";
import QualityEngineering from "@/pages/services/quality";
import ProductEngineering from "@/pages/services/product";
import AISolutions from "@/pages/services/ai";
import ContactPage from "@/pages/contact";
import BankingIndustry from "@/pages/industries/banking";
import InsuranceIndustry from "@/pages/industries/insurance";
import TransportationIndustry from "@/pages/industries/transportation";
import PrivacyPolicy from "@/pages/legal/privacy";
import TermsOfService from "@/pages/legal/terms";
import ScrollToTop from "@/components/layout/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services/data" component={DataServices} />
        <Route path="/services/cloud" component={CloudEngineering} />
        <Route path="/services/quality" component={QualityEngineering} />
        <Route path="/services/product" component={ProductEngineering} />
        <Route path="/services/ai" component={AISolutions} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/industries/banking" component={BankingIndustry} />
        <Route path="/industries/insurance" component={InsuranceIndustry} />
        <Route path="/industries/transportation" component={TransportationIndustry} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
