import { useParams } from "@tanstack/react-router";
import { messages, type Messages } from "@/i18n/messages";
import { normalizeLang, type Lang, LANG_STORAGE_KEY } from "@/i18n/config";
import type { Localized } from "@/i18n/content";

/** Current language, read from the /$lang route segment. Falls back to French. */
export function useLang(): Lang {
  const params = useParams({ strict: false }) as { lang?: string };
  return normalizeLang(params.lang);
}

/** Translated UI strings for the current language. */
export function useT(): Messages {
  return messages[useLang()];
}

/** Pick a localized content value, falling back to French when missing. */
export function pick(value: Localized, lang: Lang): string {
  return value[lang] || value.fr;
}

export function rememberLang(lang: Lang) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* storage unavailable — ignore */
  }
}

export function readRememberedLang(): Lang | null {
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "fr" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}
