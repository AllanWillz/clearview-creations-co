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
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
            <div className="overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={900} height={700}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                <span>{p.category}</span>
                <span>{p.location}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </section>
      <div className="max-w-7xl mx-auto px-6 mt-20 text-center">
        <Link to="/contact" className="inline-flex rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">
          Start your project
        </Link>
      </div>
      <div className="h-24"/>
    </SiteLayout>
  );
}
