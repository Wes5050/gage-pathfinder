import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import hero from "@/assets/gage-hero.jpg.asset.json";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gymnastics in Blue Springs, MO | GAGE Center" },
      {
        name: "description",
        content:
          "Preschool gymnastics, recreational classes, tumbling and ninja for Blue Springs kids. Book a trial class at GAGE Center in minutes.",
      },
      { property: "og:title", content: "Gymnastics in Blue Springs, MO | GAGE Center" },
      {
        property: "og:description",
        content: "Movement builds confidence. Book a trial class at GAGE Center in Blue Springs.",
      },
    ],
  }),
  component: Home,
});

const PROGRAMS = [
  {
    name: "Preschool Gymnastics",
    ages: "Ages 1–5",
    blurb: "Parent-and-me through independent classes that build coordination and courage.",
    img: preschool.url,
    href: "/preschool-gymnastics",
  },
  {
    name: "Recreational & Tumbling",
    ages: "Ages 6–14",
    blurb: "Skill-level classes on bars, beam, floor and vault — plus dedicated tumbling.",
    img: tumbling.url,
    href: "/recreational-gymnastics",
  },
  {
    name: "Dragon Ninja",
    ages: "Ages 5–14",
    blurb: "Obstacle training that turns energy into strength, agility and confidence.",
    img: ninja.url,
    href: "/dragon-ninja",
  },
];

const STEPS = [
  { n: "01", t: "Tell us your child's age", d: "One question narrows the whole schedule." },
  { n: "02", t: "Pick a trial time", d: "See real openings for the right level." },
  { n: "03", t: "Come try it", d: "Free trial class, no obligation, no pressure." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative bg-ink text-ink-foreground">
          <div className="absolute inset-0">
            <img
              src={hero.url}
              alt="Young gymnast balancing on a beam while a GAGE coach spots her"
              width={1600}
              height={1104}
              className="h-full w-full object-cover object-[70%_center] opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-32">
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ink-foreground/70">
              Blue Springs, Missouri
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The first
              <br />
              <span className="text-primary">brave step.</span>
            </h1>
            <p className="mt-6 max-w-md font-display text-lg font-bold sm:text-xl">
              Movement builds confidence.
            </p>
            <p className="mt-3 max-w-md text-base text-ink-foreground/80">
              Beginner-friendly gymnastics, tumbling and ninja classes. Expert coaching. A first
              step made simple.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-a-trial"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Book a free trial
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href="/find-a-class"
                className="inline-flex items-center justify-center rounded-full border border-ink-foreground/30 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Find a class
              </a>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "USA Gymnastics safety-certified coaches" },
              { icon: MapPin, t: "One minute off 7 Highway in Blue Springs" },
              { icon: CalendarCheck, t: "Trials confirmed the same business day" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex min-w-0 items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm font-medium text-muted-foreground">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Programs
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                Start where your child is today.
              </h2>
            </div>
            <a
              href="/find-a-class"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-primary"
            >
              Compare all programs
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  width={1000}
                  height={1200}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {p.ages}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* How a trial works */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <h2 className="max-w-lg font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              A trial takes three minutes to book.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="border-t-2 border-primary pt-5">
                  <span className="font-display text-sm font-black text-primary">{s.n}</span>
                  <h3 className="mt-2 font-display text-lg font-extrabold uppercase tracking-tight text-ink">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-8 rounded-3xl bg-ink px-6 py-12 text-ink-foreground sm:px-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="min-w-0">
              <Sparkles className="h-6 w-6 text-primary" aria-hidden />
              <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                Movement builds <span className="text-primary">confidence.</span>
              </h2>
              <p className="mt-3 max-w-md text-ink-foreground/75">
                Try one class free. We'll place your child in the right level and show you exactly
                what progress looks like.
              </p>
            </div>
            <Link
              to="/book-a-trial"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Book a trial
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
