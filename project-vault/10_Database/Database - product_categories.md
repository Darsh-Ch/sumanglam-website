# Database - product_categories

## Purpose

Stores functional product groupings.

## Fields / Properties

* `id`
* `name`
* `slug`
* `product_type_id`

## Relationships

* Category -> Product Type through `product_type_id`.
* Category -> Product Subcategories.
* Category -> Products through [[Database - product_category_mappings]].

## Used By

* [[Product Category]]
* [[Hardware Categories]]
* [[Appliance Categories]]
* [[API - Products]]

## Validation Rules

* Category slugs should be unique within product type.
* Avoid category proliferation.

## Content Rules

Use the official hardware and appliance category lists unless a new category is approved.

## Open Questions

* Should empty official categories be seeded before products exist?

## Source Trace

Source files: `06-content-model.md`, `08-database-design.md`, `15-content-taxonomy.md`.
