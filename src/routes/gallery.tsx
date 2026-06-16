import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import bannerImg from "@/assets/banner-projects.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Skyline Aluminium Windows & Doors" },
      { name: "description", content: "Browse photographs of completed Skyline aluminium window, door and facade projects across homes, offices and industrial sites." },
      { property: "og:title", content: "Gallery | Skyline Aluminium" },
      { property: "og:description", content: "Photographs of completed aluminium glazing projects." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", title: "Sunset Court Villa", tag: "Residential", span: "lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80", title: "Meridian Tower", tag: "Commercial", span: "" },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80", title: "Glass Atrium", tag: "Commercial", span: "" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", title: "Hilltop Residence", tag: "Residential", span: "" },
  { src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80", title: "Bi-fold Door Detail", tag: "Detail", span: "" },
  { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80", title: "Curtain Wall Facade", tag: "Commercial", span: "lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", title: "Linden Park Townhouse", tag: "Residential", span: "" },
  { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80", title: "Industrial Glazing", tag: "Industrial", span: "" },
  { src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1200&q=80", title: "Office Entrance", tag: "Commercial", span: "" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", title: "Modern Kitchen Slider", tag: "Residential", span: "" },
  { src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80", title: "City Centre Tower", tag: "Commercial", span: "" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80", title: "Reflective Skin", tag: "Commercial", span: "lg:row-span-2" },
  { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80", title: "Anodised Frames", tag: "Detail", span: "" },
  { src: "https://images.unsplash.com/photo-1600573472556-e636c2acda88?w=1200&q=80", title: "Garden Patio Door", tag: "Residential", span: "" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80", title: "Skyline Loft", tag: "Residential", span: "" },
  { src: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?w=1200&q=80", title: "Warehouse Refit", tag: "Industrial", span: "" },
  { src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80", title: "Northgate Factory", tag: "Industrial", span: "" },
  { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80", title: "Harbour One Atrium", tag: "Commercial", span: "" },
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Photography"
        title="A look across the work."
        subtitle="Eighteen photographs from homes, offices and industrial sites — all photographed after handover."
        image={bannerImg}
      />
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4">
          {images.map((img) => (
            <figure
              key={img.title}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute left-4 right-4 bottom-4 text-white">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-primary/85 backdrop-blur border border-white/25 px-2.5 py-1 rounded-full font-semibold">
                  {img.tag}
                </span>
                <div className="mt-2 font-semibold text-base drop-shadow">{img.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="relative overflow-hidden rounded-3xl p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[var(--shadow-elegant)] text-white"
          style={{ background: "var(--gradient-hero)" }}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Like what you see?</h2>
            <p className="mt-3 text-white/85 max-w-xl text-lg">Browse our full project case studies or get in touch about your own build.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-7 py-4 text-sm font-semibold shadow-lg hover:scale-[1.02] transition">
              View Projects <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--gradient-accent)] text-[oklch(0.15_0.02_240)] px-7 py-4 text-sm font-semibold shadow-lg hover:scale-[1.02] transition">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
      <div className="h-24" />
    </SiteLayout>
  );
}
