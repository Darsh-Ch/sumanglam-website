# Database - inspiration_products

## Purpose

Links products to inspirations.

## Fields / Properties

* `inspiration_id`
* `product_id`

## Relationships

* [[Database - inspirations]] -> [[Database - products]]

## Used By

* [[Inspiration]]
* [[Product Detail]]
* [[API - Inspirations]]
* [[API - Products]]

## Validation Rules

Use a composite unique constraint on `inspiration_id` and `product_id`.

## Source Trace

Source file: `08-database-design.md`.
