# Database Design

Version: 1.0

Project: Sumanglam Digital Showroom Platform

---

# 1. Purpose

This document defines the database structure, relationships, constraints, and query patterns used by the platform.

The database is designed to support:

* Inspiration-first discovery
* Product exploration
* Brand storytelling
* Consultation workflows
* Future wishlist support
* Future catalog expansion

---

# 2. Database Philosophy

The schema should optimize for:

* Simplicity
* Maintainability
* Future scalability

The initial system is expected to contain:

* Small product catalog
* Small inspiration library
* Moderate lead volume

Optimization should focus on developer productivity and content management rather than premature scaling.

---

# 3. Core Query Patterns

## Homepage

Retrieve:

* Featured Inspirations
* Featured Brands
* Featured Products
* Showroom Highlights

---

## Inspiration Page

Retrieve:

* Inspiration
* Products Used
* Related Brands
* Related Inspirations

---

## Brand Page

Retrieve:

* Brand Information
* Brand Inspirations
* Brand Products

---

## Product Page

Retrieve:

* Product Details
* Product Brand
* Related Inspirations
* Related Products

---

## Collection Page

Retrieve:

* Collection Information
* Collection Inspirations

---

## Consultation

Create:

* Lead
* Consultation Request

Update:

* Lead Status

---

# 4. Tables

## spaces

Represents major home areas.

Examples:

* Kitchen
* Wardrobe
* Hardware
* Appliances

Fields:

id
title
slug
description
hero_image
created_at
updated_at

---

## collections

Represents curated inspiration groups.

Fields:

id
title
slug
short_description
long_description
cover_image
created_at
updated_at

---

## inspirations

Represents design concepts and inspiration content.

Fields:

id
title
slug
short_description
long_description
primary_image
gallery_images
video_url
space_id
is_featured
created_at
updated_at

---

## brands

Represents manufacturers, solution providers, and sub-brands.

Fields:

id

name

slug

brand_type

parent_brand_id

description

story

logo

hero_image

is_featured

created_at

updated_at

---

brand_type values:

* solution
* product

---

Example:

Hettich

id: 1

Blaupunkt

parent_brand_id: 1

---

## product_types

Examples:

* Hardware
* Appliance

Fields:

id
name
slug

---

## product_categories

Examples:

* Handles
* Hinges
* Ovens
* Dishwashers

Fields:

id
name
slug
product_type_id

---

## product_subcategories

Examples:

* Soft Close Hinges
* Built-In Ovens

Fields:

id
name
slug
category_id

---

## products

Fields:

id

name

slug

sku

brand_id

product_type_id

subcategory_id

short_description

long_description

price_range

primary_image

gallery_images

availability_status

technical_specs_json

is_featured

created_at

updated_at

---

## showroom_sections

Fields:

id

name

description

floor_number

images

video_url

created_at

updated_at

---

## leads

Fields:

id

name

phone

email

lead_status

lead_source

source_page

notes

created_at

updated_at

---

## consultations

Fields:

id

lead_id

project_type

requirements

preferred_contact_method

status

created_at

updated_at

---

# 5. Junction Tables

## collection_inspirations

Purpose:

Many-to-many relationship.

Fields:

collection_id

inspiration_id

---

## inspiration_products

Purpose:

Link products to inspirations.

Fields:

inspiration_id

product_id

---

## inspiration_brands

Purpose:

Link brands to inspirations.

Fields:

inspiration_id

brand_id

---

## product_category_mappings

Purpose:

Products can belong to multiple categories.

Fields:

product_id

category_id

---

## showroom_brand_mappings

Fields:

showroom_section_id

brand_id

---

## showroom_inspiration_mappings

Fields:

showroom_section_id

inspiration_id

---

# 6. Relationship Rules

Space
→ Many Collections

Collection
→ Many Inspirations

Inspiration
→ Many Products

Inspiration
→ Many Brands

Brand
→ Many Products

Product
→ Many Categories

Category
→ Many Products

Showroom Section
→ Many Inspirations

Showroom Section
→ Many Brands

Lead
→ Many Consultations

---

# 7. Product Specification Strategy

Hybrid Model

---

Structured Columns:

name

brand

type

availability

price_range

category

---

Flexible Specifications:

technical_specs_json

Example:

{
"Width": "600mm",
"Height": "595mm",
"Energy Rating": "A++",
"Capacity": "71L"
}

---

Benefits:

* Flexible
* Future-proof
* Supports all product types
* Supports future PDF ingestion

---

# 8. Index Strategy

Create indexes on:

spaces.slug

collections.slug

inspirations.slug

brands.slug

products.slug

products.brand_id

products.product_type_id

products.is_featured

inspirations.is_featured

leads.phone

consultations.lead_id

---

# 9. Lead Status Values

Allowed Values:

new

contacted

qualified

converted

closed

---

# 10. Availability Status Values

Allowed Values:

available

limited

discontinued

coming_soon

---

# 11. Future Tables

Not Required For V1

users

wishlists

wishlist_items

saved_inspirations

saved_products

quotation_requests

architect_profiles

project_case_studies

blog_posts

testimonials

---

# 12. V1 Database Scope

Included:

spaces

collections

inspirations

brands

product_types

product_categories

product_subcategories

products

showroom_sections

leads

consultations

junction_tables

Excluded:

accounts

wishlists

quotations

architect portal

blogs

reviews

recommendation engine
