import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import hero from "@/assets/gage-hero.jpg.asset.json";
import { siteConfig } from "@/data/config";

export const Route = createFileRoute("/camps-and-events")({
  head: () => ({
    meta: [
      { title: "Camps, Open Gym & Birthday Parties | GAGE Center" },
      {
        name: "description",
        content:
          "School-out camps, weekly open gym and birthday parties at GAGE Center in Blue Springs, MO. Reserve a spot for your child today.",
      },
      { property: "og:title", content: "Camps, Open Gym & Parties | GAGE Center" },
      {
        property: "og:description",
        content: "School-out camps, open gyms and birthday parties in Blue Springs, MO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const EVENTS = [
  {
    t: "School-Out Day Camps",
    when: "Every district no-school day · 8:30 AM – 3:30 PM",
    d: "Gymnastics, ninja obstacles, games and crafts. Bring a lunch — we handle the energy.",
  },
  {
    t: "Friday Open Gym",
    when: "Fridays · 6:30 – 8:00 PM",
    d: "Drop-in access to the full floor with coaches supervising. Ages 5+.",
  },
  {
    t: "Birthday Parties",
    when: "Saturdays & Sundays · 90 minutes",
    d: "Private gym time, a dedicated party coach and a room for cake. Up to 20 kids.",
  },
  {
    t: "Summer Camp Weeks",
    when: "June – August · Half & full day",
    d: "Themed weeks that mix skill progression with pure summer fun.",
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Camps & Events"
      title="More reasons to be in the gym."
      intro="When school's out or a birthday is coming, GAGE is the easy yes. Same coaches, same safety standards, a lot more games."
      image={hero.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {EVENTS.map((e) => (
            <div key={e.t} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                {e.t}
              </h2>
              <p className="mt-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {e.when}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          To reserve a camp day or party, call{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-primary">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </section>
    </PageShell>
  );
}
