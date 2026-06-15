import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import bannerImg from "@/assets/banner-faqs.jpg";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Skyline Aluminium Windows & Doors" },
      { name: "description", content: "Common questions about aluminium windows, doors, facade systems, lead times, warranties and pricing." },
      { property: "og:title", content: "FAQs | Skyline Aluminium" },
      { property: "og:description", content: "Answers about lead times, warranties, pricing and aluminium systems." },
    ],
  }),
  component: Faqs,
});

const faqs = [
  { q: "How long does a typical residential install take?", a: "Most home installs run 1–3 days on site, with fabrication taking 4–6 weeks after survey. Larger projects (whole-house re-glazing, extensions) are scheduled in phases." },
  { q: "What aluminium systems do you fabricate?", a: "We work with Schüco, Reynaers and Smart Architectural Aluminium systems. We'll recommend the right fit based on performance, sightlines and budget." },
  { q: "Are your frames thermally broken?", a: "Yes. All Skyline frames use polyamide thermal breaks as standard and meet or exceed current Part L requirements." },
  { q: "Do you handle structural facade engineering?", a: "Yes. Our in-house team produces facade calculations, wind-load analysis and BIM coordination for commercial projects." },
  { q: "What's the warranty on installed systems?", a: "10 years on aluminium profiles and powder-coating, 5 years on hardware and 2 years on installation workmanship." },
  { q: "Can you work around live factory operations?", a: "Yes — most of our industrial work is phased around production. We typically work nights, weekends, or in agreed bays." },
  { q: "Do you provide drawings for planning applications?", a: "We provide elevations, sections and U-value reports suitable for planning and building control submissions." },
  { q: "How do you price quotes?", a: "Fixed-price after survey. The quote breaks down fabrication, glass, installation, scaffolding and disposal as separate lines." },
];

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Frequently asked"
        title="The questions we hear most."
        subtitle="Can't find what you're looking for? Send a quick note via our contact page and we'll come back within one working day."
      image={bannerImg} />
      <section className="max-w-3xl mx-auto px-6 -mt-12 relative z-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="bg-card border border-border rounded-xl shadow-[var(--shadow-card)]">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-medium text-foreground">{f.q}</span>
                <span className="w-8 h-8 rounded-full bg-secondary grid place-items-center text-primary shrink-0">
                  {isOpen ? <Minus size={16}/> : <Plus size={16}/>}
                </span>
              </button>
              {isOpen && <div className="px-6 pb-6 -mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
            </div>
          );
        })}
      </section>
      <div className="max-w-3xl mx-auto px-6 mt-16 text-center">
        <p className="text-sm text-muted-foreground">Still have a question?</p>
        <Link to="/contact" className="mt-4 inline-flex rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">
          Contact our team
        </Link>
      </div>
      <div className="h-24"/>
    </SiteLayout>
  );
}
