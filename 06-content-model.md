# Content Model

Version: 1.0

Project: Sumanglam Digital Showroom Platform

---

# 1. Purpose

This document defines the content structures used throughout the platform.

The content model determines:

- What information exists
- How content relates to other content
- How users discover information
- How future CMS functionality should operate

This document is independent of:

- UI Design
- Database Implementation
- API Design

---

# 2. Content Philosophy

The platform is space-first.

Users should discover:

Space
↓
Collection
↓
Inspiration
↓
Brand
↓
Product

rather than:

Product
↓
Specification
↓
Inquiry

Content should support inspiration before transaction.

---

# 3. Space

Represents a high-level area of the home.

Examples:

- Kitchen
- Wardrobe
- Hardware
- Appliances

---

## Space Fields

Title

Slug

Description

Hero Image

Featured Collections

Featured Inspirations

SEO Content

SEO Metadata

---

# 4. Collection

Represents a curated theme.

Examples:

- Modern Kitchens
- German Kitchens
- Luxury Wardrobes
- Minimal Spaces
- Storage Solutions

---

## Collection Fields

Title

Slug

Short Description

Long Description

Cover Image

Gallery Images

Related Inspirations

Featured Brands

Related Collections

SEO Metadata

---

# 5. Inspiration

Represents an individual design concept.

Examples:

- Warm Contemporary Kitchen
- German Luxury Kitchen
- Minimal Wardrobe
- Smart Storage Concept

---

## Inspiration Fields

Title

Slug

Short Description

Long Description

Primary Image

Gallery Images

Video (optional)

Space

Collections

Featured Brands

Featured Products

Tags

Style Tags

SEO Metadata

---

# 6. Brand

Represents a manufacturer or solution provider.

Examples:

- Nolte
- Mrida
- Bosch
- Siemens
- Liebherr
- Hafele
- Hettich
- Yale
- Godrej
- Dorset
- Everyday
- Spitze
- Brass Barony
- Blum

---

## Brand Fields

Name

Slug

Brand Type

Logo

Hero Image

Description

Story

Highlights

Featured Collections

Featured Inspirations

Featured Products

Website Link (optional)

SEO Metadata

---

## Brand Examples

###  Solution Brands

* Nolte
* Mrida

---

### Product Brands

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

### Parent Brand Relationships

Some brands may belong to larger ecosystems.

Example:

Blaupunkt

Parent Brand:
Hettich

This relationship should be supported by the content model and CMS.


---

# 7. Product

Represents a sellable item.

Examples:

- Handle
- Hinge
- Oven
- Dishwasher

---

## Product Fields

Name

Slug

SKU

Brand

Type

Categories

Subcategories

Short Description

Long Description

Price Range

Primary Image

Gallery Images

Technical Specifications

Downloads

Related Inspirations

Related Products

Availability Status

SEO Metadata

---

# 8. Product Taxonomy

The platform should organize products around customer needs rather than brand-first navigation.

Users should generally browse:

Category
↓
Brand
↓
Product

rather than:

Brand
↓
Product

---

## Hardware Categories

* Furniture Fittings
* Handles
* Hinges
* Locks & Security
* Digital Locks
* Safes
* Door Controls
* Architectural Hardware
* Sliding Systems
* Kitchen Accessories
* Wire Baskets
* Brass Accessories

---

## Appliance Categories

* Ovens
* Hobs
* Microwaves
* Dishwashers
* Refrigeration
* Built-In Appliances
* Coffee Machines
* Wine Coolers

---

Brands may appear across multiple categories.

Example:

Hafele

* Architectural Hardware
* Kitchen Accessories
* Appliances

This flexibility should be preserved throughout the platform.


# 9. Showroom Section

Represents a physical showroom area.

Examples:

- Reception
- Hardware Floor
- Mrida Floor
- Nolte Floor

---

## Showroom Section Fields

Name

Description

Images

Video (optional)

Highlights

Related Brands

Related Inspirations

Floor Number

---

# 10. Consultation Content

Represents information required to support consultation flows.

---

## Consultation Fields

Project Type

Customer Name

Phone

Email

Preferred Contact Method

Requirements

Notes

Source

Submission Date

---

# 11. Content Relationships

Space
→ many Collections

Collection
→ many Inspirations

Inspiration
→ many Products

Inspiration
→ many Brands

Brand
→ many Products

Brand
→ many Inspirations

Product
→ many Inspirations

Showroom Section
→ many Brands

Showroom Section
→ many Inspirations

---

# 12. Future Content Types

Phase 2+

Case Studies

Project Stories

Designer Collaborations

Testimonials

Video Walkthroughs

Blogs

Knowledge Articles

FAQs

---

# 13. Content Governance

Every content item should have:

Status

Draft

Published

Archived

---

Every content item should support:

SEO Metadata

Open Graph Metadata

Last Updated Date

Author / Editor

---

# 14. V1 Content Scope

Spaces

Collections

Inspirations

Brands

Products

Showroom Sections

Consultation Content

---

# 15. Excluded From V1

Testimonials

Blogs

Case Studies

Designer Profiles

User Generated Content

Reviews

Wishlists