# API - Brands

## Purpose

Retrieve brand listing and brand detail content.

## Inputs

Endpoints:

* `GET /api/v1/brands`
* `GET /api/v1/brands/:slug`

## Outputs

`GET /brands` returns all brands.

`GET /brands/:slug` returns:

* Brand Information.
* Inspirations.
* Products.
* Parent/child relationship context where applicable.

Example:

```json
{
  "brand": {},
  "inspirations": [],
  "products": []
}
```

## Data Touched

[[Database - brands]], [[Database - inspirations]], [[Database - products]], [[Database - inspiration_brands]]

## Used By

[[Brands]], [[Nolte]], [[Mrida]], [[Brand Discovery Journey]], [[Product Detail]]

## Error States

* Brand not found.
* Missing parent brand.
* Empty products or inspirations.

## Security/Auth Rules

Public read endpoints. Admin writes use [[API - Admin Content]].

## Open Questions

* Response shape for child brands is not specified.

## Source Trace

Source files: `09-api-specification.md`, `16-doc-review.md`.
