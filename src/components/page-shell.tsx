import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { trackCta, trackIclassProHandoff } from "@/lib/analytics";

export function PageShell({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink text-ink-foreground">
          {image ? (
            <div className="absolute inset-0">
              <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
            </div>
          ) : null}
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-ink-foreground/80">{intro}</p>
          </div>
        </section>
        {children}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 rounded-3xl bg-secondary px-6 py-12 sm:px-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <h2 className="font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink">
              Ready for the first brave step?
            </h2>
            <Button asChild size="lg" className="rounded-none font-display text-sm font-black uppercase">
              <a href={siteConfig.external.trial} target="_blank" rel="noreferrer" onClick={() => { trackCta("TRY A CLASS FREE", "final_conversion"); trackIclassProHandoff({ program_name: "All Programs", monthly_tuition: 0, source_section: "final_conversion", destination_url: siteConfig.external.trial }); }}>Try a class free<ArrowRight aria-hidden /></a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
