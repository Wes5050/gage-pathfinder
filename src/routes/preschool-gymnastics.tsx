import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Blocks, Heart, Smile, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleReviewsShowcase, ProgramFaq, ProgramFinalCta, ProgramHero, ProgramPage, googleReviews } from "@/components/program-page";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";
import { photos } from "@/data/photos";
const preschool = { url: photos.prehero.src };

export const Route = createFileRoute("/preschool-gymnastics")({
  head: () => ({
    meta: [
      { title: "Preschool Gymnastics Ages 2 & Under to 5 | GAGE Center" },
      { name: "description", content: "Playful Parent / Tot (2 & under) and independent preschool gymnastics from 2.5 years (30 months) in Blue Springs, MO. Big movement for little humans — $85/month daytime, $95/month standard, free trial available." },
      { property: "og:title", content: "Little Movers. Big Smiles. | GAGE Center" },
      { property: "og:description", content: "Big movement for little humans. Playful preschool gymnastics for little ones at GAGE Center in Blue Springs, MO." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PreschoolPage,
});

const benefits = [
  { icon: Blocks, title: "Early motor milestones.", text: "Jumping, balancing, rolling, and climbing — coordination and spatial awareness develop naturally through guided play." },
  { icon: Smile, title: "Social skills & listening.", text: "Taking turns, sharing space, following coaches' cues, and making their very first gym friends." },
  { icon: Sparkles, title: "Bravery & big confidence.", text: "Watching their eyes light up when they cross the low beam or try something new all on their own." },
  { icon: Heart, title: "Positive active habits.", text: "A lifelong love of movement, built in a warm, welcoming, and safe facility from the very first class." },
] as const;

const experiences = [
  "Toddler-scaled bars",
  "Colorful low balance beams",
  "Bouncy trampolines",
  "Incline wedge mats",
  "Little-body obstacle circuits",
] as const;

const faqs = [
  { question: "Do parents participate in class?", answer: "Only in Parent / Tot, which is for children age 2 and under — grown-ups join their little one on the floor. From 2.5 years (30 months), children can join an independent class, and parents can watch from the viewing lobby." },
  { question: "What should little ones wear?", answer: "Comfortable play clothes they can move, jump, and climb in. No shoes in any class — kids go bare feet on the floor. Please skip zippers and jewelry, and tie long hair back." },
  { question: "How does the free trial work?", answer: `Open the GAGE registration portal, choose a class that works for your family, then select Request a Trial and follow the steps. If you have any questions, call GAGE at ${siteConfig.phoneDisplay}.` },
  { question: "How long are classes?", answer: "Preschool classes are 45 minutes, once a week — a perfect length for little attention spans and big energy." },
] as const;

function PreschoolClassOption({ eyebrow, name, description, tuition, note, href = siteConfig.external.classes }: { eyebrow: string; name: string; description: string; tuition: number; note: string; href?: string }) {
  return (
    <div className="flex flex-col bg-ink p-8 text-ink-foreground sm:p-10">
      <p className="font-display text-xs font-black uppercase text-primary">{eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl font-black uppercase sm:text-3xl">{name}</h3>
      <p className="mt-4 leading-7 text-ink-foreground/65">{description}</p>
      <p className="mt-8 font-display text-3xl font-black">Daytime $85<span className="text-sm text-ink-foreground/50">/mo</span><span className="mx-3 text-ink-foreground/30">·</span>Standard $95<span className="text-sm text-ink-foreground/50">/mo</span></p>
      <p className="mt-2 font-display text-xs font-black uppercase text-ink-foreground/60">One 45-minute class per week · ${siteConfig.registrationFee} one-time registration fee</p>
      <div className="mt-auto pt-8">
        <Button asChild size="lg" className="h-14 w-full rounded-none px-7 font-display text-xs font-black uppercase">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => { trackCta("VIEW CLASSES & TRY FREE", "programs_grid"); forwardIclassProHandoff(event, { program_name: name, monthly_tuition: tuition, source_section: "preschool_class_options", destination_url: href }); }}
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
        eyebrow="Parent / Tot 2 & under · Preschool 2.5+ · Blue Springs, MO"
        title="Little movers. Big smiles."
        subheadline="Big movement for little humans."
        message="Playful, joyful gymnastics crafted specifically for toddlers and preschoolers. From Parent / Tot for age 2 and under to independent classes starting at 2.5 years (30 months), every session is filled with movement, milestones, and high-fives."
        details="45-minute classes · Daytime $85/mo · Standard $95/mo · $44 one-time registration fee · Free trial available"
        image={preschool.url}
        imageAlt="A young child balancing on a low beam during preschool gymnastics at GAGE"
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
          <img src={photos.preroom.src} alt={photos.preroom.alt} width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
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
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Start side by side in Parent / Tot, then move into an independent class from 2.5 years (30 months). Ask our team which independent class fits your child best.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-2">
            <PreschoolClassOption
              eyebrow="Age 2 & under · With a grown-up"
              name="Parent / Tot"
              description="A fun parent-and-child class exploring movement, balance, and bonding side-by-side."
              tuition={85}
              note={siteConfig.registration.trialNote}
              href={siteConfig.external.parentTotClasses}
            />
            <PreschoolClassOption
              eyebrow="Independent class · Details coming soon"
              name="Dragonflys"
              description="An independent preschool class at GAGE. Call us or check the live class list for current ages and times."
              tuition={95}
              note={siteConfig.registration.trialNote}
            />
          </div>
        </div>
      </section>

      <GoogleReviewsShowcase reviews={[googleReviews[1]]} />
      <ProgramFaq items={[...faqs]} />
      <ProgramFinalCta
        image={photos.social.src}
        imageAlt={photos.social.alt}
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
