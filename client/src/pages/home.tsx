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
  Shield,
  Users,
  Lightbulb,
  Target,
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
    <div className="min-h-screen bg-background relative" id="top">
      {/* Hero background image - only visible on large screens */}
      <div className="absolute top-0 left-0 right-0 h-[55vh] overflow-hidden hidden lg:block">
        <img 
          src={heroBannerBg} 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      
      <div className="relative z-10">
        <Navbar />

      <main>
        <section className="relative" aria-label="Hero">
          <div className="fd-container relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:min-h-[35vh] flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1
                  className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight text-slate-800 leading-tight mb-4 sm:mb-6"
                  data-testid="text-hero-vision"
                >
                  {COMPANY.tagline}
                </h1>
                
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-8">
                  <span>AI & ML Solutions</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Data Engineering</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Product Engineering</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="whitespace-nowrap">Cloud & Digital Transformation</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Quality Engineering</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto rounded-full px-6 sm:px-8 bg-primary hover:bg-primary/90 text-white">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-6 sm:px-8 border-slate-300 text-slate-700 hover:bg-slate-100">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8" aria-label="Capabilities">
          <div className="fd-container px-4 md:px-6">
            <div className="max-w-3xl mb-6 md:mb-10 text-center md:text-left mx-auto md:mx-0">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight mb-2 md:mb-3">What we do best</h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                We deliver measurable outcomes across our core technology pillars.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
              {[
                { 
                  title: "AI & ML Solutions", 
                  href: "/services/ai", 
                  icon: Sparkles, 
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Generative AI and custom machine learning."
                },
                { 
                  title: "Data Engineering", 
                  href: "/services/data", 
                  icon: Database, 
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Modern platforms and intelligent pipelines."
                },
                { 
                  title: "Product Engineering", 
                  href: "/services/product", 
                  icon: Cpu, 
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Turning vision into market-ready software."
                },
                { 
                  title: "Cloud & Digital Transformation", 
                  href: "/services/cloud", 
                  icon: Cloud, 
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Scale and modernization for the future."
                },
                { 
                  title: "Quality Engineering", 
                  href: "/services/quality", 
                  icon: TestTube2, 
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Agile assurance and release velocity."
                }
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card 
                    className={`group relative overflow-hidden rounded-xl md:rounded-[2.5rem] p-3 md:p-8 ${item.bgColor} border-2 ${item.borderColor} hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full shadow-sm`}
                    data-testid={`card-capability-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    
                    <div className="relative z-10 flex flex-col h-full items-center text-center px-2 md:px-4">
                      <div className="mb-3 md:mb-8 p-2 md:p-4 rounded-xl md:rounded-3xl bg-white border border-slate-200 group-hover:border-primary/40 transition-all duration-500 shadow-sm group-hover:shadow-md">
                        <item.icon className="h-5 w-5 md:h-8 md:w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <h3 className="text-sm md:text-2xl font-serif mb-1 md:mb-4 tracking-tight text-slate-800 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                      <p className="text-[10px] md:text-sm text-slate-600 leading-relaxed mb-2 md:mb-8 flex-grow">{item.description}</p>
                      
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                        Explore <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 md:py-10" aria-label="Industries">
          <div className="fd-container px-4 md:px-6">
            <div className="max-w-3xl mb-6 md:mb-10 text-center md:text-left mx-auto md:mx-0">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight mb-2 md:mb-3">Industries we serve</h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Deep domain expertise for regulated and scale-intensive sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-8">
              {[
                { 
                  title: "Banking & Financial Services", 
                  href: "/industries/banking", 
                  icon: Landmark,
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Streamlining operations and ensuring compliance for global financial institutions."
                },
                { 
                  title: "Insurance & Health Care", 
                  href: "/industries/insurance", 
                  icon: HeartPulse,
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Modernizing claims, care operations, and underwriting with precision."
                },
                { 
                  title: "Transportation & Logistics", 
                  href: "/industries/transportation", 
                  icon: Truck,
                  bgColor: "bg-slate-100",
                  borderColor: "border-slate-200",
                  description: "Optimizing supply chains and shipping operations through intelligent automation."
                }
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card 
                    className={`group relative overflow-hidden rounded-xl md:rounded-[2.5rem] p-4 md:p-10 ${item.bgColor} border-2 ${item.borderColor} hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full shadow-sm`}
                    data-testid={`card-industry-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="relative z-10 flex flex-col h-full text-center items-center">
                      <div className="mb-3 md:mb-8 p-3 md:p-5 rounded-xl md:rounded-3xl bg-white border border-slate-200 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500 shadow-sm">
                        <item.icon className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                      </div>
                      <h3 className="text-sm md:text-2xl font-serif mb-2 md:mb-4 tracking-tight text-slate-800 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                      <p className="text-xs md:text-base text-slate-600 leading-relaxed mb-3 md:mb-8 flex-grow">{item.description}</p>
                      
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all duration-300">
                        View <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="py-6 md:py-16" aria-label="Our Values">
          <div className="fd-container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6 md:mb-12"
            >
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight mb-2 md:mb-4">Our Values</h2>
              <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  description: "We uphold the highest ethical standards in every engagement, building trust through transparency."
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We work as an extension of your team, fostering partnerships that drive mutual success."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description: "We deliver exceptional results through continuous improvement and attention to detail."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group h-full p-4 md:p-8 bg-slate-100 border-2 border-slate-200 hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 rounded-xl md:rounded-3xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className="mb-3 md:mb-6 p-3 md:p-5 rounded-xl md:rounded-2xl bg-white border border-slate-200 group-hover:border-primary/40 transition-all duration-500 shadow-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <value.icon className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                      </motion.div>
                      <h3 className="text-sm md:text-xl font-serif mb-1 md:mb-3 text-slate-800 group-hover:text-primary transition-colors">{value.title}</h3>
                      <p className="text-[10px] md:text-sm text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-6 md:py-10 bg-card/30" aria-label="About">
          <div className="fd-container px-4 md:px-6">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4 md:mb-6">About Us</h2>
                  <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-muted-foreground leading-relaxed">
                    <p>
                      At {COMPANY.name}, we go beyond conventional consulting—we innovate, transform, and deliver. As a woman-owned technology consultancy, our foundation is built on passion, expertise, and a commitment to empowering businesses with cutting-edge solutions.
                    </p>
                    <p>
                      Our mission is to bridge the gap between complex technology and business success. We pride ourselves on a culture of integrity, collaboration, and continuous improvement, ensuring that every partnership we build is a step toward a more efficient and technologically advanced future.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl bg-primary/5 border border-primary/10">
                      <span className="font-medium text-sm md:text-base">Woman-Owned</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl bg-primary/5 border border-primary/10">
                      <span className="font-medium text-sm md:text-base">Certified Experts</span>
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

        <section id="contact" className="py-4 md:py-10" aria-label="Contact">
          <div className="fd-container">
            <Card className="relative overflow-hidden rounded-2xl md:rounded-[4rem] border-border/40 bg-card p-6 md:p-16">
              <div className="absolute top-0 right-0 p-8 hidden md:block">
                <div className="h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              </div>
              
              <div className="relative z-10 grid gap-8 md:gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl tracking-tighter mb-4 md:mb-6">Let's talk.</h2>
                  <p className="text-sm md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-12 max-w-md">
                    Ready to start your digital transformation journey? Our team is standing by to help you navigate the future.
                  </p>
                  
                  <div className="space-y-4 md:space-y-8">
                    <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 md:gap-6 group">
                      <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Mail className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                        <p className="text-sm md:text-xl font-medium break-all">{COMPANY.email}</p>
                      </div>
                    </a>
                    
                    <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="flex items-center gap-4 md:gap-6 group">
                      <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Phone className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                        <p className="text-sm md:text-xl font-medium">{COMPANY.phone}</p>
                      </div>
                    </a>

                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group">
                      <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Visit Us</p>
                        <p className="text-sm md:text-xl font-medium">{COMPANY.address}</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="lg:pl-12 flex flex-col justify-center">
                  <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner">
                    <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}>
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
    </div>
  );
}
