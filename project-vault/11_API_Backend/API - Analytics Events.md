# API - Analytics Events

## Purpose

Track frontend engagement events.

## Inputs

Endpoint:

`POST /api/v1/events`

Request:

```json
{
  "eventName": "",
  "sourceType": "",
  "sourceId": ""
}
```

## Documented Events

* Homepage Viewed.
* Inspiration Viewed.
* Collection Viewed.
* Brand Viewed.
* Product Viewed.
* Consultation Started.
* Consultation Submitted.
* WhatsApp Clicked.
* Showroom Viewed.
* Showroom Visit Intent.
* Brand CTA Clicked.
* Product CTA Clicked.

## Data Touched

GA4 is documented as the analytics provider. Local event persistence is not specified.

## Used By

All public pages and lead-generating flows.

## Error States

* Invalid event name.
* Analytics provider failure.

## Security/Auth Rules

Public endpoint. Validate event names and source fields.

## Open Questions

* Should events be stored in PostgreSQL or only sent to GA4?

## Source Trace

Source files: `07-screen-event-flows.md`, `09-api-specification.md`, `10-techincal-architecture.md`.
