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
          "GAGE Center is a Blue Springs, MO gymnastics gym with USA Gymnastics safety-certified coaches, small class sizes and a confidence-first approach.",
      },
      { property: "og:title", content: "About GAGE Center | Blue Springs, MO" },
      {
        property: "og:description",
        content: "Safety-certified coaches, small classes and a confidence-first approach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const VALUES = [
  { t: "Courage", d: "Every class asks for one brave attempt — never a perfect one." },
  { t: "Clarity", d: "Parents always know the level, the skill and the next step." },
  { t: "Progress", d: "Measured in effort and small wins, not just competition results." },
];

function Page() {
  return (
    <PageShell
      eyebrow="About"
      title="A gym built on confidence."
      intro="GAGE Center has coached Blue Springs kids through first cartwheels, first back handsprings and first times trying something scary. Movement builds confidence — everything else follows."
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

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
              Safety first, always
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>USA Gymnastics safety-certified and background-screened coaches</li>
              <li>Low coach-to-athlete ratios in every level</li>
              <li>Equipment inspected and matted for progressive skill work</li>
              <li>Open viewing area so parents can watch every class</li>
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
