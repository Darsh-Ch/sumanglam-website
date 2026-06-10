# Create Inspiration Admin

## Trigger

Admin creates or updates inspiration content.

## User Steps

1. Admin creates Inspiration.
2. Admin uploads images.
3. Admin selects Space.
4. Admin selects Collection.
5. Admin links Brands.
6. Admin links Products.
7. Admin publishes Inspiration.

## System Steps

1. Authenticate admin.
2. Validate fields.
3. Store media references.
4. Create/update inspiration.
5. Update collection mapping.
6. Update brand mapping.
7. Update product mapping.

## Success Condition

Published inspiration appears in listings/detail pages with correct relationships.

## Failure/Edge Cases

* Missing required space.
* Missing collection.
* Missing primary image.
* Invalid brand/product relation.
* Unauthorized admin.

## Pages Involved

[[Admin Dashboard]], [[Inspiration]], [[Brands]], [[Product Detail]]

## Data Involved

[[Inspiration]], [[Inspiration Collection]], [[Brand]], [[Product]], [[Content Type - Space]]

## API/backend Involved

[[API - Admin Content]], [[API - Inspirations]]

## Validation Rules

Every Inspiration must belong to at least one Collection. It should have a Space. Published content should have required image and metadata.

## Forbidden Mistakes

* Do not hardcode content.
* Do not allow admin access without authentication.
* Do not create orphan inspirations.

## Source Trace

Source files and sections: `07-screen-event-flows.md` Flow 7, `05-domain-model.md`, `06-content-model.md`, `09-api-specification.md`.
