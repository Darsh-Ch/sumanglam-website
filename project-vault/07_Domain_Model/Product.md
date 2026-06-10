# Product

## Purpose

Represents an individual sellable item used for research and inquiry, not ecommerce checkout.

## Fields / Properties

* Name.
* Slug.
* SKU.
* Brand.
* Product Type.
* Categories.
* Subcategories.
* Short Description.
* Long Description.
* Price Range, unless exact pricing is confirmed.
* Primary Image.
* Gallery Images.
* Technical Specifications.
* Downloads.
* Related Inspirations.
* Related Products.
* Availability Status.
* SEO Metadata.

## Relationships

* Every Product belongs to exactly one [[Brand]].
* Every Product belongs to one [[Product Type]].
* Every Product belongs to at least one [[Product Category]].
* A Product may belong to one [[Product Subcategory]].
* A Product can appear in many [[Inspiration|Inspirations]].
* A Product can have many related products.

## Used By

* [[Hardware And Appliances]]
* [[Product Detail]]
* [[Product Discovery Journey]]
* [[Create Product Admin]]
* [[Database - products]]
* [[API - Products]]

## Validation Rules

* Brand is required.
* Product Type is required.
* At least one Category is required.
* SKU should be unique if treated as product identifier.
* Availability must be one of `available`, `limited`, `discontinued`, `coming_soon`.

## Content Rules

Products support spaces and inspirations. They should not become the primary site experience.

## Open Questions

* Exact pricing vs price range is unresolved.
* Full V1 product count is unresolved.

## Source Trace

Source files: `01-prd.md`, `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`, `16-doc-review.md`.
