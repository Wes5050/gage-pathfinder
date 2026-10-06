import type { ReactNode } from "react";
import { ArrowRight, ExternalLink, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const googleReviews = [
  {
    quote: "My daughter loves her coaches at GAGE! She has learned so much and loves to show us everything she has learned every week!",
    attribution: "GAGE parent",
    experience: "Gymnastics",
  },
  {
    quote: "My kid has had a great time every Saturday with friendly staff. Teaching a 1 year old how to balance and tumble with patience and grace.",
    attribution: "Mary E.",
    experience: "Parent + Tot",
  },
  {
    quote: "We’ve loved our time at GAGE! Ninja, dragon fly gymnastics, parents night out and birthday parties…They have it all! The staff are great and always welcome the kids when they come in for class!",
    attribution: "GAGE family",
    experience: "Ninja + Dragonfly",
  },
  {
    quote: "I've been to 3 parties here and hosted one here as well. The staff is amazing, attentive, and so very helpful. 10/10 would absolutely recommend having your kiddos birthday party here.",
    attribution: "B.",
    experience: "Birthday + Bump City",
  },
] as const;

export function ProgramPage({ children }: { children: ReactNode }) {
  return <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

export function ProgramHero({ eyebrow, title, subheadline = "One class. A whole lot of fun.", message, image, imageAlt, programName, ctaAnchor, ctaLabel = "Try a class free", details }: { eyebrow: string; title: string; subheadline?: string; message: string; image: string; imageAlt: string; programName: string; ctaAnchor?: string; ctaLabel?: string; details?: string }) {
  const heroCta = ctaAnchor ? (
    <a
      href={ctaAnchor}
      onClick={(event) => {
        trackCta("TRY A CLASS FREE", "hero");
        const target = document.querySelector(ctaAnchor);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", ctaAnchor);
        }
      }}
    >
      {ctaLabel}
      <ArrowRight />
    </a>
  ) : (
    <a href={siteConfig.external.booking} target="_blank" rel="noreferrer" title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("TRY A CLASS FREE", "hero"); forwardIclassProHandoff(event, { program_name: programName, monthly_tuition: 95, source_section: "program_hero", destination_url: siteConfig.external.booking }); }}>{ctaLabel}<ArrowRight /></a>
  );
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-ink text-ink-foreground lg:min-h-[calc(100svh-5rem)]">
      <img src={image} alt={imageAlt} width={1600} height={1100} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center opacity-85" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_86%,transparent)_43%,color-mix(in_oklab,var(--ink)_14%,transparent)_80%)]" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-20">
        <div className="max-w-4xl">
          <p className="font-display text-xs font-black uppercase text-primary">{eyebrow}</p>
          <p className="mt-4 font-display text-sm font-black uppercase text-ink-foreground">{subheadline}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.85rem] font-black uppercase leading-[.84] text-ink-foreground sm:text-[clamp(3.4rem,8.5vw,7.8rem)]">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-ink-foreground/80 sm:text-lg">{message}</p>
          {details ? <p className="mt-6 font-display text-xs font-black uppercase tracking-widest text-ink-foreground/70">{details}</p> : null}
          <Button asChild size="lg" className="mt-8 h-16 rounded-none px-9 font-display text-sm font-black uppercase shadow-xl">
            {heroCta}
          </Button>
          <p className="mt-4 max-w-lg text-xs leading-5 text-ink-foreground/60">{siteConfig.registration.trialNote}</p>
        </div>
      </div>
    </section>
  );
}

