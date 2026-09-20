import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { programs, type ProgramCategory } from "@/data/programs";
import { forwardIclassProHandoff, trackCta, trackEvent } from "@/lib/analytics";
import tumbling from "@/assets/gage-tumbling.jpg.asset.json";
import preschoolImg from "@/assets/gage-preschool.jpg.asset.json";
import ninjaImg from "@/assets/gage-ninja.jpg.asset.json";
import gymImg from "@/assets/gage-hero.jpg.asset.json";

export const Route = createFileRoute("/find-a-class")({
  head: () => ({ meta: [
    { title: "Find Fun Kids Classes | GAGE Center Blue Springs" },
    { name: "description", content: "Filter welcoming GAGE preschool, gymnastics, Ninja, and tumbling classes by age, compare monthly tuition, and request a free trial." },
    { property: "og:title", content: "Find Their Fun | GAGE Center" },
    { property: "og:description", content: "Explore classes built around movement, smiles, and confidence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FindAClass,
});

const categoryFilters: Array<{ value: "All" | ProgramCategory; label: string }> = [
  { value: "All", label: "All" },
  { value: "Preschool", label: "Preschool · Ages 1–5" },
  { value: "Gymnastics", label: "Gymnastics · Ages 5+" },
  { value: "Ninja", label: "Ninja · Ages 5–14" },
  { value: "Tumbling", label: "Tumbling · Ages 5–18" },
];

const ageFilters = ["All Ages", "1–3", "3–4", "5–7", "8–12", "13+"] as const;
type AgeFilter = (typeof ageFilters)[number];

const ageBounds: Record<Exclude<AgeFilter, "All Ages">, [number, number]> = {
  "1–3": [1, 3],
  "3–4": [3, 4],
  "5–7": [5, 7],
  "8–12": [8, 12],
  "13+": [13, 18],
};

const programRoutes: Record<ProgramCategory, "/preschool-gymnastics" | "/recreational-gymnastics" | "/dragon-ninja" | "/tumbling"> = {
  Preschool: "/preschool-gymnastics",
  Gymnastics: "/recreational-gymnastics",
  Ninja: "/dragon-ninja",
  Tumbling: "/tumbling",
};

const programImages: Record<ProgramCategory, string> = {
  Preschool: preschoolImg.url,
  Gymnastics: gymImg.url,
  Ninja: ninjaImg.url,
  Tumbling: tumbling.url,
};

function FindAClass() {
  const [category, setCategory] = useState<(typeof categoryFilters)[number]["value"]>("All");
  const [age, setAge] = useState<AgeFilter>("All Ages");
  const visible = programs.filter((program) => {
    if (program.invitationOnly || !program.trialAvailable) return false;
    const categoryMatches = category === "All" || program.category === category;
    if (!categoryMatches || age === "All Ages") return categoryMatches;
    const [minimum, maximum] = ageBounds[age];
    return program.ageMin <= maximum && program.ageMax >= minimum;
  });

  return (
    <PageShell eyebrow="Something for every kid" title="Find their fun." intro="Explore classes built around movement, smiles, and confidence." image={tumbling.url}>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="border-b border-border pb-8">
          <p className="font-display text-xs font-black uppercase text-ink">Category</p>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {categoryFilters.map((item) => <Button key={item.value} type="button" variant={category === item.value ? "default" : "outline"} onClick={() => { setCategory(item.value); trackEvent("class_finder_step", { step_number: 2, step_name: "interest", selected_value: item.value }); }} className="h-11 shrink-0 rounded-none px-5 font-display text-[11px] font-black uppercase">{item.label}</Button>)}
          </div>
          <p className="mt-7 font-display text-xs font-black uppercase text-ink">Age</p>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {ageFilters.map((item) => <Button key={item} type="button" variant={age === item ? "default" : "outline"} onClick={() => { setAge(item); trackEvent("class_finder_step", { step_number: 1, step_name: "age", selected_value: item }); }} className="h-11 shrink-0 rounded-none px-5 font-display text-[11px] font-black uppercase">{item}</Button>)}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4"><p className="text-sm text-muted-foreground"><strong className="font-display text-ink">{visible.length}</strong> {visible.length === 1 ? "class" : "classes"} to explore</p><p className="hidden text-sm text-muted-foreground sm:block">Beginner-friendly options shown first.</p></div>

        {visible.length ? (
          <div className="mt-8 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {visible.map((program) => (
              <article key={program.name} className="flex min-h-[390px] flex-col bg-background">
                <img src={programImages[program.category]} alt={`${program.category} class at GAGE Center`} loading="lazy" width={1600} height={1000} className="h-44 w-full object-cover object-[center_25%]" />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-ink px-2.5 py-1.5 font-display text-[9px] font-black uppercase text-ink-foreground">{program.category} · Ages {program.ageMin}–{program.ageMax}</span>
                  {program.daytime ? <span className="inline-flex items-center gap-1.5 bg-secondary px-2.5 py-1.5 font-display text-[9px] font-black uppercase text-ink"><Sun className="h-3 w-3 text-primary" aria-hidden />$85/mo daytime</span> : <span className="bg-secondary px-2.5 py-1.5 font-display text-[9px] font-black uppercase text-ink">$95/mo standard</span>}
                </div>
                <h2 className="mt-6 font-display text-2xl font-black uppercase leading-tight text-ink">{program.name}</h2>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{program.shortDescription}</p>
                <div className="mt-6 border-t border-border pt-5"><span className="font-display text-[10px] font-black uppercase text-muted-foreground">Monthly tuition</span><p className="mt-1 font-display text-3xl font-black text-ink">${program.monthlyTuition}<span className="text-sm text-muted-foreground">/mo</span></p></div>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <Button asChild variant="outline" className="h-12 rounded-none font-display text-[10px] font-black uppercase"><Link to={programRoutes[program.category]} onClick={() => trackCta("LEARN MORE", "programs_grid")}>Learn more<ArrowRight aria-hidden /></Link></Button>
                  <Button asChild className="h-12 rounded-none font-display text-[10px] font-black uppercase"><a href={program.iclassProUrl} target="_blank" rel="noreferrer" title="Choose a class that works for your family, then select Request a Trial." onClick={(event) => { trackCta("TRY FREE / VIEW OPENINGS", "programs_grid"); forwardIclassProHandoff(event, { program_name: program.name, monthly_tuition: program.monthlyTuition, source_section: "global_class_finder", destination_url: program.iclassProUrl }); }}>Try free<ExternalLink aria-hidden /></a></Button>
                </div>
                <p className="mt-4 text-xs leading-5 text-muted-foreground">Choose a class that works for your family, then select Request a Trial.</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-border bg-secondary px-6 py-12 text-center"><h2 className="font-display text-2xl font-black uppercase text-ink">Let’s find the right fit.</h2><p className="mx-auto mt-3 max-w-xl text-muted-foreground">No current programs match both filters. Try another age or category to see more options.</p><Button type="button" className="mt-6 rounded-none font-display text-xs font-black uppercase" onClick={() => { setCategory("All"); setAge("All Ages"); }}>Show all classes</Button></div>
        )}
      </section>
    </PageShell>
  );
}