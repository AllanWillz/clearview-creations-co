import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import bannerImg from "@/assets/banner-projects.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import factoryImg from "@/assets/project-factory.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Skyline Aluminium Windows & Doors" },
      { name: "description", content: "A selection of residential, commercial and industrial aluminium glazing projects delivered by Skyline." },
      { property: "og:title", content: "Projects | Skyline Aluminium" },
      { property: "og:description", content: "Residential, commercial and industrial aluminium glazing work." },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: heroImg, title: "Sunset Court Villa", category: "Residential", location: "Riverside, 2025", desc: "Full-height sliding aluminium doors framing a private garden." },
  { img: residentialImg, title: "Hilltop Residence", category: "Residential", location: "Northwood, 2024", desc: "Cathedral-style gable windows and triple-track sliders." },
  { img: commercialImg, title: "Meridian Tower Facade", category: "Commercial", location: "City Centre, 2024", desc: "Unitised curtain wall across 14 floors of Grade-A offices." },
  { img: factoryImg, title: "Northgate Factory Refit", category: "Industrial", location: "Industrial Park, 2023", desc: "Insulated industrial windows and sectional doors across 9,200 m²." },
  { img: commercialImg, title: "Harbour One Atrium", category: "Commercial", location: "Dockside, 2023", desc: "Structural glazed atrium with custom finned facade." },
  { img: residentialImg, title: "Linden Park Townhouses", category: "Residential", location: "Linden Park, 2022", desc: "42 homes glazed with matching anthracite aluminium." },
];

function Projects() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="Work we're proud to put our name on."
        subtitle="Every project is photographed after handover. No renders, no stock — just the work."
      image={bannerImg} />
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <article key={p.title} className="group bg-card border border-border rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 transition-all duration-300">
            <div className="overflow-hidden relative">
              <img src={p.img} alt={p.title} loading="lazy" width={1100} height={800}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"/>
              <span className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.2em] text-white bg-primary/85 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full font-semibold">{p.category}</span>
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground font-medium">
                <span className="text-primary">{p.category}</span>
                <span>{p.location}</span>
              </div>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold tracking-tight text-foreground">{p.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{p.desc}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Discuss a similar project →
              </Link>
            </div>
          </article>
        ))}
      </section>
      <div className="max-w-7xl mx-auto px-6 mt-20 text-center">
        <Link to="/contact" className="inline-flex rounded-lg bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
          Start your project
        </Link>
      </div>
      <div className="h-24"/>
    </SiteLayout>
  );
}
