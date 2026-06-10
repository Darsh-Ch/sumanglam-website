# Database - showroom_brand_mappings

## Purpose

Links showroom sections to brands.

## Fields / Properties

* `showroom_section_id`
* `brand_id`

## Relationships

* [[Database - showroom_sections]] -> [[Database - brands]]

## Used By

* [[Showroom Experience]]
* [[Showroom Section]]
* [[API - Showroom]]

## Validation Rules

Use a composite unique constraint on `showroom_section_id` and `brand_id`.

## Source Trace

Source file: `08-database-design.md`.
