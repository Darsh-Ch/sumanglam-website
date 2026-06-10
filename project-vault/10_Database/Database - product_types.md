# Database - product_types

## Purpose

Stores top-level product classifications.

## Fields / Properties

* `id`
* `name`
* `slug`

## Relationships

* Product Type -> many Product Categories.
* Product Type -> many Products.

## Used By

* [[Product Type]]
* [[Hardware And Appliances]]
* [[API - Products]]

## Validation Rules

* `slug` should be unique.

## Content Rules

Initial values:

* Hardware.
* Appliance.

## Open Questions

None for V1.

## Source Trace

Source files: `05-domain-model.md`, `08-database-design.md`.
