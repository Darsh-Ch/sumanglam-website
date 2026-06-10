# Database - product_subcategories

## Purpose

Stores optional deeper product groupings.

## Fields / Properties

* `id`
* `name`
* `slug`
* `category_id`

## Relationships

* Subcategory -> Category through `category_id`.
* Product -> Subcategory through `products.subcategory_id`.

## Used By

* [[Product Subcategory]]
* [[Product Detail]]
* [[API - Products]]

## Validation Rules

* Slugs should be unique within category.

## Content Rules

Only add subcategories where they improve discovery.

## Open Questions

None for V1.

## Source Trace

Source files: `05-domain-model.md`, `08-database-design.md`.
