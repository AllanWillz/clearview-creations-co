import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, Building2, Factory, Shield, Ruler, Sparkles, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import factoryImg from "@/assets/project-factory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyline Aluminium Windows & Doors | Precision Glazing" },
      { name: "description", content: "Skyline designs and installs premium aluminium windows, doors and facade systems for homes, offices and factories." },
      { property: "og:title", content: "Skyline Aluminium Windows & Doors" },
      { property: "og:description", content: "Premium aluminium windows, doors and facades for homes, offices and factories." },
    ],
  }),
  component: Home_,
});

const services = [
  { icon: Home, title: "Residential Installation", desc: "Bespoke aluminium windows and sliding doors for modern homes." },
  { icon: Building2, title: "Commercial Facade", desc: "Engineered curtain walls and structural glazing for offices." },
  { icon: Factory, title: "Factory Upgrade", desc: "Industrial-grade window and door systems for working buildings." },
];

const projects = [
  { img: residentialImg, title: "Hilltop Residence", tag: "Residential" },
  { img: commercialImg, title: "Meridian Tower Facade", tag: "Commercial" },
  { img: factoryImg, title: "Northgate Factory Refit", tag: "Industrial" },
];

const reasons = [
  { icon: Shield, title: "10-Year Warranty", desc: "Every system backed by a comprehensive product guarantee." },
  { icon: Ruler, title: "Made to Measure", desc: "Custom fabrication in our in-house workshop." },
  { icon: Sparkles, title: "Premium Finishes", desc: "Powder-coated, anodised or wood-effect aluminium." },
  { icon: Clock, title: "On-Time Delivery", desc: "Scheduled installs with milestone-based reporting." },
];

function Home_() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"/> Aluminium · Glass · Engineered
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
              Light, framed<br/><span className="text-[oklch(0.85_0.1_70)]">in aluminium.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-lg">
              Windows, doors and facades engineered for homes, offices and factories. Designed in-house, fabricated in our workshop, installed by our own crews.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] text-[oklch(0.15_0.02_240)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-elegant)] hover:opacity-95 transition">
                Explore Services <ArrowRight size={16}/>
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition">
                View Projects
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[["1,200+","Installs"],["18","Years"],["98%","On-time"]].map(([n,l])=>(
                <div key={l}>
                  <div className="text-3xl font-semibold">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-white/55 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--accent)]/20 blur-3xl rounded-full"/>
            <img src={heroImg} alt="Aluminium framed home with sunset" width={1600} height={1100}
              className="relative rounded-2xl shadow-[var(--shadow-elegant)] border border-white/10 object-cover aspect-[4/3]"/>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-xl p-7 shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-lg bg-secondary grid place-items-center text-primary group-hover:bg-[var(--gradient-accent)] transition-colors">
                <s.icon size={22}/>
              </div>
              <h3 className="mt-5 font-semibold text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight size={14}/>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Recent Projects</h2>
          </div>
          <Link to="/projects" className="text-sm font-medium text-primary inline-flex items-center gap-1">
            View all projects <ArrowRight size={14}/>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden rounded-xl border border-border">
                <img src={p.img} alt={p.title} loading="lazy" width={900} height={700}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-medium text-foreground">{p.title}</h3>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why Skyline</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Built right. The first time.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-xl p-6">
              <div className="w-10 h-10 rounded-md bg-[var(--gradient-accent)] grid place-items-center">
                <r.icon size={18} className="text-[oklch(0.15_0.02_240)]"/>
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{r.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="rounded-2xl bg-[var(--gradient-hero)] text-primary-foreground p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[var(--shadow-elegant)]">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Planning a build or refit?</h2>
            <p className="mt-3 text-white/75 max-w-xl">Get a site visit and a detailed quote within 5 working days.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] text-[oklch(0.15_0.02_240)] px-6 py-3.5 text-sm font-semibold">
            Request a Quote <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
