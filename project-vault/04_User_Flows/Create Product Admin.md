# Create Product Admin

## Trigger

Admin creates or updates a product.

## User Steps

1. Admin creates Product.
2. Admin assigns Brand.
3. Admin assigns Product Type.
4. Admin assigns Categories.
5. Admin uploads images.
6. Admin adds specifications.
7. Admin publishes Product.

## System Steps

1. Authenticate admin.
2. Validate ownership and taxonomy fields.
3. Store media references.
4. Create/update product.
5. Update category mappings.
6. Update brand mapping.
7. Save flexible technical specs.

## Success Condition

Product appears in listings, PDP, and related inspiration/brand pages.

## Failure/Edge Cases

* Missing brand.
* Missing product type.
* Missing category.
* Invalid SKU.
* Invalid technical specs.
* Missing image.

## Pages Involved

[[Admin Dashboard]], [[Hardware And Appliances]], [[Product Detail]], [[Brands]]

## Data Involved

[[Product]], [[Brand]], [[Product Type]], [[Product Category]], [[Product Subcategory]], [[Database - junction tables]]

## API/backend Involved

[[API - Admin Content]], [[API - Products]]

## Validation Rules

Every Product must belong to exactly one Brand, one Product Type, and at least one Category.

## Forbidden Mistakes

* Do not create product tables outside documented schema.
* Do not duplicate category data.
* Do not serve unoptimized product images.

## Source Trace

Source files and sections: `07-screen-event-flows.md` Flow 8, `05-domain-model.md`, `06-content-model.md`, `08-database-design.md`, `09-api-specification.md`.
