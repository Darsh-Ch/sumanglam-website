# Sumanglam Project Vault

## Product Summary

Sumanglam is a premium digital showroom and interior discovery platform for modular kitchens, wardrobes, premium hardware, appliances, and interior solutions. The website should inspire visitors, build trust, showcase expertise, and convert qualified visitors into showroom visits, WhatsApp conversations, and consultation requests. It is not an ecommerce marketplace or a generic hardware catalog.

## Target Users

* [[Target Users|Homeowners]] planning new homes, renovations, modular kitchens, wardrobes, and interior upgrades.
* [[Target Users|Renovation customers]] comparing premium solutions.
* [[Target Users|Architects, interior designers, and builders]] evaluating brands, specifications, and collaboration opportunities.
* [[Target Users|Product researchers]] comparing hardware, appliances, categories, and specifications.

## Core Website Purpose

The core discovery path is inspiration-first:

Space -> Collection -> Inspiration -> Brand/Product -> Consultation.

The site should make users feel luxury, trust, warmth, modernity, customization, and expertise, then guide them toward [[Book Consultation]], [[WhatsApp Inquiry]], or [[Showroom Experience]].

## Main Pages And Screens

* [[Homepage]]
* [[Inspiration]]
* [[Kitchens]]
* [[Nolte]]
* [[Mrida]]
* [[Wardrobes]]
* [[Hardware And Appliances]]
* [[Brands]]
* [[Product Detail]]
* [[Showroom Experience]]
* [[Architects And Designers]]
* [[About]]
* [[Contact]]
* [[Book Consultation]]
* [[Admin Dashboard]]

## Main User Flows

* [[Explore Inspiration Journey]]
* [[Brand Discovery Journey]]
* [[Product Discovery Journey]]
* [[Consultation Booking]]
* [[WhatsApp Inquiry]]
* [[Showroom Visit Intent]]
* [[Create Inspiration Admin]]
* [[Create Product Admin]]
* [[Manage Leads Admin]]

## Main Content Types

* [[Content Type - Space]]
* [[Content Type - Collection]]
* [[Content Type - Inspiration]]
* [[Content Type - Brand]]
* [[Content Type - Product]]
* [[Content Type - Showroom Section]]
* [[Content Type - Consultation]]
* [[Content Governance]]

## Main Domain Entities

* [[Brand]]
* [[Product]]
* [[Product Type]]
* [[Product Category]]
* [[Product Subcategory]]
* [[Inspiration]]
* [[Inspiration Collection]]
* [[Showroom Section]]
* [[Lead]]
* [[Consultation Request]]
* [[Solution]]

## Database Overview

The database is PostgreSQL managed through Prisma. V1 requires tables for [[Database - spaces]], [[Database - collections]], [[Database - inspirations]], [[Database - brands]], [[Database - product_types]], [[Database - product_categories]], [[Database - product_subcategories]], [[Database - products]], [[Database - showroom_sections]], [[Database - leads]], [[Database - consultations]], and [[Database - junction tables]]. It should favor clarity and maintainability over premature scaling.

## API And Backend Overview

The backend is a monolithic Next.js 15 app using Route Handlers under `/api/v1`. Public APIs cover homepage, spaces, collections, inspirations, brands, products, showroom, consultations, WhatsApp tracking, and analytics. Admin APIs require authentication and manage content and leads. See [[API Overview]], [[API - Consultations]], [[API - Admin Content]], and [[API - Admin Leads]].

## Design Language Summary

The visual mix is 50 percent luxury showroom, 35 percent Apple minimalism, and 15 percent editorial design. The site should use large imagery, generous whitespace, short copy, calm hierarchy, subtle motion, and mobile-first layouts. See [[Visual Style]], [[Typography]], [[Spacing Layout]], [[Interaction Patterns]], and [[Responsive Behavior]].

## Technical Architecture Summary

Use Next.js 15, App Router, TypeScript, Tailwind CSS, shadcn/ui, Prisma, PostgreSQL, Cloudinary, Auth.js for admin, GA4, and Vercel. Framer Motion is documented for animation. The user has additionally approved [[User Approved Stack Extension - Three GSAP Lenis|Three.js, GSAP ScrollTrigger, and Lenis.js]] for immersive and scroll-driven experiences.

## Rules That Must Always Be Followed

* Inspiration comes before products.
* Mobile-first comes before desktop polish.
* Sumanglam must not feel like a hardware store, ecommerce marketplace, discount retailer, technology startup, or design agency.
* Wardrobes belong to Mrida.
* Nolte is a kitchen-focused premium German solution brand.
* Admin functionality must require authentication.
* API responses must be consistent.
* Schema changes require documentation updates.

Read [[Global Rules]], [[Quality Bar]], and [[Agent Instructions]] before implementation.

## Things That Must Not Be Built

Do not build ecommerce checkout, user accounts, wishlists, quotation engine, architect portal, recommendation engine, microservices, separate backend services, Redis, Kafka, Elasticsearch, Redux, undocumented endpoints, unvalidated forms, desktop-first layouts, unoptimized images, generic marketing copy, or fake urgency tactics unless explicitly approved. See [[Forbidden Patterns]] and [[17_Forbidden_Things]].

## Recommended Build Order

1. [[18_Build_Order#1 Repo And Project Setup|Repo and project setup]]
2. [[18_Build_Order#2 Tech Stack And Bootstrap|Tech stack and bootstrap]]
3. [[18_Build_Order#3 Global Rules And Forbidden Patterns|Global rules and forbidden patterns]]
4. [[18_Build_Order#4 Design Tokens And Design System|Design tokens and design system]]
5. [[18_Build_Order#5 Database And Schema Foundation|Database and schema foundation]]
6. [[18_Build_Order#6 Content Model And Taxonomy Foundation|Content model and taxonomy foundation]]
7. [[18_Build_Order#7 API And Backend Foundation|API and backend foundation]]
8. [[18_Build_Order#8 Core Layouts And Navigation|Core layouts and navigation]]
9. [[18_Build_Order#9 Highest Priority Pages|Highest-priority pages]]
10. [[18_Build_Order#10 Main User Flows|Main user flows]]
11. [[18_Build_Order#11 Edge States And Validation|Edge states and validation]]
12. [[18_Build_Order#12 QA Against Documentation|QA against documentation]]
13. [[18_Build_Order#13 Deployment Readiness|Deployment readiness]]

## Implementation Guides

* [[Claude Code Query Guide]]
* [[Codex_Query_Guide]]
* [[Project Bootstrap]]
* [[Build Readiness Notes]]
* [[15_Open_Questions]]
* [[16_Conflicts]]
* [[source-map]]

## Source Trace

Derived from `01-prd.md`, `02-information_architecture.md`, `03-ui-ux-specification.md`, `04-design-language.md`, `05-domain-model.md`, `06-content-model.md`, `07-screen-event-flows.md`, `08-database-design.md`, `09-api-specification.md`, `10-techincal-architecture.md`, `11-rules.md`, `12-dontdo.md`, `13-master-context.md`, `14-project-bootstrap.md`, `15-content-taxonomy.md`, `16-doc-review.md`, and user instructions in this chat on 2026-06-10.
