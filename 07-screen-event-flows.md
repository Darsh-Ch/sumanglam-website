# Screen Event Flows

Version: 1.0

Project: Sumanglam Digital Showroom Platform

---

# 1. Purpose

This document defines user actions, system responses, and data movement across the platform.

These flows will drive:

* API Design
* Database Design
* Admin Features
* Analytics Events

---

# 2. Flow 1 — Explore Inspiration Journey

## User Flow

User lands on Homepage

↓

User clicks Explore Inspirations

↓

System loads Inspiration Listing

↓

User browses collections

↓

User selects Inspiration

↓

System loads Inspiration Detail Page

↓

System loads:

* Images
* Related Brands
* Related Products
* Related Inspirations

↓

User explores content

↓

User sees CTA:

* Book Consultation
* Visit Showroom
* WhatsApp Inquiry

---

## Business Goal

Move users from inspiration to engagement.

---

# 3. Flow 2 — Brand Discovery Journey

## User Flow

User lands on Homepage

↓

User clicks Brand

↓

System loads Brand Page

↓

System displays:

* Brand Story
* Galleries
* Inspirations
* Products

↓

User explores brand ecosystem

↓

User clicks Inspiration

OR

User clicks Product

↓

System loads selected content

↓

CTA displayed

* Book Consultation
* Visit Showroom
* WhatsApp Inquiry

---

## Business Goal

Build trust through premium brand partnerships.

---

# 4. Flow 3 — Product Discovery Journey

## User Flow

User lands on Product Listing

↓

User browses products

↓

User applies filters

↓

System loads matching products

↓

User opens Product Page

↓

System loads:

* Product Information
* Images
* Specifications
* Related Inspirations
* Related Products

↓

User clicks:

* WhatsApp Inquiry
* Book Consultation

---

## Business Goal

Help users research products and begin conversations.

---

# 5. Flow 4 — Consultation Booking

## User Flow

User clicks Book Consultation

↓

Consultation Form Opens

↓

User enters:

* Name
* Phone
* Email (optional)
* Project Type
* Requirements

↓

Validation Runs

↓

System creates Lead

↓

System creates Consultation Request

↓

Admin Notification Triggered

↓

Success Screen Displayed

↓

User receives confirmation

---

## Data Created

Lead

Consultation Request

Lead Source

Source Page

Timestamp

---

## Business Goal

Generate qualified showroom leads.

---

# 6. Flow 5 — WhatsApp Inquiry

## User Flow

User clicks WhatsApp CTA

↓

System generates context

Examples:

"Hello, I was viewing the Bosch Series 8 Oven."

"Hello, I was viewing the German Luxury Kitchen inspiration."

↓

WhatsApp Opens

↓

Conversation Begins

---

## Business Goal

Create high-intent conversations.

---

# 7. Flow 6 — Showroom Visit Intent

## User Flow

User opens Showroom Experience

↓

User explores:

* Reception
* Hardware Floor
* Mrida Kitchen Floor
* Nolte Kitchen Floor

↓

User clicks Plan Visit

↓

Contact Options Displayed

* Call
* WhatsApp
* Consultation Booking

↓

Lead Captured

---

## Business Goal

Drive physical showroom visits.

---

# 8. Flow 7 — Create Inspiration (Admin)

## Admin Flow

Admin creates Inspiration

↓

Uploads Images

↓

Selects Space

↓

Selects Collection

↓

Links Brands

↓

Links Products

↓

Publishes Inspiration

---

## Data Updated

Inspiration

Collection Mapping

Brand Mapping

Product Mapping

---

# 9. Flow 8 — Create Product (Admin)

## Admin Flow

Admin creates Product

↓

Assign Brand

↓

Assign Product Type

↓

Assign Categories

↓

Upload Images

↓

Add Specifications

↓

Publish

---

## Data Updated

Product

Category Mapping

Brand Mapping

Media Assets

---

# 10. Flow 9 — Manage Leads (Admin)

## Admin Flow

Lead Created

↓

Admin Views Lead

↓

Lead Status Updated

Possible Statuses:

* New
* Contacted
* Qualified
* Converted
* Closed

↓

Notes Added

↓

Follow-Up Scheduled

---

## Business Goal

Maintain lead pipeline visibility.

---

# 11. Analytics Events

Track:

* Homepage Viewed
* Inspiration Viewed
* Collection Viewed
* Brand Viewed
* Product Viewed
* Consultation Started
* Consultation Submitted
* WhatsApp Clicked
* Showroom Viewed
* Showroom Visit Intent
* Brand CTA Clicked
* Product CTA Clicked

---

# 12. Source Tracking Requirements

Every lead-generating action should capture:

* Source Page
* Source Type
* Referring URL
* Timestamp

Examples:

Source Type:

* Inspiration
* Product
* Brand
* Homepage
* Showroom

This data should be available to administrators for lead analysis.

---

# 13. V1 Scope

Included:

* Inspiration Flows
* Brand Flows
* Product Flows
* Consultation Flows
* WhatsApp Flows
* Showroom Flows
* Basic Admin Flows
* Lead Tracking

Excluded:

* User Accounts
* Wishlists
* Saved Inspirations
* Saved Products
* Quotation Workflows
* Architect Portal
* Recommendation Engine
