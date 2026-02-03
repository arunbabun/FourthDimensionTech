import { motion } from "framer-motion";
import { Truck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer } from "@/components/layout/Navbar";
import transportationHeroImage from "@/assets/images/transportation-hero.jpg";

const INDUSTRY = {
  title: "Transportation & Logistics",
  description: "Transform logistics with innovative, secure solutions—optimized operations and efficient, scalable growth.",
  bullets: [
    { title: "Cargo Management", text: "Strategic oversight to optimize supply chains, improve tracking, and ensure on-time delivery." },
    { title: "Shipping", text: "Transform shipping operations with automation across vessel management, freight handling, and compliance." },
    { title: "Railways", text: "Enhance operational efficiency and safety with scheduling optimization and advanced analytics." },
  ],
};

export default function TransportationIndustry() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-2 md:pt-4 pb-20">
        <div className="fd-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Truck className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-6">{INDUSTRY.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{INDUSTRY.description}</p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-muted/20 border border-border/50">
              <img src={transportationHeroImage} alt={INDUSTRY.title} className="h-full w-full object-cover" />
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
