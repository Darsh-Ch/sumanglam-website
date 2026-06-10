# Manage Leads Admin

## Trigger

A lead is created by consultation, WhatsApp tracking, contact form, or future lead source.

## User Steps

1. Lead is created.
2. Admin views lead.
3. Admin updates lead status.
4. Admin adds notes.
5. Admin schedules follow-up if implemented.

## System Steps

1. Authenticate admin.
2. Retrieve lead list/detail.
3. Validate status update.
4. Persist notes and status.
5. Keep source tracking available.

## Success Condition

Admin can see and manage lead pipeline visibility.

## Failure/Edge Cases

* Unauthorized access.
* Invalid status.
* Missing source data.
* Duplicate leads by phone.

## Pages Involved

[[Admin Dashboard]], [[Book Consultation]], [[Contact]], [[WhatsApp Inquiry]]

## Data Involved

[[Lead]], [[Consultation Request]]

## API/backend Involved

[[API - Admin Leads]], [[API - Consultations]]

## Validation Rules

Lead status must be one of New, Contacted, Qualified, Converted, Closed in UI, matching database enum values `new`, `contacted`, `qualified`, `converted`, `closed`.

## Forbidden Mistakes

* Do not expose lead data publicly.
* Do not allow unauthenticated admin access.
* Do not drop source tracking.

## Source Trace

Source files and sections: `07-screen-event-flows.md` Flow 9, `08-database-design.md`, `09-api-specification.md`.
