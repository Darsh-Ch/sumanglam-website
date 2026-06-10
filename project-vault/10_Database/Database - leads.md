# Database - leads

## Purpose

Stores potential customers and lead pipeline status.

## Fields / Properties

* `id`
* `name`
* `phone`
* `email`
* `lead_status`
* `lead_source`
* `source_page`
* `notes`
* `created_at`
* `updated_at`

## Relationships

* Lead -> many Consultations.

## Used By

* [[Lead]]
* [[Book Consultation]]
* [[Manage Leads Admin]]
* [[API - Consultations]]
* [[API - Admin Leads]]

## Validation Rules

* `phone` should be indexed.
* `lead_status` must use allowed values.
* Lead-generating actions should capture source page/type/referrer/timestamp.

## Content Rules

Lead data is private admin data.

## Open Questions

* Duplicate lead handling is not specified.
* Referring URL and timestamp are required by flow docs but not explicitly listed as lead fields.

## Source Trace

Source files: `05-domain-model.md`, `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`.
