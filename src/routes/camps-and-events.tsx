import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import hero from "@/assets/gage-hero.jpg.asset.json";
import { siteConfig } from "@/data/config";
import { events } from "@/data/events";

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
          {events.map((event) => (
            <div key={event.title} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                {event.title}
              </h2>
              <p className="mt-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {event.availability}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{event.description}</p>
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
