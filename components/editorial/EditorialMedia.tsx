"use client";

import Image from "next/image";
import type { MediaItem } from "@/lib/types";
import { useLazyVideoPlayback } from "./useViewportPlayback";
import styles from "./EditorialMedia.module.css";

interface EditorialMediaProps {
  media: MediaItem;
  className?: string;
  showCaption?: boolean;
  variant?: "default" | "margin";
}

export function EditorialMedia({
  media,
  className = "",
  showCaption = true,
  variant = "default",
}: EditorialMediaProps) {
  const isMargin = variant === "margin";
  const showVideo = media.type === "video" && Boolean(media.src);
  const { containerRef, videoRef, loaded, staticOnly } = useLazyVideoPlayback(
    media.src,
    showVideo,
  );
  const showImage = media.type === "image" && media.src;
  const placeholderSrc = media.placeholderSrc;
  const isSquare = media.type === "image";
  const poster = media.poster ?? placeholderSrc;

  return (
    <figure
      className={`${styles.figure} ${isMargin ? styles.figureMargin : ""} ${className}`}
    >
      <div
        ref={showVideo ? containerRef : undefined}
        className={`${styles.frame} ${isSquare ? styles.frameSquare : styles.frameNatural}`}
      >
        {showVideo && staticOnly && poster ? (
          <Image
            src={poster}
            alt={media.alt}
            width={1024}
            height={576}
            className={styles.video}
            sizes={
              isMargin
                ? "(max-width: 959px) 6rem, 7.5rem"
                : "(max-width: 1024px) 100vw, 1024px"
            }
          />
        ) : showVideo ? (
          <>
            {!loaded && poster && (
              <Image
                src={poster}
                alt=""
                aria-hidden
                width={1024}
                height={576}
                className={`${styles.video} ${styles.videoPoster}`}
                sizes={
                  isMargin
                    ? "(max-width: 959px) 6rem, 7.5rem"
                    : "(max-width: 1024px) 100vw, 1024px"
                }
              />
            )}
            <video
              ref={videoRef}
              className={`${styles.video} ${loaded ? styles.videoReady : styles.videoHidden}`}
              poster={poster}
              muted
              loop
              playsInline
              preload="none"
              aria-label={media.alt}
            />
          </>
        ) : showImage ? (
          <Image
            src={media.src!}
            alt={media.alt}
            width={media.width ?? 1200}
            height={media.height ?? 800}
            className={styles.image}
            sizes={
              isMargin
                ? "(max-width: 959px) 6rem, 7.5rem"
                : "(max-width: 1024px) 100vw, 1024px"
            }
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
      </div>

      {showCaption && media.caption && (
        <figcaption
          className={isMargin ? styles.captionMargin : styles.caption}
        >
          <span
            className={isMargin ? styles.captionRuleMargin : styles.captionRule}
            aria-hidden="true"
          />
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
