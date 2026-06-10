# Architect Journey

## Trigger

An architect, interior designer, or builder wants to evaluate Sumanglam for collaboration or specification support.

## User Steps

1. User lands on [[Homepage]].
2. User opens [[Architects And Designers]].
3. User explores brand ecosystem.
4. User requests discussion or consultation.
5. Collaboration begins outside the V1 website.

## System Steps

1. Load professional-facing content and brand links.
2. Capture source when discussion/consultation is requested.
3. Create lead and consultation request.
4. Track event.

## Success Condition

Professional user schedules a discussion or sends a high-intent inquiry.

## Failure/Edge Cases

* User expects a login portal.
* User expects bulk technical catalog access.
* User expects trade dashboard.

## Pages Involved

[[Homepage]], [[Architects And Designers]], [[Brands]], [[Book Consultation]], [[Contact]], [[WhatsApp Inquiry]]

## Data Involved

[[Brand]], [[Lead]], [[Consultation Request]]

## API/backend Involved

[[API - Brands]], [[API - Consultations]], [[API - Analytics Events]]

## Validation Rules

Same as consultation flow. Do not require user account.

## Forbidden Mistakes

* Do not build Architect Portal in V1.
* Do not build trade dashboard.
* Do not introduce user accounts.

## Source Trace

Source files and sections: `02-information_architecture.md` Architect Journey, `12-dontdo.md`, `13-master-context.md`.
