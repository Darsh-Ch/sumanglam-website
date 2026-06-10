# Backend - Analytics

## Purpose

Track engagement events and conversion intent.

## Provider

Google Analytics 4.

## Events

* Homepage Viewed.
* Brand Viewed.
* Product Viewed.
* Inspiration Viewed.
* Consultation Started.
* Consultation Submitted.
* WhatsApp Clicked.
* Showroom Viewed.
* Showroom Visit Intent.

## Used By

[[API - Analytics Events]], [[API - WhatsApp Tracking]], all public pages.

## Error States

* GA4 unavailable.
* Missing event context.
* Duplicate event firing.

## Security/Auth Rules

Do not expose private lead details in analytics payloads.

## Open Questions

* Whether analytics events are also persisted in PostgreSQL is not specified.

## Source Trace

Source files: `07-screen-event-flows.md`, `09-api-specification.md`, `10-techincal-architecture.md`.
