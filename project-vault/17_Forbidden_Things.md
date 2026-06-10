# Forbidden Things

| Forbidden thing | Reason | Source | Severity |
| --------------- | ------ | ------ | -------- |
| Treating Sumanglam as a generic hardware store | Violates brand positioning and showroom strategy | `01-prd.md`, `02-information_architecture.md`, `04-design-language.md`, `13-master-context.md` | Hard Blocker |
| Designing the site like ecommerce | The platform exists to inspire and generate showroom/consultation leads, not checkout | `02-information_architecture.md`, `04-design-language.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| Ecommerce checkout | Excluded from V1 | `02-information_architecture.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| User accounts | Excluded from V1 | `05-domain-model.md`, `07-screen-event-flows.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| Wishlists or saved products/inspirations | Excluded from V1 | `05-domain-model.md`, `06-content-model.md`, `07-screen-event-flows.md`, `12-dontdo.md` | Hard Blocker |
| Quotation engine or quotation workflows | Excluded from V1 | `02-information_architecture.md`, `07-screen-event-flows.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| Architect portal or trade dashboard | Excluded from V1, even though Architects & Designers page exists | `02-information_architecture.md`, `07-screen-event-flows.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| Recommendation engine | Excluded from V1 | `07-screen-event-flows.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| Modeling wardrobes as independent product catalogs | Wardrobes belong to Mrida solutions | `11-rules.md`, `12-dontdo.md`, `16-doc-review.md` | Hard Blocker |
| Treating Nolte and Mrida as identical solution brands | Nolte is premium German kitchens; Mrida includes kitchens and wardrobes | `11-rules.md`, `12-dontdo.md`, `13-master-context.md`, `16-doc-review.md` | Hard Blocker |
| Implying Nolte wardrobes are sold | Later docs supersede older wording | `11-rules.md`, `13-master-context.md`, `16-doc-review.md` | Hard Blocker |
| Microservices | V1 architecture is a monolithic Next.js app | `10-techincal-architecture.md`, `12-dontdo.md` | Hard Blocker |
| Separate backend services | Next.js Route Handlers are the documented backend | `10-techincal-architecture.md`, `12-dontdo.md` | Hard Blocker |
| Redis, Kafka, Elasticsearch | Excluded from V1 architecture | `10-techincal-architecture.md`, `12-dontdo.md` | Hard Blocker |
| Unapproved dependencies | Architecture should stay simple and documented | `11-rules.md`, `12-dontdo.md` | Avoid Unless Explicitly Approved |
| Blocking Three.js, GSAP ScrollTrigger, or Lenis.js just because they were not in original docs | The user explicitly approved them on 2026-06-10 | User instruction on 2026-06-10 | Style/Quality Warning |
| Redux | Complex state management is forbidden | `12-dontdo.md` | Hard Blocker |
| Complex state management without necessity | Architecture prefers RSC and minimal client state; Zustand only if necessary | `10-techincal-architecture.md`, `12-dontdo.md` | Avoid Unless Explicitly Approved |
| Desktop-first design | Mobile is primary | `02-information_architecture.md`, `04-design-language.md`, `11-rules.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| Hiding critical actions on mobile | CTAs must remain accessible | `03-ui-ux-specification.md`, `12-dontdo.md` | Hard Blocker |
| Glassmorphism | Explicit design anti-pattern | `04-design-language.md`, `12-dontdo.md` | Hard Blocker |
| Neon colors | Explicit design anti-pattern | `04-design-language.md`, `12-dontdo.md` | Hard Blocker |
| Dark cyberpunk themes | Violates luxury showroom direction | `04-design-language.md`, `12-dontdo.md` | Hard Blocker |
| Excessive gradients | Explicit design anti-pattern | `04-design-language.md`, `12-dontdo.md` | Avoid Unless Explicitly Approved |
| Overcrowded layouts | Violates whitespace and premium design rules | `04-design-language.md`, `12-dontdo.md` | Hard Blocker |
| Template-style layouts | Violates premium custom feel | `04-design-language.md` | Avoid Unless Explicitly Approved |
| Aggressive popups | Violates premium UX | `04-design-language.md` | Hard Blocker |
| Heavy, disruptive, bouncy, or attention-seeking animation | Motion must be subtle and premium | `03-ui-ux-specification.md`, `04-design-language.md` | Avoid Unless Explicitly Approved |
| Auto-playing disruptive media | Explicit anti-pattern | `03-ui-ux-specification.md`, `04-design-language.md` | Hard Blocker |
| Prioritizing products over inspirations | Violates core philosophy | `11-rules.md`, `12-dontdo.md`, `13-master-context.md` | Hard Blocker |
| Cluttered navigation | Discovery should be clear and effortless | `04-design-language.md`, `12-dontdo.md` | Hard Blocker |
| Duplicate components | Components should be reusable, small, focused | `11-rules.md`, `12-dontdo.md` | Avoid Unless Explicitly Approved |
| Hardcoded content | Content should be dynamic where content models exist | `12-dontdo.md`, `14-project-bootstrap.md` | Avoid Unless Explicitly Approved |
| Page-specific components where reusable versions are appropriate | Component system should stay maintainable | `12-dontdo.md` | Style/Quality Warning |
| Tables outside documented domain models | Schema must follow database design | `08-database-design.md`, `12-dontdo.md` | Hard Blocker |
| Denormalizing data without justification | Database should remain maintainable | `08-database-design.md`, `12-dontdo.md` | Avoid Unless Explicitly Approved |
| Storing duplicate information | Violates database rules | `12-dontdo.md` | Avoid Unless Explicitly Approved |
| Undocumented endpoints | API must follow spec and docs | `09-api-specification.md`, `12-dontdo.md` | Hard Blocker |
| Inconsistent API response formats | API must use standard success/error structures | `09-api-specification.md`, `11-rules.md`, `12-dontdo.md` | Hard Blocker |
| Forms without validation | Lead quality and security require validation | `12-dontdo.md` | Hard Blocker |
| Trusting client-side validation alone | Server validation is required | `12-dontdo.md`, `10-techincal-architecture.md` | Hard Blocker |
| Serving original full-resolution images | Performance and mobile UX risk | `10-techincal-architecture.md`, `12-dontdo.md` | Hard Blocker |
| Unoptimized image tags | Must use Next Image and Cloudinary transformations | `10-techincal-architecture.md`, `12-dontdo.md` | Hard Blocker |
| Generic marketing copy | Copy should be meaningful, premium, and human | `04-design-language.md`, `12-dontdo.md` | Style/Quality Warning |
| Exaggerated claims | Violates trust signals | `04-design-language.md`, `12-dontdo.md` | Hard Blocker |
| Fake urgency tactics | Violates premium trust | `04-design-language.md`, `12-dontdo.md` | Hard Blocker |

## Source Trace

Derived from `03-ui-ux-specification.md`, `04-design-language.md`, `10-techincal-architecture.md`, `11-rules.md`, `12-dontdo.md`, `13-master-context.md`, `14-project-bootstrap.md`, `16-doc-review.md`, and user instruction on 2026-06-10.
