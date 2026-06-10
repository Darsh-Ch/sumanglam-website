"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animation delay in seconds. */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
};

/**
 * Subtle scroll-triggered fade/slide reveal (GSAP ScrollTrigger).
 * Content remains visible without JS or when reduced motion is preferred —
 * motion is purely progressive enhancement.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [delay, y]);

  return (
    <div ref={ref} className={cn("gsap-reveal", className)}>
      {children}
    </div>
  );
}
