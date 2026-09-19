import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/data/config";
import { events } from "@/data/events";
import { recommendProgram } from "@/data/programs";
import { trackCta, trackEvent, trackIclassProHandoff } from "@/lib/analytics";
import hero from "@/assets/gage-hero.jpg.asset.json";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import competitive from "@/assets/gage-competitive.jpg";
import birthday from "@/assets/gage-birthday.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kids Gymnastics, Ninja & Tumbling | GAGE Center Blue Springs" },
      { name: "description", content: "Find gymnastics, ninja, tumbling, preschool classes, camps, and birthday parties for kids in Blue Springs, MO. Classes start at $85 per month." },
      { property: "og:title", content: "Find Their Thing | GAGE Center Blue Springs" },
      { property: "og:description", content: "Gymnastics. Ninja. Tumbling. And a place to grow. Find a great class for your child at GAGE Center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const signaturePrograms = [
  { name: "Gymnastics", line: "Flip. Fly. Grow.", image: hero.url, to: "/recreational-gymnastics" as const, tone: "bg-primary" },
  { name: "Ninja", line: "Climb. Conquer. Repeat.", image: ninja.url, to: "/dragon-ninja" as const, tone: "bg-accent" },
  { name: "Preschool", line: "Big movement for little humans.", image: preschool.url, to: "/preschool-gymnastics" as const, tone: "bg-primary" },
  { name: "Tumbling", line: "Build the skills. Land the moment.", image: tumbling.url, to: "/recreational-gymnastics" as const, tone: "bg-accent" },
  { name: "Competitive", line: "Dream bigger. Train further.", image: competitive, to: "/about" as const, tone: "bg-primary" },
];

const testimonials = [
  { quote: "The coaches saw what our daughter needed before she had the words for it. Her confidence carries into everything now.", name: "GAGE parent", detail: "Recreational gymnastics family" },
  { quote: "My son found his people in Ninja. He comes home proud, tired, and already asking when he gets to go back.", name: "GAGE parent", detail: "Ninja family" },
  { quote: "They celebrate the tiny wins. That made trying hard things feel safe for our preschooler.", name: "GAGE parent", detail: "Preschool gymnastics family" },
];

