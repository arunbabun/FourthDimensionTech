import { motion } from "framer-motion";
import { FlaskConical, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer } from "@/components/layout/Navbar";
import insuranceHeroImage from "@/assets/images/insurance-hero.jpg";

const INDUSTRY = {
  title: "Insurance & Health Care",
  description: "Modernize underwriting, claims, and care operations—improving accuracy, compliance, and customer outcomes.",
  bullets: [
    { title: "Commercial & Specialty", text: "Optimize underwriting accuracy, claims management, and risk mitigation for complex portfolios." },
    { title: "Personal Lines", text: "Improve policy administration, customer engagement, and operational efficiency with experienced delivery." },
    { title: "Life Insurance", text: "Streamline policy management, modernize underwriting, and accelerate product innovation." },
    { title: "Life Sciences", text: "Execute compliance-ready initiatives that accelerate drug development and optimize trials and supply chains." },
    { title: "Healthcare Payers & Providers", text: "Integrate payer/provider operations to improve claims, patient care, and end-to-end efficiency." },
  ],
};

export default function InsuranceIndustry() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-20">
        <div className="fd-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <FlaskConical className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-6">{INDUSTRY.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{INDUSTRY.description}</p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-muted/20 border border-border/50">
              <img src={insuranceHeroImage} alt={INDUSTRY.title} className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY.bullets.map((item, i) => (
              <Card key={i} className="fd-glass fd-noise p-8 rounded-[2rem] hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
