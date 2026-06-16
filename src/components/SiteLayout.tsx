import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import skyscraperImg from "@/assets/skyscraper.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" style={{ minHeight: "5.25rem" }}>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[var(--gradient-hero)] grid place-items-center shadow-[var(--shadow-card)]">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold tracking-tight text-foreground text-lg">Skyline</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Aluminium · Windows & Doors</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-card)]"
          >
            Get a Quote
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-base py-1.5 text-foreground font-medium">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div aria-hidden className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
          <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-md bg-[var(--gradient-accent)] grid place-items-center text-[oklch(0.15_0.02_240)]">
                  <span className="font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold">Skyline Aluminium</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/55">Windows · Doors · Facades</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-white/70 max-w-md leading-relaxed">
                Engineered windows, doors and facades for homes, offices and industrial facilities. Designed in-house, fabricated in our workshop, installed by our own crews.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex gap-2 max-w-sm">
                <input type="email" placeholder="Your email" aria-label="Email"
                  className="flex-1 rounded-md bg-white/10 border border-white/15 px-4 py-2.5 text-sm placeholder:text-white/45 focus:outline-none focus:border-[var(--accent)]" />
                <button className="rounded-md bg-[var(--gradient-accent)] text-[oklch(0.15_0.02_240)] px-4 py-2.5 text-sm font-semibold">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/55 mb-5">Explore</h4>
              <ul className="space-y-3 text-sm text-white/85">
                <li><Link to="/services" className="hover:text-[var(--accent)] transition">Services</Link></li>
                <li><Link to="/projects" className="hover:text-[var(--accent)] transition">Projects</Link></li>
                <li><Link to="/gallery" className="hover:text-[var(--accent)] transition">Gallery</Link></li>
                <li><Link to="/about" className="hover:text-[var(--accent)] transition">About</Link></li>
                <li><Link to="/blogs" className="hover:text-[var(--accent)] transition">Blog</Link></li>
                <li><Link to="/faqs" className="hover:text-[var(--accent)] transition">FAQs</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/55 mb-5">Services</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Residential Installation</li>
                <li>Commercial Facades</li>
                <li>Factory Upgrades</li>
                <li>Maintenance & Glazing</li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/55 mb-5">Studio</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 text-[var(--accent)] shrink-0"/>14 Industrial Way,<br/>Skyline Park, 4001</li>
                <li className="flex items-center gap-2.5"><Phone size={15} className="text-[var(--accent)]"/>+1 (555) 010-2200</li>
                <li className="flex items-center gap-2.5"><Mail size={15} className="text-[var(--accent)]"/>hello@skylinealuminium.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/55">
            <span>© {new Date().getFullYear()} Skyline Aluminium Windows & Doors. All rights reserved.</span>
            <span>Crafted with precision · ISO 9001 Certified · BIM Level 2</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden text-white isolate">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            width={1920}
            height={900}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(180deg, oklch(0.22 0.10 268 / 0.25) 0%, oklch(0.30 0.14 268 / 0.55) 70%, oklch(0.30 0.14 268 / 0.75) 100%)" }}
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
      )}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-36 lg:pt-40 lg:pb-44">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          {eyebrow}
        </div>
        <h1 className="mt-7 text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight max-w-4xl text-white leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-7 text-lg md:text-2xl text-white max-w-2xl leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
