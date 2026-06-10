# API - Admin Leads

## Purpose

Retrieve and manage leads and consultations in the admin dashboard.

## Inputs

Authentication required.

Lead endpoints:

* `GET /api/v1/admin/leads`
* `GET /api/v1/admin/leads/:id`
* `PUT /api/v1/admin/leads/:id`

Consultation endpoints:

* `GET /api/v1/admin/consultations`
* `GET /api/v1/admin/consultations/:id`

Lead list supports:

* Filtering.
* Pagination.

## Outputs

Lead detail, lead lists, consultation detail, and consultation lists using the standard response format.

## Data Touched

[[Database - leads]], [[Database - consultations]]

## Used By

[[Admin Dashboard]], [[Manage Leads Admin]]

## Error States

* Unauthorized.
* Lead not found.
* Consultation not found.
* Invalid lead status.

## Security/Auth Rules

Admin authentication required. Lead data must never be exposed publicly.

## Open Questions

* Follow-up scheduling is mentioned in flow but not modeled in database/API.

## Source Trace

Source files: `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`.
