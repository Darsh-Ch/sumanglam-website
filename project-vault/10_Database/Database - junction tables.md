# Database - junction tables

## Purpose

Stores many-to-many relationships across collections, inspirations, products, brands, and showroom sections.

## Tables

### Database - collection_inspirations

Fields:

* `collection_id`
* `inspiration_id`

Purpose: Link Collections and Inspirations.

### Database - inspiration_products

Fields:

* `inspiration_id`
* `product_id`

Purpose: Link Inspirations and Products.

### Database - inspiration_brands

Fields:

* `inspiration_id`
* `brand_id`

Purpose: Link Inspirations and Brands.

### Database - product_category_mappings

Fields:

* `product_id`
* `category_id`

Purpose: Products can belong to multiple Categories.

### Database - showroom_brand_mappings

Fields:

* `showroom_section_id`
* `brand_id`

Purpose: Link Showroom Sections and Brands.

### Database - showroom_inspiration_mappings

Fields:

* `showroom_section_id`
* `inspiration_id`

Purpose: Link Showroom Sections and Inspirations.

## Validation Rules

* Use composite unique constraints to prevent duplicate mappings.
* Use foreign keys to preserve integrity.
* Cascade or restrict deletes deliberately. Admin API says delete should archive content where applicable.

## Used By

* [[Inspiration]]
* [[Inspiration Collection]]
* [[Product]]
* [[Brand]]
* [[Showroom Section]]

## Open Questions

* Delete/archive behavior across mappings is not fully specified.

## Source Trace

Source files: `05-domain-model.md`, `08-database-design.md`.
