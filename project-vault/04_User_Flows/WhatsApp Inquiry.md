# WhatsApp Inquiry

## Trigger

User clicks WhatsApp CTA from homepage, inspiration, product, brand, showroom, contact, or consultation surfaces.

## User Steps

1. User clicks WhatsApp CTA.
2. WhatsApp opens with a context-aware message.
3. Conversation begins.

## System Steps

1. Generate context-aware message.
2. Track WhatsApp click event.
3. Include source type, source id, and source page.
4. Open WhatsApp link.

## Success Condition

User reaches WhatsApp with useful context in the message.

## Failure/Edge Cases

* Missing WhatsApp number.
* Missing source context.
* WhatsApp unavailable on device.
* User blocks popup/new tab.

## Pages Involved

[[Homepage]], [[Inspiration]], [[Brands]], [[Product Detail]], [[Showroom Experience]], [[Contact]], [[Book Consultation]]

## Data Involved

[[Lead]] if source tracking later creates lead attribution. Source fields are required for analytics.

## API/backend Involved

[[API - WhatsApp Tracking]], [[API - Analytics Events]]

## Validation Rules

`sourceType`, `sourceId`, and `sourcePage` should be present when available.

## Forbidden Mistakes

* Do not use generic WhatsApp messages when page context is available.
* Do not hide WhatsApp on mobile.
* Do not lose source tracking.

## Source Trace

Source files and sections: `07-screen-event-flows.md` Flow 5 and Source Tracking Requirements, `03-ui-ux-specification.md`.
