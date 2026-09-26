import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Sparkles, Activity, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviewsShowcase, ProgramFaq, ProgramFinalCta, ProgramHero, ProgramPage, googleReviews } from "@/components/program-page";
import ninja from "@/assets/gage-ninja.jpg.asset.json";
import heroFunPhoto from "@/assets/gage-ninja.jpg.asset.json";
const heroFun = heroFunPhoto.url;
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const Route = createFileRoute("/dragon-ninja")({
  head: () => ({
    meta: [
      { title: "Dragon Ninja Obstacle Classes Ages 5–14 | GAGE Center" },
      { name: "description", content: "Fun Ninja obstacle classes for ages 5–14 in Blue Springs, MO. Kids climb, jump, swing, and build confidence while letting their energy loose. From $85/month, free trial available." },
      { property: "og:title", content: "Adventure Starts Here | GAGE Center" },
      { property: "og:description", content: "Climb. Jump. Conquer. Repeat. Dragon Ninja obstacle classes for ages 5–14 at GAGE Center." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DragonNinjaPage,
});

const benefits = [
  { icon: Zap, title: "All that energy.", text: "High energy gets channeled into climbing, vaulting, swinging, and conquering obstacle after obstacle." },
  { icon: Activity, title: "Agility & balance.", text: "Full-body coordination, grip strength, spatial awareness, and balance — all built through play." },
  { icon: Sparkles, title: "Real confidence.", text: "Conquering an obstacle they didn't think they could do sparks genuine, ear-to-ear pride." },
  { icon: HeartHandshake, title: "Teamwork & high-fives.", text: "Friends cheer each other through the course in a supportive, everyone-belongs environment." },
] as const;

const obstacles = [
  "Warped walls",
  "Cargo nets",
  "Ring swings",
  "Balance tracks",
  "Precision jumps",
  "Safe landing techniques",
] as const;

const faqs = [
  { question: "What should my child wear?", answer: "Comfortable athletic clothes they can move, climb, and jump in. Depending on the class setup, kids train in clean sneakers or bare feet, and long hair should be tied back. Please leave jewelry at home." },
  { question: "How does the free trial work?", answer: `Open the GAGE registration portal, choose a Ninja class that works for your family, then select Request a Trial and follow the steps. If you have any questions, call GAGE at ${siteConfig.phoneDisplay}.` },
  { question: "Does my child need ninja or gymnastics experience?", answer: "No experience needed at all. Beginners start right away, and every class welcomes first-timers — kids build skills one obstacle at a time with coaches cheering them on." },
  { question: "Can parents watch class?", answer: "Yes — parents are welcome to stay and watch from the comfortable viewing lobby while class is in session." },
] as const;

function NinjaClassOption({ eyebrow, name, description, price, priceNote, tuition, note }: { eyebrow: string; name: string; description: string; price: string; priceNote: string; tuition: number; note: string }) {
  return (
    <div className="flex flex-col bg-ink p-8 text-ink-foreground sm:p-10">
      <p className="font-display text-xs font-black uppercase text-primary">{eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl font-black uppercase sm:text-3xl">{name}</h3>
      <p className="mt-4 leading-7 text-ink-foreground/65">{description}</p>
      <p className="mt-8 font-display text-4xl font-black">{price}<span className="text-sm text-ink-foreground/50">/month</span></p>
      <p className="mt-2 font-display text-xs font-black uppercase text-ink-foreground/60">{priceNote}</p>
      <div className="mt-auto pt-8">
        <Button asChild size="lg" className="h-14 w-full rounded-none px-7 font-display text-xs font-black uppercase">
          <a
            href={siteConfig.external.ninjaClasses}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => { trackCta("VIEW NINJA CLASSES & TRY FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: name, monthly_tuition: tuition, source_section: "ninja_class_options", destination_url: siteConfig.external.ninjaClasses }); }}
          >
            View ninja classes & try free<ArrowRight aria-hidden />
          </a>
        </Button>
        <p className="mt-3 text-xs leading-5 text-ink-foreground/50">{note}</p>
      </div>
    </div>
  );
}

function DragonNinjaPage() {
  return (
    <ProgramPage>
      <ProgramHero
        eyebrow="Ages 5–14 · Blue Springs, MO"
        title="Adventure starts here."
        subheadline="Climb. Jump. Conquer. Repeat."
        message="Dragon Ninja turns active energy into agility, strength, and confidence through exciting obstacle courses, supportive coaching, and a whole lot of fun."
        details="Ages 5–14 · From $85/mo daytime · $95/mo standard · Free trial available"
        image={ninja.url}
        imageAlt="Kids conquering the Dragon Ninja obstacle course at GAGE"
        programName="Ninja Warrior Training"
        ctaAnchor="#ninja-classes"
      />

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="eyebrow">Fun first. Growth follows.</p><h2 className="section-title mt-4">More than a class. A quest.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Every class is a new adventure — and every kid leaves a little stronger, a little braver, and a lot prouder.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-lg font-black uppercase text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-ink-foreground lg:grid-cols-2">
        <div className="relative min-h-[480px] lg:min-h-[680px]">
          <img src={heroFun} alt="Happy kids jumping mid-air during a GAGE class" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="eyebrow">What kids do</p>
            <h2 className="section-title mt-4 text-ink-foreground">The obstacle experience.</h2>
            <p className="mt-6 text-lg leading-8 text-ink-foreground/70">Warped walls, cargo nets, ring swings, balance tracks, precision jumps — and coaches who teach safe landings every step of the way.</p>
            <div className="mt-9 grid gap-px bg-ink-foreground/15 sm:grid-cols-2">
              {obstacles.map((item) => <div key={item} className="flex items-center gap-3 bg-ink p-4 text-sm font-bold"><Sparkles className="h-4 w-4 text-primary" aria-hidden />{item}</div>)}
            </div>
            <p className="mt-8 font-display text-xs font-black uppercase text-primary">No ninja or gymnastics background needed — beginners start right away.</p>
          </div>
        </div>
      </section>

      <section id="ninja-classes" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Class options</p>
            <h2 className="section-title mt-4">Pick their adventure time.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Both options are one 50-minute class per week, month to month, with a free trial in the live registration portal.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-2">
            <NinjaClassOption
              eyebrow="After school & weekends"
              name="Standard Dragon Ninja"
              description="The full obstacle-course experience — climbing, swinging, vaulting, and conquering new challenges with friends."
              price="$95"
              priceNote="One 50-minute class per week"
              tuition={95}
              note={siteConfig.registration.trialNote}
            />
            <NinjaClassOption
              eyebrow="Homeschool & flexible schedules"
              name="Daytime Dragon Ninja"
              description="The same high-energy obstacle fun, scheduled earlier in the day for homeschool and flexible routines."
              price="From $85"
              priceNote="One 50-minute class per week"
              tuition={85}
              note={siteConfig.registration.trialNote}
            />
          </div>
        </div>
      </section>

      <GoogleReviewsShowcase reviews={[googleReviews[2]]} />
      <ProgramFaq items={[...faqs]} />
      <ProgramFinalCta
        image={tumbling.url}
        imageAlt="Kids celebrating a victory in a GAGE class"
        programName="Ninja Warrior Training"
        eyebrow="It starts with one try"
        headline={<>Ready for the course?</>}
        body={<>Their next adventure is one class away.</>}
        ctaLabel="Try a ninja class free"
        ctaAnchor="#ninja-classes"
      />
    </ProgramPage>
  );
}
