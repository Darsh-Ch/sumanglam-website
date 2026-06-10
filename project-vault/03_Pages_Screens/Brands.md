# Brands

## Purpose

Build trust through premium brand partnerships and meaningful brand storytelling.

## User Goal

Understand Sumanglam's brand ecosystem and explore solution brands or product brands.

## Entry Points

* Main navigation.
* Homepage Featured Brands.
* Inspiration pages.
* Product pages.

## Exit Points

* [[Nolte]]
* [[Mrida]]
* Product brand pages.
* Related inspirations.
* Related products.
* [[Book Consultation]]
* [[WhatsApp Inquiry]]

## UI Requirements

* Solution Brands section.
* Product Brands section.
* Brand story cards or editorial blocks.
* Brand highlight content.
* Related collections/inspirations/products.
* CTA: Explore Brand.

## UX Behavior

* Brands should not be treated as simple filter tags.
* Each brand should feel meaningful.
* Category-first discovery should still be supported for products.

## Content Requirements

Solution brands:

* Nolte
* Mrida

Product brands:

* Bosch
* Siemens
* Liebherr
* Hafele
* Hettich
* Blum
* Godrej
* Dorset
* Yale
* Spitze
* Brass Barony
* Everyday
* Blaupunkt

Parent relation:

* Hettich -> Blaupunkt.

## Data Requirements

* [[Database - brands]]
* [[Database - products]]
* [[Database - inspirations]]
* [[Database - junction tables]]

## API/backend Requirements

* [[API - Brands]]
* [[API - Products]]
* [[API - Inspirations]]
* Parent brand relationship support.

## Auth/permission Rules

Public page.

## Edge Cases

* Missing brand logo.
* Missing hero image.
* Brand has no products yet.
* Brand has no inspirations yet.

## Forbidden Mistakes

* Do not use a logo wall only.
* Do not flatten solution brands and product brands into one identical treatment.
* Do not ignore Blaupunkt's parent relationship to Hettich.

## Linked Notes

* [[Brand Discovery Journey]]
* [[Brand]]
* [[Solution Brands]]
* [[Product Brands]]
* [[Parent Brand Relationships]]

## Source Trace

Source files and sections: `01-prd.md`, `02-information_architecture.md`, `03-ui-ux-specification.md`, `05-domain-model.md`, `06-content-model.md`, `09-api-specification.md`, `13-master-context.md`, `15-content-taxonomy.md`, `16-doc-review.md`.
