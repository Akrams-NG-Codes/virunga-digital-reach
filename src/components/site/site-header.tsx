import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, ShieldAlert, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { useLang, useT } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PRIMARY = [
  { to: "/$lang/about", key: "about" },
  { to: "/$lang/programs", key: "programs" },
  { to: "/$lang/projects", key: "projects" },
  { to: "/$lang/impact", key: "impact" },
  { to: "/$lang/news", key: "news" },
  { to: "/$lang/get-involved", key: "getInvolved" },
  { to: "/$lang/contact", key: "contact" },
] as const;

const SECONDARY = [
  { to: "/$lang/stories", key: "stories" },
  { to: "/$lang/events", key: "events" },
  { to: "/$lang/resources", key: "resources" },
  { to: "/$lang/partners", key: "partners" },
  { to: "/$lang/safeguarding", key: "safeguarding" },
] as const;

export function SiteHeader() {
  const lang = useLang();
  const t = useT();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navClass =
    "rounded-md px-2 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="hidden bg-brand-deep text-brand-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <p>{t.meta.location}</p>
          <div className="flex items-center gap-4">
            {SECONDARY.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                params={{ lang }}
                className="underline-offset-4 hover:underline"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <Link
          to="/$lang"
          params={{ lang }}
          className="flex items-center gap-3"
          aria-label={t.meta.siteName}
        >
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-md bg-brand text-sm font-bold tracking-tight text-brand-foreground"
          >
            VA
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-brand-deep sm:text-lg">
              VIRUNGA ACROBAT CLUB
            </span>
            <span className="block text-xs text-muted-foreground">
              VIR.ACRO CLUB · {t.meta.legalForm}
            </span>
          </span>
        </Link>

        <nav aria-label={t.nav.menu} className="ml-auto hidden items-center gap-1 xl:flex">
          {PRIMARY.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              params={{ lang }}
              className={navClass}
              activeProps={{ className: cn(navClass, "text-brand underline underline-offset-8") }}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <Link
            to="/$lang/search"
            params={{ lang }}
            aria-label={t.nav.search}
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-brand sm:block"
          >
            <Search className="size-5" aria-hidden="true" />
          </Link>
          <LanguageSwitcher className="hidden sm:flex" />
          <Button asChild size="sm" className="hidden bg-brand hover:bg-brand-deep lg:inline-flex">
            <Link to="/$lang/get-involved/support" params={{ lang }}>
              {t.common.supportOurMission}
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.openMenu}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
          >
            {open ? <Menu className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background xl:hidden">
          <nav aria-label={t.nav.menu} className="mx-auto max-w-7xl px-4 py-4">
            <ul className="grid gap-1 sm:grid-cols-2">
              {[...PRIMARY, ...SECONDARY].map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.to}
                    params={{ lang }}
                    className="block rounded-md px-3 py-3 text-base font-medium hover:bg-surface"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <LanguageSwitcher />
              <Button asChild variant="outline" size="sm">
                <Link to="/$lang/search" params={{ lang }}>
                  {t.nav.search}
                </Link>
              </Button>
              <Button asChild size="sm" className="bg-brand hover:bg-brand-deep">
                <Link to="/$lang/get-involved/support" params={{ lang }}>
                  {t.common.supportOurMission}
                </Link>
              </Button>
              <Button asChild size="sm" variant="destructive">
                <Link to="/$lang/report-a-concern" params={{ lang }}>
                  <ShieldAlert className="size-4" aria-hidden="true" />
                  {t.nav.report}
                </Link>
              </Button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-auto inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground"
              >
                <X className="size-4" aria-hidden="true" />
                {t.nav.close}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
