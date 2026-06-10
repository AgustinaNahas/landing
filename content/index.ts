import type { SiteContent } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import { site as siteEs } from "@/content/site.es";
import { site as siteEn } from "@/content/site.en";

const sites: Record<Locale, SiteContent> = {
  es: siteEs,
  en: siteEn,
};

export function getSiteContent(locale: Locale): SiteContent {
  return sites[locale];
}

export { siteEs, siteEn };
