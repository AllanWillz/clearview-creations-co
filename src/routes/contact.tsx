import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import bannerImg from "@/assets/banner-contact.jpg";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Skyline Aluminium Windows & Doors" },
      { name: "description", content: "Request a site visit, a quote, or technical advice for your aluminium glazing project." },
      { property: "og:title", content: "Contact | Skyline Aluminium" },
      { property: "og:description", content: "Request a site visit or quote for aluminium windows, doors and facades." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us about your project."
        subtitle="We respond to enquiries within one working day and book site visits within the week."
      image={bannerImg} />
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 grid lg:grid-cols-5 gap-8">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-card)] space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full name" name="name" />
            <Field label="Company (optional)" name="company" required={false} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-foreground/70 font-semibold">Project type</label>
            <select className="mt-2 w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option>Residential installation</option>
              <option>Commercial facade</option>
              <option>Factory upgrade</option>
              <option>Other / not sure</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-foreground/70 font-semibold">How can we help?</label>
            <textarea rows={5} className="mt-2 w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us about scope, timing, and any drawings you have…"/>
          </div>
          <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90">
            {sent ? "Thanks — we'll be in touch" : "Send enquiry"}
          </button>
        </form>

        <aside className="lg:col-span-2 bg-[var(--gradient-hero)] text-primary-foreground rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-card)] space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Studio & Workshop</h2>
          <ul className="space-y-5 text-sm text-white/85">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 text-[oklch(0.85_0.12_70)]"/><span>14 Industrial Way<br/>Skyline Park, ZIP 50214</span></li>
            <li className="flex gap-3"><Phone size={18} className="mt-0.5 text-[oklch(0.85_0.12_70)]"/><span>+1 (555) 010-2200</span></li>
            <li className="flex gap-3"><Mail size={18} className="mt-0.5 text-[oklch(0.85_0.12_70)]"/><span>hello@skylinealuminium.com</span></li>
            <li className="flex gap-3"><Clock size={18} className="mt-0.5 text-[oklch(0.85_0.12_70)]"/><span>Mon–Fri 8:00 – 17:30<br/>Sat by appointment</span></li>
          </ul>
          <div className="border-t border-white/15 pt-6 text-sm text-white/70">
            Site visits available across the metropolitan region and within a 200km radius.
          </div>
        </aside>
      </section>
      <div className="h-24"/>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-foreground/70 font-semibold">{label}</label>
      <input id={name} name={name} type={type} required={required}
        className="mt-2 w-full bg-background border border-input rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"/>
    </div>
  );
}
