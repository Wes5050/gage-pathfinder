import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import { SCHEDULE } from "@/lib/programs";

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
  const times = SCHEDULE.filter((s) => s.program === "Preschool");
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

        <h2 className="mt-16 font-display text-2xl font-black uppercase tracking-tight text-ink">
          Current times
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
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
