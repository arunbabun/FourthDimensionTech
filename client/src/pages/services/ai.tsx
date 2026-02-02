import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiHeroImage from "@/assets/images/ai-solutions-hero.jpg";

export default function AISolutions() {
  const capabilities = [
    {
      title: "Generative AI & LLMs",
      description: "Custom large language model integration and fine-tuning for specialized business domains.",
      icon: Sparkles
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting models to anticipate market trends and customer behavior.",
      icon: Zap
    },
    {
      title: "Computer Vision",
      description: "Automated visual inspection and recognition systems for retail and manufacturing.",
      icon: Cpu
    },
    {
      title: "NLP & Sentiment Analysis",
      description: "Understanding customer feedback at scale through sophisticated language processing.",
      icon: Network
    }
  ];

  const benefits = [
    "Increased Operational Efficiency",
    "Data-Driven Decision Making",
    "Personalized Customer Experiences",
    "Automated Complex Workflows"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-muted/30 overflow-hidden relative">
          <div className="fd-container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6">
                  <Brain className="h-3 w-3" /> Advanced Intelligence
                </div>
                <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-8 leading-[0.9]">
                  AI & Machine Learning Solutions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  Harness the power of artificial intelligence to transform your business operations, unlock hidden insights, and create unprecedented value.
                </p>
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href="#contact">Consult with an expert</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-square overflow-hidden rounded-[3rem] bg-muted/20 border border-border/50"
              >
                <img src={aiHeroImage} alt="AI & Machine Learning" className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </div>
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Capabilities Grid */}
        <section className="py-20">
          <div className="fd-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">What we deliver</h2>
              <p className="text-muted-foreground">From strategy to deployment, we build end-to-end AI systems that solve real-world challenges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 fd-glass fd-noise border-border/40 h-full hover:border-primary/30 transition-all group">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-card/30">
          <div className="fd-container">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-8">Why AI with {COMPANY.name}?</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We don't just build models; we build business value. Our approach combines deep technical expertise with industry-specific domain knowledge to ensure your AI investments deliver measurable ROI.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-50" />
                <Card className="relative overflow-hidden rounded-[3rem] border-border/40 fd-glass fd-noise p-8">
                   <h3 className="font-serif text-xl mb-6 text-center">AI Implementation Impact</h3>
                   <div className="space-y-6">
                      <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                        <div className="flex gap-4 items-center mb-2">
                          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                            <Database className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">Data Processing Speed</span>
                              <span className="text-blue-500 font-bold">85%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 w-[85%]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Average improvement in data processing efficiency after AI integration</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                        <div className="flex gap-4 items-center mb-2">
                          <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                            <Brain className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">Prediction Accuracy</span>
                              <span className="text-purple-500 font-bold">92%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 w-[92%]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Machine learning model accuracy for business forecasting</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                        <div className="flex gap-4 items-center mb-2">
                          <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">Automation Rate</span>
                              <span className="text-emerald-500 font-bold">78%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[78%]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Percentage of repetitive tasks automated through AI solutions</p>
                      </div>
                   </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
