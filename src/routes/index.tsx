import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/data/config";
import { events } from "@/data/events";
import { recommendProgram } from "@/data/programs";
import { forwardIclassProHandoff, trackCta, trackEvent } from "@/lib/analytics";
import { GoogleReviewsShowcase } from "@/components/program-page";
import hero from "@/assets/gage-hero.jpg.asset.json";
import heroFun from "@/assets/gage-hero-fun.jpg";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import birthday from "@/assets/gage-birthday.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kids Gymnastics, Ninja & Tumbling | GAGE Center Blue Springs" },
      { name: "description", content: "Find gymnastics, ninja, tumbling, preschool classes, camps, and birthday parties for kids in Blue Springs, MO. Classes start at $85 per month." },
      { property: "og:title", content: "The Fun Starts Here | GAGE Center Blue Springs" },
      { property: "og:description", content: "Big smiles, new skills, and something fun for every kid at GAGE Center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const signaturePrograms = [
  { name: "Recreational Gymnastics", line: "Cartwheels, confidence, new friends, and a whole lot of fun.", image: hero.url, to: "/recreational-gymnastics", tone: "bg-primary", external: false },
  { name: "Ninja", line: "Climb, jump, conquer obstacles, and let that energy loose.", image: ninja.url, to: "/dragon-ninja", tone: "bg-accent", external: false },
  { name: "Tumbling", line: "Big flips, little victories, and the excitement of learning something new.", image: tumbling.url, to: "/find-a-class", tone: "bg-primary", external: false },
  { name: "Preschool", line: "Little movers. Big discoveries. Endless smiles.", image: preschool.url, to: "/preschool-gymnastics", tone: "bg-accent", external: false },
  { name: "Camps", line: "Big adventures, new friends, and days they'll talk about all the way home.", image: ninja.url, to: "/camps-and-events", tone: "bg-primary", external: false },
  { name: "Birthday Parties", line: "All the excitement. All the smiles. A birthday they'll never forget.", image: birthday, to: siteConfig.external.birthdayParties, tone: "bg-accent", external: true },
] as const;

