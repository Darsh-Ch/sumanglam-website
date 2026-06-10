# API - Showroom

## Purpose

Retrieve showroom sections and section detail.

## Inputs

Endpoints:

* `GET /api/v1/showroom`
* `GET /api/v1/showroom/:id`

## Outputs

`GET /showroom` returns all showroom sections.

`GET /showroom/:id` returns:

* Section Details.
* Related Brands.
* Related Inspirations.

## Data Touched

[[Database - showroom_sections]], [[Database - showroom_brand_mappings]], [[Database - showroom_inspiration_mappings]]

## Used By

[[Showroom Experience]], [[Homepage]], [[Showroom Visit Intent]]

## Error States

* Showroom section not found.
* Missing media.

## Security/Auth Rules

Public read endpoints. Admin writes use [[API - Admin Content]].

## Open Questions

* `:id` route uses ID, not slug. Confirm if this should be a slug for SEO-friendly routing.

## Source Trace

Source file: `09-api-specification.md`.
