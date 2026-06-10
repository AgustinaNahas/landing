import type { Locale } from "@/lib/locale";
import { getLocalePath } from "@/lib/locale";
import styles from "./SiteHeader.module.css";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div className={styles.langSwitcher} role="group" aria-label="Language">
      {locale === "es" ? (
        <span className={styles.langActive} aria-current="true">
          ES
        </span>
      ) : (
        <a href={getLocalePath("es")} className={styles.langLink} hrefLang="es">
          ES
        </a>
      )}
      <span className={styles.langSep} aria-hidden="true">
        |
      </span>
      {locale === "en" ? (
        <span className={styles.langActive} aria-current="true">
          EN
        </span>
      ) : (
        <a href={getLocalePath("en")} className={styles.langLink} hrefLang="en">
          EN
        </a>
      )}
    </div>
  );
}
