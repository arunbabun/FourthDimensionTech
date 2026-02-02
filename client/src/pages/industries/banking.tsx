import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar, Footer } from "@/components/layout/Navbar";
import bankingHeroImage from "@/assets/images/banking-hero.jpg";

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
      <main className="py-20">
        <div className="fd-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-6">{INDUSTRY.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{INDUSTRY.description}</p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-muted/20 border border-border/50">
              <img src={bankingHeroImage} alt={INDUSTRY.title} className="h-full w-full object-cover" />
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

          <Card className="mt-20 fd-glass fd-noise rounded-[3rem] p-12 overflow-hidden relative">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl mb-6">Ready to transform your financial operations?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">Our senior consultants bring deep industry expertise to execute projects that enhance operational efficiency and ensure compliance.</p>
              <Button size="lg" className="rounded-full px-10">Schedule a Strategy Session</Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
