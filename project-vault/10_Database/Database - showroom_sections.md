# Database - showroom_sections

## Purpose

Stores physical showroom areas.

## Fields / Properties

* `id`
* `name`
* `description`
* `floor_number`
* `images`
* `video_url`
* `created_at`
* `updated_at`

## Relationships

* Showroom Section -> many Brands through [[Database - showroom_brand_mappings]].
* Showroom Section -> many Inspirations through [[Database - showroom_inspiration_mappings]].

## Used By

* [[Showroom Section]]
* [[Showroom Experience]]
* [[Showroom Visit Intent]]
* [[API - Showroom]]

## Validation Rules

* Published/featured sections should have images.

## Content Rules

Showroom content should drive physical visit intent.

## Open Questions

* Exact image storage structure and floor values are not specified.

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`.
