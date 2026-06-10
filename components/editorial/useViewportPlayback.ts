"use client";

import { useEffect, useRef } from "react";

export function useViewportPlayback(active: boolean) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
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

  return ref;
}
