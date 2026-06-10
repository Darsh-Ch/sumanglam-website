# Database - collection_inspirations

## Purpose

Many-to-many mapping between Collections and Inspirations.

## Fields / Properties

* `collection_id`
* `inspiration_id`

## Relationships

* [[Database - collections]] -> [[Database - inspirations]]

## Used By

* [[Inspiration Collection]]
* [[Explore Inspiration Journey]]
* [[API - Collections]]

## Validation Rules

Use a composite unique constraint on `collection_id` and `inspiration_id`.

## Source Trace

Source file: `08-database-design.md`.
