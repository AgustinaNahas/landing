import styles from "./MicroViz.module.css";

type MicroVizVariant = "nodes" | "curve" | "network" | "timeline";

interface MicroVizProps {
  variant?: MicroVizVariant;
  className?: string;
}

export function MicroViz({ variant = "curve", className = "" }: MicroVizProps) {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      aria-hidden="true"
    >
      {variant === "curve" && (
        <svg viewBox="0 0 120 60" className={styles.svg}>
          <path
            d="M 0 45 Q 30 10, 60 35 T 120 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="0" cy="45" r="2.5" fill="currentColor" />
          <circle cx="60" cy="35" r="2.5" fill="currentColor" />
          <circle cx="120" cy="20" r="2.5" fill="currentColor" />
        </svg>
      )}
      {variant === "nodes" && (
        <svg viewBox="0 0 80 80" className={styles.svg}>
          <line x1="20" y1="40" x2="60" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="40" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="20" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="40" r="3" fill="currentColor" />
          <circle cx="60" cy="20" r="3" fill="currentColor" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
        </svg>
      )}
      {variant === "network" && (
        <svg viewBox="0 0 100 50" className={styles.svg}>
          <path d="M 10 25 L 35 10 L 65 10 L 90 25" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 10 25 L 35 40 L 65 40 L 90 25" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 35 10 L 35 40" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 65 10 L 65 40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="10" cy="25" r="2" fill="currentColor" />
          <circle cx="90" cy="25" r="2" fill="currentColor" />
        </svg>
      )}
      {variant === "timeline" && (
        <svg viewBox="0 0 140 24" className={styles.svg}>
          <line x1="0" y1="12" x2="140" y2="12" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="12" r="2.5" fill="currentColor" />
          <circle cx="47" cy="12" r="2.5" fill="currentColor" />
          <circle cx="93" cy="12" r="2.5" fill="currentColor" />
          <circle cx="140" cy="12" r="2.5" fill="currentColor" />
        </svg>
      )}
    </div>
  );
}
