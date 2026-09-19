import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/data/config";
import { forwardIclassProHandoff, trackCta, trackIclassProHandoff, withCampaignAttribution } from "@/lib/analytics";

export const Route = createFileRoute("/book-a-trial")({
  head: () => ({ meta: [{ title: "Try a Class Free | GAGE Center" }, { name: "description", content: "Choose a live GAGE class and request a free trial through our secure registration portal." }, { property: "og:title", content: "Try a Class Free | GAGE Center" }, { property: "og:description", content: "Find a live class opening and try GAGE Center free." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: TrialHandoff,
});

function TrialHandoff() {
  useEffect(() => {
    trackIclassProHandoff({ program_name: "All Programs", monthly_tuition: 0, source_section: "legacy_trial_redirect", destination_url: siteConfig.external.trial });
    window.location.replace(withCampaignAttribution(siteConfig.external.trial));
  }, []);
  return <div className="min-h-screen bg-background"><SiteHeader /><main className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center px-5 text-center"><p className="eyebrow">Secure registration</p><h1 className="section-title mt-4">Taking you to live class openings.</h1><p className="mt-5 text-muted-foreground">Trial requests, schedules, enrollment, and billing are completed only in the GAGE registration portal.</p>{!siteConfig.registration.trialLinkVerified ? <p className="mt-3 text-sm text-muted-foreground">{siteConfig.registration.trialNote}</p> : null}<Button asChild size="lg" className="mt-8 rounded-none font-display text-xs font-black uppercase"><a href={siteConfig.external.trial} title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("CONTINUE TO CLASSES", "final_conversion"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "legacy_trial_fallback", destination_url: siteConfig.external.trial }); }}>Continue to live classes<ExternalLink /></a></Button></main><SiteFooter /></div>;
}