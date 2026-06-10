# Database - products

## Purpose

Stores individual sellable products for research, related content, and inquiry.

## Fields / Properties

* `id`
* `name`
* `slug`
* `sku`
* `brand_id`
* `product_type_id`
* `subcategory_id`
* `short_description`
* `long_description`
* `price_range`
* `primary_image`
* `gallery_images`
* `availability_status`
* `technical_specs_json`
* `is_featured`
* `created_at`
* `updated_at`

## Relationships

* Product -> Brand.
* Product -> Product Type.
* Product -> optional Subcategory.
* Product -> many Categories through [[Database - product_category_mappings]].
* Product -> many Inspirations through [[Database - inspiration_products]].

## Used By

* [[Product]]
* [[Product Detail]]
* [[Product Discovery Journey]]
* [[Create Product Admin]]
* [[API - Products]]

## Validation Rules

* Product must have brand, product type, and at least one category.
* `slug` should be unique and indexed.
* `brand_id`, `product_type_id`, and `is_featured` should be indexed.
* `availability_status` must use allowed values.

## Content Rules

Do not build checkout. Product pages exist to support research and inquiry.

## Open Questions

* Exact price vs price range unresolved.
* Downloads field exists in content model but not database table.
* Media storage shape is not specified.

## Source Trace

Source files: `01-prd.md`, `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`.
