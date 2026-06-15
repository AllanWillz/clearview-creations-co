import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import bannerImg from "@/assets/banner-blogs.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blog | Skyline Aluminium Windows & Doors" },
      { name: "description", content: "Notes from our workshop: glazing performance, install techniques and project stories." },
      { property: "og:title", content: "Blog | Skyline Aluminium" },
      { property: "og:description", content: "Notes from the workshop — glazing, install techniques and project stories." },
    ],
  }),
  component: Blogs,
});

const posts = [
  { title: "Choosing between bi-fold and sliding aluminium doors", date: "Jun 02, 2026", read: "6 min", cat: "Residential" },
  { title: "Inside a unitised curtain wall: how facades come together", date: "May 18, 2026", read: "9 min", cat: "Commercial" },
  { title: "Retrofitting industrial windows without halting production", date: "May 04, 2026", read: "7 min", cat: "Industrial" },
  { title: "Thermal breaks 101: why your frames matter as much as your glass", date: "Apr 21, 2026", read: "5 min", cat: "Technical" },
  { title: "Powder-coat vs anodised: choosing a finish that lasts", date: "Apr 09, 2026", read: "4 min", cat: "Materials" },
  { title: "Acoustic glazing for city-centre apartments", date: "Mar 27, 2026", read: "6 min", cat: "Residential" },
];

function Blogs() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Workshop notes"
        title="Field notes from the workshop floor."
        subtitle="Plain-English writing on aluminium systems, install methods and the trade-offs we work through with clients every week."
      image={bannerImg} />
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-10 grid md:grid-cols-2 gap-5">
        {posts.map((p, i) => (
          <article key={p.title} className="group bg-card border border-border rounded-xl p-7 shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
              <span className="text-[oklch(0.55_0.12_70)] font-medium">{p.cat}</span>
              <span>·</span><span>{p.date}</span><span>·</span><span>{p.read} read</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary transition">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">Article {String(i + 1).padStart(2, "0")} from the Skyline workshop — a deeper look at how we approach the topic on real projects.</p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read article <ArrowRight size={14}/>
            </div>
          </article>
        ))}
      </section>
      <div className="h-24"/>
    </SiteLayout>
  );
}
