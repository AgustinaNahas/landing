export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function getLocalePath(locale: Locale): string {
  return locale === "en" ? "/en/" : "/";
}

export function getLocaleLanguage(locale: Locale): string {
  return locale === "en" ? "en" : "es-AR";
}
