# Parent Brand Relationships

## Purpose

Tracks parent/sub-brand relationships for trust inheritance and independent catalog behavior.

## Current Relationship

Hettich -> Blaupunkt.

## Implementation Requirements

* [[Database - brands]] must support `parent_brand_id`.
* [[API - Brands]] must return parent/child relationship context.
* Brand pages should maintain independent product catalogs while preserving parent trust context.

## Linked Notes

* [[Brand]]
* [[Brands]]
* [[Product Brands]]
* [[Database - brands]]
* [[API - Brands]]

## Source Trace

Source files: `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`, `13-master-context.md`, `15-content-taxonomy.md`, `16-doc-review.md`.
