import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Dumbbell, Medal, Move3d, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoogleReviewsShowcase, ProgramFaq, ProgramFinalCta, ProgramHero, ProgramPage } from "@/components/program-page";
import hero from "@/assets/gage-hero.jpg.asset.json";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import competitive from "@/assets/gage-competitive.jpg";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const Route = createFileRoute("/recreational-gymnastics")({
  head: () => ({
    meta: [
      { title: "Recreational Gymnastics in Blue Springs, MO | GAGE Center" },
      { name: "description", content: "Beginner girls and boys recreational gymnastics at GAGE Center in Blue Springs. Build strength, flexibility, coordination, and confidence. Level 1 tuition is $95 per month." },
      { property: "og:title", content: "Every Champion Starts Somewhere | GAGE Center" },
      { property: "og:description", content: "A positive, progressive introduction to recreational gymnastics for girls and boys at GAGE Center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecreationalGymnasticsPage,
});

const benefits = [
  { icon: Dumbbell, title: "Strength", text: "Gymnastics uses body weight and gravity to develop dynamic strength and core stability." },
  { icon: Move3d, title: "Flexibility", text: "Progressive movement helps athletes build the range and control behind safer skills." },
  { icon: Target, title: "Coordination", text: "Rolling, balancing, pushing, pulling, and landing connect the whole body." },
  { icon: Sparkles, title: "Confidence", text: "Positive coaching helps children embrace challenges and celebrate each achievement." },
  { icon: Medal, title: "Body control", text: "Correct technique and purposeful progressions turn energy into capable movement." },
] as const;

const girlsEvents = ["Vault", "Uneven bars", "Balance beam", "Floor exercise"];
const boysEvents = ["Floor exercise", "Pommel horse", "Still rings", "Vault", "Parallel bars", "High bar"];

const fundamentals = [
  "Body positions and shapes",
  "Rolls and basic tumbling",
  "Bar support and swinging",
  "Low beam balance and walks",
  "Springboard and jumping drills",
  "Safe landings and control",
];

const faqs = [
  { question: "What should my child wear?", answer: "Comfortable athletic clothing that moves easily and has no buttons, zippers, or belts — a leotard, or a fitted t-shirt with shorts or leggings, works well. Gymnasts train in bare feet, and long hair should be tied back. Please leave jewelry at home." },
  { question: "How does the free trial work?", answer: `Open the GAGE registration portal, choose a class that works for your family, then select Request a Trial and follow the steps. If you have any questions, call GAGE at ${siteConfig.phoneDisplay}.` },
  { question: "How is my child placed?", answer: "New gymnasts age 5 and up begin in a Level 1 class. Level 2 and above are progressive and invitation-only — coaches evaluate readiness and invite athletes forward as skills develop." },
  { question: "How often does my child attend?", answer: "Recreational gymnastics is one 50-minute class per week. You choose the day and time that fits your family from the live class list." },
  { question: "Can parents watch class?", answer: "Yes — parents are welcome to stay and watch from the comfortable viewing lobby while class is in session." },
];

function ProgramChoice({ name, description, events, url }: { name: string; description: string; events: string[]; url: string }) {
  return (
    <div className="grid gap-8 bg-ink p-7 text-ink-foreground sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
      <div><p className="font-display text-xs font-black uppercase text-primary">Beginner entry point</p><h3 className="mt-4 font-display text-3xl font-black uppercase sm:text-4xl">{name}</h3><p className="mt-4 max-w-2xl leading-7 text-ink-foreground/65">{description}</p><div className="mt-6 flex flex-wrap gap-2">{events.map((event) => <span key={event} className="border border-ink-foreground/20 px-3 py-2 font-display text-[10px] font-black uppercase text-ink-foreground/80">{event}</span>)}</div><p className="mt-7 font-display text-4xl font-black">$95<span className="text-sm text-ink-foreground/50">/month</span></p><p className="mt-2 text-xs leading-5 text-ink-foreground/50">Level 2+ is progressive and invitation-only following evaluation and placement.</p></div>
      <div><Button asChild size="lg" className="h-14 w-full rounded-none px-7 font-display text-xs font-black uppercase lg:w-auto"><a href={url} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: name, monthly_tuition: 95, source_section: "gymnastics_program_selector", destination_url: url }); }}>Choose this class<ArrowRight /></a></Button><p className="mt-3 max-w-xs text-xs leading-5 text-ink-foreground/50">{siteConfig.registration.trialNote}</p></div>
    </div>
  );
}

