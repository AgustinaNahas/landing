"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/locale";
import { getLocaleLanguage } from "@/lib/locale";

interface LocaleHtmlProps {
  locale: Locale;
}

export function LocaleHtml({ locale }: LocaleHtmlProps) {
  useEffect(() => {
    document.documentElement.lang = getLocaleLanguage(locale);
  }, [locale]);

  return null;
}
