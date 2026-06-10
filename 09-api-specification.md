# API Specification

Version: 1.0

Project: Sumanglam Digital Showroom Platform

---

# 1. Purpose

This document defines the API contract used by the Sumanglam platform.

The API supports:

* Inspiration discovery
* Brand exploration
* Product discovery
* Consultation workflows
* Lead management
* Admin content management

---

# 2. API Design Principles

The API should be:

* RESTful
* Predictable
* Versionable
* Frontend-friendly
* Mobile-first

Base Path:

/api/v1

---

# 3. Public APIs

These endpoints are accessible to website visitors.

---

# 3.1 Homepage

## GET /homepage

Purpose:

Retrieve homepage content.

Returns:

* Featured Inspirations
* Featured Brands
* Featured Products
* Showroom Highlights

Response:

{
featuredInspirations: [],
featuredBrands: [],
featuredProducts: [],
showroomHighlights: []
}

---

# 3.2 Spaces

## GET /spaces

Purpose:

Retrieve all spaces.

Response:

[
{
id,
title,
slug
}
]

---

## GET /spaces/:slug

Purpose:

Retrieve a specific space.

Returns:

* Space
* Related Collections
* Featured Inspirations

---

# 3.3 Collections

## GET /collections

Returns all collections.

---

## GET /collections/:slug

Returns:

* Collection
* Inspirations
* Related Collections

---

# 3.4 Inspirations

## GET /inspirations

Supports:

* Pagination
* Search
* Filtering

Query Parameters:

?page=
?limit=
?space=
?collection=

---

## GET /inspirations/:slug

Returns:

* Inspiration
* Products Used
* Related Brands
* Related Inspirations

Example:

{
inspiration: {},
products: [],
brands: [],
relatedInspirations: []
}

---

# 3.5 Brands

## GET /brands

Returns all brands.

---

## GET /brands/:slug

Returns:

* Brand Information
* Inspirations
* Products

Example:

{
brand: {},
inspirations: [],
products: []
}

---

# 3.6 Products

## GET /products

Supports:

* Search
* Pagination
* Filtering

Query Parameters:

?page=
?limit=
?brand=
?type=
?category=
?subcategory=

---

## GET /products/:slug

Returns:

* Product Details
* Brand
* Related Inspirations
* Related Products

Example:

{
product: {},
brand: {},
inspirations: [],
relatedProducts: []
}

---

# 3.7 Showroom

## GET /showroom

Returns:

* All showroom sections

---

## GET /showroom/:id

Returns:

* Section Details
* Related Brands
* Related Inspirations

---

# 4. Consultation APIs

---

## POST /consultations

Purpose:

Create consultation request.

Request:

{
name: "",
phone: "",
email: "",
projectType: "",
requirements: "",
preferredContactMethod: ""
}

Response:

{
success: true,
consultationId: ""
}

---

Business Logic:

Create Lead

↓

Create Consultation

↓

Store Source Information

↓

Trigger Notification

---

# 5. WhatsApp Tracking

## POST /events/whatsapp-click

Purpose:

Track WhatsApp engagement.

Request:

{
sourceType: "",
sourceId: "",
sourcePage: ""
}

Response:

{
success: true
}

---

# 6. Analytics Events

## POST /events

Purpose:

Track frontend events.

Examples:

homepage_viewed

inspiration_viewed

product_viewed

brand_viewed

consultation_started

consultation_submitted

showroom_viewed

---

Request:

{
eventName: "",
sourceType: "",
sourceId: ""
}

---

# 7. Admin APIs

Authentication Required.

---

# 7.1 Inspirations

## POST /admin/inspirations

Create Inspiration.

---

## PUT /admin/inspirations/:id

Update Inspiration.

---

## DELETE /admin/inspirations/:id

Archive Inspiration.

---

# 7.2 Products

## POST /admin/products

Create Product.

---

## PUT /admin/products/:id

Update Product.

---

## DELETE /admin/products/:id

Archive Product.

---

# 7.3 Brands

## POST /admin/brands

Create Brand.

---

## PUT /admin/brands/:id

Update Brand.

---

## Brands API

Must support:

Parent Brand Relationships

Example:

Hettich
└── Blaupunkt

---

# 7.4 Collections

## POST /admin/collections

Create Collection.

---

## PUT /admin/collections/:id

Update Collection.

---

# 7.5 Showroom Sections

## POST /admin/showroom

Create Showroom Section.

---

## PUT /admin/showroom/:id

Update Showroom Section.

---

# 7.6 Leads

## GET /admin/leads

Retrieve Leads.

Supports:

* Filtering
* Pagination

---

## GET /admin/leads/:id

Retrieve Lead Details.

---

## PUT /admin/leads/:id

Update Lead Status.

Allowed Statuses:

* new
* contacted
* qualified
* converted
* closed

---

# 7.7 Consultations

## GET /admin/consultations

Retrieve consultations.

---

## GET /admin/consultations/:id

Retrieve consultation details.

---

# 8. Error Response Format

All APIs should return:

{
success: false,
error: {
code: "",
message: ""
}
}

Example:

{
success: false,
error: {
code: "PRODUCT_NOT_FOUND",
message: "Requested product does not exist."
}
}

---

# 9. Success Response Format

Standard format:

{
success: true,
data: {}
}

---

# 10. V1 Scope

Included:

* Homepage APIs
* Spaces APIs
* Collections APIs
* Inspirations APIs
* Brands APIs
* Products APIs
* Showroom APIs
* Consultation APIs
* Lead Management APIs
* Admin CRUD APIs

Excluded:

* User Accounts
* Wishlists
* Saved Inspirations
* Saved Products
* Quotation Workflows
* Architect Portal
* Recommendation Engine

---

# 11. Future APIs

Phase 2+

/users

/solutions

/wishlists

/saved-products

/saved-inspirations

/quotation-requests

/project-case-studies

/blogs

/testimonials
