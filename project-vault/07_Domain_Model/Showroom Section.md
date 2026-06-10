# Showroom Section

## Purpose

Represents a physical showroom area and connects the digital experience to showroom visits.

## Fields / Properties

* Name.
* Description.
* Images.
* Optional Video.
* Highlights.
* Related Brands.
* Related Inspirations.
* Floor Number.

## Examples

* Reception.
* Hardware Floor.
* Mrida Kitchen Floor.
* Nolte Kitchen Floor.

## Relationships

* One Showroom Section can link to many [[Brand|Brands]].
* One Showroom Section can link to many [[Inspiration|Inspirations]].

## Used By

* [[Showroom Experience]]
* [[Showroom Visit Intent]]
* [[Homepage]]
* [[Database - showroom_sections]]
* [[API - Showroom]]

## Validation Rules

* Showroom sections should have useful imagery before being featured.

## Content Rules

Showroom should be presented as an experience, not a generic store.

## Open Questions

* Exact floor numbers and official descriptions are not provided.

## Source Trace

Source files: `02-information_architecture.md`, `05-domain-model.md`, `06-content-model.md`, `07-screen-event-flows.md`, `08-database-design.md`.