function ClassFinder() {
  const [age, setAge] = useState("");
  const [interest, setInterest] = useState("");
  const [gender, setGender] = useState("");
  const asksGender = interest === "Gymnastics" && ["5–7", "8–12", "13+"].includes(age);
  const selectionComplete = Boolean(age && interest && (!asksGender || gender));
  const result = useMemo(() => selectionComplete ? recommendProgram(age, interest, gender) : undefined, [age, interest, gender, selectionComplete]);
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
          <p className="eyebrow">Find their fun</p>
          <h2 className="section-title mt-4">What would make them light up?</h2>
          <p className="mt-5 text-lg text-muted-foreground">Pick their age and what sounds fun. We'll point you toward a welcoming class they'll be excited to try.</p>
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
              <p className="font-display text-xs font-black uppercase text-primary">We found something fun to try.</p>
              <h3 className="mt-5 font-display text-3xl font-black uppercase leading-tight">{result.name}</h3>
              <span className="mt-4 inline-flex bg-ink-foreground/10 px-3 py-1.5 font-display text-[10px] font-black uppercase text-ink-foreground">{result.daytime ? "Daytime availability" : "Standard class availability"}</span>
              <p className="mt-4 text-sm leading-6 text-ink-foreground/65">{result.shortDescription}</p>
              <ul className="mt-6 space-y-3">{result.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 text-sm"><span className="grid h-5 w-5 place-items-center bg-primary"><Check className="h-3 w-3" /></span>{benefit}</li>)}</ul>
              <div className="mt-8 border-t border-ink-foreground/15 pt-6"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><span className="text-xs uppercase text-ink-foreground/50">Monthly tuition</span><p className="font-display text-3xl font-black">${result.monthlyTuition}<span className="text-sm text-ink-foreground/50">/mo</span></p></div><Button asChild size="lg" className="h-14 rounded-none px-7 font-display text-xs font-black uppercase"><a href={result.iclassProUrl} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "finder_result"); forwardIclassProHandoff(event, { program_name: result.name, monthly_tuition: result.monthlyTuition, source_section: "finder_result", destination_url: result.iclassProUrl }); }}>Try a class free<ArrowRight /></a></Button></div><p className="mt-4 text-xs leading-5 text-ink-foreground/50">{siteConfig.registration.trialNote}</p></div>
            </div> : selectionComplete ? <div className="flex h-full min-h-[270px] flex-col justify-between animate-reveal"><p className="font-display text-xs font-black uppercase text-primary">A little help from GAGE</p><div><p className="font-display text-3xl font-black uppercase leading-tight">Let's find their happy place.</p><p className="mt-4 text-sm leading-6 text-ink-foreground/60">We don't have a confirmed beginner class for that combination. Call us and a friendly team member will help.</p></div><Button asChild size="lg" className="mt-8 h-14 rounded-none font-display text-xs font-black uppercase"><a href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a></Button></div> : <div className="flex h-full min-h-[270px] flex-col justify-between"><p className="font-display text-xs font-black uppercase text-primary">Class finder</p><div><p className="font-display text-3xl font-black uppercase leading-tight">Their next favorite activity is two taps away.</p><p className="mt-4 text-sm text-ink-foreground/55">Choose an age and interest to see a friendly recommendation with clear pricing.</p></div><ArrowDown className="h-6 w-6 text-primary lg:hidden" /></div>}
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
          <img src={heroFun} alt="Happy kids jumping and laughing during a fun GAGE gymnastics class" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_42%,color-mix(in_oklab,var(--ink)_12%,transparent)_78%)]" />
          <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-20">
            <div className="max-w-4xl">
              <p className="font-display text-xs font-black uppercase text-primary">Blue Springs, Missouri · Fun first. Growth follows.</p>
              <h1 className="mt-5 font-display text-[clamp(3.7rem,10vw,8.6rem)] font-black uppercase leading-[.82] text-ink-foreground">The fun<br /><span className="text-primary">starts here.</span></h1>
              <p className="mt-6 font-display text-lg font-black uppercase text-ink-foreground sm:text-xl">Big smiles. New skills. Something for every kid.</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink-foreground/80 sm:text-lg">From gymnastics and ninja to tumbling and unforgettable celebrations, GAGE is a place to move, explore, make friends, and discover something they love.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button type="button" size="lg" onClick={() => { trackCta("FIND THEIR FUN", "hero"); focusFinder(); }} className="h-14 rounded-none px-8 font-display text-xs font-black uppercase shadow-lg">Find their fun<ArrowDown /></Button><Button asChild size="lg" variant="outline" className="h-14 rounded-none border-ink-foreground/40 bg-transparent px-7 font-display text-xs font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink"><a href={siteConfig.external.booking} target="_blank" rel="noreferrer" title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("TRY A CLASS FREE", "hero"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "hero", destination_url: siteConfig.external.booking }); }}>Try a class free<ArrowRight /></a></Button></div>
              <p className="mt-3 max-w-lg text-xs leading-5 text-ink-foreground/60">{siteConfig.registration.trialNote}</p>
            </div>
          </div>
        </section>

        <ClassFinder />

        <section className="bg-ink py-20 text-ink-foreground sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><p className="eyebrow">Something for every kid</p><h2 className="section-title mt-4 text-ink-foreground">Find their fun</h2>
            <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
              {signaturePrograms.map((program, index) => { const content = <><img src={program.image} alt={`${program.name} at GAGE Center`} width={1000} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" /><span className={`absolute left-0 top-0 px-3 py-2 font-display text-xs font-black uppercase text-primary-foreground ${program.tone}`}>0{index + 1}</span><div className="absolute inset-x-0 bottom-0 p-6"><h3 className="font-display text-2xl font-black uppercase">{program.name}</h3><p className="mt-2 text-sm leading-6 text-ink-foreground/75">{program.line}</p><ChevronRight className="mt-5 h-5 w-5 text-primary transition-transform group-hover:translate-x-2" /></div></>; const classes = "group relative min-h-[420px] min-w-[82vw] snap-center overflow-hidden sm:min-w-[360px] md:min-w-0"; return program.external ? <a key={program.name} href={program.to} target="_blank" rel="noreferrer" onClick={() => trackCta(`EXPLORE ${program.name.toUpperCase()}`, "programs_grid")} className={classes}>{content}</a> : <Link key={program.name} to={program.to} onClick={() => trackCta(`EXPLORE ${program.name.toUpperCase()}`, "programs_grid")} className={classes}>{content}</Link>; })}
            </div>
          </div>
        </section>

        <section className="grid bg-background lg:grid-cols-2">
          <div className="relative min-h-[500px]"><img src={birthday} alt="Happy children celebrating together at GAGE" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16"><div className="max-w-xl"><p className="eyebrow">Fun first. Growth follows.</p><h2 className="section-title mt-4">A place to move, belong, and smile.</h2><p className="mt-7 text-xl leading-8 text-ink">Kids come for the jumping, climbing, cartwheels, and high-fives. They stay for the friends, caring coaches, and proud feeling of doing something new.</p><p className="mt-5 leading-7 text-muted-foreground">Rooted in Blue Springs, GAGE welcomes every starting point. Whether your child is trying a class for the first time or chooses a more focused path later, they'll be supported by coaches who care.</p><div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-7"><div><strong className="block font-display text-2xl font-black text-primary">Fun</strong><span className="text-xs text-muted-foreground">They want to return</span></div><div><strong className="block font-display text-2xl font-black text-primary">Friends</strong><span className="text-xs text-muted-foreground">They feel they belong</span></div><div><strong className="block font-display text-2xl font-black text-primary">Growth</strong><span className="text-xs text-muted-foreground">They feel proud</span></div></div></div></div>
        </section>

        <section className="bg-secondary py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="max-w-3xl"><p className="eyebrow">No mystery fees</p><h2 className="section-title mt-4">Simple classes. Clear pricing.</h2></div><div className="mt-12 grid gap-px bg-border md:grid-cols-3"><TuitionTier tier="daytime" title="Daytime programs" price="From $85" description="Confirmed starting price for preschool, homeschool, and daytime Ninja programs." /><TuitionTier tier="standard" title="Standard classes" price="$95" description="Confirmed monthly tuition for standard gymnastics, Ninja, and tumbling classes." /><TuitionTier tier="advanced" title="Select advanced levels" price="Up to $137" description="Invitation or evaluation only. Pricing applies to select extended classes for placed athletes." /></div><Button type="button" onClick={() => { trackCta("FIND MY CHILD'S CLASS", "tuition_section"); trackEvent("tuition_viewed", { tier: "all", action: "find_class_clicked" }); focusFinder(); }} className="mt-8 h-14 rounded-none px-7 font-display text-xs font-black uppercase">Find my child's class<ArrowRight /></Button></div></section>

        <section className="relative min-h-[640px] overflow-hidden bg-ink text-ink-foreground"><img src={birthday} alt="Children enjoying a birthday obstacle course at GAGE" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" /><div className="relative mx-auto flex min-h-[640px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-10"><div className="max-w-xl"><p className="eyebrow">Birthdays & Bump City</p><h2 className="section-title mt-4 text-ink-foreground">Their best birthday yet.</h2><p className="mt-5 text-xl text-ink-foreground/75">You bring the kid. We'll bring the fun.</p><Button asChild size="lg" className="mt-8 h-14 rounded-none px-7 font-display text-xs font-black uppercase"><a href={siteConfig.external.birthdayParties} target="_blank" rel="noreferrer" onClick={() => trackCta("EXPLORE BIRTHDAY PARTIES", "programs_grid")}>Explore birthday parties<ArrowRight /></a></Button></div></div></section>

        <section className="py-20 sm:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow">Beyond weekly classes</p><h2 className="section-title mt-4">Happening at GAGE</h2></div><Button asChild variant="outline" className="hidden rounded-none font-display text-xs font-black uppercase sm:inline-flex"><Link to="/camps-and-events">See all events</Link></Button></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{events.map((event) => <article key={event.title} className="group"><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={event.image} alt="" width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><p className="mt-5 font-display text-[10px] font-black uppercase text-primary">{event.type} · {event.availability}</p><h3 className="mt-2 font-display text-xl font-black uppercase text-ink">{event.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{event.description}</p></article>)}</div><Button asChild variant="outline" className="mt-8 w-full rounded-none font-display text-xs font-black uppercase sm:hidden"><Link to="/camps-and-events">See all events</Link></Button></div></section>

        <GoogleReviewsShowcase />

        <section className="relative min-h-[620px] bg-ink text-ink-foreground"><img src={tumbling.url} alt="A child enjoying movement at GAGE" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-ink/45" /><div className="relative mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center px-5 text-center"><p className="eyebrow">It starts with one try</p><h2 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.88]">One class.<br />A whole lot of fun.</h2><p className="mt-6 text-lg text-ink-foreground/75">Their next favorite activity could be one class away.</p><Button asChild size="lg" className="mt-9 h-16 rounded-none px-10 font-display text-sm font-black uppercase shadow-xl"><a href={siteConfig.external.booking} target="_blank" rel="noreferrer" title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("TRY A CLASS FREE", "final_conversion"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "final_conversion", destination_url: siteConfig.external.booking }); }}>Try a class free<ExternalLink /></a></Button><p className="mt-4 max-w-lg text-xs leading-5 text-ink-foreground/60">{siteConfig.registration.trialNote}</p></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}