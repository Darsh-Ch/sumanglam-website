# Product Requirements Document (PRD): Premium Digital Showroom & Catalog

## 1. Project Overview and Objective

The objective is to build a premium digital showroom and interior discovery platform for Sumanglam, an established destination for modular kitchens, wardrobes, premium hardware, appliances, and interior solutions.

The primary goal is to drive highly qualified foot traffic to the physical showroom while positioning Sumanglam as a trusted partner in helping customers create exceptional living spaces.

Rather than functioning as a traditional product catalog, the platform should bridge the gap between emotional inspiration (visualizing a dream home) and technical research (exploring brands, products, finishes, dimensions, and hardware systems).

The platform should follow an inspiration-first philosophy where users typically discover:

Space
↓
Inspiration
↓
Brand
↓
Product
↓
Consultation

The website should position Sumanglam as:

* A premium destination for kitchens, wardrobes, hardware, and appliances
* A trusted local expert
* A design and consultation partner
* A showroom experience worth visiting

rather than simply a hardware retailer or product catalog.


## 2. Target Audience

* **Retail Customers (Homeowners):** Users seeking high-end inspiration, room-based visual collections, and product availability before committing to an in-store consultation.
* **B2B Professionals (Architects, Interior Designers, Builders):** High-value, recurring users who require deep technical specifications, bulk catalog access, trade partnership inquiries, and reliable brand trust to specify products for their clients' projects.

## 3. Scope & Phased Execution

To mitigate the risk of building too much too soon, the project will be executed in phases:
* **Phase 1 (Premium Presence):** Focus on brand trust, the Inspiration Gallery, Dedicated solution-brand pages (Nolte, Mrida), including kitchens, wardrobes, inspirations, and customization journeys, and a robust showroom conversion funnel (consultation bookings).
* **Phase 2 (Curated Catalog):** Introduction of the top 100–300 curated products to validate the UI and database structure. 
* **Phase 3 (Structured Database Expansion):** Implementation of the admin ingestion system to process bulk PDF supplier catalogs and scale the database.
* **Phase 4 (Full Operations):** Integration of advanced B2B features, wishlists, quotation generators, and dynamic designer flows.

## 4. Core Features

### Inspiration & Space Discovery System (Visual-First UX)

The platform should prioritize inspiration-driven discovery.

Users should be encouraged to explore complete spaces before individual products.

Content should be organized around:

* Kitchens
* Wardrobes
* Hardware
* Appliances

and then further refined through:

* Collections
* Inspirations
* Brands
* Products

Examples:

* German Kitchens
* Modern Kitchens
* Luxury Wardrobes
* Smart Storage Solutions
* Premium Hardware
* Built-In Appliance Collections

The objective is to help users visualize possibilities before evaluating technical products and specifications.

---

### Premium Brand & Solution Hubs

Dedicated storytelling pages should exist for both solution brands and product brands.

#### Solution Brands

* Nolte
* Mrida

These pages should showcase:

* Design philosophy
* Collections
* Inspirations
* Kitchens
* Wardrobes
* Customization possibilities
* Brand storytelling

#### Product Brands

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

These pages should showcase:

* Product ecosystems
* Product categories
* Technical strengths
* Related inspirations
* Related collections

Brands should not be treated as simple filter tags but as important trust-building content assets.

---

### Advanced Hardware & Appliance Catalog

Deep filtering capabilities reflecting how professionals actually search: by finish (matte/glossy), color, style, dimensions, modular compatibility, and mechanism (e.g., soft-close).

---

### B2B / Architect Funnel

Dedicated flows for professionals, including project consultation CTAs, trade partnership inquiries, and technical catalog requests.

---

### Showroom Conversion System

A cohesive system to drive physical visits, including WhatsApp integration, "Book a Consultation" flows, "Bring your floorplan" prompts, map integration, and lead capture forms.

---

### Product Detail Pages (PDP)

Comprehensive landing pages for individual SKUs featuring high-res galleries, exact pricing, technical dimensions, materials, and direct CTAs to inquire about the specific item.

---

### Structured Data Ingestion Pipeline (Admin)

A robust backend system and admin panel designed to normalize messy, inconsistent PDF data (varying SKU formats, dimensions, and images) from suppliers into a clean, unified database schema.

---

## 5. Technical Stack & Deployment

* **Frontend Framework:** Next.js (React) styled with Tailwind CSS for rapid, responsive, and visually premium UI development.
* **Backend & Database:** PostgreSQL accessed via Prisma ORM for a rigid, relational data structure capable of handling complex filtering.
* **Asset Management:** Cloudinary (or similar) for handling high-resolution inspiration galleries and product images dynamically.
* **Deployment:** Vercel (or custom cloud hosting) with DNS records mapped to the pre-purchased GoDaddy domain.

## 6. Success Metrics

* Volume of qualified showroom appointments booked through the website.
* Increase in B2B inbound leads (Architects/Designers).
* Engagement time spent in the Inspiration Gallery.
* Successful ingestion and normalization of supplier PDF data into the PostgreSQL database without breaking schema constraints. 