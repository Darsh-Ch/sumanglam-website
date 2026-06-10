# Forbidden Patterns

## Product And UX

* Do not design the website like ecommerce.
* Do not prioritize products over inspirations.
* Do not create cluttered navigation.
* Do not push consultations aggressively.
* Do not use fake urgency.
* Do not use exaggerated claims.

## Brand Modeling

* Do not model wardrobes as independent product catalogs.
* Do not imply Nolte wardrobes.
* Do not treat Nolte and Mrida as identical solution brands.
* Do not flatten solution and product brands into one identical treatment.

## Architecture

* Do not introduce microservices.
* Do not introduce separate backend services.
* Do not introduce Redis.
* Do not introduce Kafka.
* Do not introduce Elasticsearch.
* Do not introduce Redux.
* Do not introduce unapproved dependencies.

Approved exception:

* Three.js, GSAP ScrollTrigger, and Lenis.js are user-approved.

## UI And Motion

* Do not use glassmorphism.
* Do not use neon colors.
* Do not use dark cyberpunk themes.
* Do not use excessive gradients.
* Do not use overcrowded layouts.
* Do not use heavy, disruptive, bouncy, or aggressive motion.
* Do not use auto-playing disruptive media.

## Components And Content

* Do not create duplicate components.
* Do not hardcode content that belongs in the content model.
* Do not create page-specific components when reusable components are appropriate.
* Do not use generic marketing copy.

## Database And API

* Do not create tables outside documented domain models.
* Do not denormalize without justification.
* Do not store duplicate information.
* Do not create undocumented endpoints.
* Do not return inconsistent response formats.

## Forms And Images

* Do not create forms without validation.
* Do not trust client-side validation alone.
* Do not serve original full-resolution images.
* Do not use unoptimized image tags.

## Future Features

Do not build in V1:

* Ecommerce checkout.
* User accounts.
* Wishlists.
* Quotation engine.
* Architect portal.
* Recommendation engine.

## Source Trace

Source files: `04-design-language.md`, `11-rules.md`, `12-dontdo.md`, `13-master-context.md`, `16-doc-review.md`, user instruction on 2026-06-10.
