# Product Subcategory

## Purpose

Optional deeper product grouping.

## Fields / Properties

* Name.
* Slug.
* Category.

## Examples

* Cabinet Handles.
* Wardrobe Handles.
* Soft Close Hinges.
* Built-In Ovens.

## Relationships

* One Subcategory belongs to one [[Product Category]].
* One [[Product]] may belong to one Subcategory in the documented schema.

## Used By

* [[Hardware And Appliances]]
* [[Product Discovery Journey]]
* [[Database - product_subcategories]]
* [[API - Products]]

## Validation Rules

Subcategory slugs should be unique within their category.

## Content Rules

Use subcategories only where they improve real discovery.

## Open Questions

None for V1.

## Source Trace

Source files: `05-domain-model.md`, `08-database-design.md`, `09-api-specification.md`.
