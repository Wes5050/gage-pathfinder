import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import hero from "@/assets/gage-hero.jpg.asset.json";
import { siteConfig } from "@/data/config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GAGE Center | Gymnastics in Blue Springs, MO" },
      {
        name: "description",
        content:
          "Meet GAGE Center: caring coaches, welcoming classes, and joyful movement for kids and families in Blue Springs, MO.",
      },
      { property: "og:title", content: "About GAGE Center | Blue Springs, MO" },
      {
        property: "og:description",
        content: "A place where kids feel welcome, have fun, and grow in confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const VALUES = [
  { t: "Joy", d: "Kids move, laugh, explore, and leave excited to come back." },
  { t: "Belonging", d: "Friendly coaches help every child feel seen, supported, and part of the group." },
  { t: "Confidence", d: "Small victories add up when children feel safe enough to keep trying." },
];

function Page() {
  return (
    <PageShell
      eyebrow="About"
      title="A great place to be a kid."
      intro="At GAGE, fun comes first. Caring coaches help kids move, make friends, celebrate little victories, and discover confidence along the way."
      image={hero.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.t} className="border-t-2 border-primary pt-5">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                {v.t}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Link
            to="/contact"
            onClick={() => trackCta("GET IN TOUCH", "programs_grid")}
            className="group rounded-3xl bg-secondary px-6 py-8 transition-colors hover:bg-secondary/70 sm:px-8"
          >
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
              Get in touch
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Questions about classes, trials, or Bump City? Call, email, or stop by — we're happy to help.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-black uppercase text-primary">
              Contact us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
          <Link
            to="/careers"
            onClick={() => trackCta("JOIN OUR TEAM", "programs_grid")}
            className="group rounded-3xl border border-border px-6 py-8 transition-colors hover:bg-secondary sm:px-8"
          >
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
              Join our team
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Inspire kids and do work you love. Explore coaching and event roles at GAGE.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-black uppercase text-primary">
              See open roles <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
               Coaching with heart
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
               <li>Encouragement that meets every child where they are</li>
               <li>Welcoming classes built around movement, smiles, and steady progress</li>
               <li>Clear next steps for beginners and children ready for more</li>
               <li>A dedicated competitive path for families who choose it</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
              Visit us
            </h2>
            <address className="mt-4 not-italic text-sm text-muted-foreground">
               {siteConfig.address}
              <br />
              <a href={siteConfig.phoneHref} className="font-semibold text-primary">
                {siteConfig.phoneDisplay}
              </a>
            </address>
            <p className="mt-4 text-sm text-muted-foreground">
              One minute off 7 Highway with free parking directly in front of the gym.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
