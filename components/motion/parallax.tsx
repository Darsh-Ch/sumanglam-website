"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Total vertical drift in % of element height. Keep gentle (8–14). */
  amount?: number;
};

/**
 * Gentle scroll-scrubbed parallax (GSAP ScrollTrigger) for hero and section
 * imagery. The child is scaled slightly so the drift never exposes edges.
 * No-ops under reduced motion; never hijacks scroll.
 */
export function Parallax({ children, className, amount = 10 }: ParallaxProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = gsap.fromTo(
      inner,
      { yPercent: -amount / 2 },
      {
        yPercent: amount / 2,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [amount]);

  return (
    <div ref={wrapRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <div ref={innerRef} className="absolute inset-0 scale-110">
        {children}
      </div>
    </div>
  );
}
