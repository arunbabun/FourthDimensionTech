import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Trash2, User, Building2, MessageSquare, CheckCircle2 } from "lucide-react";
import { Navbar, Footer, COMPANY } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleClear = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      message: ""
    });
    toast({
      title: "Form cleared",
      description: "All fields have been reset.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/hello@fourthdimensiontech.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} (${formData.company})`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast({
          title: "Message sent!",
          description: "We'll get back to you shortly.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="fd-container max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fd-glass fd-noise p-12 rounded-[3rem] border-border/40"
            >
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-serif text-4xl mb-4">Thank you!</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Your inquiry has been sent to our team. We'll review your details and reach out to you at {formData.email} soon.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                Send another message
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="fd-container max-w-4xl">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-7xl tracking-tighter mb-6"
            >
              Let's Talk
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your digital transformation journey? Tell us a bit about your project and how we can help.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="fd-glass fd-noise p-8 md:p-12 border-border/40 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Mail className="h-32 w-32" />
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        required
                        name="name"
                        placeholder="John Doe"
                        className="pl-12 h-14 rounded-2xl bg-background/50 border-border/40 focus:border-primary/50 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        data-testid="input-name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        required
                        name="company"
                        placeholder="Your Company"
                        className="pl-12 h-14 rounded-2xl bg-background/50 border-border/40 focus:border-primary/50 transition-all"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        data-testid="input-company"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="pl-12 h-14 rounded-2xl bg-background/50 border-border/40 focus:border-primary/50 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">How can we help?</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      required
                      name="message"
                      placeholder="Tell us about the services you're expecting from us..."
                      className="pl-12 min-h-[150px] rounded-2xl bg-background/50 border-border/40 focus:border-primary/50 transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      data-testid="input-message"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="flex-1 rounded-full h-14 text-lg group"
                      data-testid="button-send"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className={`ml-2 h-5 w-5 transition-transform ${isSubmitting ? "" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                    </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    onClick={handleClear}
                    className="rounded-full h-14 px-8 text-lg group"
                    data-testid="button-clear"
                  >
                    <Trash2 className="mr-2 h-5 w-5 text-muted-foreground group-hover:text-destructive transition-colors" />
                    Clear
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
