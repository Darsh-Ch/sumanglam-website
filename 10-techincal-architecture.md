# Technical Architecture

Version: 1.0

Project: Sumanglam Digital Showroom Platform

---

# 1. Purpose

This document defines the technical architecture of the platform.

It serves as the source of truth for:

* Frontend structure
* Backend structure
* Database integration
* Deployment strategy
* Infrastructure decisions

---

# 2. Architecture Principles

The platform should prioritize:

* Simplicity
* Maintainability
* Performance
* Scalability
* Low operational overhead

The architecture should support future growth without introducing unnecessary complexity in V1.

---

# 3. High-Level Architecture

Client

↓

Next.js Application

↓

API Layer

↓

Prisma ORM

↓

PostgreSQL Database

↓

Cloudinary Asset Storage

---

# 4. Frontend Stack

Framework:

Next.js 15

---

Routing:

App Router

---

Language:

TypeScript

---

Styling:

Tailwind CSS

---

Component System:

shadcn/ui

---

Animation:

Framer Motion

---

State Management:

React Server Components

Minimal client-side state

Zustand only if necessary

---

# 5. Backend Stack

Framework:

Next.js Route Handlers

---

Responsibilities:

* Data retrieval
* Lead creation
* Consultation handling
* Admin operations
* Analytics event collection

---

Architecture Style:

Monolithic Application

Single Deployment

---

# 6. Database

Database:

PostgreSQL

---

ORM:

Prisma

---

Database Responsibilities:

* Content storage
* Product storage
* Lead management
* Consultation management
* Relationships

---

# 7. Asset Management

Provider:

Cloudinary

---

Asset Types:

* Inspiration Images
* Product Images
* Brand Assets
* Showroom Images

---

Benefits:

* Image optimization
* Responsive image delivery
* CDN support

---

# 8. Authentication

Scope:

Admin Only

---

Provider:

Auth.js

---

Roles:

Admin

Future:

Editor

Content Manager

Architect Partner

---

# 9. Admin System

V1:

Custom Admin Panel

---

Functions:

Create Products

Create Inspirations

Manage Collections

Manage Brands

Manage Showroom Content

Manage Leads

Manage Consultations

---

# 10. Analytics

Provider:

Google Analytics 4

---

Events:

Homepage Viewed

Brand Viewed

Product Viewed

Inspiration Viewed

Consultation Started

Consultation Submitted

WhatsApp Clicked

Showroom Viewed

---

# 11. Deployment

Frontend:

Vercel

---

Database:

Supabase PostgreSQL

or

Neon PostgreSQL

---

Asset Storage:

Cloudinary

---

Domain:

sumanglam.co

---

# 12. Environment Strategy

Development

Local Environment

---

Staging

Optional for V1

---

Production

Live Website

---

# 13. Folder Structure

/app

(app router pages)

---

/components

Reusable UI components

---

/features

Feature-specific components

Examples:

brands

products

inspirations

consultations

---

/lib

Utilities

Database

Cloudinary

Analytics

---

/server

Server-side logic

---

/prisma

Schema

Migrations

---

/public

Static Assets

---

/docs

Project Documentation

---

# 14. API Layer Structure

/api/v1

---

Modules:

brands

products

collections

inspirations

showroom

consultations

leads

events

admin

---

# 15. Performance Targets

Homepage Load:

< 2 seconds

---

Lighthouse:

90+

---

Mobile First

Primary optimization target.

---

# 16. Image Strategy

Use:

Next.js Image Component

Cloudinary Transformations

Responsive Images

---

Avoid:

Unoptimized uploads

Full-resolution image delivery

---

# 17. SEO Architecture

Support:

Metadata API

Open Graph

Structured Data

Sitemap

Robots.txt

Canonical URLs

---

# 18. Security

Input Validation

Rate Limiting

Admin Authentication

Environment Variable Protection

CSRF Protection

---

# 19. Error Handling

API Errors:

Structured JSON responses

---

Frontend:

Graceful fallback states

Loading states

Error boundaries

---

# 20. Future Expansion

Phase 2+

User Accounts

Wishlists

Saved Inspirations

Quotation Workflows

Architect Portal

Supplier Catalog Ingestion

Recommendation Engine

Advanced Search

---

# 21. V1 Scope

Included:

Next.js

Tailwind

shadcn/ui

Prisma

PostgreSQL

Cloudinary

Auth.js

Admin Dashboard

GA4

---

Excluded:

Microservices

Redis

Message Queues

Elasticsearch

Complex Event Systems

Separate Backend Services
