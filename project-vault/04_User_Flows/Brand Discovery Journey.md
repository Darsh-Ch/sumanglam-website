# Brand Discovery Journey

## Trigger

User clicks a brand from homepage, brand listing, inspiration detail, product detail, or navigation.

## User Steps

1. User lands on [[Homepage]].
2. User clicks Brand or opens [[Brands]].
3. System loads brand page.
4. User reads brand story and explores galleries, inspirations, and products.
5. User clicks an inspiration or product.
6. User clicks Book Consultation, Visit Showroom, or WhatsApp Inquiry.

## System Steps

1. Load brand information.
2. Load brand inspirations.
3. Load brand products.
4. Load parent/child brand relationship where applicable.
5. Track Brand Viewed and CTA events.
6. Capture source context for lead actions.

## Success Condition

User trusts the brand ecosystem and takes an engagement action.

## Failure/Edge Cases

* Brand missing assets.
* Brand has no products or inspirations.
* Parent brand relationship missing.
* User confuses solution brands and product brands.

## Pages Involved

[[Homepage]], [[Brands]], [[Nolte]], [[Mrida]], [[Inspiration]], [[Product Detail]], [[Book Consultation]]

## Data Involved

[[Brand]], [[Product]], [[Inspiration]], [[Lead]], [[Consultation Request]]

## API/backend Involved

[[API - Brands]], [[API - Inspirations]], [[API - Products]], [[API - Consultations]], [[API - Analytics Events]]

## Validation Rules

Brand slugs must be unique. `brand_type` must be `solution` or `product`. Blaupunkt parent should be Hettich.

## Forbidden Mistakes

* Do not treat brands as filter tags only.
* Do not ignore the solution/product brand distinction.
* Do not treat Nolte and Mrida as identical.

## Source Trace

Source files and sections: `07-screen-event-flows.md` Flow 2, `05-domain-model.md`, `06-content-model.md`, `15-content-taxonomy.md`.
