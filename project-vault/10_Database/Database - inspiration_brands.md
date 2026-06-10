# Database - inspiration_brands

## Purpose

Links brands to inspirations.

## Fields / Properties

* `inspiration_id`
* `brand_id`

## Relationships

* [[Database - inspirations]] -> [[Database - brands]]

## Used By

* [[Inspiration]]
* [[Brands]]
* [[API - Inspirations]]
* [[API - Brands]]

## Validation Rules

Use a composite unique constraint on `inspiration_id` and `brand_id`.

## Source Trace

Source file: `08-database-design.md`.
