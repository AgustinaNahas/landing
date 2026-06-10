import Image from "next/image";
import styles from "./EditorialImage.module.css";

interface EditorialImageProps {
  src?: string;
  alt: string;
  caption: string;
  placeholderLabel: string;
}

export function EditorialImage({
  src,
  alt,
  caption,
  placeholderLabel,
}: EditorialImageProps) {
  return (
    <figure className={styles.figure}>
      {src ? (
        <div className={styles.imageWrap}>
          <Image
            src={src}
            alt={alt}
            width={820}
            height={520}
            className={styles.image}
          />
        </div>
      ) : (
        <div className={styles.placeholder} aria-label={alt}>
          <svg
            viewBox="0 0 820 400"
            className={styles.placeholderSvg}
            aria-hidden="true"
          >
            <rect
              x="0"
              y="0"
              width="820"
              height="400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line x1="0" y1="0" x2="820" y2="400" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="820" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <text x="410" y="200" textAnchor="middle" className={styles.placeholderText}>
              {placeholderLabel}
            </text>
          </svg>
        </div>
      )}
      <figcaption className={styles.caption}>
        <span className={styles.captionRule} aria-hidden="true" />
        {caption}
      </figcaption>
    </figure>
  );
}
