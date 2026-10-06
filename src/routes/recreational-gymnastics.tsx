import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Laugh, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoogleReviewsShowcase, ProgramFaq, ProgramFinalCta, ProgramHero, ProgramPage } from "@/components/program-page";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";
import { photos } from "@/data/photos";

export const Route = createFileRoute("/recreational-gymnastics")({
  head: () => ({
    meta: [
      { title: "Recreational Gymnastics in Blue Springs, MO | GAGE Center" },
      { name: "description", content: "Fun, beginner-friendly girls and boys recreational gymnastics at GAGE Center in Blue Springs. Ages 5+, $95/month, free trial available. No experience needed to start." },
      { property: "og:title", content: "It Starts With One Try | GAGE Center" },
      { property: "og:description", content: "One class. A whole lot of fun. Recreational gymnastics for girls and boys ages 5+ at GAGE Center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecreationalGymnasticsPage,
});

const benefits = [
  { icon: Laugh, title: "All the fun.", text: "Jumping, rolling, balancing, swinging and discovering new ways to move." },
  { icon: Sparkles, title: "All the confidence.", text: "Trying something new, celebrating small victories, and seeing what they can do." },
  { icon: HeartHandshake, title: "All the friendships.", text: "Learning alongside other kids and enjoying the experience together." },
  { icon: Zap, title: "All that energy? Bring it.", text: "A fun, active way to move, play and explore." },
] as const;

const firstMoments = [
  "First cartwheels and rolls",
  "Big jumps and bouncy landings",
  "Brave walks on the balance beam",
  "Swinging and hanging on the bars",
  "High-fives for every new skill",
  "Making friends along the way",
];

const faqs = [
  { question: "What should my child wear?", answer: "Comfortable athletic clothing that moves easily and has no buttons, zippers, or belts — a leotard, or a fitted t-shirt with shorts or leggings, works well. No shoes in any class — gymnasts train in bare feet, and long hair should be tied back. Please leave jewelry at home." },
  { question: "How does the free trial work?", answer: `Open the GAGE registration portal, choose a class that works for your family, then select Request a Trial and follow the steps. If you have any questions, call GAGE at ${siteConfig.phoneDisplay}.` },
  { question: "How is my child placed?", answer: "New gymnasts age 5 and up begin in a Level 1 class. Level 2 and above are progressive and invitation-only — coaches evaluate readiness and invite gymnasts forward as skills develop." },
  { question: "How often does my child attend?", answer: "Recreational gymnastics is one 50-minute class per week. You choose the day and time that fits your family from the live class list." },
  { question: "Can parents watch class?", answer: "Yes — parents are welcome to stay and watch from the comfortable viewing lobby while class is in session." },
];

function ProgramChoice({ name, description, ctaLabel, url }: { name: string; description: string; ctaLabel: string; url: string }) {
  return (
    <div className="grid gap-8 bg-ink p-7 text-ink-foreground sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
      <div><p className="font-display text-xs font-black uppercase text-primary">Beginner class · Ages 5+</p><h3 className="mt-4 font-display text-3xl font-black uppercase sm:text-4xl">{name}</h3><p className="mt-4 max-w-2xl leading-7 text-ink-foreground/65">{description}</p><p className="mt-5 font-display text-xs font-black uppercase text-ink-foreground/70">Ages 5+ · One 50-minute class per week</p><p className="mt-7 font-display text-4xl font-black">$95<span className="text-sm text-ink-foreground/50">/month</span></p><p className="mt-2 text-xs leading-5 text-ink-foreground/50">Level 2+ is invitation-only as gymnasts progress.</p></div>
      <div><Button asChild size="lg" className="h-14 w-full rounded-none px-7 font-display text-xs font-black uppercase lg:w-auto"><a href={url} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("TRY A CLASS FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: name, monthly_tuition: 95, source_section: "gymnastics_program_selector", destination_url: url }); }}>{ctaLabel}<ArrowRight /></a></Button><p className="mt-3 max-w-xs text-xs leading-5 text-ink-foreground/50">{siteConfig.registration.trialNote}</p></div>
    </div>
  );
}

function RecreationalGymnasticsPage() {
  return (
    <ProgramPage>
      <ProgramHero eyebrow="Recreational gymnastics · Blue Springs" title="It starts with one try." message="From first cartwheels to new friendships, GAGE is a place for kids to move, learn, laugh, and discover something they love." details="Ages 5+ · $95/month · $44 one-time registration fee · Free trial available" image={photos.rehero.src} imageAlt={photos.rehero.alt} programName="Recreational Gymnastics" ctaAnchor="#choose-program" />

      <section id="choose-program" className="scroll-mt-24 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="max-w-3xl"><p className="eyebrow">Girls or boys</p><h2 className="section-title mt-4">Let's find their class.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Two great ways to get started. Choose the program that fits your child.</p></div><Tabs defaultValue="girls" className="mt-12"><TabsList className="grid h-14 w-full grid-cols-2 rounded-none bg-secondary p-1 sm:max-w-md"><TabsTrigger value="girls" className="h-12 rounded-none font-display text-xs font-black uppercase">Girls gymnastics</TabsTrigger><TabsTrigger value="boys" className="h-12 rounded-none font-display text-xs font-black uppercase">Boys gymnastics</TabsTrigger></TabsList><TabsContent value="girls" className="mt-4"><ProgramChoice name="Girls Recreational Gymnastics" description="Cartwheels, balance, movement and new skills in a fun, encouraging class." ctaLabel="View girls classes & try free" url={siteConfig.external.girlsGymnasticsClasses} /></TabsContent><TabsContent value="boys" className="mt-4"><ProgramChoice name="Boys Recreational Gymnastics" description="Jump, swing, roll and explore gymnastics while building new skills and having fun." ctaLabel="View boys classes & try free" url={siteConfig.external.boysGymnasticsClasses} /></TabsContent></Tabs></div></section>

      <section className="bg-secondary py-20 sm:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">Why kids love it</p><h2 className="section-title mt-4">Their favorite hour of the week.</h2></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">An activity they'll look forward to. Skills they'll be proud of. And plenty of smiles along the way.</p></div><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-lg font-black uppercase text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="grid bg-ink text-ink-foreground lg:grid-cols-2"><div className="relative min-h-[480px] lg:min-h-[680px]"><img src={photos.beginner.src} alt={photos.beginner.alt} width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex items-center px-5 py-20 sm:px-12 lg:px-16"><div className="max-w-xl"><p className="eyebrow">New to gymnastics?</p><h2 className="section-title mt-4 text-ink-foreground">New to gymnastics? Perfect.</h2><p className="mt-6 text-lg leading-8 text-ink-foreground/70">Every child starts somewhere. Whether yours loves doing cartwheels in the living room or is trying gymnastics for the very first time, GAGE gives them a place to explore, learn, and have fun.</p><div className="mt-9 grid gap-px bg-ink-foreground/15 sm:grid-cols-2">{firstMoments.map((item) => <div key={item} className="flex items-center gap-3 bg-ink p-4 text-sm font-bold"><Sparkles className="h-4 w-4 text-primary" aria-hidden />{item}</div>)}</div><p className="mt-8 font-display text-xs font-black uppercase text-primary">No gymnastics experience needed to start in a beginner class.</p></div></div></section>

      <section className="grid bg-background lg:grid-cols-2"><div className="flex items-center px-5 py-20 sm:px-12 lg:px-16"><div className="max-w-xl"><p className="eyebrow">More than skills</p><h2 className="section-title mt-4">A great place to be a kid.</h2><p className="mt-7 text-xl leading-8 text-ink">At GAGE, gymnastics is about more than learning new skills. It's about the excitement of trying, the pride of improving, and the fun of being part of something.</p><p className="mt-5 leading-7 text-muted-foreground">Big smiles. Little victories. Great memories. That's what we're here for.</p><div className="mt-9 border-l-4 border-primary pl-5"><p className="font-display text-sm font-black uppercase text-ink">Encouraging coaches. Welcoming classes.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Friendly coaches cheer every attempt, celebrate every milestone, and help every child leave class a little prouder than they arrived.</p></div></div></div><div className="relative min-h-[520px]"><img src={photos.careerhero.src} alt={photos.careerhero.alt} width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div></section>

      <section className="py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Simple tuition</p><h2 className="section-title mt-4">One simple price.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">Both beginner programs are one 50-minute class per week, month to month. Free trials are available in the live registration portal.</p></div><div className="grid gap-px bg-border sm:grid-cols-2"><div className="bg-ink p-8 text-ink-foreground"><p className="font-display text-xs font-black uppercase text-primary">Girls Recreational</p><p className="mt-8 font-display text-5xl font-black">$95<span className="text-sm text-ink-foreground/50">/month</span></p><p className="mt-4 text-sm text-ink-foreground/60">Ages 5+ · One 50-minute class per week · Trial available</p></div><div className="bg-ink p-8 text-ink-foreground"><p className="font-display text-xs font-black uppercase text-primary">Boys Recreational</p><p className="mt-8 font-display text-5xl font-black">$95<span className="text-sm text-ink-foreground/50">/month</span></p><p className="mt-4 text-sm text-ink-foreground/60">Ages 5+ · One 50-minute class per week · Trial available</p></div><div className="bg-secondary p-8 sm:col-span-2"><p className="font-display text-xs font-black uppercase text-accent">Level 2 and above</p><p className="mt-3 font-display text-2xl font-black uppercase text-ink">Invitation only</p><p className="mt-3 text-sm leading-6 text-muted-foreground">As gymnasts progress, advanced levels are joined by coach invitation. Every new gymnast starts in a beginner class.</p></div></div></div></div></section>

      <GoogleReviewsShowcase reviews={[googleReviewsGymnastics]} />
      <ProgramFaq items={faqs} />
      <ProgramFinalCta image={photos.rec.src} imageAlt={photos.rec.alt} eyebrow="Come and see" headline={<>The fun starts here.</>} body={<>Their next favorite activity might be just one class away.<br />Come see what GAGE is all about.</>} ctaLabel="Find their class" ctaAnchor="#choose-program" programName="Recreational Gymnastics" />
    </ProgramPage>
  );
}

const googleReviewsGymnastics = {
  quote: "My daughter loves her coaches at Gage! She has learned so much and loves to show us everything she has learned every week!",
  attribution: "GAGE parent",
  experience: "Gymnastics",
} as const;
