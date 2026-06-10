# API - Homepage

## Purpose

Retrieve homepage content.

## Inputs

Endpoint:

`GET /api/v1/homepage`

No documented params.

## Outputs

Returns:

* Featured Inspirations.
* Featured Brands.
* Featured Products.
* Showroom Highlights.

Expected response data shape:

```json
{
  "featuredInspirations": [],
  "featuredBrands": [],
  "featuredProducts": [],
  "showroomHighlights": []
}
```

## Data Touched

[[Database - inspirations]], [[Database - brands]], [[Database - products]], [[Database - showroom_sections]]

## Used By

[[Homepage]]

## Error States

* Database read failure.
* Missing seed content should return empty arrays, not crash.

## Security/Auth Rules

Public endpoint.

## Open Questions

* Ordering rules for featured content are not specified.

## Source Trace

Source file: `09-api-specification.md`.
