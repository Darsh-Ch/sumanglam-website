# Database - product_category_mappings

## Purpose

Allows products to belong to multiple product categories.

## Fields / Properties

* `product_id`
* `category_id`

## Relationships

* [[Database - products]] -> [[Database - product_categories]]

## Used By

* [[Product]]
* [[Product Category]]
* [[Hardware And Appliances]]
* [[API - Products]]

## Validation Rules

Use a composite unique constraint on `product_id` and `category_id`.

## Source Trace

Source file: `08-database-design.md`.
