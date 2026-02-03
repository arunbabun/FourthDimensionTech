import { motion } from "framer-motion";
import { TestTube2, BadgeCheck, ShieldCheck, Bug, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";

const SERVICE = {
  title: "Quality Engineering",
  description: "Our agile quality engineering capabilities adapt to the need of the hour—precision, confidence, and release velocity.",
  image: "https://snaptureframez.in/wp-content/uploads/2026/01/QC2.png",
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
      <main className="pt-2 md:pt-4 pb-20">
        <div className="fd-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <TestTube2 className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-6">{SERVICE.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{SERVICE.description}</p>
              <Button size="lg" className="rounded-full px-8">View Solutions</Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-muted/20 border border-border/50 p-8">
              <img src={SERVICE.image} alt={SERVICE.title} className="h-full w-full object-contain" />
            </div>
          </motion.div>

          <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE.items.map((item, i) => (
              <Card key={i} className="fd-glass fd-noise p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>

          {/* Why Quality Engineering Section */}
          <div className="mt-20 py-20 bg-card/30 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-8">Why Quality Engineering with {COMPANY.name}?</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We don't just find bugs; we prevent them. Our comprehensive quality engineering approach ensures your applications are reliable, secure, and performant from day one.
                </p>
                <ul className="space-y-4">
                  {SERVICE.benefits.map((benefit, i) => (
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
                  <h3 className="font-serif text-xl mb-6 text-center">Quality Assurance Impact</h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <Bug className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Defect Detection Rate</span>
                            <span className="text-blue-500 font-bold">96%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[96%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Bugs caught before production through comprehensive testing</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Test Automation Coverage</span>
                            <span className="text-purple-500 font-bold">82%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[82%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Average test automation coverage across client projects</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                          <Target className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Release Success Rate</span>
                            <span className="text-emerald-500 font-bold">99%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[99%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Successful production deployments without critical issues</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
