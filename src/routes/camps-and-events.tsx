import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, ExternalLink, MoonStar, Phone, ShieldCheck, Snowflake, Sparkles, TentTree, ThermometerSun, TicketCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviewsShowcase, ProgramFaq, ProgramPage, googleReviews } from "@/components/program-page";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta, withCampaignAttribution } from "@/lib/analytics";
import { photos } from "@/data/photos";

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
  { icon: ThermometerSun, title: "Big indoor gym", text: "A climate-controlled gym with trampolines, air pits, and ninja obstacles." },
  { icon: Users, title: "Open to everyone", text: "Your child does not need to be enrolled in weekly classes to join camps or Parent Night Out." },
  { icon: TicketCheck, title: "Convenient registration", text: "Fast online booking and payment for each camp and event." },
] as const;

const faqs = [
  { question: "What should campers bring?", answer: "Pack a peanut-free sack lunch or snack, a refillable water bottle, and comfortable athletic clothes made for active play." },
  { question: "Does my child need gymnastics experience?", answer: "None at all. Our camps and events are designed for kids of every experience level to have fun, make friends, and move." },
  { question: "How do we sign up?", answer: `Camps and Parent Night Out are booked online through Bump City's booking page, or call us at ${siteConfig.phoneDisplay}. Each listing shows current availability and details.` },
  { question: "What ages can attend?", answer: "Ages vary by camp and event. Each booking listing shows its confirmed age range — or call us and we will help." },
] as const;

type EventCardProps = {
  contactLink?: boolean;
  to?: "/contact" | "/christmas-clinic";
  icon: typeof TentTree;
  eyebrow: string;
  title: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  cta: string;
  destination?: string;
  portal?: boolean;
};

