import type { AccessibilityLabels, NavItem } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { SiteNav } from "@/components/layout/SiteNav";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  name: string;
  navigation: NavItem[];
  locale: Locale;
  accessibility: AccessibilityLabels;
}

export function SiteHeader({
  name,
  navigation,
  locale,
  accessibility,
}: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <ReadingProgress />
      <div className={`readContainer ${styles.inner}`}>
        <a href="#" className={styles.name}>
          {name}
        </a>
        <SiteNav
          navigation={navigation}
          locale={locale}
          accessibility={accessibility}
        />
      </div>
    </header>
  );
}
