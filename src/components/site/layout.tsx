import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { useLang, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteLayout({ children }: { children: ReactNode }) {
  const t = useT();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-foreground"
      >
        {t.common.skipToContent}
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "brand";
  labelledBy?: string;
}) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn(
        "py-16 sm:py-20",
        tone === "surface" && "bg-surface",
        tone === "brand" && "bg-brand-deep text-brand-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  id,
  align = "left",
  inverted,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  id?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-ochre" : "text-nature",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-2 text-3xl sm:text-4xl">
        {title}
      </h2>
      {body && (
        <p className={cn("mt-4 text-lg", inverted ? "text-brand-foreground/85" : "text-muted-foreground")}>
          {body}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  title,
  lead,
  breadcrumb,
}: {
  title: string;
  lead?: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  const lang = useLang();
  const t = useT();
  return (
    <div className="border-b border-border bg-brand-deep text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <nav aria-label={t.common.breadcrumb} className="text-sm text-brand-foreground/75">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/$lang" params={{ lang }} className="hover:underline">
                {t.nav.home}
              </Link>
            </li>
            {breadcrumb?.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span>{crumb.label}</span>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-3xl text-lg text-brand-foreground/85">{lead}</p>}
      </div>
    </div>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90", className)}>
      {children}
    </div>
  );
}
