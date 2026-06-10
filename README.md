# Sumanglam Digital Showroom

Premium digital showroom for modular kitchens, wardrobes, hardware, and
appliances. Inspiration-first discovery that converts into showroom visits,
WhatsApp conversations, and consultation requests — **not** ecommerce.

The product/architecture source of truth is the vault in `project-vault/`.
Implementation choices are logged in
`project-vault/14_Implementation_Notes/Implementation Decisions.md`.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn-style UI ·
Prisma + PostgreSQL (Supabase) · Auth.js v5 (admin) · Zod · GSAP ScrollTrigger
· Lenis · Three.js · Cloudinary + GA4 placeholders.

## Getting Started

```bash
npm install                 # also runs prisma generate
cp .env.example .env        # fill in values (see below)
npm run dev                 # http://localhost:3000
```

Database (already provisioned: Supabase project `sumanglam-showroom`,
ap-south-1; schema applied + seeded):

```bash
npm run db:seed             # idempotent — safe to re-run
npx prisma migrate dev      # future schema changes (update vault docs first)
```

## Environment

See `.env.example`. Key vars:

| Var | Purpose |
| --- | --- |
| `DATABASE_URL` | Postgres (Supabase session pooler) |
| `AUTH_SECRET` | Auth.js JWT secret |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Placeholder single-admin login |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` + API keys | Asset delivery (optional in dev — local SVG placeholders are used) |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Analytics (optional) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp CTAs (falls back to /contact when empty) |
| `NEXT_PUBLIC_SITE_URL` | Canonicals, sitemap, OG |

## Layout

```
app/(site)/        public pages (homepage, inspiration, kitchens, nolte,
                   mrida, wardrobes, hardware-appliances, products, brands,
                   showroom, architects-designers, about, contact,
                   book-consultation)
app/admin/         Auth.js-protected admin (overview, leads, consultations,
                   content)
app/api/v1/        documented public + admin route handlers
                   ({ success, data } / { success, error } envelopes)
components/        ui primitives, layout, motion (Lenis/GSAP/Three), shared
features/          consultations, whatsapp, brands
server/            data layer (Prisma queries), lead creation
lib/               env validation, db client, zod schemas, analytics, images
prisma/            schema, migrations, seed (taxonomy real, content demo)
```

## Admin

`/admin` — credentials from `ADMIN_EMAIL`/`ADMIN_PASSWORD`. Leads pipeline
(status updates), consultations, content overview. Content create/update via
the documented `/api/v1/admin/*` endpoints. DELETE archives, never destroys.

## Before Launch (tracked placeholders)

1. Official contact details + WhatsApp number (`.env`, `lib/site.ts`).
2. Real imagery via Cloudinary (replace `public/images/placeholders/`).
3. Final hero/About copy; demo inspirations/products replaced with real ones.
4. Real admin auth provider + rotated DB credentials.
5. Admin notification channel (currently logged only).
6. GA4 property; production domain + DNS.

## Checks

```bash
npm run typecheck && npm run lint && npm run build
```
