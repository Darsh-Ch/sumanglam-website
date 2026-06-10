# Inspiration

## Purpose

Represents a visual concept, room, or design idea. Inspirations are first-class entities and central to discovery.

## Fields / Properties

* Title.
* Slug.
* Short Description.
* Long Description.
* Primary Image.
* Gallery Images.
* Optional Video.
* Space.
* Collections.
* Featured Brands.
* Featured Products.
* Tags.
* Style Tags.
* SEO Metadata.

## Relationships

* Every Inspiration must belong to at least one [[Inspiration Collection]].
* Inspiration belongs to a [[Content Type - Space|Space]].
* Inspiration can feature many [[Product|Products]].
* Inspiration can feature many [[Brand|Brands]].
* Inspiration can relate to other Inspirations.

## Used By

* [[Inspiration]]
* [[Homepage]]
* [[Explore Inspiration Journey]]
* [[Create Inspiration Admin]]
* [[Database - inspirations]]
* [[API - Inspirations]]

## Validation Rules

* Published inspirations should have required imagery.
* Every Inspiration must belong to at least one Collection.
* Source/context relationships should be maintained.

## Content Rules

Inspirations should help users visualize possibilities before technical product evaluation.

## Open Questions

* Required image count is not specified.
* Video storage/usage is optional and not specified.

## Source Trace

Source files: `01-prd.md`, `05-domain-model.md`, `06-content-model.md`, `07-screen-event-flows.md`, `08-database-design.md`.
