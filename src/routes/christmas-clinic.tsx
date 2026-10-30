import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, CalendarDays, Check, MapPin, Phone, Snowflake, Ticket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramFaq, ProgramPage } from "@/components/program-page";
import { siteConfig } from "@/data/config";
import { clinicPhotos } from "@/data/clinic-photos";
import { trackCta } from "@/lib/analytics";

const TITLE = "2026 GAGE Christmas Clinic | Dec 28–29 | Blue Springs, MO";
const DESC = "Two days of creative drills, dance ideas, skill progressions, and confidence-building for Bronze, Silver, and Levels 3–5 gymnasts and their coaches at GAGE Center.";

export const Route = createFileRoute("/christmas-clinic")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: "Two Days. A Stronger Start. | 2026 GAGE Christmas Clinic" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gage-pathfinder.lovable.app/christmas-clinic" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://gage-pathfinder.lovable.app/christmas-clinic" }],
  }),
  component: ChristmasClinicPage,
});

const wrap = "mx-auto w-full max-w-[1200px] px-6 lg:px-8";
const section = "py-12 sm:py-16 lg:py-24";
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const forGymnasts = ["Creative drills that make practice fun", "Effective progressions toward the next level", "Techniques for overcoming fear", "Hand care to help reduce ripping"];
const forCoaches = ["Station ideas to take back to your gym", "Exciting ways to get kids excited about dance", "Practical ways to make gymnastics safer and more fun", "Fresh vault, bar, and beam drills"];

const training = [
  { key: "heroVault", label: "01 · Vault", title: "Vault drills", text: "Drills and building blocks that sharpen run, hurdle, and body position — so every attempt starts stronger.", pos: "object-center" },
  { key: "bars", label: "02 · Bars", title: "Bar stations", text: "Station work including kip progressions, plus hand care ideas to help reduce ripping.", pos: "object-[center_30%]" },
  { key: "beam", label: "03 · Beam & dance", title: "Beam games & dance", text: "Beam games that build balance and focus, and fresh ways to get kids excited about dance.", pos: "object-center" },
  { key: "barsPair", label: "04 · Confidence", title: "Overcoming fear", text: "Confidence-building techniques and skill-building for the next level — plus a Bump City gymnastics experience.", pos: "object-[center_20%]" },
] as const;

const bonuses = [
  { title: "One-year coaching hotline", text: "Educational resources, plus help with skill progression and station questions and instructional videos." },
  { title: "Trampoline drills & stations", text: "Building blocks for flipping and twisting." },
  { title: "Choreographed dance floor warmup", text: "A ready-to-use warmup to bring back to your gym." },
  { title: "50% off summer gymnastics camp", text: "A discount on GAGE summer gymnastics camp." },
] as const;

const faqs = [
  { question: "Who is the Christmas Clinic for?", answer: "Bronze, Silver, and Level 3–5 gymnasts, along with their coaches." },
  { question: "What will the clinic focus on?", answer: "Creative drills, dance ideas, skill progressions, and confidence-building — including vault drills, bar stations with kip progressions, beam games, hand care, overcoming fear, and a Bump City gymnastics experience." },
  { question: "When and where is it?", answer: "December 28–29, 2026, at GAGE Center, 1101 NW Jefferson St, Blue Springs, Missouri." },
  { question: "How do we register?", answer: `Contact GAGE for the daily schedule and gymnast/coach registration details. Call ${siteConfig.phoneDisplay} or email ${siteConfig.email}.` },
] as const;

function AskButtons({ source, light = false }: { source: "programs_grid" | "final_conversion"; light?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild size="lg" className={`h-14 rounded-none px-8 font-display text-xs font-black uppercase ${focus}`}>
        <Link to="/contact" onClick={() => trackCta("ASK ABOUT REGISTRATION", source)}>Ask About Registration<ArrowRight aria-hidden /></Link>
      </Button>
      <Button asChild size="lg" variant="outline" className={`h-14 rounded-none bg-transparent px-8 font-display text-xs font-black uppercase ${light ? "border-navy/30 text-navy hover:bg-navy hover:text-navy-foreground" : "border-navy-foreground/40 text-navy-foreground hover:bg-navy-foreground hover:text-navy"} ${focus}`}>
        <a href={siteConfig.phoneHref} onClick={() => trackCta(`CALL ${siteConfig.phoneDisplay}`, source)}><Phone aria-hidden />Call {siteConfig.phoneDisplay}</a>
      </Button>
    </div>
  );
}

