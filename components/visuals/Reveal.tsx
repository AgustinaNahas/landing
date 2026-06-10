"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Extra delay in ms before the reveal transition starts */
  delay?: number;
  /** Stagger index — adds index * 40ms to the delay */
  staggerIndex?: number;
  /** Visual variant */
  variant?: "default" | "dataPoint";
  /** Custom transition duration in ms */
  duration?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  staggerIndex,
  variant = "default",
  duration,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  const totalDelay =
    delay + (staggerIndex !== undefined ? staggerIndex * 40 : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "dataPoint" ? styles.dataPoint : styles.defaultVariant;

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${variantClass} ${revealed ? styles.visible : ""} ${className}`}
      data-revealed={revealed || undefined}
      style={
        {
          "--reveal-delay": `${totalDelay}ms`,
          ...(duration !== undefined
            ? { "--reveal-duration": `${duration}ms` }
            : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
