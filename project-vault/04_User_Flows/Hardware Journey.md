# Hardware Journey

## Trigger

A visitor wants to research hardware or appliance products.

## User Steps

1. User lands on [[Homepage]] or [[Hardware And Appliances]].
2. User enters Product Discovery.
3. User browses categories.
4. User opens [[Product Detail]].
5. User clicks [[WhatsApp Inquiry]].
6. User may visit showroom.

## System Steps

1. Load product categories and featured products.
2. Apply basic filters if used.
3. Load selected product details.
4. Generate WhatsApp message with product context.
5. Track source and click event.

## Success Condition

User begins a WhatsApp conversation or books a consultation related to a product/category.

## Failure/Edge Cases

* No products in selected category.
* Missing product specs.
* Missing WhatsApp configuration.
* User expects checkout.

## Pages Involved

[[Homepage]], [[Hardware And Appliances]], [[Product Detail]], [[Brands]], [[WhatsApp Inquiry]], [[Showroom Experience]]

## Data Involved

[[Product]], [[Product Category]], [[Product Subcategory]], [[Brand]], [[Lead]]

## API/backend Involved

[[API - Products]], [[API - Brands]], [[API - WhatsApp Tracking]], [[API - Analytics Events]]

## Validation Rules

Filter inputs should match known brand/type/category/subcategory slugs. WhatsApp tracking source fields should be valid.

## Forbidden Mistakes

* Do not build ecommerce checkout.
* Do not build advanced filtering in V1 without approval.
* Do not use unoptimized product images.

## Source Trace

Source files and sections: `02-information_architecture.md` Hardware Journey, `07-screen-event-flows.md` Product Discovery Journey and WhatsApp Inquiry.
