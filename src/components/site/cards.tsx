import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, Leaf, Shield, Sparkles, Inbox, ImageOff } from "lucide-react";
import { useLang, useT, pick } from "@/lib/i18n";
import type { Program } from "@/i18n/content";
import { cn } from "@/lib/utils";

const ICONS = {
  peace: HandHeart,
  shield: Shield,
  sparkles: Sparkles,
  leaf: Leaf,
};

export function ProgramCard({ program }: { program: Program }) {
  const lang = useLang();
  const t = useT();
  const Icon = ICONS[program.icon];
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-brand">
      <span className="flex size-11 items-center justify-center rounded-md bg-brand/10 text-brand">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl">{pick(program.title, lang)}</h3>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{pick(program.short, lang)}</p>
      <Link
        to="/$lang/programs/$slug"
        params={{ lang, slug: program.slug }}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
      >
        {t.common.learnMore}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function InfoCard({
  title,
  body,
  footer,
  className,
}: {
  title: string;
  body: string;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn("rounded-lg border border-border bg-card p-6", className)}>
      <h3 className="text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      {footer && <div className="mt-4">{footer}</div>}
    </article>
  );
}

/** Placeholder for an approved organizational photograph. */
export function MediaPlaceholder({ note, className }: { note: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-56 flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-surface-strong p-8 text-center",
        className,
      )}
    >
      <ImageOff className="size-6 text-muted-foreground" aria-hidden="true" />
      <p className="max-w-xs text-sm text-muted-foreground">{note}</p>
    </div>
  );
}

export function EmptyState({ title, body }: { title?: string; body?: string }) {
  const t = useT();
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-surface p-10 text-center">
      <Inbox className="size-6 text-muted-foreground" aria-hidden="true" />
      <h3 className="text-lg">{title ?? t.common.noResultsTitle}</h3>
      <p className="max-w-md text-sm text-muted-foreground">{body ?? t.common.noResultsBody}</p>
    </div>
  );
}

export function StatPlaceholder({ label }: { label: string }) {
  const t = useT();
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <p className="font-display text-3xl text-brand" aria-hidden="true">
        —
      </p>
      <p className="mt-2 text-sm font-medium">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{t.common.pendingContent}</p>
    </div>
  );
}

export function DefinitionList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="border-b border-border pb-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {item.label}
          </dt>
          <dd className="mt-1 text-sm">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
