import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Footprints, HeartHandshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviewsShowcase, ProgramFaq, ProgramFinalCta, ProgramHero, ProgramPage, googleReviews } from "@/components/program-page";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import birthdayPhoto from "@/assets/gage-preschool.jpg.asset.json";
const birthday = birthdayPhoto.url;
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const Route = createFileRoute("/tumbling")({
  head: () => ({
    meta: [
      { title: "Tumbling & Trampoline Classes Ages 5–18 | GAGE Center" },
      { name: "description", content: "Tumbling and trampoline classes for ages 5–18 in Blue Springs, MO. Spring floors, rod tracks, and in-ground trampolines for kids, dancers, and cheerleaders. $95/month, free trial available." },
      { property: "og:title", content: "Build the Skills. Land the Moment. | GAGE Center" },
      { property: "og:description", content: "Floor, flips, trampolines, and power. Tumbling & trampoline classes for ages 5–18 at GAGE Center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TumblingPage,
});

const benefitsFull = [
  { icon: Footprints, title: "Pure floor & trampoline", text: "Dedicated training on spring floors, rod tracks, in-ground trampolines, and soft foam pits — without bars or beam." },
  { icon: Dumbbell, title: "Explosive power & agility", text: "Fast-twitch muscle power, strong core stability, and confident spatial awareness in the air." },
  { icon: HeartHandshake, title: "Great for cheer, dance & sports", text: "The training destination for athletes wanting to level up jumps, handsprings, tucks, and aerials." },
  { icon: TrendingUp, title: "Step-by-step progression", text: "Safe spotting techniques and incremental progressions so athletes try new skills without fear." },
] as const;

const equipment = [
  "Spring floors",
  "Rod tumbling tracks",
  "In-ground trampolines",
  "Tumble tracks",
  "Resi-pits",
  "Foam landing blocks",
] as const;

const faqs = [
  { question: "Is this good for cheerleaders and dancers?", answer: "Yes — tumbling is designed for athletes who want floor power and aerial agility. It's a favorite training ground for cheerleaders, dancers, and athletes in other sports." },
  { question: "Do tumbling classes use bars or balance beams?", answer: "No. Tumbling is a pure focus on the spring floor, rod track, and trampolines — everything is about power, flips, and airtime." },
  { question: "What should athletes wear?", answer: "Fitted athletic clothing they can move freely in, with clean cheer shoes or bare feet. Long hair should be secured, and jewelry is best left at home." },
  { question: "How does the free trial work?", answer: `Open the GAGE registration portal, select a tumbling class that works for your family, then select Request a Trial and follow the steps. Questions? Call GAGE at ${siteConfig.phoneDisplay}.` },
] as const;

const levels = [
  {
    eyebrow: "Beginner · Ages 5+",
    name: "Level 1 Tumbling",
    description: "Rolls, cartwheels, bridges, handstands, and trampoline rebound control — the fundamentals every flip is built on.",
    price: "$95",
  },
  {
    eyebrow: "Intermediate",
    name: "Level 2 Tumbling",
    description: "Strong roundoffs, walkovers, handspring prep, and power rebounds as skills start connecting.",
    price: "$95",
  },
  {
    eyebrow: "Advanced",
    name: "Level 3 Tumbling",
    description: "Standing & running back handsprings, tucks, layouts, and connected passes for experienced tumblers.",
    price: "$95",
  },
] as const;

function TumblingLevelCard({ eyebrow, name, description, price }: { eyebrow: string; name: string; description: string; price: string }) {
  return (
    <div className="flex flex-col bg-ink p-8 text-ink-foreground sm:p-10">
      <p className="font-display text-xs font-black uppercase text-primary">{eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl font-black uppercase sm:text-3xl">{name}</h3>
      <p className="mt-4 leading-7 text-ink-foreground/65">{description}</p>
      <p className="mt-8 font-display text-4xl font-black">{price}<span className="text-sm text-ink-foreground/50">/month</span></p>
      <p className="mt-2 font-display text-xs font-black uppercase text-ink-foreground/60">One 50-minute class per week</p>
      <div className="mt-auto pt-8">
        <Button asChild size="lg" className="h-14 w-full rounded-none px-7 font-display text-xs font-black uppercase">
          <a
            href={siteConfig.external.classes}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => { trackCta("VIEW TUMBLING CLASSES & TRY FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: name, monthly_tuition: 95, source_section: "tumbling_class_options", destination_url: siteConfig.external.classes }); }}
          >
            View tumbling classes & try free<ArrowRight aria-hidden />
          </a>
        </Button>
        <p className="mt-3 text-xs leading-5 text-ink-foreground/50">{siteConfig.registration.trialNote}</p>
      </div>
    </div>
  );
}

function TumblingPage() {
  return (
    <ProgramPage>
      <ProgramHero
        eyebrow="Ages 5–18 · Blue Springs, MO"
        title="Build the skills. Land the moment."
        subheadline="Floor, flips, trampolines, and power."
        message="Focused tumbling and trampoline instruction designed for kids, dancers, cheerleaders, and athletes. From learning their first cartwheel to mastering back handsprings and aerials, kids develop explosive power and fearless confidence."
        details="Ages 5–18 · $95/mo · Free trial available"
        image={tumbling.url}
        imageAlt="Kids tumbling and flipping on the spring floor at GAGE"
        programName="Tumbling"
        ctaAnchor="#choose-program"
      />

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="eyebrow">Fun first. Growth follows.</p><h2 className="section-title mt-4">Power they can feel.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Every class builds strength, airtime, and confidence — one skill, one breakthrough at a time.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {benefitsFull.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-lg font-black uppercase text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-ink-foreground lg:grid-cols-2">
        <div className="relative min-h-[480px] lg:min-h-[680px]">
          <img src={tumbling.url} alt="A gymnast training on the rod tumbling track at GAGE" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="eyebrow">The setup</p>
            <h2 className="section-title mt-4 text-ink-foreground">Built to bounce.</h2>
            <p className="mt-6 text-lg leading-8 text-ink-foreground/70">Everything in the tumbling gym exists for one reason: helping athletes flip higher, spin faster, and land softer.</p>
            <div className="mt-9 grid gap-px bg-ink-foreground/15 sm:grid-cols-2">
              {equipment.map((item) => <div key={item} className="flex items-center gap-3 bg-ink p-4 text-sm font-bold"><Footprints className="h-4 w-4 text-primary" aria-hidden />{item}</div>)}
            </div>
            <p className="mt-8 font-display text-xs font-black uppercase text-primary">No experience needed to start — Level 1 welcomes first-timers.</p>
          </div>
        </div>
      </section>

      <section id="choose-program" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Class pathways</p>
            <h2 className="section-title mt-4">Let's find their level.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Three pathways, one simple rate. Every level is $95/month with one 50-minute class per week — and every athlete progresses at their own pace with coaches guiding the way.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
            {levels.map((level) => <TumblingLevelCard key={level.name} eyebrow={level.eyebrow} name={level.name} description={level.description} price={level.price} />)}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-muted-foreground">Not sure which level fits? Start with Level 1 — coaches will place every athlete where they can shine.</p>
        </div>
      </section>

      <GoogleReviewsShowcase reviews={[googleReviews[0]]} />
      <ProgramFaq items={[...faqs]} />
      <ProgramFinalCta
        image={birthday}
        imageAlt="A happy kid mid-jump at GAGE"
        programName="Tumbling"
        eyebrow="It starts with one try"
        headline={<>Ready to flip?</>}
        body={<>Their next breakthrough is one class away.</>}
        ctaLabel="Try a tumbling class free"
        ctaAnchor="#choose-program"
      />
    </ProgramPage>
  );
}
