import { motion } from "framer-motion";
import { TestTube2, BadgeCheck, ShieldCheck, Bug, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import qualityHeroImage from "@/assets/images/service-quality.jpg";

const SERVICE = {
  title: "Quality Engineering",
  description: "Our agile quality engineering capabilities adapt to the need of the hour—precision, confidence, and release velocity.",
  items: [
    { title: "Automation Testing", text: "Implementing robust automated testing frameworks to improve efficiency and reduce manual effort." },
    { title: "Manual Testing", text: "Comprehensive manual testing to ensure your applications meet the highest quality standards." },
    { title: "Performance Testing", text: "Evaluating the performance of your applications under various load conditions to ensure reliability." },
    { title: "Security Testing", text: "Identifying vulnerabilities and ensuring your applications are secure from potential threats." },
    { title: "Regression Testing", text: "Verifying that new features and changes don't negatively impact existing functionality." },
    { title: "User Acceptance Testing", text: "Ensuring your applications meet the needs and expectations of your users." },
  ],
  benefits: [
    "Improved Reliability",
    "Faster Time-to-Market",
    "Enhanced Security",
    "Reduced Costs",
    "Better User Experience",
    "Agile Velocity",
  ],
};

export default function QualityEngineering() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img src={qualityHeroImage} alt={SERVICE.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="fd-container px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                    <TestTube2 className="h-3 w-3" /> Quality Engineering
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
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6 md:mb-8 text-slate-900">Why Quality Engineering with {COMPANY.name}?</h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 md:mb-10 leading-relaxed">
                  We don't just find bugs; we prevent them. Our comprehensive quality engineering approach ensures your applications are reliable, secure, and performant from day one.
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
                  <h3 className="font-bold text-base md:text-xl mb-4 md:mb-6 text-center text-slate-900">Quality Assurance Impact</h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <Bug className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-600">Defect Detection Rate</span>
                            <span className="text-blue-500 font-bold">96%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[96%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Bugs caught before production through comprehensive testing</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-600">Test Automation Coverage</span>
                            <span className="text-purple-500 font-bold">82%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[82%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Average test automation coverage across client projects</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                          <Target className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-600">Release Success Rate</span>
                            <span className="text-emerald-500 font-bold">99%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[99%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Successful production deployments without critical issues</p>
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
