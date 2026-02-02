import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Cloud,
  Cpu,
  TestTube2,
  Landmark,
  HeartPulse,
  Truck,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import cloudIcon from "@/assets/images/cloud-icon-fixed.png";
import aiIcon from "@/assets/images/ai-icon.png";
import mlIcon from "@/assets/images/ml-icon.png";
import transformIcon from "@/assets/images/transform-icon.png";
import brainCloudMerged from "@/assets/images/brain-cloud-merged.png";
import heroBannerBg from "@/assets/images/hero-banner-bg.jpg";
import fdIcon from "@/assets/images/fd-icon.png";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-2xs)]">
      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      <span data-testid="text-pill">{children}</span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navbar />

      <main>
        <section className="fd-grid-glow min-h-[70vh] flex items-center" aria-label="Hero">
          <div className="fd-container relative py-8 sm:py-12 md:py-16 w-full">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative mb-8 overflow-hidden rounded-[3rem] border border-white/20 shadow-xl">
                  <div className="relative rounded-[2.8rem] px-6 py-8 md:py-12 overflow-hidden group">
                    {/* Hero Banner Background Image */}
                    <div className="absolute inset-0 pointer-events-none">
                      <img 
                        src={heroBannerBg} 
                        alt="" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="max-w-4xl mx-auto">
                        <h1
                          className="font-serif text-2xl tracking-tight text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
                          data-testid="text-hero-vision"
                        >
                          {COMPANY.tagline}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                          We offer AI & ML Solutions, Data Engineering, Product Engineering, Cloud & Digital Transformation, and Quality Engineering to help businesses thrive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-10 py-8 text-xl group hover:scale-105 transition-transform"
                    data-testid="button-primary-cta"
                  >
                    <a href="#contact">
                      Start a conversation
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-4 bg-muted/30" aria-label="Capabilities">
          <div className="fd-container">
            <div className="max-w-3xl mb-10">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight mb-3">What we do best</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We deliver measurable outcomes with senior execution across our core technology pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { 
                  title: "AI & ML Solutions", 
                  href: "/services/ai", 
                  icon: Sparkles, 
                  color: "from-cyan-500/10 to-blue-600/10",
                  description: "Generative AI and custom machine learning."
                },
                { 
                  title: "Data Engineering", 
                  href: "/services/data", 
                  icon: Database, 
                  color: "from-blue-500/10 to-blue-600/10",
                  description: "Modern platforms and intelligent pipelines."
                },
                { 
                  title: "Product Engineering", 
                  href: "/services/product", 
                  icon: Cpu, 
                  color: "from-emerald-500/10 to-emerald-600/10",
                  description: "Turning vision into market-ready software."
                },
                { 
                  title: "Cloud & Digital Transformation", 
                  href: "/services/cloud", 
                  icon: Cloud, 
                  color: "from-purple-500/10 to-purple-600/10",
                  description: "Scale and modernization for the future."
                },
                { 
                  title: "Quality Engineering", 
                  href: "/services/quality", 
                  icon: TestTube2, 
                  color: "from-orange-500/10 to-orange-600/10",
                  description: "Agile assurance and release velocity."
                }
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card 
                    className="group relative overflow-hidden rounded-[2.5rem] p-8 fd-glass fd-noise border-border/40 hover:border-primary/30 transition-all duration-500 cursor-pointer h-full"
                    data-testid={`card-capability-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-8 p-4 rounded-3xl bg-background border border-border group-hover:border-primary/20 transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                        <item.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <h3 className="text-2xl font-serif mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">{item.description}</p>
                      
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Explore <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10" aria-label="Industries">
          <div className="fd-container">
            <div className="max-w-3xl mb-10">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight mb-3">Industries we serve</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bring deep domain expertise to solve complex challenges in highly regulated and scale-intensive sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Banking & Financial Services", 
                  href: "/industries/banking", 
                  icon: Landmark,
                  description: "Streamlining operations and ensuring compliance for global financial institutions."
                },
                { 
                  title: "Insurance & Health Care", 
                  href: "/industries/insurance", 
                  icon: HeartPulse,
                  description: "Modernizing claims, care operations, and underwriting with precision."
                },
                { 
                  title: "Transportation & Logistics", 
                  href: "/industries/transportation", 
                  icon: Truck,
                  description: "Optimizing supply chains and shipping operations through intelligent automation."
                }
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card 
                    className="group relative overflow-hidden rounded-[2.5rem] p-10 fd-glass fd-noise border-border/40 hover:border-primary/30 transition-all duration-500 cursor-pointer h-full"
                    data-testid={`card-industry-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="relative z-10 flex flex-col h-full text-center items-center">
                      <div className="mb-8 p-5 rounded-3xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                        <item.icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-serif mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">{item.description}</p>
                      
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all duration-300">
                        View Industry <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-10 bg-card/30" aria-label="About">
          <div className="fd-container">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-serif text-4xl sm:text-5xl tracking-tight mb-6">About Us</h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      At {COMPANY.name}, we go beyond conventional consulting—we innovate, transform, and deliver. As a woman-owned technology consultancy, our foundation is built on passion, expertise, and a commitment to empowering businesses with cutting-edge solutions.
                    </p>
                    <p>
                      Our mission is to bridge the gap between complex technology and business success. We pride ourselves on a culture of integrity, collaboration, and continuous improvement, ensuring that every partnership we build is a step toward a more efficient and technologically advanced future.
                    </p>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/5 border border-primary/10">
                      <span className="font-medium">Woman-Owned</span>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/5 border border-primary/10">
                      <span className="font-medium">Certified Experts</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <Card className="relative overflow-hidden rounded-[3rem] border-border/40 fd-glass fd-noise p-1">
                  <img 
                    src="https://snaptureframez.in/wp-content/uploads/2025/02/3d-render-cute-cartoon-character-girl-with-glasses-holding-clipboard_393336-537-removebg-preview.png" 
                    alt="About Fourth Dimension Tech" 
                    className="w-full h-auto object-cover rounded-[2.8rem]"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10" aria-label="Contact">
          <div className="fd-container">
            <Card className="relative overflow-hidden rounded-[4rem] border-border/40 fd-glass fd-noise p-10 md:p-16">
              <div className="absolute top-0 right-0 p-8">
                <div className="h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              </div>
              
              <div className="relative z-10 grid gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-serif text-5xl md:text-7xl tracking-tighter mb-6">Let's talk.</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-md">
                    Ready to start your digital transformation journey? Our team is standing by to help you navigate the future.
                  </p>
                  
                  <div className="space-y-8">
                    <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-6 group">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                        <p className="text-xl font-medium">{COMPANY.email}</p>
                      </div>
                    </a>
                    
                    <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="flex items-center gap-6 group">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                        <p className="text-xl font-medium">{COMPANY.phone}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Visit Us</p>
                        <p className="text-xl font-medium">{COMPANY.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:pl-12 flex flex-col justify-center">
                  <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner">
                    <p className="text-2xl font-serif italic text-foreground mb-6">
                      "Excellence is not an act, but a habit. We've made it our habit to deliver transformative technology that works."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20" />
                      <div>
                        <p className="font-bold tracking-tight">Fourth Dimension Team</p>
                        <p className="text-sm text-muted-foreground">Certified Consultants</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
