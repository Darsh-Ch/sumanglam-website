# Database - Index Strategy

## Required Indexes

Create indexes on:

* `spaces.slug`
* `collections.slug`
* `inspirations.slug`
* `brands.slug`
* `products.slug`
* `products.brand_id`
* `products.product_type_id`
* `products.is_featured`
* `inspirations.is_featured`
* `leads.phone`
* `consultations.lead_id`

## Purpose

Support common page lookups, listing queries, featured content retrieval, and lead management.

## Implementation Notes

* Keep indexes aligned with actual query patterns.
* Avoid premature indexing beyond documented needs.
* Add composite unique constraints on junction tables where appropriate.

## Linked Notes

* [[Database Overview]]
* [[API Overview]]
* [[Performance SEO Security]]

## Source Trace

Source file: `08-database-design.md`.
