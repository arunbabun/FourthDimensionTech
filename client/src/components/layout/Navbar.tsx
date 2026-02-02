import { BadgeCheck, ChevronDown, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const COMPANY = {
  name: "Fourth Dimension Tech",
  tagline: "Shaping the future of business through transformative solutions",
  email: "hello@fourthdimensiontech.net",
  phone: "+1 571 648 6777",
  address: "8401, Maryland Dr #7661, Richmond, VA 23294",
} as const;

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-2xs)]">
      <BadgeCheck className="h-3.5 w-3.5 text-primary" />
      <span data-testid="text-pill">{children}</span>
    </span>
  );
}

export function Navbar() {
  const navServices = [
    { label: "AI & ML Solutions", href: "/services/ai" },
    { label: "Data Engineering", href: "/services/data" },
    { label: "Product Engineering", href: "/services/product" },
    { label: "Cloud & Digital Transformation", href: "/services/cloud" },
    { label: "Quality Engineering", href: "/services/quality" },
  ];

  const industries = [
    { label: "Banking & Financial Services", href: "/industries/banking" },
    { label: "Insurance & Health Care", href: "/industries/insurance" },
    { label: "Transportation & Logistics", href: "/industries/transportation" },
  ];

  return (
    <div className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="fd-container flex items-center justify-between py-3">
        <Link
          href="/"
          className="group flex items-center gap-3"
          data-testid="link-logo"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Fourth Dimension Tech
          </span>
        </Link>

        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Primary">
          <Link
            href="/"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            data-testid="link-nav-home"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground outline-none">
              Services <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-2xl p-2 min-w-[200px] fd-glass border-border/50">
              {navServices.map((s) => (
                <DropdownMenuItem key={s.href} asChild>
                  <Link href={s.href} className="flex cursor-pointer rounded-xl px-3 py-2 text-sm hover:bg-muted">
                    {s.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground outline-none">
              Industries <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-2xl p-2 min-w-[240px] fd-glass border-border/50">
              {industries.map((i) => (
                <DropdownMenuItem key={i.href} asChild>
                  <Link href={i.href} className="flex cursor-pointer rounded-xl px-3 py-2 text-sm hover:bg-muted">
                    {i.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            data-testid="link-nav-about"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            data-testid="link-nav-contact"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="rounded-full"
            data-testid="button-cta-top"
          >
            <Link href="/contact">Let’s talk</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/40 bg-muted/20">
      <div className="fd-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai" className="text-sm text-muted-foreground hover:text-foreground transition">AI & ML Solutions</Link></li>
              <li><Link href="/services/data" className="text-sm text-muted-foreground hover:text-foreground transition">Data Engineering</Link></li>
              <li><Link href="/services/product" className="text-sm text-muted-foreground hover:text-foreground transition">Product Engineering</Link></li>
              <li><Link href="/services/cloud" className="text-sm text-muted-foreground hover:text-foreground transition">Cloud & Digital Transformation</Link></li>
              <li><Link href="/services/quality" className="text-sm text-muted-foreground hover:text-foreground transition">Quality Engineering</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/banking" className="text-sm text-muted-foreground hover:text-foreground transition">Banking & Financial Services</Link></li>
              <li><Link href="/industries/insurance" className="text-sm text-muted-foreground hover:text-foreground transition">Insurance & Health Care</Link></li>
              <li><Link href="/industries/transportation" className="text-sm text-muted-foreground hover:text-foreground transition">Transportation & Logistics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                {COMPANY.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                {COMPANY.address}
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
