import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-[var(--gradient-hero)] grid place-items-center shadow-[var(--shadow-card)]">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight text-foreground">Skyline</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Aluminium · Windows & Doors</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-card)]"
          >
            Get a Quote
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm py-1 text-muted-foreground">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-md bg-white/10 border border-white/20 grid place-items-center">
                <span className="font-bold">S</span>
              </div>
              <span className="font-semibold">Skyline Aluminium</span>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-md">
              Engineered windows, doors and facades for homes, offices and industrial facilities. Built in aluminium. Built to last.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/blogs" className="hover:text-white">Blog</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5"/>14 Industrial Way, Skyline Park</li>
              <li className="flex items-center gap-2"><Phone size={14}/>+1 (555) 010-2200</li>
              <li className="flex items-center gap-2"><Mail size={14}/>hello@skylinealuminium.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
            <span>© {new Date().getFullYear()} Skyline Aluminium Windows & Doors. All rights reserved.</span>
            <span>Crafted with precision · ISO 9001 Certified</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-[var(--gradient-hero)] text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.25em] text-white/60">{eyebrow}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
