import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, ExternalLink, RefreshCw, ShieldCheck, TicketCheck, UserRoundCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import heroPhoto from "@/assets/GAGE-Dragon-Ninja.png.asset.json";
const hero = heroPhoto.url;
import gymImg from "@/assets/GAGE-Recreational-Gymnastics.png.asset.json";
import ninjaImg from "@/assets/GAGE-Dragon-Ninja.png.asset.json";
import tumblingImg from "@/assets/GAGE-Tumbling.png.asset.json";
import preschoolImg from "@/assets/GAGE-Preschool-Gymnastics.png.asset.json";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [
    { title: "Live Class Schedule & Enrollment | GAGE Center Blue Springs" },
    { name: "description", content: "Browse live GAGE class times for gymnastics, Ninja, tumbling, preschool, and Parent-Tot programs, then request a trial online." },
    { property: "og:title", content: "Live Class Schedule & Enrollment | GAGE Center" },
    { property: "og:description", content: "Find a class time that fits your family's weekly routine." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SchedulePage,
});

const schedules = [
  { name: "Girls Gymnastics", detail: "Level 1 · Ages 5+", destination: siteConfig.external.girlsGymnasticsClasses, image: gymImg.url },
  { name: "Boys Gymnastics", detail: "Level 1 · Ages 5+", destination: siteConfig.external.boysGymnasticsClasses, image: gymImg.url },
  { name: "Dragon Ninja", detail: "Ages 5–14", destination: siteConfig.external.ninjaClasses, image: ninjaImg.url },
  { name: "Tumbling & Trampoline", detail: "Ages 5–18", destination: siteConfig.external.classes, image: tumblingImg.url },
  { name: "Preschool & Parent / Tot", detail: "Parent / Tot 2 & under · Preschool 2.5+", destination: siteConfig.external.classes, image: preschoolImg.url },
  { name: "Browse All Classes", detail: "Every GAGE program", destination: siteConfig.external.classes, image: hero },
] as const;

const steps = [
  { number: "01", title: "Browse days & times", text: "See available days, times, and current openings in the live portal." },
  { number: "02", title: "Request a Trial", text: "Choose an eligible class, open its details, and select “Request a Trial.”" },
  { number: "03", title: "Get ready to move", text: "Complete your family profile, then arrive ready for their first fun class." },
] as const;

const parentPerks = [
  { icon: UserRoundCheck, title: "One family account", text: "Keep your children, classes, waivers, and account details together." },
  { icon: RefreshCw, title: "Live openings", text: "See current class times and availability directly in the registration portal." },
  { icon: CalendarCheck, title: "Easy attendance management", text: "Manage enrollment and attendance details from the account your family already uses." },
] as const;

function ScheduleLink({ name, detail, destination, image }: (typeof schedules)[number]) {
  return (
    <a href={destination} target="_blank" rel="noreferrer" onClick={(event) => { trackCta(`VIEW ${name.toUpperCase()} SCHEDULE`, "programs_grid"); forwardIclassProHandoff(event, { program_name: name, monthly_tuition: 0, source_section: "schedule_quick_jump", destination_url: destination }); }} className="group flex min-h-[190px] flex-col justify-between bg-background transition-colors hover:bg-secondary">
      <img src={image} alt={`${name} at GAGE Center`} loading="lazy" width={1600} height={1000} className="h-40 w-full object-cover" />
      <div className="p-6 pb-0 sm:p-7 sm:pb-0"><TicketCheck className="h-6 w-6 text-primary" aria-hidden /><p className="mt-6 font-display text-[10px] font-black uppercase text-primary">{detail}</p><h2 className="mt-2 font-display text-xl font-black uppercase text-ink">{name}</h2></div>
      <span className="mt-7 inline-flex items-center gap-2 p-6 pt-0 font-display text-xs font-black uppercase text-ink sm:p-7 sm:pt-0">View live schedule<ExternalLink className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden /></span>
    </a>
  );
}

function SchedulePage() {
  return (
    <PageShell eyebrow="Live schedule" title="Live class schedule & enrollment." intro="Find a class time that fits your family's weekly routine." image={hero}>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl"><p className="eyebrow">Quick jump by category</p><h2 className="section-title mt-4">Go straight to their class.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Choose a program below to see its current days, times, and openings in GAGE’s live registration portal.</p></div>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{schedules.map((schedule) => <ScheduleLink key={schedule.name} {...schedule} />)}</div>
      </section>

      <section className="bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="eyebrow">How to enroll</p><h2 className="section-title mt-4 text-ink-foreground">Three simple steps.</h2><div className="mt-12 grid gap-px bg-ink-foreground/15 md:grid-cols-3">{steps.map((step) => <article key={step.number} className="bg-ink p-7 sm:p-9"><span className="font-display text-4xl font-black text-primary">{step.number}</span><h3 className="mt-8 font-display text-xl font-black uppercase">{step.title}</h3><p className="mt-4 leading-7 text-ink-foreground/65">{step.text}</p></article>)}</div><Button asChild size="lg" className="mt-10 h-14 rounded-none px-8 font-display text-xs font-black uppercase"><a href={siteConfig.external.classes} target="_blank" rel="noreferrer" title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("BROWSE ALL LIVE CLASSES", "final_conversion"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "schedule_enrollment_steps", destination_url: siteConfig.external.classes }); }}>Browse all live classes<ArrowRight aria-hidden /></a></Button></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">Easy for busy families</p><h2 className="section-title mt-4">What parents love about the portal.</h2></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">Current information and simple account tools make finding and managing a class easier.</p></div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">{parentPerks.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7 sm:p-9"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-xl font-black uppercase text-ink">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{text}</p></article>)}</div>
      </section>
    </PageShell>
  );
}