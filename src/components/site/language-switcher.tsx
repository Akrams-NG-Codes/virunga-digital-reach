import { useMatches, useNavigate, useParams } from "@tanstack/react-router";
import { LANGS, LANG_LABELS, type Lang } from "@/i18n/config";
import { rememberLang, useLang, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const lang = useLang();
  const t = useT();
  const navigate = useNavigate();
  const matches = useMatches();
  const params = useParams({ strict: false });

  const current = matches[matches.length - 1];

  function switchTo(next: Lang) {
    rememberLang(next);
    navigate({
      to: current?.fullPath ?? "/$lang",
      params: { ...(params as Record<string, string>), lang: next },
      replace: true,
    });
  }

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={t.common.changeLanguage}
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => switchTo(code)}
          aria-current={code === lang ? "true" : undefined}
          className={cn(
            "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
            code === lang
              ? "bg-brand text-brand-foreground"
              : "text-muted-foreground hover:bg-surface-strong hover:text-foreground",
          )}
        >
          <span className="sr-only">{LANG_LABELS[code]}</span>
          <span aria-hidden="true">{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
