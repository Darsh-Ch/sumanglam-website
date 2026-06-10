# Database - collections

## Purpose

Represents curated inspiration groups.

## Fields / Properties

* `id`
* `title`
* `slug`
* `short_description`
* `long_description`
* `cover_image`
* `created_at`
* `updated_at`

## Relationships

* Collection -> many Inspirations through [[Database - collection_inspirations]].

## Used By

* [[Content Type - Collection]]
* [[Inspiration Collection]]
* [[Inspiration Collections]]
* [[API - Collections]]

## Validation Rules

* `slug` should be unique and indexed.
* Avoid creating collections without long-term relevance.

## Content Rules

Collections should support inspiration-first browsing.

## Open Questions

* Gallery images and SEO metadata are in content model but not listed in database fields. Decide whether to add fields before schema finalization.

## Source Trace

Source files: `06-content-model.md`, `08-database-design.md`, `15-content-taxonomy.md`.
