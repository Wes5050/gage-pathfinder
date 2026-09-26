import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Blocks, Heart, Smile, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviewsShowcase, ProgramFaq, ProgramFinalCta, ProgramHero, ProgramPage, googleReviews } from "@/components/program-page";
import preschool from "@/assets/gage-preschool.jpg.asset.json";
import birthdayPhoto from "@/assets/gage-preschool.jpg.asset.json";
const birthday = birthdayPhoto.url;
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

export const Route = createFileRoute("/preschool-gymnastics")({
  head: () => ({
    meta: [
      { title: "Preschool Gymnastics Ages 1–5 | GAGE Center" },
      { name: "description", content: "Playful parent-and-me and preschool gymnastics for ages 1–5 in Blue Springs, MO. Big movement for little humans — from $85/month, free trial available." },
      { property: "og:title", content: "Little Movers. Big Smiles. | GAGE Center" },
      { property: "og:description", content: "Big movement for little humans. Playful preschool gymnastics for ages 1–5 at GAGE Center in Blue Springs, MO." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreschoolPage,
});

const benefits = [
  { icon: Blocks, title: "Early motor milestones.", text: "Jumping, balancing, rolling, and climbing — coordination and spatial awareness develop naturally through guided play." },
  { icon: Smile, title: "Social skills & listening.", text: "Taking turns, sharing space, following coaches' cues, and making their very first gym friends." },
  { icon: Sparkles, title: "Bravery & big confidence.", text: "Watching their eyes light up when they cross the low beam or conquer a foam wedge all on their own." },
  { icon: Heart, title: "Positive active habits.", text: "A lifelong love of movement, built in a warm, welcoming, and safe facility from the very first class." },
] as const;

const experiences = [
  "Soft foam pits",
  "Toddler-scaled bars",
  "Colorful low balance beams",
  "Bouncy trampolines",
  "Incline wedge mats",
  "Little-body obstacle circuits",
] as const;

const faqs = [
  { question: "Do parents participate in class?", answer: "Yes for Parent & Tot (ages 1–3) — grown-ups join their little one on the floor for the whole class. From ages 3 and up, children participate independently while parents watch comfortably from the viewing lobby." },
  { question: "What should little ones wear?", answer: "Comfortable play clothes they can move, jump, and climb in. Kids go bare feet in the gym, and please skip zippers and jewelry — long hair tied back helps too." },
  { question: "How does the free trial work?", answer: `Open the GAGE registration portal, choose a class that works for your family, then select Request a Trial and follow the steps. If you have any questions, call GAGE at ${siteConfig.phoneDisplay}.` },
  { question: "How long are classes?", answer: "One 50-minute class per week, month to month — a perfect length for little attention spans and big energy." },
] as const;

function PreschoolClassOption({ eyebrow, name, description, tuition, note }: { eyebrow: string; name: string; description: string; tuition: number; note: string }) {
  return (
    <div className="flex flex-col bg-ink p-8 text-ink-foreground sm:p-10">
      <p className="font-display text-xs font-black uppercase text-primary">{eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl font-black uppercase sm:text-3xl">{name}</h3>
      <p className="mt-4 leading-7 text-ink-foreground/65">{description}</p>
      <p className="mt-8 font-display text-3xl font-black">Daytime from $85<span className="text-sm text-ink-foreground/50">/mo</span><span className="mx-3 text-ink-foreground/30">·</span>Standard $95<span className="text-sm text-ink-foreground/50">/mo</span></p>
      <p className="mt-2 font-display text-xs font-black uppercase text-ink-foreground/60">One 50-minute class per week</p>
      <div className="mt-auto pt-8">
        <Button asChild size="lg" className="h-14 w-full rounded-none px-7 font-display text-xs font-black uppercase">
          <a
            href={siteConfig.external.classes}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => { trackCta("VIEW CLASSES & TRY FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: name, monthly_tuition: tuition, source_section: "preschool_class_options", destination_url: siteConfig.external.classes }); }}
          >
            View classes & try free<ArrowRight aria-hidden />
          </a>
        </Button>
        <p className="mt-3 text-xs leading-5 text-ink-foreground/50">{note}</p>
      </div>
    </div>
  );
}

function PreschoolPage() {
  return (
    <ProgramPage>
      <ProgramHero
        eyebrow="Ages 1–5 · Blue Springs, MO"
        title="Little movers. Big smiles."
        subheadline="Big movement for little humans."
        message="Playful, joyful gymnastics crafted specifically for toddlers and preschoolers. From parent-and-me exploration to confident independent classes, every session is filled with movement, milestones, and high-fives."
        details="Ages 1–5 · Daytime from $85/mo · Standard classes $95/mo · Free trial available"
        image={preschool.url}
        imageAlt="Happy toddlers playing and moving during a GAGE preschool gymnastics class"
        programName="Preschool Gymnastics"
        ctaAnchor="#choose-program"
      />

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="eyebrow">Fun first. Growth follows.</p><h2 className="section-title mt-4">Play today. Proud of it tomorrow.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Every class is guided play with a purpose — little bodies build big skills while they're having far too much fun to notice.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7"><Icon className="h-7 w-7 text-primary" aria-hidden /><h3 className="mt-8 font-display text-lg font-black uppercase text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-ink-foreground lg:grid-cols-2">
        <div className="relative min-h-[480px] lg:min-h-[680px]">
          <img src={birthday} alt="Little kids laughing and playing together at GAGE" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="eyebrow">What little ones experience</p>
            <h2 className="section-title mt-4 text-ink-foreground">Built for little bodies.</h2>
            <p className="mt-6 text-lg leading-8 text-ink-foreground/70">A gym-sized world scaled down just for them — soft, colorful, and made for safe exploration at every stage.</p>
            <div className="mt-9 grid gap-px bg-ink-foreground/15 sm:grid-cols-2">
              {experiences.map((item) => <div key={item} className="flex items-center gap-3 bg-ink p-4 text-sm font-bold"><Sparkles className="h-4 w-4 text-primary" aria-hidden />{item}</div>)}
            </div>
            <p className="mt-8 font-display text-xs font-black uppercase text-primary">No experience needed — every little one starts right where they are.</p>
          </div>
        </div>
      </section>

      <section id="choose-program" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Class pathways</p>
            <h2 className="section-title mt-4">Let's find their first class.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Three stages that grow with your child — from first wobbly steps beside you to a confident independent class of their own.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
            <PreschoolClassOption
              eyebrow="Ages 1–3 · With a grown-up"
              name="Parent & Tot"
              description="A fun parent-and-child class exploring movement, balance, and bonding side-by-side."
              tuition={85}
              note={siteConfig.registration.trialNote}
            />
            <PreschoolClassOption
              eyebrow="Ages 3–4 · First independent class"
              name="Little Dragons"
              description="Introducing listening, body control, rolls, and new friendships — all on their own for the very first time."
              tuition={95}
              note={siteConfig.registration.trialNote}
            />
            <PreschoolClassOption
              eyebrow="Ages 4–5 · School-ready"
              name="Preschool Prep"
              description="Active circuits, bouncy jumps, beam balance, and school-ready confidence."
              tuition={95}
              note={siteConfig.registration.trialNote}
            />
          </div>
        </div>
      </section>

      <GoogleReviewsShowcase reviews={[googleReviews[1]]} />
      <ProgramFaq items={[...faqs]} />
      <ProgramFinalCta
        image={preschool.url}
        imageAlt="Smiling toddlers celebrating during a GAGE preschool class"
        programName="Preschool Gymnastics"
        eyebrow="It starts with one try"
        headline={<>Their first<br />favorite class.</>}
        body={<>One class. A whole lot of giggles and growth.</>}
        ctaLabel="Try a preschool class free"
        ctaAnchor="#choose-program"
      />
    </ProgramPage>
  );
}
