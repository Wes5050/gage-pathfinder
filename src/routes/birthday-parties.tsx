import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Camera, Check, ExternalLink, PartyPopper, Phone, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviewsShowcase, ProgramFaq, ProgramPage, googleReviews } from "@/components/program-page";
import birthdayPhoto from "@/assets/gage-preschool.jpg.asset.json";
const birthday = birthdayPhoto.url;
import { siteConfig } from "@/data/config";
import { trackCta, withCampaignAttribution } from "@/lib/analytics";

export const Route = createFileRoute("/birthday-parties")({
  head: () => ({
    meta: [
      { title: "Kids Birthday Parties at Bump City | GAGE Center" },
      { name: "description", content: "Plan an active, stress-free kids birthday party at Bump City inside GAGE Center in Blue Springs, MO, with supervised play and a private party room." },
      { property: "og:title", content: "Their Best Birthday Yet | Bump City at GAGE Center" },
      { property: "og:description", content: "High-energy birthday parties with inflatables, trampolines, obstacle courses, dedicated hosts, and private celebration time in Blue Springs, MO." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayPartiesPage,
});

const benefits = [
  { icon: ShieldCheck, title: "Dedicated party hosts", text: "GAGE coaches run the floor, organize high-energy games, and supervise every minute so kids stay safe and engaged." },
  { icon: Sparkles, title: "Zero-stress for parents", text: "We assist with party room setup and handle 100% of the cleanup. You actually get to celebrate with your child." },
  { icon: PartyPopper, title: "Epic playground", text: "Massive inflatables, in-ground trampolines, foam pits, climbing courses, and spring floors." },
  { icon: Camera, title: "Private celebration time", text: "Dedicated party room time for cake, presents, singing, and family memories." },
] as const;

const steps = [
  { number: "01", title: "Choose your date & package", text: "Pick the celebration that fits your family online or over the phone." },
  { number: "02", title: "Show up ready to celebrate", text: "Bring the birthday kid, guests, cake, and food — then get ready for the fun." },
  { number: "03", title: "We handle the rest", text: "From high-energy arena play to party room cleanup, the GAGE team keeps the celebration moving." },
] as const;

const partyOptions = [
  { name: "Bump City Classic Party", description: "Supervised play in Bump City inflatables and the gym, private party room time, and a dedicated host." },
  { name: "GAGE Gym Party", description: "High-flying gymnastics and trampoline arena games, followed by private party room time." },
] as const;

const faqs = [
  { question: "What should guests wear?", answer: "Comfortable play clothes work best. Guests should be ready to play in socks or bare feet." },
  { question: "What can we bring?", answer: "You are welcome to bring cake, cupcakes, food, drinks, and table decorations for your celebration." },
  { question: "Do parents need to supervise on the floor?", answer: "GAGE's trained coaches lead and supervise the play arena, so parents can watch, take photos, and relax." },
  { question: "How early should we arrive?", answer: "Plan to arrive 10–15 minutes before your party to add personal touches in the party room." },
  { question: "How far in advance should we book?", answer: "Weekend slots fill quickly, so booking 3–6 weeks in advance is recommended." },
] as const;

function trackPartyLink(event: { currentTarget: HTMLAnchorElement }, label: string, placement: "hero" | "programs_grid" | "final_conversion") {
  event.currentTarget.href = withCampaignAttribution(siteConfig.external.birthdayParties);
  trackCta(label, placement);
}

function PartyBookingButton({ label = "Check dates & book at Bump City" }: { label?: string }) {
  return (
    <Button asChild size="lg" className="h-14 w-full rounded-none px-6 font-display text-xs font-black uppercase">
      <a href={siteConfig.external.birthdayParties} target="_blank" rel="noreferrer" onClick={(event) => trackPartyLink(event, label.toUpperCase(), "programs_grid")}>
        {label}<ExternalLink aria-hidden />
      </a>
    </Button>
  );
}

function BirthdayPartiesPage() {
  return (
    <ProgramPage>
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-ink text-ink-foreground lg:min-h-[calc(100svh-5rem)]">
        <img src={birthday} alt="Happy children celebrating together inside Bump City at GAGE Center" width={1600} height={1100} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_45%,color-mix(in_oklab,var(--ink)_18%,transparent)_82%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-20">
          <div className="max-w-4xl">
            <p className="font-display text-xs font-black uppercase text-primary">Bump City at GAGE Center · Blue Springs, MO</p>
            <p className="mt-4 font-display text-sm font-black uppercase">You bring the kid. We’ll bring the fun.</p>
            <h1 className="mt-5 max-w-4xl font-display text-[2.9rem] font-black uppercase leading-[.84] sm:text-[clamp(3.5rem,8.5vw,7.8rem)]">Their best birthday yet.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-foreground/80 sm:text-lg">100% active, zero-stress birthday celebrations inside Bump City at GAGE Center. Kids get supervised run of the inflatables, foam pits, trampolines, and obstacle courses while parents relax, take photos, and celebrate.</p>
            <p className="mt-6 font-display text-xs font-black uppercase text-ink-foreground/70">Private party room · Dedicated party host & coaches · Stress-free setup & cleanup</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-16 rounded-none px-9 font-display text-sm font-black uppercase shadow-xl">
                <a href="#party-options" onClick={(event) => { trackCta("RESERVE YOUR PARTY", "hero"); const target = document.querySelector("#party-options"); if (target) { event.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); window.history.replaceState(null, "", "#party-options"); } }}>Reserve your party<ArrowRight aria-hidden /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 rounded-none border-ink-foreground/40 bg-transparent px-8 font-display text-sm font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink">
                <a href={siteConfig.phoneHref} onClick={() => trackCta(`CALL ${siteConfig.phoneDisplay}`, "hero")}><Phone aria-hidden />Call {siteConfig.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="eyebrow">Fun first. Stress free.</p><h2 className="section-title mt-4">Why parents love GAGE parties.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Big energy for the kids. Helpful hosts and less work for you. Everyone gets to enjoy the celebration.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-lg font-black uppercase text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="eyebrow">Three easy steps</p>
          <h2 className="section-title mt-4 text-ink-foreground">How a Bump City party works.</h2>
          <div className="mt-12 grid gap-px bg-ink-foreground/15 md:grid-cols-3">
            {steps.map((step) => <article key={step.number} className="bg-ink p-8 sm:p-10"><span className="font-display text-5xl font-black text-primary">{step.number}</span><h3 className="mt-8 font-display text-xl font-black uppercase">{step.title}</h3><p className="mt-4 leading-7 text-ink-foreground/65">{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="party-options" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl"><p className="eyebrow">Party highlights</p><h2 className="section-title mt-4">Pick the way they want to play.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Two active ways to celebrate, both designed to keep kids moving and make the day easier for parents.</p></div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {partyOptions.map((party) => <article key={party.name} className="flex flex-col bg-ink p-8 text-ink-foreground sm:p-10"><PartyPopper className="h-8 w-8 text-primary" aria-hidden /><h3 className="mt-7 font-display text-3xl font-black uppercase">{party.name}</h3><p className="mt-5 text-base leading-7 text-ink-foreground/65">{party.description}</p><ul className="mt-7 space-y-3 text-sm text-ink-foreground/80"><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />Active, supervised play</li><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />Private party room time</li><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />A team ready to help</li></ul><div className="mt-auto pt-9"><PartyBookingButton /></div></article>)}
          </div>
          <p className="mt-7 max-w-3xl text-sm leading-6 text-muted-foreground">Birthday reservations are hosted through Bump City at GAGE Center. Click to view available weekend time slots and reserve online.</p>
        </div>
      </section>

      <GoogleReviewsShowcase reviews={[googleReviews[3]]} />
      <ProgramFaq items={[...faqs]} />

      <section className="relative min-h-[620px] overflow-hidden bg-ink text-ink-foreground">
        <img src={birthday} alt="Kids having fun at a Bump City birthday party" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center px-5 text-center">
          <p className="eyebrow">Make their day</p><h2 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.88]">Ready to celebrate?</h2><p className="mt-6 max-w-xl text-lg text-ink-foreground/75">Give them a birthday party they’ll be talking about all year.</p>
          <div className="mt-9 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="h-16 rounded-none px-10 font-display text-sm font-black uppercase shadow-xl"><a href={siteConfig.external.birthdayParties} target="_blank" rel="noreferrer" onClick={(event) => trackPartyLink(event, "BOOK YOUR PARTY NOW", "final_conversion")}>Book your party now<ExternalLink aria-hidden /></a></Button>
            <Button asChild size="lg" variant="outline" className="h-16 rounded-none border-ink-foreground/40 bg-transparent px-8 font-display text-sm font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink"><a href={siteConfig.phoneHref} onClick={() => trackCta(`CALL TO PLAN: ${siteConfig.phoneDisplay}`, "final_conversion")}><Phone aria-hidden />Call to plan: {siteConfig.phoneDisplay}</a></Button>
          </div>
        </div>
      </section>
    </ProgramPage>
  );
}