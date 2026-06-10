# API - WhatsApp Tracking

## Purpose

Track WhatsApp engagement and preserve source context.

## Inputs

Endpoint:

`POST /api/v1/events/whatsapp-click`

Request:

```json
{
  "sourceType": "",
  "sourceId": "",
  "sourcePage": ""
}
```

## Outputs

Response:

```json
{
  "success": true
}
```

## Data Touched

Analytics/event storage is not fully specified. Source context may be used for lead attribution.

## Used By

[[WhatsApp Inquiry]], [[Homepage]], [[Product Detail]], [[Inspiration]], [[Brands]], [[Showroom Experience]], [[Contact]]

## Error States

* Missing source context.
* Event storage failure.

## Security/Auth Rules

Public endpoint. Should avoid accepting arbitrary unsafe payloads.

## Open Questions

* Whether WhatsApp clicks create leads or only analytics events is not specified.
* WhatsApp phone number is not specified.

## Source Trace

Source files: `07-screen-event-flows.md`, `09-api-specification.md`.
