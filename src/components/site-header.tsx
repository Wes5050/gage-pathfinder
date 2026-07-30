import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import dragon from "@/assets/gage-dragon.png.asset.json";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Find a Class", to: "/find-a-class" },
  { label: "Programs", to: "/preschool-gymnastics" },
  { label: "Camps & Events", to: "/camps-and-events" },
  { label: "About", to: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img
            src={dragon.url}
            alt="GAGE Center dragon logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0"
          />
          <span className="truncate font-display text-lg font-extrabold tracking-tight text-ink">
            Gage<span className="font-normal">Center</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+18162297775"
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-secondary sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            (816) 229-7775
          </a>
          <Link
            to="/book-a-trial"
            className="inline-flex shrink-0 items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book a Trial
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-border lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-display text-base font-semibold text-ink last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+18162297775"
            className="py-3 font-display text-base font-semibold text-primary"
          >
            Call (816) 229-7775
          </a>
        </nav>
      </div>
    </header>
  );
}
