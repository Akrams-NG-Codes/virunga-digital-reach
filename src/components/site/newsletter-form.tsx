import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function NewsletterForm({
  variant = "default",
  className,
}: {
  variant?: "default" | "inverted";
  className?: string;
}) {
  const t = useT();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const inverted = variant === "inverted";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    toast(t.common.formNotConnectedTitle, { description: t.common.formNotConnectedBody });
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-3", className)} noValidate>
      <div>
        <label htmlFor={`newsletter-email-${variant}`} className="text-sm font-medium">
          {t.newsletter.email}
        </label>
        <input
          id={`newsletter-email-${variant}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "mt-1 h-11 w-full rounded-md border px-3 text-base",
            inverted
              ? "border-brand-foreground/30 bg-brand-foreground/10 text-brand-foreground placeholder:text-brand-foreground/60"
              : "border-input bg-card text-foreground",
          )}
          placeholder="nom@exemple.org"
        />
      </div>
      <label className="flex items-start gap-2 text-xs leading-relaxed">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4"
        />
        <span className={inverted ? "text-brand-foreground/80" : "text-muted-foreground"}>
          {t.newsletter.consent}
        </span>
      </label>
      <button
        type="submit"
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition-colors",
          inverted
            ? "bg-ochre text-ochre-foreground hover:opacity-90"
            : "bg-brand text-brand-foreground hover:bg-brand-deep",
        )}
      >
        {t.newsletter.subscribe}
      </button>
    </form>
  );
}
