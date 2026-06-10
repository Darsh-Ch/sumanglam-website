# Database - showroom_inspiration_mappings

## Purpose

Links showroom sections to inspirations.

## Fields / Properties

* `showroom_section_id`
* `inspiration_id`

## Relationships

* [[Database - showroom_sections]] -> [[Database - inspirations]]

## Used By

* [[Showroom Experience]]
* [[Showroom Section]]
* [[API - Showroom]]

## Validation Rules

Use a composite unique constraint on `showroom_section_id` and `inspiration_id`.

## Source Trace

Source file: `08-database-design.md`.
