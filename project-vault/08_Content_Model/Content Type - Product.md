# Content Type - Product

## Purpose

Represents a sellable hardware or appliance item for research and inquiry.

## Fields / Properties

* Name.
* Slug.
* SKU.
* Brand.
* Type.
* Categories.
* Subcategories.
* Short Description.
* Long Description.
* Price Range.
* Primary Image.
* Gallery Images.
* Technical Specifications.
* Downloads.
* Related Inspirations.
* Related Products.
* Availability Status.
* SEO Metadata.

## Relationships

* Product -> Brand.
* Product -> Product Type.
* Product -> Categories.
* Product -> optional Subcategory.
* Product -> related Inspirations.
* Product -> related Products.

## Used By

* [[Hardware And Appliances]]
* [[Product Detail]]
* [[Create Product Admin]]
* [[Database - products]]
* [[API - Products]]

## Validation Rules

* Brand, product type, and at least one category are required.
* Technical specifications may use flexible JSON.
* Availability values are constrained.

## Content Rules

Products should support inspiration and consultation, not checkout.

## Open Questions

* Exact price vs price range is unresolved.

## Source Trace

Source files: `01-prd.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`.