function EventCard({ icon: Icon, eyebrow, title, description, details, image, imageAlt, imagePosition, cta, destination, portal, contactLink, to }: EventCardProps) {
  const action = contactLink ? (
    <Button asChild size="lg" className="h-14 w-full rounded-none px-6 font-display text-xs font-black uppercase">
      <Link to={to ?? "/contact"} onClick={() => trackCta(cta.toUpperCase(), "programs_grid")}>{cta}<ArrowRight aria-hidden /></Link>
    </Button>
  ) : destination ? (
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
      <a href={siteConfig.phoneHref} onClick={() => trackCta(cta.toUpperCase(), "programs_grid")}>{cta}<Phone aria-hidden /></a>
    </Button>
  );

  return (
    <article className="grid overflow-hidden bg-ink text-ink-foreground sm:grid-cols-[.42fr_.58fr] lg:grid-cols-1">
      <div className="relative min-h-[260px] lg:min-h-[300px]"><img src={image} alt={imageAlt} width={900} height={700} loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${imagePosition ?? "object-center"}`} /><div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" /></div>
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
        <img src={photos.cahero.src} alt={photos.cahero.alt} width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_44%,color-mix(in_oklab,var(--ink)_14%,transparent)_82%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-20">
          <div className="max-w-4xl">
            <p className="font-display text-xs font-black uppercase text-primary">GAGE Center · Blue Springs, MO</p>
            <p className="mt-4 font-display text-sm font-black uppercase">Camps & Events</p>
            <h1 className="mt-5 font-display text-[2.9rem] font-black uppercase leading-[.84] sm:text-[clamp(3.5rem,8.5vw,7.8rem)]">Big days. Bigger smiles.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-foreground/80 sm:text-lg">Active school break camps, weekend Parent Night Out, and seasonal events packed with gymnastics, ninja obstacles, games, and new friendships. A high-energy experience kids look forward to all year.</p>
            <p className="mt-6 font-display text-xs font-black uppercase text-ink-foreground/70">Open to everyone · No weekly class membership required</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-16 rounded-none px-9 font-display text-sm font-black uppercase shadow-xl"><a href="#event-listings" onClick={(event) => { trackCta("EXPLORE EVENTS", "hero"); const target = document.querySelector("#event-listings"); if (target) { event.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); window.history.replaceState(null, "", "#event-listings"); } }}>Explore events<ArrowRight aria-hidden /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-16 rounded-none border-ink-foreground/40 bg-transparent px-8 font-display text-xs font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink"><a href={siteConfig.external.rollerEvents} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("VIEW CURRENT EVENTS", "hero"); event.currentTarget.href = withCampaignAttribution(siteConfig.external.rollerEvents); }}>View current events<ExternalLink aria-hidden /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="camps" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl"><p className="eyebrow">Camps & Events</p><h2 className="section-title mt-4">More time to move, learn, and play.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">School-break camps and skill clinics. Current dates, ages, and availability are listed with each booking page.</p></div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-2 [&>article:last-child]:lg:col-span-2 [&>article:last-child]:lg:grid-cols-2">
            <EventCard icon={TentTree} eyebrow="Camp days · School breaks & summer" title="Bump City Adventure Club" description="Camp days during school breaks and summer. Booking details are coming soon — contact GAGE to ask about ages, dates, and availability." details="Gymnastics, ninja obstacles, trampoline fun, games, and coach-led teamwork." image={photos.camp.src} imageAlt={photos.camp.alt} imagePosition="object-[center_30%]" cta="Ask About Adventure Club" contactLink />
            <EventCard icon={CalendarDays} eyebrow="Clinics & team camps" title="Clinics & Team Gymnastics Camps" description="Focused skill clinics and team camps are offered seasonally. Call the office to hear what's coming up and who it's for." details="Team camps are separate from recreational camps and Parent Night Out." image={photos.rec.src} imageAlt={photos.rec.alt} imagePosition="object-top" cta="Call for current clinics" />
            <EventCard icon={Snowflake} eyebrow="Clinic · December 28–29, 2026" title="2026 GAGE Christmas Clinic" description="Two days of fresh drills, dance ideas, and confidence-building for Bronze, Silver, and Levels 3–5 gymnasts and their coaches." details="Blue Springs, Missouri · $150 clinic fee" image={photos.rehero.src} imageAlt="GAGE coach spotting a young gymnast on the bar" imagePosition="object-[center_25%]" cta="Explore the Christmas Clinic" contactLink to="/christmas-clinic" />
          </div>
        </div>
      </section>

      <section id="event-listings" className="scroll-mt-24 bg-secondary py-20 sm:py-28">
        <div id="events" className="mx-auto max-w-[1440px] scroll-mt-24 px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl"><p className="eyebrow">Events</p><h2 className="section-title mt-4">Special nights and family events.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Each card tells you what it is, who it's for, and where to check current dates.</p></div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-2 [&>article:last-child]:lg:col-span-2 [&>article:last-child]:lg:grid-cols-2">
            <EventCard icon={MoonStar} eyebrow="For kids · Select evenings" title="Parent Night Out" description="A fun night for them. A night off for you." details="Games and coach-supervised active play. See upcoming dates and ages on the booking page." image={photos.friends.src} imageAlt={photos.friends.alt} cta="See upcoming dates" destination={siteConfig.external.parentNightOut} />
            <EventCard icon={Sparkles} eyebrow="For families with little ones" title="Bump City Open Play" description="Climb, jump, swing and play." details="Open play schedule and details live on the Bump City site." image={photos.play.src} imageAlt={photos.play.alt} cta="Explore Bump City" destination={siteConfig.external.bumpCity} />
            <EventCard icon={CalendarDays} eyebrow="For families & spectators" title="Meets & Showcases" description="Dragon Invites and showcase meets — come cheer on GAGE gymnasts." details="Attendance and spectator information is shared as each event is confirmed." image={photos.beginner.src} imageAlt={photos.beginner.alt} cta="Call for spectator details" />
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
        <img src={photos.careerhero.src} alt={photos.careerhero.alt} width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-55" /><div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center px-5 text-center"><p className="eyebrow">The next big day starts here</p><h2 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.88]">Give them an unforgettable day.</h2><p className="mt-6 max-w-xl text-lg text-ink-foreground/75">Active fun, big smiles, and memories that last long after pickup.</p><div className="mt-9 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center"><Button asChild size="lg" className="h-16 rounded-none px-9 font-display text-xs font-black uppercase shadow-xl"><a href={siteConfig.external.rollerEvents} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("VIEW CURRENT EVENTS", "final_conversion"); event.currentTarget.href = withCampaignAttribution(siteConfig.external.rollerEvents); }}>View current events<ExternalLink aria-hidden /></a></Button><Button asChild size="lg" variant="outline" className="h-16 rounded-none border-ink-foreground/40 bg-transparent px-8 font-display text-sm font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink"><a href={siteConfig.phoneHref} onClick={() => trackCta(`CALL ${siteConfig.phoneDisplay}`, "final_conversion")}><Phone aria-hidden />Call {siteConfig.phoneDisplay}</a></Button></div></div>
      </section>
    </ProgramPage>
  );
}