function ClassFinder() {
  const [age, setAge] = useState("");
  const [interest, setInterest] = useState("");
  const [gender, setGender] = useState("");
  const asksGender = interest === "Gymnastics" && ["5–7", "8–12", "13+"].includes(age);
  const result = useMemo(() => age && interest && (!asksGender || gender) ? recommendProgram(age, interest, gender) : undefined, [age, interest, gender, asksGender]);
  const started = useRef(false);
  const lastRecommendation = useRef("");

  useEffect(() => {
    if (!result) return;
    const criteria = [age, interest, gender].filter(Boolean).join(" | ");
    const recommendationKey = `${result.name}:${criteria}`;
    if (lastRecommendation.current === recommendationKey) return;
    lastRecommendation.current = recommendationKey;
    trackEvent("class_finder_recommendation", { program_name: result.name, monthly_tuition: result.monthlyTuition, criteria_matched: criteria });
  }, [age, gender, interest, result]);

  const chooseAge = (value: string) => {
    if (!started.current) {
      started.current = true;
      trackEvent("class_finder_started", { entry_step: "age" });
    }
    trackEvent("class_finder_step", { step_number: 1, step_name: "age", selected_value: value });
    setAge(value);
    setGender("");
  };

  const resetFinder = () => {
    const lastCompletedStep = gender ? "details" : interest ? "interest" : "age";
    trackEvent("class_finder_reset", { last_completed_step: lastCompletedStep });
    setAge("");
    setInterest("");
    setGender("");
    started.current = false;
    lastRecommendation.current = "";
  };

  return (
    <section id="class-finder" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Your best first step</p>
          <h2 className="section-title mt-4">Find the right class</h2>
          <p className="mt-5 text-lg text-muted-foreground">Tell us a little about your child and we'll help you find a great place to start.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="space-y-9">
            <fieldset>
              <legend className="font-display text-sm font-black uppercase text-ink"><span className="mr-3 text-primary">01</span>How old are they?</legend>
              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {["1–3", "3–4", "5–7", "8–12", "13+"].map((value) => <Button key={value} type="button" variant={age === value ? "default" : "outline"} onClick={() => chooseAge(value)} className="h-14 rounded-none text-base font-bold">{value}</Button>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-display text-sm font-black uppercase text-ink"><span className="mr-3 text-primary">02</span>What are they into?</legend>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Gymnastics", "Ninja", "Tumbling", "Not Sure"].map((value) => <Button key={value} type="button" variant={interest === value ? "default" : "outline"} onClick={() => { trackEvent("class_finder_step", { step_number: 2, step_name: "interest", selected_value: value }); setInterest(value); if (value !== "Gymnastics") setGender(""); }} className="h-14 rounded-none text-xs font-black uppercase">{value}</Button>)}
              </div>
            </fieldset>
            {asksGender ? <fieldset className="animate-reveal"><legend className="font-display text-sm font-black uppercase text-ink"><span className="mr-3 text-primary">03</span>Which class grouping?</legend><div className="mt-4 grid grid-cols-2 gap-2">{["Girls", "Boys"].map((value) => <Button key={value} type="button" variant={gender === value ? "default" : "outline"} onClick={() => { trackEvent("class_finder_step", { step_number: 3, step_name: "details", selected_value: value }); setGender(value); }} className="h-14 rounded-none text-xs font-black uppercase">{value}</Button>)}</div></fieldset> : null}
            {(age || interest) ? <Button type="button" variant="ghost" onClick={resetFinder} className="rounded-none px-0 font-display text-xs font-black uppercase text-muted-foreground hover:bg-transparent hover:text-primary">Start over</Button> : null}
          </div>

          <div className="min-h-[340px] bg-ink p-7 text-ink-foreground sm:p-10" aria-live="polite">
            {result ? <div className="animate-reveal">
              <p className="font-display text-xs font-black uppercase text-primary">We found a great place to start.</p>
              <h3 className="mt-5 font-display text-3xl font-black uppercase leading-tight">{result.name}</h3>
              <p className="mt-4 text-sm leading-6 text-ink-foreground/65">{result.shortDescription}</p>
              <ul className="mt-6 space-y-3">{result.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 text-sm"><span className="grid h-5 w-5 place-items-center bg-primary"><Check className="h-3 w-3" /></span>{benefit}</li>)}</ul>
              <div className="mt-8 flex items-end justify-between border-t border-ink-foreground/15 pt-6"><div><span className="text-xs uppercase text-ink-foreground/50">Monthly tuition</span><p className="font-display text-3xl font-black">${result.monthlyTuition}<span className="text-sm text-ink-foreground/50">/mo</span></p></div><Button asChild className="h-12 rounded-none font-display text-xs font-black uppercase"><a href={result.iclassProUrl} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "finder_result"); forwardIclassProHandoff(event, { program_name: result.name, monthly_tuition: result.monthlyTuition, source_section: "finder_result", destination_url: result.iclassProUrl }); }}>Try free<ArrowRight /></a></Button></div>
            </div> : <div className="flex h-full min-h-[270px] flex-col justify-between"><p className="font-display text-xs font-black uppercase text-primary">Class finder</p><div><p className="font-display text-3xl font-black uppercase leading-tight">A great starting point is two taps away.</p><p className="mt-4 text-sm text-ink-foreground/55">Choose an age and interest to see a recommendation with transparent pricing.</p></div><ArrowDown className="h-6 w-6 text-primary lg:hidden" /></div>}
          </div>
        </div>
      </div>
    </section>
  );
}

function TuitionTier({ tier, title, price, description }: { tier: "daytime" | "standard" | "advanced"; title: string; price: string; description: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      trackEvent("tuition_viewed", { tier, action: "viewed" });
      observer.disconnect();
    }, { threshold: 0.6 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [tier]);
  return <div ref={ref} className="bg-background p-7 sm:p-9"><p className="font-display text-xs font-black uppercase text-muted-foreground">{title}</p><p className="mt-6 font-display text-4xl font-black text-ink">{price}<span className="text-sm text-muted-foreground">/mo</span></p><p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p></div>;
}

