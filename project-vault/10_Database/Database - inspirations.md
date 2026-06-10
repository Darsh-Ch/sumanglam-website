# Database - inspirations

## Purpose

Represents design concepts and inspiration content.

## Fields / Properties

* `id`
* `title`
* `slug`
* `short_description`
* `long_description`
* `primary_image`
* `gallery_images`
* `video_url`
* `space_id`
* `is_featured`
* `created_at`
* `updated_at`

## Relationships

* Inspiration -> Space through `space_id`.
* Inspiration -> Collections through [[Database - collection_inspirations]].
* Inspiration -> Products through [[Database - inspiration_products]].
* Inspiration -> Brands through [[Database - inspiration_brands]].

## Used By

* [[Content Type - Inspiration]]
* [[Inspiration]]
* [[Explore Inspiration Journey]]
* [[Create Inspiration Admin]]
* [[API - Inspirations]]

## Validation Rules

* `slug` should be unique and indexed.
* `is_featured` should be indexed.
* Published inspiration should have a primary image.
* Every inspiration should belong to at least one collection.

## Content Rules

Inspiration is first-class and should be treated as core content, not decoration.

## Open Questions

* Should tags/style tags be stored in JSON, separate tables, or omitted from V1?
* Gallery image storage shape is not specified.

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`.
