# API - Products

## Purpose

Retrieve product listings and product detail pages.

## Inputs

Endpoints:

* `GET /api/v1/products`
* `GET /api/v1/products/:slug`

Listing supports:

* Search.
* Pagination.
* Filtering.

Query parameters:

* `page`
* `limit`
* `brand`
* `type`
* `category`
* `subcategory`

## Outputs

`GET /products/:slug` returns:

* Product Details.
* Brand.
* Related Inspirations.
* Related Products.

Example:

```json
{
  "product": {},
  "brand": {},
  "inspirations": [],
  "relatedProducts": []
}
```

## Data Touched

[[Database - products]], [[Database - brands]], [[Database - product_types]], [[Database - product_categories]], [[Database - product_subcategories]], [[Database - inspiration_products]]

## Used By

[[Hardware And Appliances]], [[Product Detail]], [[Product Discovery Journey]], [[Create Product Admin]]

## Error States

* Product not found.
* Empty filter result.
* Invalid filter slug.

## Security/Auth Rules

Public read endpoints. Admin writes use [[API - Admin Content]].

## Open Questions

* Advanced filtering is excluded from V1. Keep filters to documented query params unless approved.

## Source Trace

Source files: `09-api-specification.md`, `02-information_architecture.md`, `07-screen-event-flows.md`.
