# Database - brands

## Purpose

Represents manufacturers, solution providers, and sub-brands.

## Fields / Properties

* `id`
* `name`
* `slug`
* `brand_type`
* `parent_brand_id`
* `description`
* `story`
* `logo`
* `hero_image`
* `is_featured`
* `created_at`
* `updated_at`

## Relationships

* Brand -> Products through `products.brand_id`.
* Brand -> Inspirations through [[Database - inspiration_brands]].
* Brand -> child brands through `parent_brand_id`.

## Used By

* [[Brand]]
* [[Brands]]
* [[Nolte]]
* [[Mrida]]
* [[Parent Brand Relationships]]
* [[API - Brands]]

## Validation Rules

* `brand_type` values: `solution`, `product`.
* `slug` should be unique and indexed.
* `parent_brand_id` must reference another brand or be null.
* Blaupunkt should have Hettich as parent.

## Content Rules

Solution brands and product brands require different presentation.

## Open Questions

* Whether brand highlights and featured collections need explicit database fields or computed relationships is not specified.

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`, `16-doc-review.md`.
