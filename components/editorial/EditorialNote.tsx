import styles from "./EditorialNote.module.css";

interface EditorialNoteProps {
  text: string;
  className?: string;
}

export function EditorialNote({ text, className = "" }: EditorialNoteProps) {
  return (
    <aside className={`${styles.note} ${className}`} aria-label="Nota editorial">
      <span className={styles.rule} aria-hidden="true" />
      <p className={styles.text}>{text}</p>
    </aside>
  );
}
