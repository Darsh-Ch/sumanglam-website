# Content Type - Inspiration

## Purpose

Represents an individual design concept or room idea.

## Fields / Properties

* Title.
* Slug.
* Short Description.
* Long Description.
* Primary Image.
* Gallery Images.
* Video, optional.
* Space.
* Collections.
* Featured Brands.
* Featured Products.
* Tags.
* Style Tags.
* SEO Metadata.

## Relationships

* Inspiration belongs to Space.
* Inspiration belongs to one or more Collections.
* Inspiration can feature many Brands.
* Inspiration can feature many Products.

## Used By

* [[Homepage]]
* [[Inspiration]]
* [[Explore Inspiration Journey]]
* [[Create Inspiration Admin]]
* [[Database - inspirations]]
* [[API - Inspirations]]

## Validation Rules

* Published inspiration should have a primary image.
* Every Inspiration must belong to at least one Collection.

## Content Rules

Inspiration content should lead users toward related solutions and consultation without becoming product-first.

## Open Questions

* Required gallery image count is unspecified.

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `07-screen-event-flows.md`, `08-database-design.md`.
