# Content Type - Showroom Section

## Purpose

Represents a physical area of the showroom.

## Fields / Properties

* Name.
* Description.
* Images.
* Video, optional.
* Highlights.
* Related Brands.
* Related Inspirations.
* Floor Number.

## Relationships

* Showroom Section -> many Brands.
* Showroom Section -> many Inspirations.

## Used By

* [[Homepage]]
* [[Showroom Experience]]
* [[Showroom Visit Intent]]
* [[Database - showroom_sections]]
* [[API - Showroom]]

## Validation Rules

* Published showroom sections should have images and useful descriptions.

## Content Rules

Showroom sections should make physical visits feel worthwhile.

## Open Questions

* Exact floor numbers and final showroom media are unspecified.

## Source Trace

Source files: `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`.
