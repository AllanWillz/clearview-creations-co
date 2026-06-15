import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, Factory, Check, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import bannerImg from "@/assets/banner-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Skyline Aluminium Windows & Doors" },
      { name: "description", content: "Residential installation, commercial facade engineering and factory upgrade services in aluminium." },
      { property: "og:title", content: "Services | Skyline Aluminium" },
      { property: "og:description", content: "Residential, commercial and industrial aluminium window and door services." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Home,
    title: "Residential Installation",
    intro: "Bespoke aluminium windows and doors for new builds, extensions and refurbishments.",
    points: ["Bi-fold and sliding patio doors", "Thermally broken window frames", "Slim sightlines, maximum glass", "Acoustic & solar control glazing"],
  },
  {
    icon: Building2,
    title: "Commercial Facade",
    intro: "Engineered curtain walling, structural glazing and entrance systems for offices and retail.",
    points: ["Stick & unitised curtain walls", "Automatic entrance doors", "Fire-rated glazed partitions", "BIM-led design coordination"],
  },
  {
    icon: Factory,
    title: "Factory Upgrade",
    intro: "Industrial-grade window, door and roller systems for warehouses and production facilities.",
    points: ["Insulated industrial windows", "Sectional & roller doors", "Skylight and rooflight refits", "Phased install around operations"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What we do"
        title="Three disciplines. One workshop."
        subtitle="From a single sliding door to a full curtain-walled office tower, every Skyline project is fabricated in-house and installed by our own crews."
      image={bannerImg} />
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 space-y-6">
        {services.map((s, i) => (
          <article key={s.title} id={s.title.toLowerCase().replace(/\s+/g, "-")}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 grid lg:grid-cols-12 gap-8 shadow-[var(--shadow-card)]">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
              <div className="mt-4 w-14 h-14 rounded-lg bg-[var(--gradient-accent)] grid place-items-center">
                <s.icon size={26} className="text-[oklch(0.15_0.02_240)]"/>
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-muted-foreground leading-relaxed">{s.intro}</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-secondary grid place-items-center text-primary">
                      <Check size={12}/>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Discuss your project <ArrowRight size={14}/>
              </Link>
            </div>
          </article>
        ))}
      </section>
      <div className="h-24"/>
    </SiteLayout>
  );
}
