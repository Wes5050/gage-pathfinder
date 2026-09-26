import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/data/config";
import { trackCta, withCampaignAttribution } from "@/lib/analytics";
import preschool from "@/assets/gage-preschool.jpg.asset.json";

export const Route = createFileRoute("/birthday-parties")({
  head: () => ({
    meta: [
      { title: "Birthday Parties at Bump City | GAGE Center Blue Springs" },
      { name: "description", content: "Birthday parties for GAGE families are hosted at Bump City. See current packages, pricing, and available dates on the Bump City site." },
      { property: "og:title", content: "Birthday Parties at Bump City | GAGE Center" },
      { property: "og:description", content: "Big energy. Big smiles. One seriously fun birthday." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayParties,
});

function BirthdayParties() {
  const destination = siteConfig.external.birthdayParties;
  return (
    <PageShell eyebrow="Birthdays" title="Birthday parties at Bump City" intro="Big energy. Big smiles. One seriously fun birthday." image={preschool.url}>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <p className="text-lg leading-8 text-muted-foreground">Packages, current pricing, available dates, and booking all live on the Bump City website, so you always see the latest information.</p>
        <Button asChild size="lg" className="mt-8 h-14 rounded-none px-8 font-display text-xs font-black uppercase">
          <a href={destination} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("EXPLORE BIRTHDAY PARTIES", "programs_grid"); event.currentTarget.href = withCampaignAttribution(destination); }}>Explore birthday parties<ExternalLink aria-hidden /></a>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">Questions? Call <a className="font-bold text-ink" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>.</p>
      </section>
    </PageShell>
  );
}
