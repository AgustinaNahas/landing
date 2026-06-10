import type { NavItem } from "@/lib/types";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  name: string;
  navigation: NavItem[];
}

export function SiteHeader({ name, navigation }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`readContainer ${styles.inner}`}>
        <a href="#" className={styles.name}>
          {name.split(" ")[0]} {name.split(" ")[1]?.charAt(0)}.
        </a>
        <nav className={styles.nav} aria-label="Navegación principal">
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
      </div>
    </header>
  );
}
