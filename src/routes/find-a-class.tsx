import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SCHEDULE } from "@/lib/programs";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";

export const Route = createFileRoute("/find-a-class")({
  head: () => ({
    meta: [
      { title: "Find a Class Schedule | GAGE Center Blue Springs" },
      {
        name: "description",
        content:
          "Browse current gymnastics, tumbling and ninja class times by age at GAGE Center in Blue Springs, MO. See live openings and book a free trial.",
      },
      { property: "og:title", content: "Find a Class | GAGE Center" },
      {
        property: "og:description",
        content: "Filter classes by age and program, then book your free trial at GAGE Center.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FindAClass,
});

const FILTERS = ["All", "Preschool", "Recreational", "Tumbling", "Ninja"];

function FindAClass() {
  const [filter, setFilter] = useState("All");
  const rows = SCHEDULE.filter((s) => filter === "All" || s.program === filter);

  return (
    <PageShell
      eyebrow="Schedule"
      title="Find the right class."
      intro="Pick your child's age range and program. Every listed class is currently accepting trials — no membership required to try."
      image={tumbling.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={
                "rounded-full border px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition-colors " +
                (filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-ink hover:bg-secondary")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary">
              <tr className="font-display text-xs uppercase tracking-widest text-ink">
                <th className="px-4 py-4">Class</th>
                <th className="px-4 py-4">Ages</th>
                <th className="hidden px-4 py-4 sm:table-cell">Days</th>
                <th className="px-4 py-4">Time</th>
                <th className="px-4 py-4 text-right">Openings</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s) => (
                <tr key={s.name} className="border-t border-border bg-card">
                  <td className="px-4 py-4 font-semibold text-ink">{s.name}</td>
                  <td className="px-4 py-4 text-muted-foreground">{s.ages}</td>
                  <td className="hidden px-4 py-4 text-muted-foreground sm:table-cell">{s.days}</td>
                  <td className="px-4 py-4 text-muted-foreground">{s.time}</td>
                  <td className="px-4 py-4 text-right">
                    <Link
                      to="/book-a-trial"
                      className="font-display text-xs font-bold uppercase tracking-wide text-primary"
                    >
                      {s.openings} open · Book
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Don't see a time that works? Call{" "}
          <a href="tel:+18162297775" className="font-semibold text-primary">
            (816) 229-7775
          </a>{" "}
          and we'll find a fit.
        </p>
      </section>
    </PageShell>
  );
}
