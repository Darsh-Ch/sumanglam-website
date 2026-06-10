# Contact

## Purpose

Enable direct communication and showroom visit planning.

## User Goal

Find contact details, WhatsApp, map/location, business hours, and contact options.

## Entry Points

* Main navigation.
* Footer.
* Showroom page.
* CTA links from other pages.

## Exit Points

* WhatsApp.
* Phone call.
* Map/directions.
* [[Book Consultation]].

## UI Requirements

* Contact information.
* WhatsApp.
* Map.
* Business hours.
* Navigation links.
* Visit/consultation CTAs.

## UX Behavior

* Keep actions clear and mobile-friendly.
* Do not bury phone/WhatsApp.

## Content Requirements

* Official address.
* Phone number.
* WhatsApp number.
* Business hours.
* Map embed/location.

## Data Requirements

Contact content may be static config or CMS content. Lead source tracking applies if a lead form is used.

## API/backend Requirements

* [[API - WhatsApp Tracking]] for WhatsApp click.
* [[API - Analytics Events]] for contact-related events.
* [[API - Consultations]] if a form is included.

## Auth/permission Rules

Public page.

## Edge Cases

* Missing or changed business hours.
* Map embed unavailable.
* WhatsApp unavailable.

## Forbidden Mistakes

* Do not hide critical contact actions on mobile.
* Do not use unverified contact details.

## Linked Notes

* [[Showroom Experience]]
* [[WhatsApp Inquiry]]
* [[Book Consultation]]

## Source Trace

Source files and sections: `02-information_architecture.md`, `03-ui-ux-specification.md`, `07-screen-event-flows.md`.
