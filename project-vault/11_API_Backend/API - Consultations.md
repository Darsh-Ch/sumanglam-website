# API - Consultations

## Purpose

Create consultation requests and generate qualified leads.

## Inputs

Endpoint:

`POST /api/v1/consultations`

Request:

```json
{
  "name": "",
  "phone": "",
  "email": "",
  "projectType": "",
  "requirements": "",
  "preferredContactMethod": ""
}
```

Additional source fields should be captured based on flow requirements:

* Source Page.
* Source Type.
* Referring URL.
* Timestamp.

## Outputs

Response:

```json
{
  "success": true,
  "consultationId": ""
}
```

## Data Touched

[[Database - leads]], [[Database - consultations]]

## Used By

[[Book Consultation]], [[Consultation Booking]], [[Manage Leads Admin]]

## Error States

* Validation error.
* Lead creation failure.
* Consultation creation failure.
* Notification failure.
* Spam/abuse.

## Security/Auth Rules

Public write endpoint with server-side validation, input sanitization, and likely rate limiting.

## Open Questions

* Notification channel is not specified.
* Validation library and anti-spam approach are not specified.
* Consultation status enum is not specified.

## Source Trace

Source files: `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`, `12-dontdo.md`.
