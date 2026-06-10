# API - Spaces

## Purpose

Retrieve all spaces or a specific space with related content.

## Inputs

Endpoints:

* `GET /api/v1/spaces`
* `GET /api/v1/spaces/:slug`

## Outputs

`GET /spaces` returns:

```json
[
  {
    "id": "",
    "title": "",
    "slug": ""
  }
]
```

`GET /spaces/:slug` returns:

* Space.
* Related Collections.
* Featured Inspirations.

## Data Touched

[[Database - spaces]], [[Database - collections]], [[Database - inspirations]]

## Used By

[[Inspiration]], [[Kitchens]], [[Hardware And Appliances]], taxonomy pages.

## Error States

* Space not found.
* Invalid slug.

## Security/Auth Rules

Public endpoint.

## Open Questions

* Exact response envelope should follow standard format from [[API - Error Format]], even if examples omit it.

## Source Trace

Source file: `09-api-specification.md`.
