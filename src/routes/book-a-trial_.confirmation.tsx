import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { CalendarCheck, MapPin, Phone, Shirt } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const searchSchema = z.object({
  child: z.string().max(80).optional(),
  time: z.string().max(40).optional(),
});

export const Route = createFileRoute("/book-a-trial_/confirmation")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Trial Booked | GAGE Center Blue Springs" },
      {
        name: "description",
        content:
          "Your free trial class at GAGE Center is reserved. Here's what to bring, where to park and how to reach us before your visit.",
      },
      { property: "og:title", content: "Trial Booked | GAGE Center" },
      {
        property: "og:description",
        content: "Your free trial class at GAGE Center in Blue Springs is reserved.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Confirmation,
});

function Confirmation() {
  const { child, time } = Route.useSearch();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-ink px-6 py-12 text-ink-foreground sm:px-10">
          <CalendarCheck className="h-8 w-8 text-primary" aria-hidden />
          <h1 className="mt-5 font-display text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
            Trial <span className="text-primary">reserved.</span>
          </h1>
          <p className="mt-4 max-w-lg text-ink-foreground/80">
            {child ? `${child}'s` : "Your child's"} free trial is held for{" "}
            <strong className="text-ink-foreground">{time ?? "your selected time"}</strong>. A coach
            confirms by email and text the same business day.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-black uppercase tracking-tight text-ink">
          Before you come
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Shirt,
              t: "What to wear",
              d: "Leotard or fitted t-shirt and shorts. Bare feet. Hair tied back, no jewelry.",
            },
            {
              icon: CalendarCheck,
              t: "When to arrive",
              d: "Ten minutes early so we can check in and meet your coach without rushing.",
            },
            {
              icon: MapPin,
              t: "Where to park",
              d: "Free lot at 1101 NW Jefferson St. Enter through the main red doors.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="mt-3 font-display text-base font-extrabold uppercase tracking-tight text-ink">
                {t}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 sm:flex sm:flex-wrap">
          <a
            href="https://maps.google.com/?q=1101+NW+Jefferson+St+Blue+Springs+MO+64015"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            Get directions
          </a>
          <a
            href="tel:+18162297775"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink"
          >
            <Phone className="h-4 w-4" aria-hidden />
            (816) 229-7775
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-muted-foreground"
          >
            Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
