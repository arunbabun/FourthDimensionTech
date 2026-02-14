import { motion } from "framer-motion";
import { Truck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer } from "@/components/layout/Navbar";
import transportationHeroImage from "@/assets/images/industry-transportation.jpg";

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
      <main>
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img src={transportationHeroImage} alt={INDUSTRY.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="fd-container px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                    <Truck className="h-3 w-3" /> Transportation & Logistics
                  </span>
                  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-[1.1] text-white">{INDUSTRY.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{INDUSTRY.description}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-slate-50">
          <div className="fd-container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Expertise</span>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 text-slate-900">What we deliver</h2>
            </div>
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {INDUSTRY.bullets.map((item, i) => (
                <Card key={i} className="bg-white border border-slate-200 hover:border-primary/40 hover:shadow-lg p-5 md:p-8 rounded-xl transition-all">
                  <h3 className="text-base md:text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
