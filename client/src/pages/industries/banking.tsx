import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar, Footer } from "@/components/layout/Navbar";
import bankingHeroImage from "@/assets/images/industry-banking.jpg";

const INDUSTRY = {
  title: "Banking & Financial Services",
  description: "Streamline operations, improve customer experiences, and stay compliant with ever-changing regulations.",
  bullets: [
    { title: "Asset Servicing", text: "Precise, secure management of complex portfolios—execution that improves efficiency and mitigates risk." },
    { title: "Asset Management", text: "Optimize investment strategies and portfolio performance with seasoned consultants and actionable insights." },
    { title: "Wealth Management", text: "Technology-driven strategies to scale personalized advisory experiences and client outcomes." },
    { title: "Investment Banking", text: "Hands-on expertise across deal execution, M&A, and capital markets operations to stay competitive." },
    { title: "Lending & Mortgages", text: "Compliance-driven execution across origination, underwriting, and servicing to enhance client experience." },
    { title: "Digital Banking", text: "Secure, personalized digital experiences powered by efficient delivery of modern banking initiatives." },
  ],
};

export default function BankingIndustry() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img src={bankingHeroImage} alt={INDUSTRY.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="fd-container px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                    <ShieldCheck className="h-3 w-3" /> Banking & Finance
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

        <section className="py-12 md:py-20 bg-background">
          <div className="fd-container px-4 md:px-6">
            <Card className="bg-white border border-slate-200 rounded-2xl p-6 md:p-12 overflow-hidden relative">
              <div className="relative z-10">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 text-slate-900">Ready to transform your financial operations?</h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 max-w-2xl">Our senior consultants bring deep industry expertise to execute projects that enhance operational efficiency and ensure compliance.</p>
                <Button size="lg" className="rounded-full px-10">Schedule a Strategy Session</Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
