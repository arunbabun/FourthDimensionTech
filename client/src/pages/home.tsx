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
import heroImage from "@/assets/images/hero-tech-team.png";
import serviceAi from "@/assets/images/service-ai.png";
import serviceCloud from "@/assets/images/service-cloud.jpg";
import serviceData from "@/assets/images/service-data.jpg";
import serviceProduct from "@/assets/images/service-product.jpg";
import serviceQuality from "@/assets/images/service-quality.jpg";
import industryBanking from "@/assets/images/industry-banking.jpg";
import industryInsurance from "@/assets/images/industry-insurance.jpg";
import industryTransportation from "@/assets/images/industry-transportation.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navbar />
      <main>
        <section className="relative overflow-hidden" aria-label="Hero">
          <div className="fd-container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-14 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 lg:order-1"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6" data-testid="text-pill-hero">
                  Technology Consultancy
                </span>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-5"
                  data-testid="text-hero-vision"
                >
                  {COMPANY.tagline}
                </h1>
                <p className="text-base sm:text-lg text-slate-500 max-w-lg mb-8 leading-relaxed">
                  We propel your business forward using world-class technology solutions across AI, Cloud, Data, and Product Engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-semibold w-full sm:w-auto" data-testid="button-hero-contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold w-full sm:w-auto" data-testid="button-hero-about">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <img src={heroImage} alt="Technology team" className="w-full h-48 sm:h-64 md:h-80 lg:h-[420px] object-cover rounded-2xl shadow-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-900" aria-label="Quick Services">
          <div className="fd-container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { num: "01", title: "AI & ML Solutions", desc: "Generative AI and custom machine learning for intelligent automation.", icon: Sparkles, href: "/services/ai" },
                { num: "02", title: "Cloud Services", desc: "Strategy, migration, and cloud-native development for scale.", icon: Cloud, href: "/services/cloud" },
                { num: "03", title: "Data Engineering", desc: "Modern data platforms and intelligent pipelines.", icon: Database, href: "/services/data" },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={item.href}>
                    <div className="group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full" data-testid={`card-quick-${item.num}`}>
                      <span className="text-4xl md:text-5xl font-bold text-primary/40 group-hover:text-primary/70 transition-colors">{item.num}</span>
                      <h3 className="text-lg md:text-xl font-bold text-white mt-4 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20" aria-label="Services">
          <div className="fd-container px-4 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Our Services
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                What We Do Best
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[
                { title: "AI & ML Solutions", href: "/services/ai", icon: Sparkles, description: "Generative AI and custom machine learning.", image: serviceAi },
                { title: "Data Engineering", href: "/services/data", icon: Database, description: "Modern platforms and intelligent pipelines.", image: serviceData },
                { title: "Product Engineering", href: "/services/product", icon: Cpu, description: "Turning vision into market-ready software.", image: serviceProduct },
                { title: "Cloud & Digital Transformation", href: "/services/cloud", icon: Cloud, description: "Scale and modernization for the future.", image: serviceCloud },
                { title: "Quality Engineering", href: "/services/quality", icon: TestTube2, description: "Agile assurance and release velocity.", image: serviceQuality },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={item.href}>
                    <Card
                      className="group relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                      data-testid={`card-capability-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="relative h-64 sm:h-72 md:h-80">
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                          <div className="mb-3 p-3 rounded-xl bg-white/15 backdrop-blur-sm w-fit">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-sm text-white/80 leading-relaxed mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                            Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50" aria-label="Industries">
          <div className="fd-container px-4 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Industries
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Industries We Serve
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {[
                { title: "Banking & Financial Services", href: "/industries/banking", icon: Landmark, description: "Streamlining operations and ensuring compliance for global financial institutions.", image: industryBanking },
                { title: "Insurance & Health Care", href: "/industries/insurance", icon: HeartPulse, description: "Modernizing claims, care operations, and underwriting with precision.", image: industryInsurance },
                { title: "Transportation & Logistics", href: "/industries/transportation", icon: Truck, description: "Optimizing supply chains and shipping operations through intelligent automation.", image: industryTransportation },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={item.href}>
                    <Card
                      className="group relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                      data-testid={`card-industry-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="relative h-64 sm:h-72 md:h-80">
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                          <div className="mb-3 p-3 rounded-xl bg-white/15 backdrop-blur-sm w-fit">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-sm text-white/80 leading-relaxed mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                            Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20" aria-label="Values">
          <div className="fd-container px-4 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                The Principles That Guide Us
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Shield, title: "Integrity", description: "We uphold the highest ethical standards in every engagement, building trust through transparency." },
                { icon: Users, title: "Collaboration", description: "We work as an extension of your team, fostering partnerships that drive mutual success." },
                { icon: Lightbulb, title: "Innovation", description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges." },
                { icon: Target, title: "Excellence", description: "We deliver exceptional results through continuous improvement and attention to detail." },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group h-full p-5 md:p-8 bg-white border border-slate-200 hover:border-primary/40 hover:shadow-lg rounded-xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-primary" aria-label="Contact">
          <div className="fd-container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                  Get In Touch
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Have Questions? Contact Us
                </h2>
                <p className="text-blue-100 leading-relaxed mb-8 max-w-md">
                  Ready to start your digital transformation journey? Our team is standing by to help you navigate the future.
                </p>
                
                <div className="space-y-5">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group" data-testid="link-contact-email">
                    <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-0.5">Email Us</p>
                      <p className="text-sm md:text-base font-medium text-white break-all">{COMPANY.email}</p>
                    </div>
                  </a>
                  
                  <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="flex items-center gap-4 group" data-testid="link-contact-phone">
                    <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-0.5">Call Us</p>
                      <p className="text-sm md:text-base font-medium text-white">{COMPANY.phone}</p>
                    </div>
                  </a>

                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group" data-testid="link-contact-address">
                    <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-0.5">Visit Us</p>
                      <p className="text-sm md:text-base font-medium text-white">{COMPANY.address}</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="p-6 md:p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}>
                    "Excellence is not an act, but a habit. We've made it our habit to deliver transformative technology that works."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">FD</span>
                    </div>
                    <div>
                      <p className="font-bold text-white">Fourth Dimension Team</p>
                      <p className="text-sm text-blue-200">Certified Consultants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
