# Product Type

## Purpose

Top-level product classification.

## Fields / Properties

* Name.
* Slug.

## Allowed Values

Documented examples:

* Hardware.
* Appliance.

## Relationships

* One Product Type has many [[Product Category|Product Categories]].
* One [[Product]] belongs to one Product Type.

## Used By

* [[Hardware And Appliances]]
* [[Product Discovery Journey]]
* [[Database - product_types]]
* [[API - Products]]

## Validation Rules

Products require a Product Type.

## Content Rules

Do not add product types casually. Taxonomy governance says new categories should require demand and long-term relevance.

## Open Questions

None for V1.

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `15-content-taxonomy.md`.
