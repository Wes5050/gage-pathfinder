import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import { siteConfig } from "@/data/config";

export const Route = createFileRoute("/recreational-gymnastics")({
  head: () => ({
    meta: [
      { title: "Recreational Gymnastics & Tumbling Ages 6–14 | GAGE Center" },
      {
        name: "description",
        content:
          "Skill-level recreational gymnastics and tumbling classes for ages 6–14 in Blue Springs, MO. Bars, beam, floor, vault and dedicated tumbling tracks.",
      },
      {
        property: "og:title",
        content: "Recreational Gymnastics & Tumbling | GAGE Center",
      },
      {
        property: "og:description",
        content: "Level-based gymnastics and tumbling for ages 6–14 in Blue Springs, MO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const TRACKS = [
  { t: "Rec Level 1", d: "New to gymnastics: forward rolls, handstands, bar hangs, beam walks." },
  { t: "Rec Level 2", d: "Cartwheels to back handsprings, kip drills, vault runs and beam skills." },
  { t: "Tumbling Basics", d: "Floor-only track for cheer, dance and sports athletes." },
  { t: "Advanced Tumbling", d: "Back handspring series, tucks and layouts with dedicated spotting." },
];

function Page() {
  return (
    <PageShell
      eyebrow="Ages 6–14"
      title="Recreational & tumbling."
      intro="Every athlete is placed by skill, not just age — so classes stay challenging without ever feeling out of reach."
      image={tumbling.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {TRACKS.map((l) => (
            <div key={l.t} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                {l.t}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ink p-7 text-ink-foreground"><h2 className="font-display text-2xl font-black uppercase">See live gymnastics openings</h2><p className="mt-2 text-sm text-ink-foreground/65">Current times, openings, and registration are always up to date in our secure class portal.</p><a href={siteConfig.external.classes} target="_blank" rel="noreferrer" className="mt-6 inline-block bg-primary px-6 py-3 font-display text-xs font-black uppercase text-primary-foreground">View live classes →</a></div>
      </section>
    </PageShell>
  );
}
