# Lead

## Purpose

Represents a potential customer created from consultation form, WhatsApp inquiry, contact form, or future lead source.

## Fields / Properties

* Name.
* Phone.
* Email.
* Lead Status.
* Lead Source.
* Source Page.
* Notes.
* Created At.
* Updated At.

## Relationships

* One Lead can have many [[Consultation Request|Consultations]].
* Every Consultation must link to a Lead.

## Used By

* [[Book Consultation]]
* [[Consultation Booking]]
* [[Manage Leads Admin]]
* [[Database - leads]]
* [[API - Admin Leads]]

## Validation Rules

* Phone is required for consultation flow.
* Lead status values: `new`, `contacted`, `qualified`, `converted`, `closed`.
* Source information should be captured for lead-generating actions.

## Content Rules

Lead data is admin-only and must not be exposed publicly.

## Open Questions

* Duplicate lead merge/update behavior is not specified.

## Source Trace

Source files: `05-domain-model.md`, `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`.
