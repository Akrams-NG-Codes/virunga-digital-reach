export const LANGS = ["fr", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "fr";

/** Languages prepared but not yet enabled (Swahili is planned). */
export const PLANNED_LANGS = ["sw"] as const;

export const LANG_LABELS: Record<Lang, string> = {
  fr: "Français",
  en: "English",
};

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

export function normalizeLang(value: unknown): Lang {
  return isLang(value) ? value : DEFAULT_LANG;
}

export const LANG_STORAGE_KEY = "viracro.lang";
