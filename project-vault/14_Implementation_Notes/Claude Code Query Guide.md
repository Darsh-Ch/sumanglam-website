# Claude Code Query Guide

## Before Implementing Any Feature

1. Read `project-vault/00_Index.md`.
2. Read `project-vault/13_Rules_And_Constraints/Global Rules.md`.
3. Read `project-vault/17_Forbidden_Things.md`.
4. Read the relevant page/screen note.
5. Read linked flow notes.
6. Read linked data/content/database/API notes.
7. Check `project-vault/15_Open_Questions.md`.
8. Check `project-vault/16_Conflicts.md`.
9. Only then propose files to edit.

## Before Editing Database Or API Code

1. Read the relevant database note.
2. Read linked domain/content model notes.
3. Read linked API/backend notes.
4. Check open questions/conflicts.
5. Do not change schema casually.
6. Update vault notes if implementation decisions resolve open questions.

## Before Editing UI

1. Read `project-vault/06_Design_System/Visual Style.md`.
2. Read `project-vault/06_Design_System/Typography.md`.
3. Read `project-vault/06_Design_System/Spacing Layout.md`.
4. Read `project-vault/06_Design_System/Interaction Patterns.md`.
5. Read `project-vault/05_UI_UX/Homepage UX Specification.md` if working on homepage.
6. Read the relevant page note and screen event flows.
7. Check forbidden patterns.
8. Preserve consistency with the design system.

## Before Using Three.js, GSAP ScrollTrigger, Or Lenis.js

1. Read `project-vault/12_Technical_Architecture/User Approved Stack Extension - Three GSAP Lenis.md`.
2. Read `project-vault/06_Design_System/Interaction Patterns.md`.
3. Confirm the effect supports premium storytelling.
4. Respect reduced-motion preferences.
5. Lazy-load heavy animation/3D where possible.
6. Verify mobile performance.

## Claude Code Working Rules

* Do not invent product requirements.
* Do not violate `12-dontdo.md` or derived forbidden rules.
* Do not build excluded V1 features.
* If a blocking open question appears, stop and report it.
* Keep changes small and reviewable.
* End with changed files, tests run, and remaining risks.

## Source Trace

Source files: `11-rules.md`, `12-dontdo.md`, `13-master-context.md`, `14-project-bootstrap.md`, user instruction on 2026-06-10.