function Home() {
  const focusFinder = () => document.getElementById("class-finder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-ink text-ink-foreground lg:min-h-[calc(100svh-5rem)]">
          <img src={hero.url} alt="Young gymnast training with a GAGE coach" width={1600} height={1104} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_42%,color-mix(in_oklab,var(--ink)_12%,transparent)_78%)]" />
          <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-20">
            <div className="max-w-4xl">
              <p className="font-display text-xs font-black uppercase text-primary">Blue Springs, Missouri · Classes from $85/month</p>
              <h1 className="mt-5 font-display text-[clamp(3.7rem,10vw,8.6rem)] font-black uppercase leading-[.82] text-ink-foreground">Find their<br /><span className="text-primary">thing.</span></h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-ink-foreground/80 sm:text-lg">Gymnastics. Ninja. Tumbling. And a place to grow. Helping kids build strength, confidence, skills, and a love of movement.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-14 rounded-none px-7 font-display text-xs font-black uppercase"><a href={siteConfig.external.trial} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "hero"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "hero", destination_url: siteConfig.external.trial }); }}>Try a class free<ArrowRight /></a></Button><Button type="button" size="lg" variant="outline" onClick={(event) => { trackCta("EXPLORE PROGRAMS", "hero"); focusFinder(); }} className="h-14 rounded-none border-ink-foreground/40 bg-transparent px-7 font-display text-xs font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink">Explore programs</Button></div>
            </div>
          </div>
        </section>

        <ClassFinder />

        <section className="bg-ink py-20 text-ink-foreground sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><p className="eyebrow">Five ways to move</p><h2 className="section-title mt-4 text-ink-foreground">Find your thing</h2>
            <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
              {signaturePrograms.map((program, index) => <Link key={program.name} to={program.to} onClick={() => trackCta(`EXPLORE ${program.name.toUpperCase()}`, "programs_grid")} className="group relative min-h-[460px] min-w-[82vw] snap-center overflow-hidden sm:min-w-[360px] md:min-w-0"><img src={program.image} alt={`${program.name} at GAGE Center`} width={1000} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" /><span className={`absolute left-0 top-0 px-3 py-2 font-display text-xs font-black uppercase text-primary-foreground ${program.tone}`}>0{index + 1}</span><div className="absolute inset-x-0 bottom-0 p-6"><h3 className="font-display text-2xl font-black uppercase">{program.name}</h3><p className="mt-1 text-sm text-ink-foreground/70">{program.line}</p><ChevronRight className="mt-5 h-5 w-5 text-primary transition-transform group-hover:translate-x-2" /></div></Link>)}
            </div>
          </div>
        </section>

        <section className="grid bg-background lg:grid-cols-2">
          <div className="relative min-h-[500px]"><img src={competitive} alt="GAGE gymnast training on balance beam with her coach" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16"><div className="max-w-xl"><p className="eyebrow">The GAGE story</p><h2 className="section-title mt-4">A legacy of champions. A place for every kid.</h2><p className="mt-7 text-xl leading-8 text-ink">Your child doesn't have to dream about the Olympics. They just need somewhere they can discover what they're capable of.</p><p className="mt-5 leading-7 text-muted-foreground">Rooted in Blue Springs, GAGE brings a world-class coaching mindset to every first roll, brave jump, and hard-earned breakthrough. Recreational or competitive, every athlete deserves to feel seen.</p><div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-7"><div><strong className="block font-display text-2xl font-black text-primary">Local</strong><span className="text-xs text-muted-foreground">Blue Springs roots</span></div><div><strong className="block font-display text-2xl font-black text-primary">Proven</strong><span className="text-xs text-muted-foreground">Coaching pedigree</span></div><div><strong className="block font-display text-2xl font-black text-primary">For all</strong><span className="text-xs text-muted-foreground">Every starting point</span></div></div></div></div>
        </section>

        <section className="bg-secondary py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="max-w-3xl"><p className="eyebrow">No mystery fees</p><h2 className="section-title mt-4">Simple classes. Clear pricing.</h2></div><div className="mt-12 grid gap-px bg-border md:grid-cols-3"><TuitionTier tier="daytime" title="Daytime programs" price="$85" description="Preschool, homeschool, and daytime Ninja options." /><TuitionTier tier="standard" title="Standard classes" price="$95" description="Most gymnastics, Ninja, and tumbling classes." /><TuitionTier tier="advanced" title="Advanced programs" price="Up to $137" description="Select extended classes for placed athletes." /></div><Button type="button" onClick={(event) => { trackCta("FIND MY CHILD'S CLASS", "tuition_section"); trackEvent("tuition_viewed", { tier: "all", action: "find_class_clicked" }); focusFinder(); }} className="mt-8 h-13 rounded-none px-7 font-display text-xs font-black uppercase">Find my child's class<ArrowRight /></Button></div></section>

        <section className="relative min-h-[640px] overflow-hidden bg-ink text-ink-foreground"><img src={birthday} alt="Children enjoying a birthday obstacle course at GAGE" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" /><div className="relative mx-auto flex min-h-[640px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-10"><div className="max-w-xl"><p className="eyebrow">Birthdays & Bump City</p><h2 className="section-title mt-4 text-ink-foreground">Their best birthday yet.</h2><p className="mt-5 text-xl text-ink-foreground/75">You bring the kid. We'll bring the fun.</p><Button asChild size="lg" className="mt-8 h-14 rounded-none px-7 font-display text-xs font-black uppercase"><Link to="/camps-and-events">Explore birthday parties<ArrowRight /></Link></Button></div></div></section>

        <section className="py-20 sm:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow">Beyond weekly classes</p><h2 className="section-title mt-4">Happening at GAGE</h2></div><Button asChild variant="outline" className="hidden rounded-none font-display text-xs font-black uppercase sm:inline-flex"><Link to="/camps-and-events">See all events</Link></Button></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{events.map((event) => <article key={event.title} className="group"><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={event.image} alt="" width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><p className="mt-5 font-display text-[10px] font-black uppercase text-primary">{event.type} · {event.timing}</p><h3 className="mt-2 font-display text-xl font-black uppercase text-ink">{event.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{event.description}</p></article>)}</div><Button asChild variant="outline" className="mt-8 w-full rounded-none font-display text-xs font-black uppercase sm:hidden"><Link to="/camps-and-events">See all events</Link></Button></div></section>

        <section className="bg-secondary py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow">Parent stories</p><h2 className="section-title mt-4">Real kids. Real growth.</h2><div className="mt-12 grid gap-px bg-border md:grid-cols-3">{testimonials.map((item) => <figure key={item.detail} className="bg-background p-8"><Quote className="h-6 w-6 text-primary" aria-hidden /><blockquote className="mt-7 text-lg leading-8 text-ink">“{item.quote}”</blockquote><figcaption className="mt-8 border-t border-border pt-5"><strong className="font-display text-xs font-black uppercase text-ink">{item.name}</strong><p className="mt-1 text-xs text-muted-foreground">{item.detail}</p></figcaption></figure>)}</div></div></section>

        <section className="relative min-h-[620px] bg-ink text-ink-foreground"><img src={tumbling.url} alt="GAGE athlete tumbling in the gym" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-ink/45" /><div className="relative mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center px-5 text-center"><p className="eyebrow">The first step is theirs</p><h2 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.88]">They're ready.<br />Are you?</h2><p className="mt-6 text-lg text-ink-foreground/75">Find a great place for your child to start.</p><Button asChild size="lg" className="mt-9 h-14 rounded-none px-8 font-display text-xs font-black uppercase"><a href={siteConfig.external.trial} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "final_conversion"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "final_conversion", destination_url: siteConfig.external.trial }); }}>Try a class free<ExternalLink /></a></Button></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}