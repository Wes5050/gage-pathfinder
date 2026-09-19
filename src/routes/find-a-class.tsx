import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { programs, type ProgramCategory } from "@/data/programs";
import { siteConfig } from "@/data/config";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";

export const Route = createFileRoute("/find-a-class")({
  head: () => ({ meta: [{ title: "Find Kids Classes | GAGE Center Blue Springs" }, { name: "description", content: "Compare GAGE gymnastics, Ninja, tumbling, preschool, and homeschool programs with transparent monthly tuition." }, { property: "og:title", content: "Find a Class | GAGE Center" }, { property: "og:description", content: "Explore beginner-friendly programs and continue to live openings in the GAGE parent portal." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: FindAClass,
});

const filters: Array<"All" | ProgramCategory> = ["All", "Preschool", "Gymnastics", "Ninja", "Tumbling"];

function FindAClass() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = programs.filter((program) => (filter === "All" || program.category === filter) && (!program.invitationOnly || filter === "Gymnastics"));
  return <PageShell eyebrow="Program guide" title="Find their place to start." intro="Compare programs and monthly tuition here, then use our secure class portal for live schedules, openings, and registration." image={tumbling.url}>
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="flex gap-2 overflow-x-auto pb-2">{filters.map((item) => <Button key={item} type="button" variant={filter === item ? "default" : "outline"} onClick={() => setFilter(item)} className="shrink-0 rounded-none font-display text-xs font-black uppercase">{item}</Button>)}</div>
      <div className="mt-10 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{visible.map((program) => <article key={program.name} className="flex flex-col bg-background p-6"><div className="flex items-start justify-between gap-4"><p className="font-display text-[10px] font-black uppercase text-primary">{program.category} · Ages {program.ageMin}–{program.ageMax}</p>{program.invitationOnly ? <span className="bg-accent px-2 py-1 font-display text-[9px] font-black uppercase text-accent-foreground">Evaluation required</span> : null}</div><h2 className="mt-4 font-display text-xl font-black uppercase text-ink">{program.name}</h2><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{program.shortDescription}</p><div className="mt-6 flex items-end justify-between border-t border-border pt-5"><div><span className="text-[10px] uppercase text-muted-foreground">Monthly</span><p className="font-display text-2xl font-black text-ink">${program.monthlyTuition}</p></div>{program.invitationOnly ? <a href={siteConfig.phoneHref} className="font-display text-xs font-black uppercase text-primary">Call for evaluation</a> : <a href={program.iclassProUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-display text-xs font-black uppercase text-primary">See openings<ExternalLink className="h-3.5 w-3.5" /></a>}</div></article>)}</div>
      <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-ink p-7 text-ink-foreground sm:flex-row sm:items-center"><div><h2 className="font-display text-2xl font-black uppercase">Ready to see real times?</h2><p className="mt-2 text-sm text-ink-foreground/60">Live openings and registration stay current in the parent portal.</p></div><Button asChild className="rounded-none font-display text-xs font-black uppercase"><a href={siteConfig.external.classes} target="_blank" rel="noreferrer">Open live classes<ArrowRight /></a></Button></div>
    </section>
  </PageShell>;
}