function ChristmasClinicPage() {
  return (
    <ProgramPage>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-navy-foreground">
        <img src={clinicPhotos.floorLeap.src} alt={clinicPhotos.floorLeap.alt} width={1920} height={2097} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[70%_22%] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--navy-deep)_30%,transparent)_0%,var(--navy-deep)_92%)] lg:bg-[linear-gradient(90deg,var(--navy-deep)_0%,color-mix(in_oklab,var(--navy-deep)_85%,transparent)_42%,transparent_78%)]" />
        <Snowflake aria-hidden className="pointer-events-none absolute right-6 top-24 h-24 w-24 text-navy-foreground/10 lg:right-16 lg:h-40 lg:w-40" strokeWidth={1} />
        <div className={`${wrap} relative flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-14 pt-40 lg:min-h-[760px] lg:pb-24`}>
          <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-primary">2026 GAGE Christmas Clinic</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black uppercase leading-[.88] tracking-tight">Two days.<br />A stronger start.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-navy-foreground/85">Fresh drills. More confidence. New ideas to take back to your gym.</p>
          <ul className="mt-8 flex flex-col gap-3 font-display text-sm font-black uppercase sm:flex-row sm:flex-wrap sm:gap-8">
            <li className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-primary" aria-hidden />December 28–29, 2026</li>
            <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" aria-hidden />Blue Springs, Missouri</li>
            <li className="flex items-center gap-2"><Ticket className="h-5 w-5 text-primary" aria-hidden />$150 clinic fee</li>
          </ul>
          <div className="mt-10">
            <Button asChild size="lg" className={`h-16 rounded-none px-9 font-display text-sm font-black uppercase shadow-xl ${focus}`}>
              <a href="#details" onClick={() => trackCta("EXPLORE THE CLINIC", "hero")}>Explore the Clinic<ArrowDown aria-hidden /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Audience strip */}
      <section aria-label="Who the clinic is for" className="bg-primary text-primary-foreground">
        <div className={`${wrap} flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between`}>
          <p className="font-display text-lg font-black uppercase sm:text-xl">Bronze • Silver • Levels 3–5</p>
          <p className="flex items-center gap-2 font-display text-xs font-black uppercase tracking-[0.15em]"><Users className="h-4 w-4" aria-hidden />For gymnasts and their coaches</p>
        </div>
      </section>

      {/* Benefits */}
      <section className={section}>
        <div className={wrap}>
          <p className="eyebrow">Two days of learning</p>
          <h2 className="section-title mt-4 max-w-3xl text-navy">Big progress starts with better practice.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Creative drills, exciting dance ideas, effective skill progressions, confidence-building techniques, and practical ways to make gymnastics safer and more fun.</p>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {[{ title: "For gymnasts", items: forGymnasts, img: clinicPhotos.barsCast, pos: "object-[center_40%]" }, { title: "For coaches", items: forCoaches, img: clinicPhotos.coachTeam, pos: "object-[center_12%]" }].map((col) => (
              <article key={col.title} className="bg-background">
                <div className="relative aspect-[16/10] overflow-hidden"><img src={col.img.src} alt={col.img.alt} width={900} height={560} loading="lazy" className={`h-full w-full object-cover ${col.pos}`} /></div>
                <div className="p-6 sm:p-10">
                  <h3 className="font-display text-2xl font-black uppercase text-navy sm:text-3xl">{col.title}</h3>
                  <ul className="mt-6 space-y-4">{col.items.map((i) => <li key={i} className="flex gap-3 text-base leading-7"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />{i}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className={`${section} bg-secondary`}>
        <div className={wrap}>
          <p className="eyebrow">On the floor</p>
          <h2 className="section-title mt-4 max-w-3xl text-navy">Every event. Every building block.</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {training.map((t, i) => (
              <article key={t.key} className={i % 2 === 1 ? "sm:mt-16" : undefined}>
                <div className="aspect-[4/5] overflow-hidden"><img src={clinicPhotos[t.key].src} alt={clinicPhotos[t.key].alt} width={800} height={1000} loading="lazy" className={`h-full w-full object-cover ${t.pos}`} /></div>
                <p className="mt-6 font-display text-xs font-black uppercase tracking-[0.15em] text-primary">{t.label}</p>
                <h3 className="mt-2 font-display text-2xl font-black uppercase text-navy sm:text-3xl">{t.title}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className={`${section} bg-navy text-navy-foreground`}>
        <div className={wrap}>
          <p className="eyebrow">Clinic bonuses</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.45rem,6vw,5rem)] font-black uppercase leading-[.92]">More than two days.</h2>
          <div className="mt-12 grid gap-px bg-navy-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {bonuses.map((b, i) => (
              <article key={b.title} className="bg-navy p-6 sm:p-8">
                <p className="font-display text-4xl font-black text-primary">0{i + 1}</p>
                <h3 className="mt-6 font-display text-lg font-black uppercase">{b.title}</h3>
                <p className="mt-3 text-base leading-7 text-navy-foreground/75">{b.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-navy-foreground/70">Support access and summer camp discount details will be provided at registration.</p>
        </div>
      </section>

      {/* Details */}
      <section id="details" className={`${section} scroll-mt-24`}>
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center`}>
          <div>
            <p className="eyebrow">Clinic details</p>
            <h2 className="section-title mt-4 text-navy">Save the dates.</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">Contact GAGE for the daily schedule and gymnast/coach registration details.</p>
          </div>
          <div className="border-t-4 border-primary bg-navy-deep p-6 text-navy-foreground shadow-2xl sm:p-10">
            <dl className="divide-y divide-navy-foreground/15">
              {[
                { icon: CalendarDays, k: "Dates", v: "December 28–29, 2026" },
                { icon: MapPin, k: "Location", v: siteConfig.address },
                { icon: Users, k: "Audience", v: "Bronze, Silver & Levels 3–5 gymnasts and their coaches" },
                { icon: Ticket, k: "Clinic fee", v: "$150" },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="flex gap-4 py-5 first:pt-0">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div><dt className="font-display text-xs font-black uppercase tracking-[0.15em] text-navy-foreground/60">{k}</dt><dd className="mt-1 text-lg font-semibold">{v}</dd></div>
                </div>
              ))}
            </dl>
            <div className="mt-8"><AskButtons source="programs_grid" /></div>
          </div>
        </div>
      </section>

      <ProgramFaq items={[...faqs]} />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy-deep text-navy-foreground">
        <img src={clinicPhotos.heroVault.src} alt="" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-30" />
        <div className="absolute inset-0 bg-navy-deep/60" />
        <div className={`${wrap} relative flex flex-col items-center py-20 text-center lg:py-32`}>
          <Snowflake className="h-8 w-8 text-primary" aria-hidden />
          <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[.9]">Finish the year strong.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-navy-foreground/80">December 28–29, 2026 · Blue Springs, Missouri. Contact GAGE for the daily schedule and gymnast/coach registration details.</p>
          <div className="mt-10"><AskButtons source="final_conversion" /></div>
        </div>
      </section>
      <section aria-label="Photo credits" className="bg-navy-deep text-navy-foreground/60">
        <div className={`${wrap} py-6 text-xs leading-6`}>
          <p>Photos are licensed stock images of gymnasts and coaches, not GAGE athletes or staff:{" "}
            {Object.values(clinicPhotos).map((p, i) => <span key={p.href}>{i > 0 && " · "}<a href={p.href} target="_blank" rel="noreferrer" className={`underline underline-offset-2 hover:text-navy-foreground ${focus}`}>{p.credit}</a></span>)}
          </p>
        </div>
      </section>
    </ProgramPage>
  );
}
