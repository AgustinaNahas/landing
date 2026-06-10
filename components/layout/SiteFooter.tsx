import styles from "./SiteFooter.module.css";

interface SiteFooterProps {
  name: string;
  tagline: string;
}

export function SiteFooter({ name, tagline }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`readContainer ${styles.inner}`}>
        <p className={styles.text}>
          {name} · {year}
        </p>
        <p className={styles.tagline}>{tagline}</p>
      </div>
    </footer>
  );
}
