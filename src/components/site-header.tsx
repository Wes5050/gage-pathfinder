import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import dragon from "@/assets/gage-dragon.png.asset.json";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";
import { forwardIclassProHandoff, trackCta } from "@/lib/analytics";

const GROUPS = [
  { label: "Classes", items: [["Preschool", "/preschool-gymnastics"], ["Gymnastics", "/recreational-gymnastics"], ["Ninja", "/dragon-ninja"], ["Tumbling", "/recreational-gymnastics"], ["Pre-Team", "/find-a-class"]] },
  { label: "Competitive", items: [["Women's Team", "/about"], ["Men's Team", "/about"], ["Xcel", "/about"], ["Team Camps", "/camps-and-events"]] },
  { label: "Camps & Events", items: [["Camps", "/camps-and-events"], ["Clinics", "/camps-and-events"], ["Parent Night Out", "/camps-and-events"], ["Events", "/camps-and-events"], ["Meets", "/camps-and-events"]] },
  { label: "Birthdays & Play", items: [["Birthday Parties", "/camps-and-events"], ["Bump City", "/camps-and-events"]] },
  { label: "About", items: [["Why GAGE", "/about"], ["Coaches", "/about"], ["Contact", "/about"], ["Careers", "/about"]] },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="GAGE Center home">
            <img src={dragon.url} alt="" width={44} height={44} className="h-10 w-10 shrink-0" />
            <span className="truncate font-display text-lg font-black uppercase text-ink">GAGE Center</span>
          </Link>

          <div className="flex items-center gap-2 lg:gap-4">
            <nav className="hidden items-center lg:flex" aria-label="Primary navigation">
              {GROUPS.map((group) => (
                <div key={group.label} className="group relative">
                  <button type="button" className="flex h-20 items-center gap-1 px-3 font-display text-[11px] font-bold uppercase text-ink transition-colors hover:text-primary">
                    {group.label}<ChevronDown className="h-3.5 w-3.5" aria-hidden />
                  </button>
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 border-t-2 border-primary bg-ink p-3 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {group.items.map(([label, to]) => (
                      <Link key={label} to={to} className="block px-4 py-3 font-display text-xs font-bold uppercase text-ink-foreground/75 transition-colors hover:bg-ink-foreground/10 hover:text-ink-foreground">{label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
            <a href={siteConfig.external.parentPortal} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("PARENT PORTAL", "header_desktop"); forwardIclassProHandoff(event, { program_name: "Parent Portal", monthly_tuition: 0, source_section: "header_desktop", destination_url: siteConfig.external.parentPortal }); }} className="hidden font-display text-[11px] font-bold uppercase text-muted-foreground hover:text-ink xl:block">Parent Portal</a>
            <Button asChild size="lg" className="hidden rounded-none px-6 font-display text-xs font-black uppercase shadow-lg sm:inline-flex">
              <a href={siteConfig.external.booking} target="_blank" rel="noreferrer" title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("TRY A CLASS FREE", "header_desktop"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "header_desktop", destination_url: siteConfig.external.booking }); }}>Try a class free</a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-none lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
            </Button>
          </div>
        </div>

        <div className={cn("border-t border-border bg-background lg:hidden", open ? "block" : "hidden")}>
          <nav className="max-h-[calc(100vh-8rem)] overflow-y-auto px-4 py-3" aria-label="Mobile navigation">
            {GROUPS.map((group) => (
              <div key={group.label} className="border-b border-border py-3">
                <p className="font-display text-xs font-black uppercase text-primary">{group.label}</p>
                <div className="mt-1 grid grid-cols-2 gap-x-3">
                  {group.items.map(([label, to]) => <Link key={label} to={to} onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-ink">{label}</Link>)}
                </div>
              </div>
            ))}
            <a href={siteConfig.external.parentPortal} target="_blank" rel="noreferrer" onClick={(event) => { trackCta("PARENT PORTAL", "mobile_dock"); forwardIclassProHandoff(event, { program_name: "Parent Portal", monthly_tuition: 0, source_section: "mobile_menu", destination_url: siteConfig.external.parentPortal }); }} className="block py-4 font-display text-xs font-black uppercase text-ink">Parent Portal</a>
          </nav>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden" aria-label="Quick actions">
        <Link to="/find-a-class" onClick={() => trackCta("FIND A CLASS", "mobile_dock")} className="flex min-h-14 items-center justify-center px-2 font-display text-[10px] font-black uppercase text-ink">Find a class</Link>
        <a href={siteConfig.external.booking} target="_blank" rel="noreferrer" title={siteConfig.registration.trialNote} onClick={(event) => { trackCta("TRY A CLASS FREE", "mobile_dock"); forwardIclassProHandoff(event, { program_name: "All Programs", monthly_tuition: 0, source_section: "mobile_dock", destination_url: siteConfig.external.booking }); }} className="flex min-h-14 items-center justify-center bg-primary px-2 font-display text-[10px] font-black uppercase text-primary-foreground">Try a class free</a>
        <a href={siteConfig.phoneHref} onClick={() => trackCta("CALL", "mobile_dock")} className="flex min-h-14 items-center justify-center gap-1.5 px-2 font-display text-[10px] font-black uppercase text-ink"><Phone className="h-3.5 w-3.5" aria-hidden />Call</a>
      </nav>
    </>
  );
}