function RecreationalGymnasticsPage() {
  return (
    <ProgramPage>
      <ProgramHero eyebrow="Recreational gymnastics · Blue Springs" title="Every champion starts somewhere." message="Recreational gymnastics gives children a positive place to build strength, flexibility, coordination, and confidence through progressive skills and the joy of movement." image={hero.url} imageAlt="Young gymnast training with a GAGE coach" programName="Recreational Gymnastics" />

      <section className="py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="max-w-3xl"><p className="eyebrow">Choose their pathway</p><h2 className="section-title mt-4">Girls or boys. One strong beginning.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Both Level 1 programs welcome new families. Choose the class grouping that fits your child, then use GAGE’s live registration portal to find a class and request a trial.</p></div><Tabs defaultValue="girls" className="mt-12"><TabsList className="grid h-14 w-full grid-cols-2 rounded-none bg-secondary p-1 sm:max-w-md"><TabsTrigger value="girls" className="h-12 rounded-none font-display text-xs font-black uppercase">Girls gymnastics</TabsTrigger><TabsTrigger value="boys" className="h-12 rounded-none font-display text-xs font-black uppercase">Boys gymnastics</TabsTrigger></TabsList><TabsContent value="girls" className="mt-4"><ProgramChoice name="Girls Gymnastics Level 1" description="A welcoming start across the four women’s gymnastics events, with progressions that make each new skill and achievement visible." events={girlsEvents} url={siteConfig.external.girlsGymnasticsClasses} /></TabsContent><TabsContent value="boys" className="mt-4"><ProgramChoice name="Boys Gymnastics Level 1" description="A beginner-friendly pathway through the six men’s gymnastics events, building strength, control, technique, and courage." events={boysEvents} url={siteConfig.external.boysGymnasticsClasses} /></TabsContent></Tabs></div></section>

      <section className="bg-secondary py-20 sm:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">Why gymnastics</p><h2 className="section-title mt-4">Strong bodies. Brave minds.</h2></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">GAGE’s recreational curriculum pairs correct technique with a positive learning atmosphere, helping children grow physically, cognitively, and socially while having fun.</p></div><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">{benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-lg font-black uppercase text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="grid bg-ink text-ink-foreground lg:grid-cols-2"><div className="relative min-h-[480px] lg:min-h-[680px]"><img src={tumbling.url} alt="GAGE gymnast practicing in the gym" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex items-center px-5 py-20 sm:px-12 lg:px-16"><div className="max-w-xl"><p className="eyebrow">What they learn</p><h2 className="section-title mt-4 text-ink-foreground">A foundation across every event.</h2><p className="mt-6 text-lg leading-8 text-ink-foreground/70">Athletes learn foundational movement and correct technique through the events in their program. Every rotation develops a different combination of strength, balance, coordination, and spatial awareness.</p><div className="mt-9 grid grid-cols-2 gap-px bg-ink-foreground/15">{["Vault", "Bars", "Beam", "Floor", "Rings", "Pommel horse", "Parallel bars", "High bar"].map((event) => <div key={event} className="flex items-center gap-3 bg-ink p-4 text-sm font-bold"><Check className="h-4 w-4 text-primary" aria-hidden />{event}</div>)}</div><p className="mt-5 text-xs leading-5 text-ink-foreground/45">Event lineups differ between girls’ and boys’ programs.</p></div></div></section>

      <section className="grid bg-background lg:grid-cols-2"><div className="flex items-center px-5 py-20 sm:px-12 lg:px-16"><div className="max-w-xl"><p className="eyebrow">The GAGE standard</p><h2 className="section-title mt-4">Championship knowledge. A welcome for every beginner.</h2><p className="mt-7 text-xl leading-8 text-ink">GAGE’s competitive legacy reaches from Blue Springs to national teams and the Olympic stage.</p><p className="mt-5 leading-7 text-muted-foreground">That tradition informs a well-developed recreational curriculum led with positivity and enthusiasm. A child does not need a competitive goal to benefit from thoughtful coaching, correct technique, and the confidence that comes from making progress.</p><div className="mt-9 border-l-4 border-primary pl-5"><p className="font-display text-sm font-black uppercase text-ink">A legacy since 1979</p><p className="mt-2 text-sm leading-6 text-muted-foreground">GAGE’s women’s program has produced state, regional, national, and world champions, national team athletes, and Olympic medalists and alternates.</p></div></div></div><div className="relative min-h-[520px]"><img src={competitive} alt="GAGE gymnast and coach training on balance beam" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div></section>

      <section className="py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Tuition & progression</p><h2 className="section-title mt-4">Start at Level 1.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">Level 1 is the clear entry point for new girls and boys. Advanced levels build progressively and require coach evaluation and invitation.</p></div><div className="grid gap-px bg-border sm:grid-cols-2"><div className="bg-ink p-8 text-ink-foreground"><p className="font-display text-xs font-black uppercase text-primary">Girls Level 1</p><p className="mt-8 font-display text-5xl font-black">$95<span className="text-sm text-ink-foreground/50">/month</span></p><p className="mt-4 text-sm text-ink-foreground/60">Beginner entry point · Trial available</p></div><div className="bg-ink p-8 text-ink-foreground"><p className="font-display text-xs font-black uppercase text-primary">Boys Level 1</p><p className="mt-8 font-display text-5xl font-black">$95<span className="text-sm text-ink-foreground/50">/month</span></p><p className="mt-4 text-sm text-ink-foreground/60">Beginner entry point · Trial available</p></div><div className="bg-secondary p-8 sm:col-span-2"><p className="font-display text-xs font-black uppercase text-accent">Level 2 and above</p><p className="mt-3 font-display text-2xl font-black uppercase text-ink">Invitation / evaluation only</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Advanced levels are not recommended as starting points for new families. Coaches guide placement as athletes progress.</p></div></div></div></div></section>

      <GoogleReviewsShowcase reviews={[googleReviewsGymnastics]} />
      <ProgramFaq items={faqs} />
      <ProgramFinalCta image={tumbling.url} imageAlt="GAGE gymnast building skills in the gym" programName="Recreational Gymnastics" />
    </ProgramPage>
  );
}

const googleReviewsGymnastics = {
  quote: "My daughter loves her coaches at Gage! She has learned so much and loves to show us everything she has learned every week!",
  attribution: "GAGE parent",
  experience: "Gymnastics",
} as const;