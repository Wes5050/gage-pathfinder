import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, RefreshCw, ShieldCheck, Ticket } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import hero from "@/assets/gage-hero.jpg.asset.json";
import { siteConfig } from "@/data/config";

const CLASSES_URL = siteConfig.external.classes;
const FEATURED_URL = siteConfig.external.classes;

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Live Class Schedule & Enrollment | GAGE Center Blue Springs" },
      {
        name: "description",
        content:
          "See real-time class openings and enroll online at GAGE Center in Blue Springs, MO. Live schedule powered by our secure iClassPro parent portal.",
      },
      { property: "og:title", content: "Live Class Schedule & Enrollment | GAGE Center" },
      {
        property: "og:description",
        content:
          "Real-time openings and instant online enrollment through the GAGE Center parent portal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SchedulePage,
});

const PERKS = [
  {
    icon: RefreshCw,
    t: "Always current",
    d: "Openings, waitlists and times come straight from our registration system — never a stale printout.",
  },
  {
    icon: Ticket,
    t: "Enroll in minutes",
    d: "Pick a class, add your athlete and pay securely. Your spot is confirmed instantly.",
  },
  {
    icon: ShieldCheck,
    t: "One family account",
    d: "Waivers, billing, absences and make-ups all live in the same portal you already use.",
  },
];

function SchedulePage() {
  return (
    <PageShell
      eyebrow="Live schedule"
      title="See real openings. Enroll today."
      intro="This is our live class list straight from the GAGE parent portal — every time, age range and opening you see here is real right now."
      image={hero.url}
    >
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap gap-3">
          <a
            href={FEATURED_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Open the enrollment portal
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={CLASSES_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink"
          >
            Browse all programs
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {PERKS.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-5 w-5 text-primary" aria-hidden />
              <h2 className="mt-3 font-display text-base font-extrabold uppercase tracking-tight text-ink">
                {t}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary px-5 py-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink">
              Live class list
            </p>
            <a
              href={FEATURED_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wide text-primary"
            >
              Open in a new tab
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
          <iframe
            src={FEATURED_URL}
            title="GAGE Center live class schedule and enrollment"
            loading="lazy"
            className="h-[1100px] w-full border-0 bg-background sm:h-[1000px]"
          />
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Trouble loading the schedule above?{" "}
          <a
            href={FEATURED_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary"
          >
            Open it in a new tab
          </a>{" "}
          or call{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-primary">
            {siteConfig.phoneDisplay}
          </a>{" "}
          and we'll walk you through it.
        </p>
      </section>
    </PageShell>
  );
}
