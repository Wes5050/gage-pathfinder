import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import { SCHEDULE } from "@/lib/programs";

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
  const times = SCHEDULE.filter((s) => s.program === "Ninja");
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

        <h2 className="mt-16 font-display text-2xl font-black uppercase tracking-tight text-ink">
          Current times
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {times.map((t) => (
            <li key={t.name} className="rounded-xl bg-secondary px-5 py-4 text-sm">
              <p className="font-semibold text-ink">{t.name}</p>
              <p className="text-muted-foreground">
                {t.days} · {t.time} · Ages {t.ages}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
