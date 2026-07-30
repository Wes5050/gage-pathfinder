import { Link } from "@tanstack/react-router";
import dragon from "@/assets/gage-dragon.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={dragon.url} alt="" width={36} height={36} className="h-9 w-9" loading="lazy" />
            <span className="font-display text-lg font-extrabold tracking-tight">
              Gage<span className="font-normal">Center</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/70">
            Movement builds confidence. Gymnastics, tumbling and ninja programs for Blue Springs
            families since day one.
          </p>
        </div>

        <div className="text-sm">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-primary">
            Visit
          </h2>
          <address className="mt-4 not-italic text-ink-foreground/80">
            1101 NW Jefferson St
            <br />
            Blue Springs, MO 64015
          </address>
          <p className="mt-4">
            <a href="tel:+18162297775" className="hover:text-primary">
              (816) 229-7775
            </a>
            <br />
            <a href="mailto:info@gagecenter.com" className="hover:text-primary">
              info@gagecenter.com
            </a>
          </p>
        </div>

        <div className="text-sm">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-primary">
            Get started
          </h2>
          <ul className="mt-4 space-y-2 text-ink-foreground/80">
            <li>
              <Link to="/book-a-trial" className="hover:text-primary">
                Book a trial class
              </Link>
            </li>
            <li>
              <Link to="/find-a-class" className="hover:text-primary">
                Find a class
              </Link>
            </li>
            <li>
              <Link to="/camps-and-events" className="hover:text-primary">
                Camps &amp; events
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs uppercase tracking-widest text-ink-foreground/50 sm:px-6">
          © {new Date().getFullYear()} GAGE Center · Courage. Clarity. Progress.
        </div>
      </div>
    </footer>
  );
}
