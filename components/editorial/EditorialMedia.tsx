"use client";

import Image from "next/image";
import type { MediaItem } from "@/lib/types";
import { useViewportPlayback } from "./useViewportPlayback";
import styles from "./EditorialMedia.module.css";

interface EditorialMediaProps {
  media: MediaItem;
  className?: string;
  showCaption?: boolean;
}

export function EditorialMedia({
  media,
  className = "",
  showCaption = true,
}: EditorialMediaProps) {
  const videoRef = useViewportPlayback(media.type === "video" && Boolean(media.src));
  const showVideo = media.type === "video" && media.src;
  const showImage = media.type === "image" && media.src;
  const placeholderSrc = media.placeholderSrc;
  const isSquare = media.type === "image";

  return (
    <figure className={`${styles.figure} ${className}`}>
      <div
        className={`${styles.frame} ${isSquare ? styles.frameSquare : styles.frameNatural}`}
      >
        {showVideo ? (
          <video
            ref={videoRef}
            className={styles.video}
            src={media.src}
            poster={media.poster ?? placeholderSrc}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={media.alt}
          />
        ) : showImage ? (
          <Image
            src={media.src!}
            alt={media.alt}
            width={media.width ?? 1200}
            height={media.height ?? 800}
            className={styles.image}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        ) : placeholderSrc ? (
          <Image
            src={placeholderSrc}
            alt={media.alt}
            width={1200}
            height={media.type === "video" ? 675 : 1200}
            className={
              media.type === "video"
                ? styles.placeholderVideo
                : styles.placeholderImage
            }
          />
        ) : (
          <div className={styles.fallback} aria-label={media.alt}>
            <span className={styles.fallbackLabel}>{media.placeholderLabel}</span>
            {media.placeholderHint && (
              <span className={styles.fallbackHint}>{media.placeholderHint}</span>
            )}
          </div>
        )}

        {media.type === "video" && !media.src && (
          <span className={styles.videoBadge} aria-hidden="true">
            ▶ Autoplay al entrar en pantalla
          </span>
        )}
      </div>

      {showCaption && media.caption && (
        <figcaption className={styles.caption}>
          <span className={styles.captionRule} aria-hidden="true" />
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
