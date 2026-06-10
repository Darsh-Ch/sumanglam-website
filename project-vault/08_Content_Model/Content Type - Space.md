# Content Type - Space

## Purpose

Represents a high-level area of the home or product ecosystem.

## Fields / Properties

* Title.
* Slug.
* Description.
* Hero Image.
* Featured Collections.
* Featured Inspirations.
* SEO Content.
* SEO Metadata.

## Relationships

* Space -> many [[Content Type - Collection|Collections]].
* Space -> many [[Content Type - Inspiration|Inspirations]].

## Used By

* [[Inspiration]]
* [[Kitchens]]
* [[Hardware And Appliances]]
* [[Space Taxonomy]]
* [[Database - spaces]]
* [[API - Spaces]]

## Validation Rules

* Slug must be unique.
* Featured content should be published.

## Content Rules

Documented spaces:

* Kitchen.
* Wardrobe.
* Hardware.
* Appliances.

## Open Questions

None for V1.

## Source Trace

Source files: `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`, `15-content-taxonomy.md`.
