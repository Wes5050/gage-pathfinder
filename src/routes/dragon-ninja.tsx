import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const Route = createFileRoute("/dragon-ninja")({
  head: () => ({
    meta: [
      { title: "Dragon Ninja Obstacle Classes Ages 5–14 | GAGE Center" },
      {
        name: "description",
        content:
          "Ninja warrior style obstacle training for ages 5–14 in Blue Springs, MO. Build strength, agility and grit on warped walls, rings and quad steps.",
      },
      { property: "og:title", content: "Dragon Ninja Obstacle Classes | GAGE Center" },
      {
        property: "og:description",
        content: "Obstacle training that turns energy into strength and confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const HIGHLIGHTS = [
  "Warped wall, cargo net and quad steps",
  "Grip, core and landing mechanics coached every class",
  "Level-up challenge nights each month",
  "A favorite for kids who want sport without a scoreboard",
];

function Page() {
  return (
    <PageShell
      eyebrow="Ages 5–14"
      title="Dragon Ninja."
      intro="Obstacle course training built on real gymnastics fundamentals. Kids climb, swing, jump and problem-solve — and get stronger without noticing."
      image={ninja.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <ul className="grid gap-4 md:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <li
              key={h}
              className="rounded-2xl border-l-4 border-accent bg-card px-6 py-5 text-sm font-medium text-ink"
            >
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-16 bg-ink p-7 text-ink-foreground"><h2 className="font-display text-2xl font-black uppercase">See live Ninja openings</h2><p className="mt-2 text-sm text-ink-foreground/65">Current times, openings, and registration are always up to date in our secure class portal.</p><a href={siteConfig.external.classes} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("ENROLL NOW", "programs_grid"); forwardIclassProHandoff(event, { program_name: "Ninja Warrior Training", monthly_tuition: 95, source_section: "ninja_program_page", destination_url: siteConfig.external.classes }); }} className="mt-6 inline-block bg-primary px-6 py-3 font-display text-xs font-black uppercase text-primary-foreground">View live classes →</a></div>
      </section>
    </PageShell>
  );
}
