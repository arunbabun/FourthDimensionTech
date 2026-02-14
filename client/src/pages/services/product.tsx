import { motion } from "framer-motion";
import { Cpu, BadgeCheck, ShieldCheck, Rocket, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import productHeroImage from "@/assets/images/service-product.jpg";

const SERVICE = {
  title: "Product Engineering",
  description: "We take your ideas and vision and transform them into state-of-the-art products—ready to use, market, and monetize.",
  items: [
    { title: "UI/UX Design", text: "Creating intuitive and engaging user experiences through modern design principles and user testing." },
    { title: "Custom Web Development", text: "Building high-performance, responsive websites tailored to your specific business requirements." },
    { title: "Mobile App Development", text: "Developing native and cross-platform mobile applications that provide a seamless user experience." },
    { title: "Legacy System Modernization", text: "Updating and transforming outdated systems to improve performance and integrate with modern technologies." },
    { title: "API Development & Integration", text: "Designing and implementing robust APIs to connect your services and enhance functionality." },
    { title: "MVP Development", text: "Quickly building and launching Minimum Viable Products to test your vision and gather user feedback." },
  ],
  benefits: [
    "User-Centric Design",
    "Rapid Prototyping",
    "Scalable Architecture",
    "Modern Tech Stack",
    "Seamless Integration",
    "Market Readiness",
  ],
};

export default function ProductEngineering() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img src={productHeroImage} alt={SERVICE.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="fd-container px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                    <Cpu className="h-3 w-3" /> Product Engineering
                  </span>
                  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-[1.1] text-white">{SERVICE.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{SERVICE.description}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-slate-50">
          <div className="fd-container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Services</span>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 text-slate-900">What we offer</h2>
            </div>
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICE.items.map((item, i) => (
                <Card key={i} className="bg-white border border-slate-200 hover:border-primary/40 hover:shadow-lg p-5 md:p-8 rounded-xl transition-all">
                  <h3 className="text-base md:text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
          <div className="fd-container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Choose Us</span>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6 md:mb-8 text-slate-900">Why Product Engineering with {COMPANY.name}?</h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 md:mb-10 leading-relaxed">
                  We don't just build products; we engineer experiences that delight users and drive business growth. Our approach combines design thinking with technical excellence to deliver market-ready solutions.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {SERVICE.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-slate-600">
                      <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white border border-slate-200 p-5 md:p-8">
                  <h3 className="font-bold text-base md:text-xl mb-4 md:mb-6 text-center text-slate-900">Product Development Impact</h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <Rocket className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-600">Time-to-Market Reduction</span>
                            <span className="text-blue-500 font-bold">65%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[65%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Average reduction in product launch timelines through agile development</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-600">User Satisfaction Score</span>
                            <span className="text-purple-500 font-bold">91%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[91%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Average user satisfaction rating for products we've delivered</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                          <Zap className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-600">Performance Optimization</span>
                            <span className="text-emerald-500 font-bold">88%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[88%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Average improvement in application performance metrics</p>
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
