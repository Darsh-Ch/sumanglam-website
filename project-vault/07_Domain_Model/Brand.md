# Brand

## Purpose

Represents a manufacturer, solution provider, or sub-brand within the Sumanglam ecosystem.

## Fields / Properties

Business properties:

* Name.
* Slug.
* Brand Type: solution or product.
* Parent Brand, optional.
* Description.
* Story.
* Logo.
* Hero Image.
* Highlights.
* Featured Collections.
* Featured Inspirations.
* Featured Products.
* Optional Website Link.
* SEO metadata.

## Relationships

* One Brand may own many [[Product|Products]].
* One Brand may appear in many [[Inspiration|Inspirations]].
* One Brand may optionally belong to a parent Brand.
* Hettich is parent to Blaupunkt.

## Used By

* [[Brands]]
* [[Nolte]]
* [[Mrida]]
* [[Brand Discovery Journey]]
* [[Product Detail]]
* [[Database - brands]]
* [[API - Brands]]

## Validation Rules

* `brand_type` must distinguish solution and product brands.
* Parent brand relationships must be supported.
* Solution brands must not be treated the same as product brands.

## Content Rules

Solution brands:

* Nolte: premium German kitchens.
* Mrida: modular kitchens, modular wardrobes, customized interior solutions.

Product brands:

* Bosch, Siemens, Liebherr, Hafele, Hettich, Blum, Godrej, Dorset, Yale, Spitze, Brass Barony, Everyday, Blaupunkt.

## Open Questions

* Final brand copy and official assets are needed.

## Source Trace

Source files: `01-prd.md`, `02-information_architecture.md`, `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`, `13-master-context.md`, `15-content-taxonomy.md`, `16-doc-review.md`.
