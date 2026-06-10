# Consultation Request

## Purpose

Represents a customer inquiry for a design discussion, kitchen consultation, showroom visit request, or related project conversation.

## Fields / Properties

* Lead.
* Project Type.
* Requirements.
* Preferred Contact Method.
* Status.
* Created At.
* Updated At.

Request body fields from API:

* Name.
* Phone.
* Email.
* Project Type.
* Requirements.
* Preferred Contact Method.

## Relationships

* Every Consultation Request links to one [[Lead]].
* A Lead can have many Consultation Requests.

## Used By

* [[Book Consultation]]
* [[Consultation Booking]]
* [[Admin Dashboard]]
* [[Database - consultations]]
* [[API - Consultations]]

## Validation Rules

* Lead must exist or be created.
* Required fields need server-side validation.
* Source information should be stored.

## Content Rules

Consultation messaging should be problem-focused, not sales-heavy.

## Open Questions

* Consultation status allowed values are not explicitly listed.
* Admin notification channel is not specified.

## Source Trace

Source files: `02-information_architecture.md`, `05-domain-model.md`, `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`.
