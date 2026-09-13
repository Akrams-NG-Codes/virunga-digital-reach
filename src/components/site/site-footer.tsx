import { Link } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { NewsletterForm } from "./newsletter-form";
import { useLang, useT } from "@/lib/i18n";

const EXPLORE = [
  { to: "/$lang/about", key: "about" },
  { to: "/$lang/programs", key: "programs" },
  { to: "/$lang/projects", key: "projects" },
  { to: "/$lang/impact", key: "impact" },
  { to: "/$lang/stories", key: "stories" },
  { to: "/$lang/news", key: "news" },
  { to: "/$lang/events", key: "events" },
  { to: "/$lang/resources", key: "resources" },
] as const;

const ENGAGE = [
  { to: "/$lang/get-involved/partner", label: (t: ReturnType<typeof useT>) => t.getInvolved.partner },
  { to: "/$lang/get-involved/volunteer", label: (t: ReturnType<typeof useT>) => t.getInvolved.volunteer },
  { to: "/$lang/get-involved/support", label: (t: ReturnType<typeof useT>) => t.getInvolved.support },
  { to: "/$lang/partners", label: (t: ReturnType<typeof useT>) => t.nav.partners },
  { to: "/$lang/contact", label: (t: ReturnType<typeof useT>) => t.nav.contact },
] as const;

const LEGAL = [
  { to: "/$lang/privacy", label: (t: ReturnType<typeof useT>) => t.legalPages.privacy },
  { to: "/$lang/terms", label: (t: ReturnType<typeof useT>) => t.legalPages.terms },
  { to: "/$lang/cookies", label: (t: ReturnType<typeof useT>) => t.legalPages.cookies },
  { to: "/$lang/accessibility", label: (t: ReturnType<typeof useT>) => t.legalPages.accessibility },
  { to: "/$lang/complaints", label: (t: ReturnType<typeof useT>) => t.complaints.title },
] as const;

export function SiteFooter() {
  const lang = useLang();
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-brand-deep text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-md bg-ochre text-sm font-bold text-ochre-foreground"
              >
                VA
              </span>
              <span className="font-display text-lg font-semibold">VIRUNGA ACROBAT CLUB</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-brand-foreground/80">{t.footer.tagline}</p>
            <Link
              to="/$lang/report-a-concern"
              params={{ lang }}
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-brand-foreground/30 px-4 py-2.5 text-sm font-medium hover:bg-brand-foreground/10"
            >
              <ShieldAlert className="size-4" aria-hidden="true" />
              {t.nav.report}
            </Link>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="font-display text-sm font-semibold uppercase tracking-wide">
              {t.footer.explore}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-brand-foreground/85">
              {EXPLORE.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} params={{ lang }} className="hover:underline">
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-engage">
            <h2 id="footer-engage" className="font-display text-sm font-semibold uppercase tracking-wide">
              {t.footer.engage}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-brand-foreground/85">
              {ENGAGE.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} params={{ lang }} className="hover:underline">
                    {item.label(t)}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/$lang/safeguarding" params={{ lang }} className="hover:underline">
                  {t.nav.safeguarding}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide">
              {t.home.newsletterTitle}
            </h2>
            <p className="mt-4 text-sm text-brand-foreground/85">{t.home.newsletterBody}</p>
            <NewsletterForm variant="inverted" className="mt-4" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-foreground/20 pt-6 text-sm text-brand-foreground/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} VIRUNGA ACROBAT CLUB. {t.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.to}>
                <Link to={item.to} params={{ lang }} className="hover:underline">
                  {item.label(t)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
