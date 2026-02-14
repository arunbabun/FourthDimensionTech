import { motion } from "framer-motion";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-14 md:py-20">
        <div className="fd-container max-w-4xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8">Terms of Service</h1>
            <Card className="p-6 md:p-10 bg-white border border-slate-200 rounded-2xl">
              <div className="prose max-w-none space-y-6 text-slate-600 leading-relaxed">
                <p className="text-sm italic text-slate-400">Last Updated: February 2026</p>
                
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing and using the {COMPANY.name} website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">2. Use License</h2>
                  <p>Permission is granted to temporarily view the materials (information or software) on {COMPANY.name}'s website for personal, non-commercial transitory viewing only.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
                  <p>The materials on {COMPANY.name}'s website are provided on an 'as is' basis. {COMPANY.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">4. Limitations</h2>
                  <p>In no event shall {COMPANY.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {COMPANY.name}'s website.</p>
                </section>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
