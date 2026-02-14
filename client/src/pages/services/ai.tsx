import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiHeroImage from "@/assets/images/service-ai.png";

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
      <main>
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img src={aiHeroImage} alt="AI & Machine Learning Solutions" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="fd-container px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                    <Brain className="h-3 w-3" /> Advanced Intelligence
                  </span>
                  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-[1.1] text-white">
                    AI & Machine Learning Solutions
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                    Harness the power of artificial intelligence to transform your business operations, unlock hidden insights, and create unprecedented value.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-slate-50">
          <div className="fd-container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Services</span>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 text-slate-900">What we deliver</h2>
              <p className="text-sm sm:text-base text-slate-600">From strategy to deployment, we build end-to-end AI systems that solve real-world challenges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-5 md:p-8 bg-white border border-slate-200 hover:border-primary/40 hover:shadow-lg h-full transition-all group rounded-xl">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 md:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
          <div className="fd-container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Choose Us</span>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6 md:mb-8 text-slate-900">Why AI with {COMPANY.name}?</h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 md:mb-10 leading-relaxed">
                  We don't just build models; we build business value. Our approach combines deep technical expertise with industry-specific domain knowledge to ensure your AI investments deliver measurable ROI.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-slate-600">
                      <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white border border-slate-200 p-5 md:p-8">
                   <h3 className="font-bold text-base md:text-xl mb-4 md:mb-6 text-center text-slate-900">AI Implementation Impact</h3>
                   <div className="space-y-6">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="flex gap-4 items-center mb-2">
                          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                            <Database className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-slate-600">Data Processing Speed</span>
                              <span className="text-blue-500 font-bold">85%</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 w-[85%]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Average improvement in data processing efficiency after AI integration</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="flex gap-4 items-center mb-2">
                          <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                            <Brain className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-slate-600">Prediction Accuracy</span>
                              <span className="text-purple-500 font-bold">92%</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 w-[92%]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Machine learning model accuracy for business forecasting</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="flex gap-4 items-center mb-2">
                          <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-slate-600">Automation Rate</span>
                              <span className="text-emerald-500 font-bold">78%</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[78%]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Percentage of repetitive tasks automated through AI solutions</p>
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
