# API - Collections

## Purpose

Retrieve collections and collection detail pages.

## Inputs

Endpoints:

* `GET /api/v1/collections`
* `GET /api/v1/collections/:slug`

## Outputs

`GET /collections` returns all collections.

`GET /collections/:slug` returns:

* Collection.
* Inspirations.
* Related Collections.

## Data Touched

[[Database - collections]], [[Database - collection_inspirations]], [[Database - inspirations]]

## Used By

[[Inspiration]], [[Explore Inspiration Journey]], [[Inspiration Collections]]

## Error States

* Collection not found.
* Empty collection.

## Security/Auth Rules

Public endpoint.

## Open Questions

* Pagination for collection inspirations is not specified.

## Source Trace

Source file: `09-api-specification.md`.
