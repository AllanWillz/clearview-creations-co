import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Award, Users, Hammer, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Skyline Aluminium Windows & Doors" },
      { name: "description", content: "Skyline is an aluminium glazing studio and workshop fabricating windows, doors and facades since 2007." },
      { property: "og:title", content: "About | Skyline Aluminium" },
      { property: "og:description", content: "An aluminium glazing studio fabricating windows, doors and facades since 2007." },
    ],
  }),
  component: About,
});

const stats = [
  { icon: Hammer, n: "1,200+", l: "Installations" },
  { icon: Users, n: "48", l: "Specialists on staff" },
  { icon: Award, n: "ISO 9001", l: "Certified workshop" },
  { icon: Globe2, n: "3", l: "Regional offices" },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Skyline"
        title="An aluminium workshop, run by builders."
        subtitle="We started in a single unit in 2007. Today we run a 3,400 m² workshop, three regional offices and crews that have worked together for over a decade."
      />
      <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-card border border-border rounded-2xl p-10 lg:p-14 shadow-[var(--shadow-card)] space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-xl text-foreground">
            Skyline Aluminium exists because windows and doors get treated like an afterthought — the last thing on a build, ordered late, fitted in a rush. We do the opposite.
          </p>
          <p>
            Every project starts with a site visit and a measure. We design in-house, fabricate in our own workshop and install with our own crews. No subcontracted handoffs, no finger-pointing when something doesn't line up.
          </p>
          <p>
            We work across three disciplines — residential homes, commercial facades and factory upgrades. The skills overlap; the standards don't change. The same crew that hangs a bi-fold door in a kitchen extension can install a 14-floor curtain wall.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.l} className="bg-card border border-border rounded-xl p-6">
            <s.icon size={20} className="text-primary"/>
            <div className="mt-5 text-3xl font-semibold text-foreground">{s.n}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-24">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our values</div>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight">How we work.</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            ["Measured twice", "Every install is templated on site before fabrication begins."],
            ["Honest pricing", "Fixed quotes. No surprise variations on day five of the install."],
            ["Built to last", "10-year product warranty, lifetime support on every system."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-[var(--accent)] pl-5">
              <h3 className="font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="h-24"/>
    </SiteLayout>
  );
}
