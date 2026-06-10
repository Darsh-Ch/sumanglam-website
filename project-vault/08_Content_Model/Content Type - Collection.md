# Content Type - Collection

## Purpose

Represents a curated theme that groups inspirations.

## Fields / Properties

* Title.
* Slug.
* Short Description.
* Long Description.
* Cover Image.
* Gallery Images.
* Related Inspirations.
* Featured Brands.
* Related Collections.
* SEO Metadata.

## Relationships

* Collection -> many [[Content Type - Inspiration|Inspirations]].
* Collection -> related collections.
* Space -> many Collections.

## Used By

* [[Inspiration]]
* [[Explore Inspiration Journey]]
* [[Inspiration Collections]]
* [[Database - collections]]
* [[API - Collections]]

## Validation Rules

* Slug must be unique.
* Avoid category/collection proliferation.

## Content Rules

Examples:

* Modern Kitchens.
* German Kitchens.
* Luxury Wardrobes.
* Minimal Spaces.
* Storage Solutions.

## Open Questions

* Whether empty planned collections are allowed is unresolved.

## Source Trace

Source files: `06-content-model.md`, `08-database-design.md`, `15-content-taxonomy.md`.
