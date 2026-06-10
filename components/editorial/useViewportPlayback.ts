"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoPlayback {
  containerRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  /** Video source is attached and may be playing */
  loaded: boolean;
  /** User prefers reduced motion — show poster only */
  staticOnly: boolean;
}

export function useLazyVideoPlayback(
  src: string | undefined,
  active: boolean,
): LazyVideoPlayback {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [staticOnly, setStaticOnly] = useState(false);

  useEffect(() => {
    if (!active || !src) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setStaticOnly(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "320px 0px", threshold: 0 },
    );

    loadObserver.observe(container);
    return () => loadObserver.disconnect();
  }, [active, src]);

  useEffect(() => {
    if (!loaded || !src || staticOnly) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.src = src;

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    playObserver.observe(container);

    return () => {
      playObserver.disconnect();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [loaded, src, staticOnly]);

  return { containerRef, videoRef, loaded, staticOnly };
}

/** @deprecated Use useLazyVideoPlayback */
export function useViewportPlayback(active: boolean) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !active) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (prefersReduced) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [active]);

  return videoRef;
}
