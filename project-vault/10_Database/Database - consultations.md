# Database - consultations

## Purpose

Stores consultation requests linked to leads.

## Fields / Properties

* `id`
* `lead_id`
* `project_type`
* `requirements`
* `preferred_contact_method`
* `status`
* `created_at`
* `updated_at`

## Relationships

* Consultation -> Lead through `lead_id`.

## Used By

* [[Consultation Request]]
* [[Book Consultation]]
* [[Consultation Booking]]
* [[Manage Leads Admin]]
* [[API - Consultations]]

## Validation Rules

* `lead_id` should be indexed.
* Every consultation must be linked to a Lead.
* Required form fields must be server-validated.

## Content Rules

Consultation status and project type options should be clear to admin users.

## Open Questions

* Allowed consultation status values are not specified.
* Project type enum is not specified.

## Source Trace

Source files: `05-domain-model.md`, `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`.
