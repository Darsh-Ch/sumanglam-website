# Content Type - Consultation

## Purpose

Defines the data required to support consultation flows.

## Fields / Properties

* Project Type.
* Customer Name.
* Phone.
* Email.
* Preferred Contact Method.
* Requirements.
* Notes.
* Source.
* Submission Date.

## Relationships

* Consultation creates or updates [[Lead]].
* Consultation creates [[Consultation Request]].

## Used By

* [[Book Consultation]]
* [[Consultation Booking]]
* [[Manage Leads Admin]]
* [[Database - leads]]
* [[Database - consultations]]
* [[API - Consultations]]

## Validation Rules

* Phone and name are required in the documented flow.
* Email is optional.
* Server-side validation is required.

## Content Rules

Consultation prompts should be problem-focused, not sales-focused.

## Open Questions

* Exact project type enum is not specified.
* Notification channel is not specified.

## Source Trace

Source files: `06-content-model.md`, `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`.
