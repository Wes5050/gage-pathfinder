import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { trackCta } from "@/lib/analytics";
import facility from "@/assets/gage-facility.jpg";
import coaches from "@/assets/gage-coaches.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GAGE Center | Blue Springs, MO Gymnastics" },
      {
        name: "description",
        content:
          "Questions about classes, trials, or birthday parties at GAGE Center in Blue Springs, MO? Call (816) 229-7775, email us, or stop by — we're happy to help.",
      },
      { property: "og:title", content: "Contact GAGE Center | Blue Springs, MO" },
      {
        property: "og:description",
        content: "Call, email, or stop by — we're here to help your family get started.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Call us",
    line: "The fastest way to reach our front desk.",
    href: siteConfig.phoneHref,
    label: siteConfig.phoneDisplay,
    cta: "Tap to call",
    tracking: "CONTACT_CALL",
  },
  {
    icon: Mail,
    title: "Email us",
    line: "Questions, schedules, or anything else.",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    cta: "Send an email",
    tracking: "CONTACT_EMAIL",
  },
  {
    icon: MapPin,
    title: "Visit us",
    line: "One minute off 7 Highway with free parking directly in front of the building.",
    href: siteConfig.mapsUrl,
    label: siteConfig.address,
    cta: "Get directions",
    tracking: "CONTACT_DIRECTIONS",
  },
] as const;

function Page() {
  return (
    <PageShell
      eyebrow="GAGE Center · Blue Springs, MO"
      title="We're here to help."
      intro="Have a question about classes, trials, or Bump City? Reach out anytime — a real person who knows the gym will get back to you."
      image={facility}
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {CONTACT_CARDS.map((card) => (
            <div key={card.title} className="flex flex-col border-t-2 border-primary pt-5">
              <card.icon className="h-6 w-6 text-primary" aria-hidden />
              <h2 className="mt-3 font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{card.line}</p>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                onClick={() => trackCta(card.tracking, "contact_cards")}
                className="mt-4 font-display text-sm font-bold text-ink hover:text-primary"
              >
                {card.label}
              </a>
              <span className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                {card.cta}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 font-display text-2xl font-black uppercase tracking-tight text-ink">
              <Clock className="h-5 w-5 text-primary" aria-hidden /> Weekly hours
            </h2>
            <ul className="mt-4 divide-y divide-border">
              {siteConfig.hours.map((hour) => {
                const [day, time] = hour.split(": ");
                return (
                  <li key={hour} className="flex items-baseline justify-between py-3 text-sm">
                    <span className="font-display font-bold uppercase text-ink">{day}</span>
                    <span className="text-muted-foreground">{time}</span>
                  </li>
                );
              })}
            </ul>
            <Button asChild variant="outline" className="mt-6 rounded-none font-display text-xs font-black uppercase">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackCta("OPEN IN GOOGLE MAPS", "contact_hours")}
              >
                <Navigation aria-hidden /> Open in Google Maps
              </a>
            </Button>
            <figure className="mt-8 overflow-hidden rounded-3xl">
              <img
                src={coaches}
                alt="A GAGE coach high-fiving a smiling child during class"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-64 w-full object-cover sm:h-80"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                Stop by and watch a class from our viewing area.
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-secondary px-6 py-8 sm:px-8">
              <h2 className="font-display text-xl font-black uppercase tracking-tight text-ink">
                Already part of the GAGE family?
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                For billing questions, absences, or updates to your account, the Parent Portal is
                the quickest way to take care of it.
              </p>
              <Button asChild className="mt-5 rounded-none font-display text-xs font-black uppercase">
                <a
                  href={siteConfig.external.parentPortal}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCta("OPEN PARENT PORTAL", "contact_families")}
                >
                  Open the Parent Portal <ArrowRight aria-hidden />
                </a>
              </Button>
            </div>

            <div className="rounded-3xl border border-border px-6 py-8 sm:px-8">
              <h2 className="font-display text-xl font-black uppercase tracking-tight text-ink">
                Prefer to write or talk it through?
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Send us a quick email and we'll reply as soon as we're off the floor — or call the
                front desk during open hours and we'll answer your questions on the spot.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild className="rounded-none font-display text-xs font-black uppercase">
                  <a href={`mailto:${siteConfig.email}`} onClick={() => trackCta("EMAIL THE OFFICE", "contact_quick_message")}>
                    <Mail aria-hidden /> Email the office
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-none font-display text-xs font-black uppercase">
                  <a href={siteConfig.phoneHref} onClick={() => trackCta("CALL THE OFFICE", "contact_quick_message")}>
                    <Phone aria-hidden /> {siteConfig.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Not sure which class fits?{" "}
              <Link to="/find-a-class" className="font-semibold text-primary hover:underline" onClick={() => trackCta("FIND A CLASS", "contact_quick_message")}>
                Find their fun →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
