import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import dragon from "@/assets/gage-dragon.png.asset.json";
import { siteConfig } from "@/data/config";

const footerGroups = [
  { title: "Classes", links: [["Preschool Gymnastics", "/preschool-gymnastics"], ["Gymnastics & Tumbling", "/recreational-gymnastics"], ["Dragon Ninja", "/dragon-ninja"], ["Find a Class", "/find-a-class"]] },
  { title: "More at GAGE", links: [["Camps & Events", "/camps-and-events"], ["Birthday Parties", "/camps-and-events"], ["Competitive Teams", "/about"], ["About GAGE", "/about"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-16 text-ink-foreground lg:pb-0">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3"><img src={dragon.url} alt="" width={46} height={46} className="h-11 w-11" /><span className="font-display text-xl font-black uppercase">GAGE Center</span></div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-ink-foreground/65">Helping Blue Springs kids find strength, confidence, skills, and a love of movement.</p>
          <p className="mt-6 font-display text-[10px] font-black uppercase text-primary">Gymnastics · Ninja · Tumbling · Camps</p>
        </div>
        {footerGroups.map((group) => <div key={group.title}><h2 className="font-display text-xs font-black uppercase text-primary">{group.title}</h2><ul className="mt-5 space-y-3">{group.links.map(([label, to]) => <li key={label}><Link to={to} className="text-sm text-ink-foreground/70 hover:text-ink-foreground">{label}</Link></li>)}</ul></div>)}
        <div>
          <h2 className="font-display text-xs font-black uppercase text-primary">Visit GAGE</h2>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 flex gap-2 text-sm leading-6 text-ink-foreground/70 hover:text-ink-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0" />{siteConfig.address}</a>
          <a href={siteConfig.phoneHref} className="mt-3 block text-sm font-bold">{siteConfig.phoneDisplay}</a>
          <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm text-ink-foreground/70">{siteConfig.email}</a>
          <div className="mt-5 space-y-1 text-xs text-ink-foreground/50">{siteConfig.hours.map((hour) => <p key={hour}>{hour}</p>)}</div>
          <a href={siteConfig.external.parentPortal} target="_blank" rel="noreferrer" className="mt-6 inline-block font-display text-xs font-black uppercase text-primary">Parent Portal →</a>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10"><div className="mx-auto max-w-[1440px] px-5 py-6 text-xs text-ink-foreground/45 sm:px-8 lg:px-10">© {new Date().getFullYear()} GAGE Center · Blue Springs, Missouri</div></div>
    </footer>
  );
}