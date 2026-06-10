import styles from "./EditorialNote.module.css";

interface EditorialNoteProps {
  text: string;
  ariaLabel: string;
  className?: string;
}

export function EditorialNote({ text, ariaLabel, className = "" }: EditorialNoteProps) {
  return (
    <aside className={`${styles.note} ${className}`} aria-label={ariaLabel}>
      <span className={styles.rule} aria-hidden="true" />
      <p className={styles.text}>{text}</p>
    </aside>
  );
}
