import styles from "./EditorialDivider.module.css";

interface EditorialDividerProps {
  variant?: "line" | "dots";
  className?: string;
}

export function EditorialDivider({
  variant = "line",
  className = "",
}: EditorialDividerProps) {
  return (
    <div
      className={`${styles.divider} ${styles[variant]} ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
}
