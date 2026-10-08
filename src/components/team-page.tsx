import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/data/config";
import { trackCta } from "@/lib/analytics";

export type TeamLink = {
  to: "/competitive-teams" | "/womens-teams" | "/womens-dragon-team" | "/xcel-team" | "/mens-team";
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export function TeamPlacementCta({ team }: { team: string }) {
  return (
    <section className="bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="eyebrow">Team placement</p>
        <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Ask about team placement.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-foreground/70">Team spots are by coach invitation. Reach out and our team will talk with you about where your athlete fits best.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-14 rounded-none px-8 font-display text-xs font-black uppercase">
            <Link to="/contact" onClick={() => trackCta(`ASK ABOUT TEAM PLACEMENT · ${team}`, "final_conversion")}>Ask about team placement<ArrowRight aria-hidden /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-ink-foreground/40 bg-transparent px-8 font-display text-xs font-black uppercase text-ink-foreground hover:bg-ink-foreground hover:text-ink">
            <a href={siteConfig.phoneHref} onClick={() => trackCta("CALL GAGE", "final_conversion")}><Phone aria-hidden />Call {siteConfig.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TeamCards({ items }: { items: TeamLink[] }) {
  return (
    <div className={`mt-12 grid gap-px bg-border ${items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
      {items.map((item) => (
        <article key={item.to} className="flex flex-col bg-background">
          <img src={item.image} alt={item.imageAlt} loading="lazy" width={1200} height={800} className="h-56 w-full object-cover object-[center_30%]" />
          <div className="flex flex-1 flex-col p-7">
            <h3 className="font-display text-2xl font-black uppercase text-ink">{item.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-muted-foreground">{item.text}</p>
            <Button asChild variant="outline" className="mt-6 h-12 rounded-none font-display text-xs font-black uppercase">
              <Link to={item.to} onClick={() => trackCta("LEARN MORE", "programs_grid")}>Learn more<ArrowRight aria-hidden /></Link>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}

export function TeamLayout({ eyebrow, title, intro, image, team, children }: { eyebrow: string; title: string; intro: string; image: string; team: string; children: ReactNode }) {
  return (
    <PageShell eyebrow={eyebrow} title={title} intro={intro} image={image}>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">{children}</section>
      <TeamPlacementCta team={team} />
    </PageShell>
  );
}

export function TeamPoints({ points }: { points: Array<{ title: string; text: string }> }) {
  return (
    <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
      {points.map((p) => (
        <div key={p.title} className="bg-secondary p-7">
          <h3 className="font-display text-lg font-black uppercase text-ink">{p.title}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
