# API - Inspirations

## Purpose

Retrieve inspiration listings and inspiration details.

## Inputs

Endpoints:

* `GET /api/v1/inspirations`
* `GET /api/v1/inspirations/:slug`

Listing supports:

* Pagination.
* Search.
* Filtering.

Query parameters:

* `page`
* `limit`
* `space`
* `collection`

## Outputs

`GET /inspirations/:slug` returns:

* Inspiration.
* Products Used.
* Related Brands.
* Related Inspirations.

Example:

```json
{
  "inspiration": {},
  "products": [],
  "brands": [],
  "relatedInspirations": []
}
```

## Data Touched

[[Database - inspirations]], [[Database - spaces]], [[Database - collections]], [[Database - inspiration_products]], [[Database - inspiration_brands]]

## Used By

[[Inspiration]], [[Homepage]], [[Explore Inspiration Journey]], [[Create Inspiration Admin]]

## Error States

* Inspiration not found.
* Invalid filters.
* Empty result.

## Security/Auth Rules

Public read endpoints. Admin writes use [[API - Admin Content]].

## Open Questions

* Search implementation details are not specified.

## Source Trace

Source file: `09-api-specification.md`.
