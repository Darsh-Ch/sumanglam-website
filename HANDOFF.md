# HANDOFF — Pick Up From Here

This file is for the AI agent (or developer) continuing the Sumanglam digital
showroom. Read this first, then `CLAUDE.md` / `AGENTS.md`, then the vault.

## What this project is

A premium **digital showroom** (NOT ecommerce) for Sumanglam — modular
kitchens (Nolte, Mrida), Mrida wardrobes, premium hardware, and appliances.
Goal: inspire, build trust, and convert into showroom visits, WhatsApp
conversations, and consultation requests.

**Source of truth:** `project-vault/` (read `00_Index.md`,
`13_Rules_And_Constraints/Global Rules.md`, `17_Forbidden_Things.md` before
changing anything). Every implementation decision so far is logged in
`project-vault/14_Implementation_Notes/Implementation Decisions.md`.

## Current state: V1 is feature-complete and verified

- All public pages built (homepage, inspiration listing/detail, collections,
  kitchens, /nolte, /mrida, /wardrobes, hardware-appliances, products
  listing/detail, brands listing/detail, showroom, architects-designers,
  about, contact, book-consultation) — mobile-first, premium design system
  (Fraunces + Inter, warm ivory/charcoal/bronze tokens).
- Motion: Lenis smooth scroll synced to GSAP ScrollTrigger, scroll reveals,
  gentle hero parallax, lazy Three.js ambient on the homepage hero. All
  reduced-motion safe. **Do not add heavier motion** — vault forbids it.
- Full `/api/v1` public + admin APIs with `{ success, data } /
  { success, error: { code, message } }` envelopes, zod validation, rate
  limiting on public writes.
- Consultation flow creates Leads + Consultations with source tracking;
  WhatsApp CTAs send context-aware messages and track clicks.
- Admin (`/admin`, Auth.js credentials): overview, leads pipeline with status
  updates, consultations, content tables with publish/draft/archive +
  featured toggles. Content create/edit goes through the documented
  `/api/v1/admin/*` endpoints (forms not built yet — deliberate V1 scope).
- SEO: per-page metadata + OG, sitemap, robots, canonicals, LocalBusiness
  JSON-LD. Loading/error/404/empty states everywhere.
- `tsc`, `eslint --max-warnings=0`, and `next build` all pass.

## How to run it locally

```bash
npm install
cp .env.example .env
```

Then fill `.env`:

1. **DATABASE_URL** — the build used a Supabase project on the previous
   owner's account; you will not have access. Create a free Supabase project
   (or any Postgres), then:
   ```bash
   npx prisma migrate deploy   # applies prisma/migrations/0_init
   npm run db:seed             # idempotent; seeds taxonomy + demo content
   ```
   If using Supabase poolers, keep `?connection_limit=4&pool_timeout=20` on
   the session pooler (15-client cap on free tier) or
   `?pgbouncer=true&connection_limit=1` on the transaction pooler.
2. **AUTH_SECRET** — `npx auth secret` or any 32+ char random string.
3. **ADMIN_EMAIL / ADMIN_PASSWORD** — admin login at `/admin/login`.
4. Everything else (Cloudinary, GA4, WhatsApp number, contact details) can
   stay empty for now — the site degrades gracefully with local placeholder
   imagery and a /contact fallback for WhatsApp.

```bash
npm run dev      # http://localhost:3000
```

Demo walkthrough for the owner: homepage → an inspiration → a product →
submit a consultation → log into /admin and see the lead.

## Pending work (in priority order)

1. **Real business inputs** (everything is a marked placeholder):
   WhatsApp number, phone, email, address, hours (`.env` + `lib/site.ts`),
   map embed on /contact and /showroom, final hero/About copy.
2. **Real content**: replace demo inspirations/products in the database and
   the placeholder SVGs (`public/images/placeholders/`) with real photography
   via Cloudinary (`lib/images.ts` already resolves Cloudinary public IDs).
   Demo rows are marked in `prisma/seed.ts`.
3. **Admin create/edit forms** for inspirations/products/brands/collections/
   showroom — the APIs and validation schemas
   (`lib/validation/admin-content.ts`) already exist; build forms on top.
4. **Auth hardening**: replace the env-credentials placeholder with a real
   Auth.js provider; rotate all secrets.
5. **Admin notification channel** for new consultations (currently a console
   log in `server/leads.ts` → `notifyAdmin`).
6. **Deployment**: Vercel + production Postgres + Cloudinary + GA4 + domain
   (vault references `sumanglam.co`). Use the transaction pooler string.
7. Image upload helper for admin (Cloudinary signed uploads) — config keys
   exist in `.env.example`.

## Hard rules (vault — do not violate)

- No ecommerce/checkout, user accounts, wishlists, quotation engine,
  architect portal, recommendation engine, advanced filters.
- Nolte is kitchens only. Wardrobes belong to Mrida — never an independent
  product catalog.
- Inspiration before products; mobile-first always; no glassmorphism, neon,
  dark-tech themes, aggressive popups, or heavy motion.
- Keep API response envelopes consistent; no undocumented endpoints or
  schema changes without updating the vault first.
- Update `project-vault/14_Implementation_Notes/Implementation Decisions.md`
  whenever you make a non-obvious choice.
