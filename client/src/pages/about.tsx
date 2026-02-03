import { motion } from "framer-motion";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-24 bg-muted/30">
          <div className="fd-container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-8">About Us</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering businesses with transformative technology solutions through integrity and innovation.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    At {COMPANY.name}, we are a woman-owned technology consultancy dedicated to bridging the gap between complex engineering and real-world business success. We believe that technology should be an enabler, not a barrier.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Our team brings decades of combined experience across data, cloud, and product engineering. We don't just consult; we execute. Our senior-led approach ensures that every project is delivered with precision and a deep understanding of your industry's unique challenges.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 fd-glass text-center">
                    <h3 className="text-3xl font-serif text-primary mb-2">100%</h3>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Woman Owned</p>
                  </Card>
                  <Card className="p-6 fd-glass text-center">
                    <h3 className="text-3xl font-serif text-primary mb-2">Industry</h3>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Certified Consultants</p>
                  </Card>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <Card className="relative overflow-hidden rounded-[3rem] border-border/40 fd-glass fd-noise p-1">
                  <img 
                    src="https://snaptureframez.in/wp-content/uploads/2025/02/3d-render-cute-cartoon-character-girl-with-glasses-holding-clipboard_393336-537-removebg-preview.png" 
                    alt="Fourth Dimension Tech Mission" 
                    className="w-full h-auto object-cover rounded-[2.8rem]"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24">
          <div className="fd-container px-4 md:px-6">
            <Card className="relative overflow-hidden rounded-2xl md:rounded-[4rem] border-border/40 fd-glass fd-noise p-6 sm:p-8 md:p-12 lg:p-20">
              <div className="relative z-10 grid gap-8 md:gap-16 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 md:mb-8">Let's talk.</h2>
                  <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12 max-w-md mx-auto lg:mx-0">
                    Ready to start your digital transformation journey? Our team is standing by to help you navigate the future.
                  </p>
                  
                  <div className="space-y-4 md:space-y-8 flex flex-col items-center lg:items-start">
                    <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 md:gap-6 group w-full max-w-xs lg:max-w-none">
                      <div className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Mail className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                        <p className="text-sm md:text-xl font-medium break-all">{COMPANY.email}</p>
                      </div>
                    </a>
                    
                    <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 md:gap-6 group w-full max-w-xs lg:max-w-none">
                      <div className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Phone className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                        <p className="text-sm md:text-xl font-medium">{COMPANY.phone}</p>
                      </div>
                    </a>

                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-6 group w-full max-w-xs lg:max-w-none">
                      <div className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="text-left min-w-0">
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
  );
}
