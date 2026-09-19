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
          "Playful parent-and-me and preschool gymnastics for ages 1–5 in Blue Springs, MO, filled with movement, early milestones, and smiles.",
      },
      { property: "og:title", content: "Preschool Gymnastics Ages 1–5 | GAGE Center" },
      {
        property: "og:description",
        content: "Little movers, big discoveries, and endless smiles at GAGE Center.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const LEVELS = [
  { t: "Tiny Dragons", a: "Ages 1–2", d: "Parent-and-me play, exploration, and happy first movement milestones." },
  { t: "Little Dragons", a: "Ages 3–4", d: "Independent movement, playful activities, new friends, and big smiles." },
  { t: "Preschool Prep", a: "Ages 4–5", d: "More ways to jump, balance, explore, and feel proud of trying." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Ages 1–5"
      title="Little movers. Big discoveries."
      intro="Play, explore, move, and smile. Every class gives young children a joyful place to try new things, celebrate early milestones, and enjoy being active."
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

        <div className="mt-16 bg-ink p-7 text-ink-foreground"><p className="font-display text-xs font-black uppercase text-primary">It starts with one try</p><h2 className="mt-3 font-display text-2xl font-black uppercase">Find their first favorite class</h2><p className="mt-2 text-sm text-ink-foreground/65">See current times and choose the class that works best for your family.</p><a href={siteConfig.external.classes} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: "Preschool Gymnastics", monthly_tuition: 85, source_section: "preschool_program_page", destination_url: siteConfig.external.classes }); }} className="mt-6 inline-block bg-primary px-6 py-3 font-display text-xs font-black uppercase text-primary-foreground">View preschool classes & try free →</a></div>
      </section>
    </PageShell>
  );
}
