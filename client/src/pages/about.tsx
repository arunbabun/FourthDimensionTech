import { motion } from "framer-motion";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Shield, Users, Lightbulb, Target } from "lucide-react";
import aboutImage from "@/assets/images/about-team.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-10 sm:py-14 md:py-20 relative overflow-hidden">
          <div className="fd-container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                About Company
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">About Us</h1>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
                Empowering businesses with transformative technology solutions through integrity and innovation.
              </p>
            </div>

            <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
                  At {COMPANY.name}, we are a woman-owned technology consultancy dedicated to bridging the gap between complex engineering and real-world business success. We believe that technology should be an enabler, not a barrier.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
                  Our team brings decades of combined experience across data, cloud, and product engineering. We don't just consult; we execute. Our senior-led approach ensures that every project is delivered with precision and a deep understanding of your industry's unique challenges.
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                  <div className="p-4 md:p-5 rounded-xl bg-primary/5 border border-primary/15 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">100%</h3>
                    <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-widest">Woman Owned</p>
                  </div>
                  <div className="p-4 md:p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">Certified</h3>
                    <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-widest">Expert Consultants</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img src={aboutImage} alt="Fourth Dimension Tech team" className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-slate-50">
          <div className="fd-container px-4 md:px-6">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">The Principles That Guide Us</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Shield, title: "Integrity", desc: "Highest ethical standards in every engagement." },
                { icon: Users, title: "Collaboration", desc: "Working as an extension of your team." },
                { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions for complex challenges." },
                { icon: Target, title: "Excellence", desc: "Exceptional results through continuous improvement." },
              ].map((value) => (
                <Card key={value.title} className="group p-5 md:p-6 bg-white border border-slate-200 hover:border-primary/40 hover:shadow-lg rounded-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-primary">
          <div className="fd-container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                  Get In Touch
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Let's talk.</h2>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                  Ready to start your digital transformation journey? Our team is standing by to help you navigate the future.
                </p>
                
                <div className="space-y-5 flex flex-col items-center lg:items-start">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group w-full max-w-xs lg:max-w-none">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-0.5">Email Us</p>
                      <p className="text-sm md:text-base font-medium text-white break-all">{COMPANY.email}</p>
                    </div>
                  </a>
                  
                  <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="flex items-center gap-4 group w-full max-w-xs lg:max-w-none">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-0.5">Call Us</p>
                      <p className="text-sm md:text-base font-medium text-white">{COMPANY.phone}</p>
                    </div>
                  </a>

                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-full max-w-xs lg:max-w-none">
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left min-w-0">
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
