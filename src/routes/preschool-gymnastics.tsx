import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const Route = createFileRoute("/preschool-gymnastics")({
  head: () => ({
    meta: [
      { title: "Preschool Gymnastics Ages 1–5 | GAGE Center" },
      {
        name: "description",
        content:
          "Parent-and-me and independent preschool gymnastics classes for ages 1–5 in Blue Springs, MO. Build coordination, listening skills and confidence.",
      },
      { property: "og:title", content: "Preschool Gymnastics Ages 1–5 | GAGE Center" },
      {
        property: "og:description",
        content: "Playful, structured preschool gymnastics classes in Blue Springs, MO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const LEVELS = [
  { t: "Tiny Dragons", a: "Ages 1–2", d: "Parent-and-me exploration on soft shapes, bars and beams." },
  { t: "Little Dragons", a: "Ages 3–4", d: "First independent class — circle time, stations, big smiles." },
  { t: "Preschool Prep", a: "Ages 4–5", d: "Structured rotations that get kids ready for rec gymnastics." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Ages 1–5"
      title="Preschool gymnastics."
      intro="Short, playful, high-energy classes designed for tiny attention spans. Coaches keep every child moving, listening and trying one brave new thing each week."
      image={preschool.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {LEVELS.map((l) => (
            <div key={l.t} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {l.a}
              </span>
              <h2 className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                {l.t}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ink p-7 text-ink-foreground"><h2 className="font-display text-2xl font-black uppercase">See live preschool openings</h2><p className="mt-2 text-sm text-ink-foreground/65">Current times, openings, and registration are always up to date in our secure class portal.</p><a href={siteConfig.external.classes} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("ENROLL NOW", "programs_grid"); forwardIclassProHandoff(event, { program_name: "Preschool Gymnastics", monthly_tuition: 85, source_section: "preschool_program_page", destination_url: siteConfig.external.classes }); }} className="mt-6 inline-block bg-primary px-6 py-3 font-display text-xs font-black uppercase text-primary-foreground">View live classes →</a></div>
      </section>
    </PageShell>
  );
}
