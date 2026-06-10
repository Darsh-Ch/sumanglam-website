# User Approved Stack Extension - Three GSAP Lenis

## Decision

The user explicitly wants to use:

* Three.js.
* GSAP.
* GSAP ScrollTrigger.
* Lenis.js.

This is an approved extension to the original architecture docs.

## Why This Matters

The original docs say not to introduce technologies not listed in the architecture. This note records the user's approval so Claude Code can use these packages without treating them as forbidden.

## Intended Scope

Use for:

* Immersive visual sections.
* Premium scroll-driven storytelling.
* Smooth scrolling behavior.
* Carefully scoped 3D or cinematic showroom/inspiration moments.

Do not use for:

* Basic UI transitions that CSS or Framer Motion can handle.
* Gratuitous effects.
* Heavy motion that harms mobile performance.
* Scroll hijacking.
* Animation that violates reduced-motion preferences.

## Implementation Guidance

* Keep effects progressive and optional.
* Respect `prefers-reduced-motion`.
* Lazy-load heavy 3D/animation code where possible.
* Keep homepage performance target in view.
* Prefer no effect over a premium-breaking effect.
* Document where each library is used.

## Conflict Resolution

This note resolves the conflict between user preference and the original "no unlisted technologies" rule. The extension is approved, but still constrained by performance, mobile-first, and subtle-motion rules.

## Linked Notes

* [[16_Conflicts]]
* [[Interaction Patterns]]
* [[Frontend Stack]]
* [[Performance SEO Security]]
* [[Forbidden Patterns]]

## Source Trace

Source files: `10-techincal-architecture.md`, `11-rules.md`, `12-dontdo.md`; user instruction on 2026-06-10.
