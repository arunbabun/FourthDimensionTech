import { motion } from "framer-motion";
import { Cpu, BadgeCheck, ShieldCheck, Rocket, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";

const SERVICE = {
  title: "Product Engineering",
  description: "We take your ideas and vision and transform them into state-of-the-art products—ready to use, market, and monetize.",
  image: "https://snaptureframez.in/wp-content/uploads/2025/02/illustration-young-mechanic-girl-with-helmet-holding-drill_1057-46079-removebg-preview.png",
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
      <main className="pt-2 md:pt-4 pb-20">
        <div className="fd-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Cpu className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-6">{SERVICE.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{SERVICE.description}</p>
              <Button size="lg" className="rounded-full px-8">Our Process</Button>
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

          {/* Why Product Engineering Section */}
          <div className="mt-20 py-20 bg-card/30 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-8">Why Product Engineering with {COMPANY.name}?</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We don't just build products; we engineer experiences that delight users and drive business growth. Our approach combines design thinking with technical excellence to deliver market-ready solutions.
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
                  <h3 className="font-serif text-xl mb-6 text-center">Product Development Impact</h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <Rocket className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Time-to-Market Reduction</span>
                            <span className="text-blue-500 font-bold">65%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[65%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Average reduction in product launch timelines through agile development</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">User Satisfaction Score</span>
                            <span className="text-purple-500 font-bold">91%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[91%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Average user satisfaction rating for products we've delivered</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                          <Zap className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Performance Optimization</span>
                            <span className="text-emerald-500 font-bold">88%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[88%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Average improvement in application performance metrics</p>
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
