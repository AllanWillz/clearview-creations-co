import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, Building2, Factory, Shield, Ruler, Sparkles, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import factoryImg from "@/assets/project-factory.jpg";
import processBg from "@/assets/process-bg.jpg";

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
      {/* Hero — full-bleed image */}
      <section className="relative isolate overflow-hidden text-white min-h-[88vh] flex items-end">
        <img
          src={heroImg}
          alt="Modern home with full-height aluminium framed windows at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div aria-hidden className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, oklch(0.20 0.10 268 / 0.20) 0%, oklch(0.20 0.10 268 / 0.45) 55%, oklch(0.18 0.10 268 / 0.78) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-20 lg:pb-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> Aluminium · Glass · Engineered
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              Light, framed<br />
              <span style={{ background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                in aluminium.
              </span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
              Windows, doors and facades engineered for homes, offices and factories. Designed in-house, fabricated in our workshop, installed by our own crews.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] text-[oklch(0.15_0.02_240)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-elegant)] hover:opacity-95 transition">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition">
                View Projects
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-white/15 pt-8">
              {[["1,200+", "Installs"], ["18", "Years"], ["98%", "On-time"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl md:text-4xl font-semibold text-white">{n}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/60 mt-1.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services cards — floating over hero */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card border border-border rounded-3xl p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div aria-hidden className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                style={{ background: "var(--gradient-accent)" }} />
              <div aria-hidden className="absolute top-0 left-0 right-0 h-1 bg-[var(--gradient-hero)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:bg-[var(--gradient-accent)] group-hover:text-[oklch(0.15_0.02_240)] transition-all duration-300">
                    <s.icon size={30} />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-bold text-2xl text-foreground tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[oklch(0.55_0.15_55)] font-semibold">Selected work</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">Recent Projects</h2>
          </div>
          <Link to="/projects" className="text-sm font-medium text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-card-hover)] transition-shadow">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={p.img} alt={p.title} loading="lazy" width={900} height={700}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-white bg-white/15 backdrop-blur border border-white/30 px-2.5 py-1 rounded-full">{p.tag}</span>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <h3 className="font-semibold text-white text-lg drop-shadow">{p.title}</h3>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur border border-white/30 grid place-items-center text-white group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-[oklch(0.55_0.15_55)] font-semibold">Why Skyline</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">Built right. The first time.</h2>
          <p className="mt-4 text-muted-foreground">Every system we install is fabricated, finished and fitted by Skyline-trained crews.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl grid place-items-center shadow-[var(--shadow-card)]" style={{ background: "var(--gradient-accent)" }}>
                <r.icon size={24} className="text-[oklch(0.15_0.02_240)]" />
              </div>
              <h3 className="mt-6 font-bold text-lg text-foreground">{r.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process strip */}
      <section className="relative mt-32 py-24 lg:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <img src={processBg} alt="" loading="lazy" width={1920} height={1024}
            className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, oklch(0.22 0.07 258 / 0.88) 0%, oklch(0.22 0.07 258 / 0.55) 55%, oklch(0.22 0.07 258 / 0.25) 100%)" }} />
          <div className="absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(180deg, var(--background), transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(0deg, var(--background), transparent)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[oklch(0.78_0.14_60)] font-semibold">How we work</div>
              <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">From site visit to handover.</h2>
              <p className="mt-4 text-white/85 text-lg">A transparent four-step process with milestone reporting at every stage.</p>
            </div>
            <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { n: "01", t: "Survey & Brief", d: "On-site measurement, condition report and design brief." },
                { n: "02", t: "Design & Engineer", d: "BIM-coordinated drawings, glass specs and finish samples." },
                { n: "03", t: "Fabricate", d: "Cut, weld and finish in our 3,400 m² workshop." },
                { n: "04", t: "Install & Handover", d: "Phased install with weekly progress reports." },
              ].map((p) => (
                <li key={p.n} className="bg-card/95 backdrop-blur border border-border rounded-2xl p-8 lg:p-10 relative overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all">
                  <span className="absolute -top-4 -right-2 text-8xl font-bold text-[oklch(0.55_0.15_55)]/15">{p.n}</span>
                  <div className="relative">
                    <span className="text-xs font-mono text-[oklch(0.55_0.15_55)] font-semibold">{p.n}</span>
                    <h3 className="mt-3 font-semibold text-foreground text-xl">{p.t}</h3>
                    <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-[oklch(0.55_0.15_55)] font-semibold">Client voices</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">Trusted by architects & developers.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { q: "Skyline delivered our 14-storey curtain wall ahead of schedule. Detailing was flawless.", n: "Amelia Carter", r: "Project Architect, Meridian Studio" },
            { q: "Our family home feels brand new. The sliding doors open the whole rear elevation to the garden.", n: "James & Priya Okafor", r: "Homeowners, Hilltop" },
            { q: "They re-clad three production halls without a single day of downtime. Outstanding crew.", n: "Daniel Reyes", r: "Facilities Director, Northgate" },
          ].map((t) => (
            <figure key={t.n} className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition">
              <div className="text-5xl leading-none text-primary/30 font-serif">"</div>
              <blockquote className="mt-2 text-[15px] text-foreground leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold text-foreground text-sm">{t.n}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="relative overflow-hidden rounded-3xl p-16 lg:p-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[var(--shadow-elegant)] text-white"
          style={{ background: "var(--gradient-hero)" }}>
          <div aria-hidden className="absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-accent)" }} />
          <div aria-hidden className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-accent)" }} />
          <div className="relative max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold">Start your project</div>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">Planning a build or refit?</h2>
            <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">Get a site visit, detailed measurements and an engineered quote within 5 working days — no obligation.</p>
          </div>
          <Link to="/contact" className="relative inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] text-[oklch(0.15_0.02_240)] px-9 py-5 text-base font-semibold shadow-lg hover:scale-[1.02] transition shrink-0">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
