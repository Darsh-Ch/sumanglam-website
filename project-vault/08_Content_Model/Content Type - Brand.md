# Content Type - Brand

## Purpose

Represents a solution brand or product brand as a storytelling and trust-building asset.

## Fields / Properties

* Name.
* Slug.
* Brand Type.
* Logo.
* Hero Image.
* Description.
* Story.
* Highlights.
* Featured Collections.
* Featured Inspirations.
* Featured Products.
* Website Link, optional.
* SEO Metadata.
* Parent Brand, where applicable.

## Relationships

* Brand -> many Products.
* Brand -> many Inspirations.
* Brand may belong to a parent brand.

## Used By

* [[Brands]]
* [[Nolte]]
* [[Mrida]]
* [[Brand Discovery Journey]]
* [[Database - brands]]
* [[API - Brands]]

## Validation Rules

* Brand Type must be solution or product.
* Parent brand relationship must support Hettich -> Blaupunkt.

## Content Rules

Brands are not simple filters. They need meaningful story, visuals, and highlights.

## Open Questions

* Final brand copy and official assets are needed.

## Source Trace

Source files: `01-prd.md`, `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`, `15-content-taxonomy.md`.
