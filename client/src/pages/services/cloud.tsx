import { motion } from "framer-motion";
import { Cloud, BadgeCheck, ShieldCheck, Server, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";

const SERVICE = {
  title: "Cloud & Digital Transformation",
  description: "Strategy, roadmap, and cloud abilities bespoke to your business and goals—built for security, resilience, and scale.",
  image: "https://snaptureframez.in/wp-content/uploads/2025/02/virtual-reality-exploration-kid-interacts-with-digital-planet_393336-461-removebg-preview-e1769707656749.png",
  items: [
    { title: "Cloud Strategy & Consulting", text: "Defining a clear roadmap for your cloud journey, from initial assessment to multi-cloud strategy." },
    { title: "Cloud Migration", text: "Seamless transition of your applications and data with minimal downtime and maximum security." },
    { title: "Cloud Infrastructure Management", text: "Proactive monitoring, scaling, and optimization of your cloud environment for peak performance." },
    { title: "Cloud Security & Compliance", text: "Implementing robust security frameworks to protect your assets and ensure regulatory compliance." },
    { title: "DevOps & Automation", text: "Accelerating release cycles and improving reliability through automated workflows and CI/CD pipelines." },
    { title: "Cloud-Native Development", text: "Building scalable, resilient applications designed specifically for the cloud environment." },
  ],
  benefits: [
    "Infinite Scalability",
    "Enhanced Security",
    "Cost Optimization",
    "High Availability",
    "Global Reach",
    "Agile Deployment",
  ],
};

export default function CloudEngineering() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-20">
        <div className="fd-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Cloud className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-6">{SERVICE.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{SERVICE.description}</p>
              <Button size="lg" className="rounded-full px-8">Learn More</Button>
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

          {/* Why Cloud Engineering Section */}
          <div className="mt-20 py-20 bg-card/30 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-8">Why Cloud & Digital Transformation with {COMPANY.name}?</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We don't just migrate to the cloud; we architect for the future. Our cloud solutions are built for scalability, security, and cost optimization from the ground up.
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
                  <h3 className="font-serif text-xl mb-6 text-center">Cloud Transformation Impact</h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Cost Reduction</span>
                            <span className="text-blue-500 font-bold">40%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[40%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Average infrastructure cost savings after cloud optimization</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                          <Server className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">System Uptime</span>
                            <span className="text-purple-500 font-bold">99.9%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[99%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Average system availability across managed cloud environments</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/40">
                      <div className="flex gap-4 items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                          <Lock className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Security Compliance</span>
                            <span className="text-emerald-500 font-bold">100%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[100%]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Security audit pass rate for cloud implementations</p>
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
