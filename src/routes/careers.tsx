import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Mail, PartyPopper, Phone, Sparkles, Timer, Trophy } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { trackCta } from "@/lib/analytics";
import hero from "@/assets/gage-ninja.jpg.asset.json";
import coaches from "@/assets/gage-coaches.jpg";
import facility from "@/assets/gage-facility.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at GAGE Center | Coaching Jobs in Blue Springs, MO" },
      {
        name: "description",
        content:
          "Join the GAGE Center team in Blue Springs, MO. Coaching and event roles with paid training, flexible scheduling, and kids who light up when you walk in.",
      },
      { property: "og:title", content: "Careers at GAGE Center | Blue Springs, MO" },
      {
        property: "og:description",
        content: "Inspire kids. Do work you love. Join the GAGE team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const PERKS = [
  {
    icon: Sparkles,
    title: "Positive, upbeat team",
    line: "Coaches who cheer for each other as loud as they cheer for the kids.",
  },
  {
    icon: Trophy,
    title: "Paid hands-on training",
    line: "Coach training and safety certification — you're never thrown in unprepared.",
  },
  {
    icon: Timer,
    title: "Flexible scheduling",
    line: "After-school, evening, and weekend options that fit around your life.",
  },
  {
    icon: HeartHandshake,
    title: "Work that matters",
    line: "Help kids smile, grow, and discover what they can do — every single shift.",
  },
] as const;

const ROLES = [
  {
    icon: Trophy,
    title: "Preschool & Recreational Gymnastics Coaches",
    line: "Guide little movers and beginners through cartwheels, balance, and big smiles.",
  },
  {
    icon: Sparkles,
    title: "Dragon Ninja Obstacle Instructors",
    line: "Keep the energy high on climbing, jumping, and obstacle course adventures.",
  },
  {
    icon: Trophy,
    title: "Tumbling & Trampoline Coaches",
    line: "Help kids build flips, power, and confidence step by step.",
  },
  {
    icon: PartyPopper,
    title: "Bump City Party Hosts & Event Team",
    line: "Run high-energy birthday parties and events kids talk about all year.",
  },
] as const;

function Page() {
  return (
    <PageShell
      eyebrow="Join Our Team · Blue Springs, MO"
      title="Inspire kids. Do work you love."
      intro="Be part of a positive, high-energy team that helps children build confidence and discover what they can do."
      image={hero.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <figure className="mb-12 overflow-hidden rounded-3xl">
          <img
            src={coaches}
            alt="A GAGE coach celebrating with kids in class"
            loading="lazy"
            width={1600}
            height={1000}
            className="h-64 w-full object-cover sm:h-96"
          />
        </figure>
        <h2 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
          Why work at GAGE
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk) => (
            <div key={perk.title} className="border-t-2 border-primary pt-5">
              <perk.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-ink">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{perk.line}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-black uppercase tracking-tight text-ink">
          Open roles & opportunities
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {ROLES.map((role) => (
            <div key={role.title} className="flex gap-4 rounded-2xl border border-border p-6">
              <role.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="font-display text-base font-extrabold uppercase tracking-tight text-ink">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{role.line}</p>
              </div>
            </div>
          ))}
        </div>

        <figure className="mt-16 overflow-hidden rounded-3xl">
          <img
            src={facility}
            alt="The GAGE Center gym floor seen from the family viewing area"
            loading="lazy"
            width={1600}
            height={1000}
            className="h-56 w-full object-cover sm:h-80"
          />
          <figcaption className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
            Where you would spend your shifts.
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-6 rounded-3xl bg-secondary px-6 py-12 sm:px-12">
          <h2 className="font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink">
            How to apply
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm leading-6 text-muted-foreground">
                Send us a note about your background or resume — no formal cover letter needed.
                Just tell us a little about yourself and the age groups you love working with.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Prefer to talk first? Call the gym during open hours and ask for our hiring
                director — we're happy to chat about what a role at GAGE looks like.
              </p>
              <Button asChild size="lg" className="mt-6 rounded-none font-display text-sm font-black uppercase">
                <a
                  href="mailto:info@gagecenter.com?subject=GAGE%20Career%20Application"
                  onClick={() => trackCta("APPLY NOW", "careers_apply")}
                >
                  <Mail aria-hidden /> Apply now
                </a>
              </Button>
            </div>
            <div className="flex flex-col justify-center gap-3 rounded-2xl border border-border bg-background px-6 py-6">
              <p className="font-display text-xs font-black uppercase text-primary">Rather call?</p>
              <a
                href={siteConfig.phoneHref}
                onClick={() => trackCta("CALL HIRING DIRECTOR", "careers_call")}
                className="flex items-center gap-2 font-display text-2xl font-black uppercase text-ink hover:text-primary"
              >
                <Phone className="h-5 w-5" aria-hidden /> {siteConfig.phoneDisplay}
              </a>
              <p className="text-sm text-muted-foreground">Ask for our hiring director.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
