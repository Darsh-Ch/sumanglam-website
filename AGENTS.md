# Agent Instructions

This project has a documentation vault at `project-vault/`.

Claude Code is the expected implementation executor for website build tasks. Codex may still update documentation or prepare implementation context.

Before implementing any website feature:

* Read `project-vault/00_Index.md`
* Read `project-vault/13_Rules_And_Constraints/Global Rules.md`
* Read `project-vault/17_Forbidden_Things.md`
* Read the relevant page, flow, data, API, and design notes
* Check `project-vault/15_Open_Questions.md`
* Check `project-vault/16_Conflicts.md`

Rules:

* Do not invent product requirements.
* Do not violate `12-dontdo.md` or derived forbidden rules.
* Treat `three`, `gsap` with `ScrollTrigger`, and `lenis` as user-approved stack additions for immersive and scroll experiences.
* If an open question blocks implementation, stop and report it.
* Keep changes scoped to the requested feature.
* Update relevant vault notes when implementation decisions are made.
* Prefer small, reviewable changes.
* End every coding task with changed files, tests run, and remaining risks.
