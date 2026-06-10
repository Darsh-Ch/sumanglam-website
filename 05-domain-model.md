# Domain Model

Version: 1.0

Project: Sumanglam Digital Showroom Platform

---

# 1. Purpose

This document defines the core business entities, ownership rules, and relationships used throughout the Sumanglam platform.

The goal is to create a flexible domain model that supports:

- Inspiration-driven discovery
- Product exploration
- Brand storytelling
- Consultation workflows
- Future wishlist functionality
- Future catalog expansion

This document is independent of:

- Database design
- API design
- UI implementation

It describes the business itself.

---

# 2. Domain Philosophy

The platform is inspiration-first.

Users typically discover:

Space
↓
Inspiration
↓
Product
↓
Brand
↓
Consultation

rather than:

Product
↓
Specification
↓
Inquiry

Therefore Inspirations are treated as first-class entities.

---

# 3. Core Entities

# Brand

Represents a manufacturer, solution provider, or sub-brand within a larger brand ecosystem.

Examples:

* Nolte
* Mrida
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

---

### Brand Types

#### Solution Brand

Provides complete systems and design solutions.

Examples:

* Nolte
* Mrida

Characteristics:

* Galleries
* Inspirations
* Collections
* Design philosophy
* Storytelling content

---

#### Product Brand

Provides individual products and product ecosystems.

Examples:

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

Characteristics:

* Products
* Specifications
* Technical information

---

### Brand Relationships

A Brand may optionally belong to a Parent Brand.

Example:

Hettich
└── Blaupunkt

This relationship enables sub-brands to inherit trust and context from their parent ecosystem while maintaining independent product catalogs.

---

# 4. Product

Represents an individual sellable item.

Examples:

- Handle
- Hinge
- Lock
- Safe
- Oven
- Hob
- Dishwasher
- Refrigerator

---

### Product Structure

Product
↓
Product Type
↓
Category
↓
Subcategory

Example:

Product:
Bosch Series 8 Oven

Type:
Appliance

Category:
Oven

Subcategory:
Built-in Oven

---

# 5. Product Type

Top-level classification.

Examples:

- Hardware
- Appliance

---

# 6. Product Category

Functional grouping.

Examples:

Hardware:

- Handles
- Hinges
- Locks
- Safes
- Accessories

Appliances:

- Ovens
- Refrigeration
- Dishwashers
- Hobs
- Microwaves

---

# 7. Product Subcategory

Optional deeper grouping.

Examples:

Handles
↓
Cabinet Handles

Handles
↓
Wardrobe Handles

Hinges
↓
Soft Close Hinges

Ovens
↓
Built-in Ovens

---

# 8. Inspiration

Represents a visual concept, room, or design idea.

Examples:

- German Luxury Kitchen
- Warm Contemporary Kitchen
- Minimal Wardrobe
- Modern Storage Space

Inspirations are one of the most important entities in the platform.

---

### Inspiration Content

Can contain:

- Images
- Videos
- Description
- Featured Products
- Featured Brands
- Related Inspirations

---

# 9. Inspiration Collection

Represents a curated grouping of inspirations.

Examples:

- Modern Kitchens
- German Kitchens
- Luxury Wardrobes
- Storage Solutions
- Minimal Spaces

Purpose:

Enable inspiration-first browsing.

---

# 10. Showroom Section

Represents physical showroom areas.

Examples:

- Reception
- Hardware Floor
- Mrida Kitchen Floor
- Nolte Kitchen Floor

Purpose:

Connect digital experience to physical experience.

---

# 11. Consultation Request

Represents a customer consultation inquiry.

Examples:

- Kitchen Consultation
- Showroom Visit Request
- Design Discussion

---

### Consultation Information

May include:

- Customer Name
- Contact Information
- Project Type
- Requirements
- Preferred Contact Method

---

# 12. Lead

Represents a potential customer.

Sources:

- Consultation Form
- WhatsApp Inquiry
- Contact Form
- Future Lead Sources

---

# 13. Future User

Not part of V1.

Reserved for:

- Accounts
- Saved Inspirations
- Saved Products
- Wishlists

---

# 14. Future Wishlist

Not part of V1.

Allows users to save:

- Inspirations
- Products
- Collections

---

# 15. Entity Relationships

## Brand → Product

One Brand

can own

Many Products

---

## Product → Category

One Product

can belong to

Many Categories

---

## Category → Product

One Category

contains

Many Products

---

## Inspiration → Product

One Inspiration

can feature

Many Products

---

## Product → Inspiration

One Product

can appear in

Many Inspirations

---

## Collection → Inspiration

One Collection

contains

Many Inspirations

---

## Inspiration → Collection

One Inspiration

can belong to

Many Collections

---

## Brand → Inspiration

One Brand

can appear in

Many Inspirations

---

## Consultation → Lead

Every Consultation creates or updates a Lead.

---

# 16. Future Relationships

User
↓
Wishlist

Wishlist
↓
Products

Wishlist
↓
Inspirations

Wishlist
↓
Collections

---

# 17. Ownership Rules

Every Product must belong to exactly one Brand.

Every Product must belong to one Product Type.

Every Product must belong to at least one Category.

Every Inspiration must belong to at least one Collection.

Every Consultation must be linked to a Lead.

---

# 18. V1 Scope

Included:

- Brands
- Products
- Product Types
- Categories
- Inspirations
- Collections
- Showroom Sections
- Leads
- Consultations

Excluded:

- Accounts
- Wishlists
- Saved Products
- Saved Inspirations
- Quotation System

---

# 19. Future Expansion

Phase 2+

- User Accounts
- Wishlists
- Saved Inspirations
- Saved Products
- Architect Portal
- Quotation Workflows
- Product Recommendation Engine
- Supplier Catalog Ingestion
