# Inspiration Collection

## Purpose

Represents a curated grouping of inspirations that supports inspiration-first browsing.

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

* One Collection contains many [[Inspiration|Inspirations]].
* One Inspiration can belong to many Collections.
* A [[Content Type - Space|Space]] can have many Collections.

## Used By

* [[Inspiration]]
* [[Explore Inspiration Journey]]
* [[Inspiration Collections]]
* [[Database - collections]]
* [[Database - collection_inspirations]]
* [[API - Collections]]

## Validation Rules

* Collection slugs must be unique.
* Avoid creating collections without enough content or long-term relevance.

## Content Rules

Examples:

* Modern Kitchens.
* German Kitchens.
* Luxury Wardrobes.
* Storage Solutions.
* Minimal Spaces.

## Open Questions

* Whether empty planned collections can be seeded is unresolved.

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `15-content-taxonomy.md`.
