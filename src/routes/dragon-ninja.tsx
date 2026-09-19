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
          "Fun Ninja obstacle classes for ages 5–14 in Blue Springs, MO. Kids climb, jump, swing, and build confidence while letting their energy loose.",
      },
      { property: "og:title", content: "Dragon Ninja Obstacle Classes | GAGE Center" },
      {
        property: "og:description",
        content: "Adventure, obstacles, confidence, and a whole lot of fun.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const HIGHLIGHTS = [
  "Climb, jump, swing, and conquer fun obstacles",
  "Cheer on new friends and celebrate every win",
  "Build confidence by trying something new",
  "A positive place to let all that energy loose",
];

function Page() {
  return (
    <PageShell
      eyebrow="Ages 5–14"
      title="Adventure starts here."
      intro="Climb, jump, conquer obstacles, and let that energy loose. Dragon Ninja turns every class into a new adventure with friends cheering each other on."
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

        <div className="mt-16 bg-ink p-7 text-ink-foreground"><p className="font-display text-xs font-black uppercase text-primary">It starts with one try</p><h2 className="mt-3 font-display text-2xl font-black uppercase">Find their next adventure</h2><p className="mt-2 text-sm text-ink-foreground/65">Choose a class that works for your family, then select Request a Trial.</p><a href={siteConfig.external.ninjaClasses} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: "Ninja Warrior Training", monthly_tuition: 95, source_section: "ninja_program_page", destination_url: siteConfig.external.ninjaClasses }); }} className="mt-6 inline-block bg-primary px-6 py-3 font-display text-xs font-black uppercase text-primary-foreground">View Ninja classes & try free →</a></div>
      </section>
    </PageShell>
  );
}
