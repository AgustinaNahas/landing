"use client";

import { useEffect, useId, useState } from "react";
import type { AccessibilityLabels, NavItem } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import styles from "./SiteHeader.module.css";

interface SiteNavProps {
  navigation: NavItem[];
  locale: Locale;
  accessibility: AccessibilityLabels;
}

export function SiteNav({ navigation, locale, accessibility }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className={styles.navGroup}>
        <nav className={styles.nav} aria-label={accessibility.mainNav}>
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>

      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? accessibility.closeMenu : accessibility.openMenu}
        onClick={() => setOpen((current) => !current)}
      >
        <span
          className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          id={menuId}
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label={accessibility.mobileMenu}
        >
          <ul className={styles.mobileNavList}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileLangItem}>
              <LanguageSwitcher locale={locale} />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
