# Product Category

## Purpose

Functional grouping for product browsing and filtering.

## Fields / Properties

* Name.
* Slug.
* Product Type.

## Relationships

* One Category belongs to one [[Product Type]].
* One Category contains many [[Product|Products]].
* One Product can belong to many Categories through mappings.
* One Category can have many [[Product Subcategory|Subcategories]].

## Used By

* [[Hardware And Appliances]]
* [[Hardware Categories]]
* [[Appliance Categories]]
* [[Product Discovery Journey]]
* [[Database - product_categories]]
* [[Database - product_category_mappings]]
* [[API - Products]]

## Validation Rules

* Category names and slugs should be unique within product type.
* Product category mappings should not duplicate rows.

## Content Rules

Users should generally browse Category -> Brand -> Product, not Brand -> Product.

## Open Questions

* Whether planned-but-empty categories should be seeded is unresolved.

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `15-content-taxonomy.md`.