export function GoogleReviewsShowcase({ reviews = googleReviews }: { reviews?: readonly (typeof googleReviews)[number][] }) {
  return (
    <section className="overflow-hidden bg-ink py-20 text-ink-foreground sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-ink-foreground/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div><p className="eyebrow">Google reviews</p><h2 className="section-title mt-4 text-ink-foreground">Real families.<br />Real momentum.</h2></div>
          <div className="max-w-sm md:text-right"><div className="flex gap-1 text-primary md:justify-end" aria-label="Five-star Google reviews">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" aria-hidden />)}</div><p className="mt-3 text-sm leading-6 text-ink-foreground/60">A curated selection of verified Google reviews from real GAGE families.</p></div>
        </div>
        <div className={`-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:gap-px lg:overflow-visible lg:bg-ink-foreground/15 lg:p-px ${reviews.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>
          {reviews.map((review, index) => <article key={review.quote} className="relative flex min-h-[330px] min-w-[86vw] snap-center flex-col justify-between bg-ink p-7 sm:min-w-[420px] sm:p-9 lg:min-w-0"><div><div className="flex items-center justify-between gap-4"><span className="bg-primary px-3 py-1.5 font-display text-[10px] font-black uppercase text-primary-foreground">{review.experience}</span><Quote className="h-9 w-9 text-primary" aria-hidden /></div><blockquote className="mt-8 font-display text-xl font-bold leading-8 text-ink-foreground sm:text-2xl sm:leading-9">“{review.quote}”</blockquote></div><footer className="mt-8 flex items-end justify-between gap-4 border-t border-ink-foreground/15 pt-5"><div><p className="font-display text-xs font-black uppercase text-ink-foreground">{review.attribution}</p><p className="mt-1 text-xs text-ink-foreground/50">Verified Google review</p></div><span className="font-display text-4xl font-black text-ink-foreground/10">0{index + 1}</span></footer></article>)}
        </div>
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-xs leading-5 text-ink-foreground/50">Reviews are curated from GAGE Center’s public Google profile. Only GAGE’s capitalization has been standardized.</p><Button asChild size="lg" className="h-14 rounded-none px-7 font-display text-xs font-black uppercase"><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta("READ GOOGLE REVIEWS", "programs_grid")}>Read all reviews on Google<ExternalLink /></a></Button></div>
      </div>
    </section>
  );
}

export type ProgramFaqItem = { question: string; answer: string };

export function ProgramFaq({ items }: { items: ProgramFaqItem[] }) {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div><p className="eyebrow">Before the first class</p><h2 className="section-title mt-4">Good questions. Friendly answers.</h2></div>
        <Accordion type="single" collapsible className="border-t border-border">{items.map((item) => <AccordionItem key={item.question} value={item.question}><AccordionTrigger className="py-6 font-display text-sm font-black uppercase text-ink hover:no-underline">{item.question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-muted-foreground">{item.answer}</AccordionContent></AccordionItem>)}</Accordion>
      </div>
    </section>
  );
}

export function ProgramFinalCta({ image, imageAlt, programName, eyebrow = "It starts with one try", headline = <>The fun starts<br />here.</>, body = "One class. A whole lot of fun.", ctaLabel = "Try a class free", ctaAnchor }: { image: string; imageAlt: string; programName: string; eyebrow?: string; headline?: ReactNode; body?: ReactNode; ctaLabel?: string; ctaAnchor?: string }) {
  const finalCta = ctaAnchor ? (
    <a
      href={ctaAnchor}
      onClick={(event) => {
        trackCta(ctaLabel.toUpperCase(), "final_conversion");
        const target = document.querySelector(ctaAnchor);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", ctaAnchor);
        }
      }}
    >
      {ctaLabel}
      <ArrowRight />
    </a>
  ) : (
    <a href={siteConfig.external.booking} target="_blank" rel="noreferrer" title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("TRY A CLASS FREE", "final_conversion"); forwardIclassProHandoff(event, { program_name: programName, monthly_tuition: 95, source_section: "program_final_conversion", destination_url: siteConfig.external.booking }); }}>{ctaLabel}<ExternalLink /></a>
  );
  return (
    <section className="relative min-h-[620px] bg-ink text-ink-foreground">
      <img src={image} alt={imageAlt} width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-ink/45" />
      <div className="relative mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center px-5 text-center"><p className="eyebrow">{eyebrow}</p><h2 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.88]">{headline}</h2><p className="mt-6 text-lg text-ink-foreground/75">{body}</p><Button asChild size="lg" className="mt-9 h-16 rounded-none px-10 font-display text-sm font-black uppercase shadow-xl">{finalCta}</Button><p className="mt-4 max-w-lg text-xs leading-5 text-ink-foreground/60">{siteConfig.registration.trialNote}</p></div>
    </section>
  );
}