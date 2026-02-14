import { BadgeCheck, ChevronDown, Mail, MapPin, Phone, ArrowRight, Menu } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const COMPANY = {
  name: "Fourth Dimension Tech",
  tagline: "Shaping the future of business through transformative solutions",
  email: "hello@fourthdimensiontech.net",
  phone: "+1 571 648 6777",
  address: "8401, Maryland Dr #7661, Richmond, VA 23294",
} as const;

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
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
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="fd-container flex items-center justify-between py-3">
        <Link
          href="/"
          className="group flex items-center gap-3"
          data-testid="link-logo"
        >
          <span className="text-base sm:text-xl font-bold tracking-wide text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.05em" }}>
            Fourth Dimension Tech
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:text-primary hover:bg-primary/5"
            data-testid="link-nav-home"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:text-primary hover:bg-primary/5 outline-none">
              Services <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-xl p-2 min-w-[220px] bg-white border-slate-200 shadow-lg">
              {navServices.map((s) => (
                <DropdownMenuItem key={s.href} asChild>
                  <Link href={s.href} className="flex cursor-pointer rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-primary/5">
                    {s.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:text-primary hover:bg-primary/5 outline-none">
              Industries <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-xl p-2 min-w-[260px] bg-white border-slate-200 shadow-lg">
              {industries.map((i) => (
                <DropdownMenuItem key={i.href} asChild>
                  <Link href={i.href} className="flex cursor-pointer rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-primary/5">
                    {i.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:text-primary hover:bg-primary/5"
            data-testid="link-nav-about"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:text-primary hover:bg-primary/5"
            data-testid="link-nav-contact"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="rounded-full hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white"
            data-testid="button-cta-top"
          >
            <Link href="/contact">Let's talk</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-slate-700 hover:bg-slate-100">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12 bg-white border-slate-200" aria-describedby={undefined}>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium py-2 border-b border-slate-100 text-slate-900">Home</Link>
                <div className="py-2 border-b border-slate-100">
                  <p className="text-lg font-medium mb-3 text-slate-900">Services</p>
                  <div className="flex flex-col gap-2 pl-4">
                    {navServices.map((s) => (
                      <Link key={s.href} href={s.href} className="text-sm text-slate-500 hover:text-primary">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-2 border-b border-slate-100">
                  <p className="text-lg font-medium mb-3 text-slate-900">Industries</p>
                  <div className="flex flex-col gap-2 pl-4">
                    {industries.map((i) => (
                      <Link key={i.href} href={i.href} className="text-sm text-slate-500 hover:text-primary">
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/about" className="text-lg font-medium py-2 border-b border-slate-100 text-slate-900">About Us</Link>
                <Link href="/contact" className="text-lg font-medium py-2 border-b border-slate-100 text-slate-900">Contact</Link>
                <Button asChild className="rounded-full mt-4 bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact">Let's talk</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-slate-200 bg-slate-900 text-white">
      <div className="fd-container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">AI & ML Solutions</Link></li>
              <li><Link href="/services/data" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Data Engineering</Link></li>
              <li><Link href="/services/product" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Product Engineering</Link></li>
              <li><Link href="/services/cloud" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Cloud & Digital Transformation</Link></li>
              <li><Link href="/services/quality" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Quality Engineering</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-white">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/banking" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Banking & Financial Services</Link></li>
              <li><Link href="/industries/insurance" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Insurance & Health Care</Link></li>
              <li><Link href="/industries/transportation" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Transportation & Logistics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="text-xs md:text-sm text-slate-400 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="break-all">{COMPANY.email}</span>
              </li>
              <li className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                {COMPANY.phone}
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-slate-500 text-center md:text-left">&copy; 2026 {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs md:text-sm text-slate-500 hover:text-primary transition">Privacy Policy</Link>
            <Link href="/terms" className="text-xs md:text-sm text-slate-500 hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
