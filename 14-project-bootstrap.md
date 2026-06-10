# Project Bootstrap

Project: Sumanglam Digital Showroom Platform

Version: 1.0

---

# Purpose

This document defines the implementation order for the project.

The goal is to ensure that AI-assisted development proceeds in a structured and predictable way.

---

# Development Philosophy

Build vertically.

Not horizontally.

---

Avoid:

Building every page skeleton first.

---

Prefer:

Build one complete feature at a time.

---

# MVP Goal

Create a premium digital showroom experience that:

* Inspires visitors
* Builds trust
* Generates consultations
* Generates WhatsApp inquiries

No ecommerce functionality is required.

---

# Phase 1

Foundation

---

Tasks:

Create Next.js application

Configure TypeScript

Configure Tailwind

Configure shadcn/ui

Configure Prisma

Configure PostgreSQL connection

Configure Cloudinary

Configure Auth.js

Create folder structure

Create environment validation

---

Success Criteria:

Project runs locally.

Database connects successfully.

Authentication works.

---

# Phase 2

Design System

---

Tasks:

Create:

* Container component
* Section component
* Heading component
* CTA component
* Card component

Create:

* Typography system
* Spacing system
* Responsive system

---

Success Criteria:

Reusable UI foundation exists.

---

# Phase 3

Homepage

---

Build:

Homepage only.

Implement:

* Hero Section
* Explore Journey Section
* Featured Inspirations
* Featured Brands
* Why Sumanglam
* Showroom Experience
* Consultation CTA
* Footer

---

Success Criteria:

Homepage matches documentation.

Mobile-first.

Responsive.

---

# Phase 4

Content Models

---

Implement:

Space

Collection

Inspiration

Brand

Product

ShowroomSection

Lead

Consultation

---

Create Prisma schema.

Generate migrations.

Seed sample content.

---

Success Criteria:

Database matches documentation.

---

# Phase 5

CMS / Admin Foundation

---

Implement:

Admin Authentication

Dashboard Layout

CRUD:

* Inspirations
* Brands
* Products
* Collections

---

Success Criteria:

Admin can manage content.

---

# Phase 6

Frontend Content Pages

---

Implement:

Inspiration Pages

Brand Pages

Product Pages

Collection Pages

Showroom Pages

---

Success Criteria:

All content is dynamic.

No hardcoded data.

---

# Phase 7

Consultation System

---

Implement:

Consultation Form

Lead Creation

Lead Tracking

Admin Lead View

---

Success Criteria:

Consultations generate leads.

---

# Phase 8

WhatsApp Integration

---

Implement:

Context-aware WhatsApp links.

Examples:

Product Page

Brand Page

Inspiration Page

Showroom Page

---

Success Criteria:

Messages include source context.

---

# Phase 9

SEO

---

Implement:

Metadata

Open Graph

Sitemap

Robots.txt

Structured Data

Canonical URLs

---

Success Criteria:

SEO foundation complete.

---

# Phase 10

Optimization

---

Implement:

Image optimization

Performance optimization

Accessibility improvements

Analytics

Error handling

Loading states

---

Success Criteria:

Lighthouse > 90

---

# Development Rules

Always reference:

01-prd.md

02-information-architecture.md

03-ui-ux-specification.md

04-design-language.md

05-domain-model.md

06-content-model.md

07-screen-event-flows.md

08-database-design.md

09-api-specification.md

10-technical-architecture.md

11-rules.md

12-dontdo.md

13-master-context.md

before implementing features.

---

# Out Of Scope

Do not build:

* Ecommerce
* User Accounts
* Wishlists
* Recommendation Engine
* Architect Portal
* Quotation System

unless explicitly requested.
