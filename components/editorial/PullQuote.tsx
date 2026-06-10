import styles from "./PullQuote.module.css";

interface PullQuoteProps {
  quote: string;
  className?: string;
}

export function PullQuote({ quote, className = "" }: PullQuoteProps) {
  return (
    <blockquote className={`${styles.quote} ${className}`}>
      <p className={styles.text}>&ldquo;{quote}&rdquo;</p>
    </blockquote>
  );
}
