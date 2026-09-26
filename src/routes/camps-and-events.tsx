import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, ExternalLink, MoonStar, Phone, ShieldCheck, Sparkles, TentTree, ThermometerSun, TicketCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviewsShowcase, ProgramFaq, ProgramPage, googleReviews } from "@/components/program-page";
import heroFunPhoto from "@/assets/gage-ninja.jpg.asset.json";
const heroFun = heroFunPhoto.url;
import birthdayPhoto from "@/assets/gage-preschool.jpg.asset.json";
const birthday = birthdayPhoto.url;
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import competitivePhoto from "@/assets/gage-hero.jpg.asset.json";
const competitive = competitivePhoto.url;
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta, withCampaignAttribution } from "@/lib/analytics";

export const Route = createFileRoute("/camps-and-events")({
  head: () => ({
    meta: [
      { title: "Kids Camps, Parent Night Out & Events | GAGE Center" },
      { name: "description", content: "Explore active school-break camps, Parent Night Out, Bump City toddler play, and seasonal family events at GAGE Center in Blue Springs, MO." },
      { property: "og:title", content: "Big Days. Bigger Smiles. | GAGE Center" },
      { property: "og:description", content: "Camps, Parent Night Out, and seasonal fun packed with movement, games, and new friendships at GAGE Center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CampsEventsPage,
});

const expectations = [
  { icon: ShieldCheck, title: "Safety-certified coaching", text: "Attentive, positive coaches supervise every activity and keep the energy high and encouraging." },
  { icon: ThermometerSun, title: "Massive indoor playground", text: "A climate-controlled facility with in-ground trampolines, foam pits, ninja courses, and inflatables." },
  { icon: Users, title: "Open to everyone", text: "Your child does not need to be enrolled in weekly classes to join GAGE camps or Parent Night Out." },
  { icon: TicketCheck, title: "Convenient registration", text: "Fast online enrollment and payment through the GAGE parent portal." },
] as const;

const faqs = [
  { question: "What should campers bring?", answer: "Pack a peanut-free sack lunch or snack, a refillable water bottle, and comfortable athletic clothes made for active play." },
  { question: "Does my child need gymnastics experience?", answer: "None at all. GAGE camps and events are designed for kids of every experience level to have fun, make friends, and move." },
  { question: "How do we sign up?", answer: `Camps and events are booked directly through the GAGE customer portal or over the phone at ${siteConfig.phoneDisplay}. Open the portal to see current availability and registration details.` },
  { question: "What ages can attend?", answer: "Camps and Parent Night Out are typically for ages 4–12. Bump City toddler play is designed for ages 1–5. Check each current listing for its confirmed age range before registering." },
] as const;

type EventCardProps = {
  icon: typeof TentTree;
  eyebrow: string;
  title: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
  cta: string;
  destination?: string;
  portal?: boolean;
};

function EventCard({ icon: Icon, eyebrow, title, description, details, image, imageAlt, cta, destination, portal }: EventCardProps) {
  const action = destination ? (
    <Button asChild size="lg" className="h-14 w-full rounded-none px-6 font-display text-xs font-black uppercase">
      <a
        href={destination}
        target="_blank"
        rel="noreferrer"
        onClick={(event) => {
          trackCta(cta.toUpperCase(), "programs_grid");
          if (portal) {
            forwardIclassProHandoff(event, { program_name: title, monthly_tuition: 0, source_section: "event_listings", destination_url: destination });
          } else {
            event.currentTarget.href = withCampaignAttribution(destination);
          }
        }}
      >
        {cta}<ExternalLink aria-hidden />
      </a>
    </Button>
  ) : (
    <Button asChild size="lg" variant="outline" className="h-14 w-full rounded-none border-ink-foreground/30 bg-transparent px-6 font-display text-xs font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink">
      <a href={siteConfig.phoneHref} onClick={() => trackCta("CALL FOR SPECTATOR DETAILS", "programs_grid")}>{cta}<Phone aria-hidden /></a>
    </Button>
  );

  return (
    <article className="grid overflow-hidden bg-ink text-ink-foreground sm:grid-cols-[.42fr_.58fr] lg:grid-cols-1">
      <div className="relative min-h-[260px] lg:min-h-[300px]"><img src={image} alt={imageAlt} width={900} height={700} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" /></div>
      <div className="flex flex-col p-7 sm:p-9">
        <div className="flex items-center gap-3"><Icon className="h-6 w-6 text-primary" aria-hidden /><p className="font-display text-xs font-black uppercase text-primary">{eyebrow}</p></div>
        <h3 className="mt-6 font-display text-2xl font-black uppercase leading-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 leading-7 text-ink-foreground/70">{description}</p>
        <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-6 text-ink-foreground/55">{details}</p>
        <div className="mt-auto pt-8">{action}</div>
      </div>
    </article>
  );
}

function CampsEventsPage() {
  return (
    <ProgramPage>
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-ink text-ink-foreground lg:min-h-[calc(100svh-5rem)]">
        <img src={heroFun} alt="Happy kids jumping, playing, and making friends during an active day at GAGE Center" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_44%,color-mix(in_oklab,var(--ink)_14%,transparent)_82%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-20">
          <div className="max-w-4xl">
            <p className="font-display text-xs font-black uppercase text-primary">GAGE Center · Blue Springs, MO</p>
            <p className="mt-4 font-display text-sm font-black uppercase">Camps, Parent Night Out & Seasonal Fun</p>
            <h1 className="mt-5 font-display text-[2.9rem] font-black uppercase leading-[.84] sm:text-[clamp(3.5rem,8.5vw,7.8rem)]">Big days. Bigger smiles.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-foreground/80 sm:text-lg">Active school break camps, weekend Parent Night Out, and seasonal events packed with gymnastics, ninja courses, inflatables, games, and new friendships. A high-energy experience kids look forward to all year.</p>
            <p className="mt-6 font-display text-xs font-black uppercase text-ink-foreground/70">Ages 4–14 · Full & half-day options · Open to everyone (no membership required)</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-16 rounded-none px-9 font-display text-sm font-black uppercase shadow-xl"><a href="#event-listings" onClick={(event) => { trackCta("EXPLORE EVENTS", "hero"); const target = document.querySelector("#event-listings"); if (target) { event.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); window.history.replaceState(null, "", "#event-listings"); } }}>Explore events<ArrowRight aria-hidden /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-16 rounded-none border-ink-foreground/40 bg-transparent px-8 font-display text-xs font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink"><a href={siteConfig.external.booking} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("CHECK AVAILABILITY IN PORTAL", "hero"); forwardIclassProHandoff(event, { program_name: "Camps & Events", monthly_tuition: 0, source_section: "events_hero", destination_url: siteConfig.external.booking }); }}>Check availability in portal<ExternalLink aria-hidden /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="event-listings" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl"><p className="eyebrow">Choose their next big day</p><h2 className="section-title mt-4">Something fun is always happening.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Explore seasonal adventures, weekend fun, little-kid play, and community events. Current dates and availability live in the registration destination linked on each card.</p></div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-2">
            <EventCard icon={TentTree} eyebrow="School breaks & summer" title="GAGE Summer & School Break Camps" description="Full-day and half-day options during summer, winter break, and spring break." details="Gymnastics fundamentals, ninja obstacle relays, trampoline bounce, games, crafts, and coach-led teamwork." image={ninja.url} imageAlt="Kids taking on a fun ninja course during a GAGE camp" cta="Check camp dates & register" destination={siteConfig.external.booking} portal />
            <EventCard icon={MoonStar} eyebrow="Select weekend evenings" title="Parent Night Out" description="Three to four hours of supervised active fun while parents enjoy a date night or an evening off." details="Inflatables, foam pits, games, and high-energy, coach-supervised play." image={birthday} imageAlt="Kids enjoying active group play at GAGE Parent Night Out" cta="View upcoming PNO dates" destination={siteConfig.external.booking} portal />
            <EventCard icon={Sparkles} eyebrow="Ages 1–5" title="Bump City Open Play & Toddler Time" description="Daytime open play in the Bump City inflatable arena and soft gym for little explorers." details="A playful place for little movers to bounce, climb, explore, and make discoveries." image={preschool.url} imageAlt="Little kids exploring colorful play equipment at GAGE" cta="View Bump City schedule" destination={siteConfig.external.bumpCity} />
            <EventCard icon={CalendarDays} eyebrow="Seasonal community events" title="Team Meets & Showcases" description="Dragon Invites and community showcase meets give families plenty of reasons to cheer on young athletes." details="Attendance and spectator information is shared as each event is confirmed." image={competitive} imageAlt="GAGE families cheering during a community gymnastics showcase" cta="Call for spectator details" />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">Zero stress. 100% active.</p><h2 className="section-title mt-4">A big day made easy.</h2></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">Kids get a full day of movement, friends, and fun. Parents get clear registration and a team ready to help.</p></div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{expectations.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-lg font-black uppercase text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <GoogleReviewsShowcase reviews={[googleReviews[2]]} />
      <ProgramFaq items={[...faqs]} />

      <section className="relative min-h-[620px] overflow-hidden bg-ink text-ink-foreground">
        <img src={heroFun} alt="Happy kids sharing an unforgettable active day at GAGE" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-55" /><div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center px-5 text-center"><p className="eyebrow">The next big day starts here</p><h2 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.88]">Give them an unforgettable day.</h2><p className="mt-6 max-w-xl text-lg text-ink-foreground/75">Active fun, big smiles, and memories that last long after pickup.</p><div className="mt-9 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center"><Button asChild size="lg" className="h-16 rounded-none px-9 font-display text-xs font-black uppercase shadow-xl"><a href={siteConfig.external.booking} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("VIEW CURRENT EVENTS IN PORTAL", "final_conversion"); forwardIclassProHandoff(event, { program_name: "Camps & Events", monthly_tuition: 0, source_section: "events_final_conversion", destination_url: siteConfig.external.booking }); }}>View current events in portal<ExternalLink aria-hidden /></a></Button><Button asChild size="lg" variant="outline" className="h-16 rounded-none border-ink-foreground/40 bg-transparent px-8 font-display text-sm font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink"><a href={siteConfig.phoneHref} onClick={() => trackCta(`CALL ${siteConfig.phoneDisplay}`, "final_conversion")}><Phone aria-hidden />Call {siteConfig.phoneDisplay}</a></Button></div></div>
      </section>
    </ProgramPage>
  );
}