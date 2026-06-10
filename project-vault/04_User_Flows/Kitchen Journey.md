# Kitchen Journey

## Trigger

A visitor wants kitchen inspiration or a kitchen solution.

## User Steps

1. User lands on [[Homepage]].
2. User opens [[Inspiration]] or [[Kitchens]].
3. User explores kitchen inspirations.
4. User explores [[Nolte]] or [[Mrida]].
5. User starts [[Consultation Booking]].
6. User visits showroom.
7. User has design discussion.
8. User may later receive quotation outside V1 website scope.

## System Steps

1. Load featured inspirations and brands.
2. Load kitchen collections and inspiration content.
3. Load selected solution brand content.
4. Capture source context when user starts consultation.
5. Create lead and consultation request.

## Success Condition

User books a kitchen consultation or expresses showroom visit intent.

## Failure/Edge Cases

* Missing kitchen inspiration content.
* Confusion between Nolte and Mrida.
* User expects ecommerce or online quotation.

## Pages Involved

[[Homepage]], [[Inspiration]], [[Kitchens]], [[Nolte]], [[Mrida]], [[Book Consultation]], [[Showroom Experience]]

## Data Involved

[[Inspiration]], [[Inspiration Collection]], [[Brand]], [[Lead]], [[Consultation Request]]

## API/backend Involved

[[API - Homepage]], [[API - Inspirations]], [[API - Brands]], [[API - Consultations]]

## Validation Rules

Consultation submission requires name, phone, project type, requirements, and preferred contact method if configured.

## Forbidden Mistakes

* Do not imply Nolte wardrobes.
* Do not prioritize SKU browsing before kitchen inspiration.
* Do not build quotation workflow in V1.

## Source Trace

Source files and sections: `02-information_architecture.md` Primary User Journeys, `07-screen-event-flows.md`, `11-rules.md`, `16-doc-review.md`.
