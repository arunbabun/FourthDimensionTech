import { motion } from "framer-motion";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
            <Card className="p-6 md:p-10 bg-white border border-slate-200 rounded-2xl">
              <div className="prose max-w-none space-y-6 text-slate-600 leading-relaxed">
                <p className="text-sm italic text-slate-400">Last Updated: February 2026</p>
                
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                  <p>Welcome to {COMPANY.name}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
                  <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Identity Data: name, username or similar identifier.</li>
                    <li>Contact Data: email address and telephone numbers.</li>
                    <li>Technical Data: IP address, browser type and version, time zone setting and location.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
                  <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To respond to your inquiries via our contact forms.</li>
                    <li>To improve our website and services.</li>
                    <li>To comply with a legal or regulatory obligation.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                  <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
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
