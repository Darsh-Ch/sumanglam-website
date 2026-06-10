# Book Consultation

## Purpose

Capture qualified leads for consultations, showroom visits, kitchen/wardrobe projects, and product inquiries.

## User Goal

Submit project/contact details and receive confirmation.

## Entry Points

* Header CTA.
* Homepage consultation section.
* Product, brand, inspiration, showroom CTAs.
* Architects & Designers page.

## Exit Points

* Success screen.
* Confirmation message.
* [[Showroom Experience]]
* [[WhatsApp Inquiry]]

## UI Requirements

* Consultation form.
* Fields: name, phone, email optional, project type, requirements, preferred contact method.
* Source context capture when started from a page.
* Validation feedback.
* Success screen.

## UX Behavior

* Problem-focused copy.
* Minimal friction.
* Clear validation messages.
* Confirmation after submit.

## Content Requirements

* Project type options.
* Preferred contact method options.
* Privacy/consent copy if required.
* Success message.

## Data Requirements

* [[Database - leads]]
* [[Database - consultations]]
* Source page, source type, referring URL, timestamp.

## API/backend Requirements

* [[API - Consultations]]: `POST /api/v1/consultations`.
* Server-side validation.
* Admin notification trigger.
* [[API - Analytics Events]] for Consultation Started and Consultation Submitted.

## Auth/permission Rules

Public submission. Admin viewing requires authentication.

## Edge Cases

* Invalid phone.
* Missing required name/phone/project type.
* Duplicate lead by phone.
* Notification failure after lead creation.
* API error.
* Spam or abuse.

## Forbidden Mistakes

* Do not create forms without validation.
* Do not trust client-side validation alone.
* Do not lose source tracking.
* Do not require a user account.

## Linked Notes

* [[Consultation Booking]]
* [[Lead]]
* [[Consultation Request]]
* [[API - Consultations]]
* [[Manage Leads Admin]]

## Source Trace

Source files and sections: `01-prd.md`, `02-information_architecture.md`, `05-domain-model.md`, `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`.
