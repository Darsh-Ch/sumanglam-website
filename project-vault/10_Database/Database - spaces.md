# Database - spaces

## Purpose

Represents major home areas.

## Fields / Properties

* `id`
* `title`
* `slug`
* `description`
* `hero_image`
* `created_at`
* `updated_at`

## Relationships

* Space -> many Collections.
* Space -> many Inspirations through `inspirations.space_id`.

## Used By

* [[Content Type - Space]]
* [[Space Taxonomy]]
* [[API - Spaces]]
* [[Inspiration]]

## Validation Rules

* `slug` should be unique and indexed.
* Spaces should align with official taxonomy.

## Content Rules

Initial spaces: Kitchen, Wardrobe, Hardware, Appliances.

## Open Questions

None for V1.

## Source Trace

Source files: `06-content-model.md`, `08-database-design.md`, `15-content-taxonomy.md`.
