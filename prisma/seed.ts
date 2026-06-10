/**
 * Sumanglam V1 seed.
 *
 * Taxonomy (spaces, collections, brands, product types, categories, showroom
 * sections) comes verbatim from project-vault/09_Content_Taxonomy.
 *
 * Inspirations and products are DEMO CONTENT: design concepts and sample
 * catalog entries derived from the documented taxonomy so every page renders.
 * They carry placeholder imagery and must be replaced with real curated
 * content before launch. No business claims are invented.
 *
 * Idempotent: re-running upserts by slug.
 */
import { PrismaClient, BrandType, AvailabilityStatus } from "@prisma/client";

const db = new PrismaClient();

const img = (name: string) => `/images/placeholders/${name}.svg`;

async function seedSpaces() {
  const spaces = [
    {
      slug: "kitchen",
      title: "Kitchen",
      description:
        "Modular kitchens, kitchen inspirations, appliances, kitchen hardware, and storage solutions.",
      heroImage: img("kitchen-1"),
    },
    {
      slug: "wardrobe",
      title: "Wardrobe",
      description: "Wardrobe and storage systems, designed and built by Mrida.",
      heroImage: img("wardrobe-1"),
    },
    {
      slug: "hardware",
      title: "Hardware",
      description: "Premium hardware and fittings from trusted international and Indian brands.",
      heroImage: img("hardware-1"),
    },
    {
      slug: "appliances",
      title: "Appliances",
      description: "Premium kitchen appliances engineered for modern homes.",
      heroImage: img("appliance-1"),
    },
  ];
  for (const space of spaces) {
    await db.space.upsert({
      where: { slug: space.slug },
      update: space,
      create: space,
    });
  }
  console.log(`Seeded ${spaces.length} spaces`);
}

async function seedBrands() {
  type BrandSeed = {
    slug: string;
    name: string;
    brandType: BrandType;
    description: string;
    story?: string;
    heroImage?: string;
    isFeatured?: boolean;
    parentSlug?: string;
  };

  const brands: BrandSeed[] = [
    {
      slug: "nolte",
      name: "Nolte",
      brandType: BrandType.SOLUTION,
      description:
        "Premium German kitchen solutions — design systems built around precision, quality, and luxury living spaces.",
      story:
        "Nolte brings German kitchen design systems to homes that value precision and longevity. Every Nolte kitchen is a complete solution: planned, engineered, and finished as one coherent space.",
      heroImage: img("kitchen-1"),
      isFeatured: true,
    },
    {
      slug: "mrida",
      name: "Mrida",
      brandType: BrandType.SOLUTION,
      description:
        "Sumanglam's in-house solution brand for modular kitchens, premium wardrobes, and customized interior solutions for Indian homes.",
      story:
        "Mrida is built on a simple idea: Indian homes deserve interiors designed around how their families actually live. From modular kitchens to walk-in wardrobes, every Mrida project is personalized — measured, designed, and crafted for your space.",
      heroImage: img("wardrobe-1"),
      isFeatured: true,
    },
    {
      slug: "bosch",
      name: "Bosch",
      brandType: BrandType.PRODUCT,
      description:
        "German-engineered kitchen appliances — ovens, hobs, dishwashers, and built-in solutions.",
      heroImage: img("appliance-1"),
      isFeatured: true,
    },
    {
      slug: "siemens",
      name: "Siemens",
      brandType: BrandType.PRODUCT,
      description:
        "Premium built-in appliances combining German engineering with refined, modern design.",
      heroImage: img("appliance-2"),
      isFeatured: true,
    },
    {
      slug: "liebherr",
      name: "Liebherr",
      brandType: BrandType.PRODUCT,
      description:
        "Specialist refrigeration and wine storage, engineered for precision cooling.",
      heroImage: img("appliance-1"),
    },
    {
      slug: "hafele",
      name: "Häfele",
      brandType: BrandType.PRODUCT,
      description:
        "Furniture fittings, architectural hardware, and appliances — one of the widest hardware ecosystems in the world.",
      heroImage: img("hardware-1"),
      isFeatured: true,
    },
    {
      slug: "hettich",
      name: "Hettich",
      brandType: BrandType.PRODUCT,
      description:
        "German furniture fittings — hinges, drawer systems, and sliding solutions trusted by kitchen makers worldwide.",
      heroImage: img("hardware-2"),
      isFeatured: true,
    },
    {
      slug: "blaupunkt",
      name: "Blaupunkt",
      brandType: BrandType.PRODUCT,
      description:
        "Built-in kitchen appliances with German design heritage, part of the Hettich family.",
      heroImage: img("appliance-2"),
      parentSlug: "hettich",
    },
    {
      slug: "blum",
      name: "Blum",
      brandType: BrandType.PRODUCT,
      description:
        "Austrian precision in hinges, lift systems, and drawer runners for furniture that moves beautifully.",
      heroImage: img("hardware-3"),
    },
    {
      slug: "godrej",
      name: "Godrej",
      brandType: BrandType.PRODUCT,
      description:
        "Locks, digital security, and safes from one of India's most trusted names.",
      heroImage: img("hardware-1"),
    },
    {
      slug: "dorset",
      name: "Dorset",
      brandType: BrandType.PRODUCT,
      description:
        "Architectural hardware, handles, and door controls with contemporary design language.",
      heroImage: img("hardware-2"),
    },
    {
      slug: "yale",
      name: "Yale",
      brandType: BrandType.PRODUCT,
      description:
        "Global expertise in locks, digital locks, and home security since 1840.",
      heroImage: img("hardware-3"),
    },
    {
      slug: "spitze",
      name: "Spitze",
      brandType: BrandType.PRODUCT,
      description: "Kitchen accessories and storage systems for organized modern kitchens.",
      heroImage: img("hardware-1"),
    },
    {
      slug: "brass-barony",
      name: "Brass Barony",
      brandType: BrandType.PRODUCT,
      description:
        "Handcrafted brass accessories and hardware with an artisanal character.",
      heroImage: img("hardware-3"),
    },
    {
      slug: "everyday",
      name: "Everyday",
      brandType: BrandType.PRODUCT,
      description: "Practical wire baskets and kitchen storage essentials.",
      heroImage: img("hardware-2"),
    },
  ];

  for (const brand of brands) {
    const data = { ...brand };
    delete data.parentSlug;
    await db.brand.upsert({
      where: { slug: brand.slug },
      update: { ...data, logo: img("brand") },
      create: { ...data, logo: img("brand") },
    });
  }
  // Parent relationships (Hettich -> Blaupunkt) after all brands exist.
  const hettich = await db.brand.findUnique({ where: { slug: "hettich" } });
  if (hettich) {
    await db.brand.update({
      where: { slug: "blaupunkt" },
      data: { parentBrandId: hettich.id },
    });
  }
  console.log(`Seeded ${brands.length} brands (Blaupunkt -> Hettich parent set)`);
}

async function seedProductTaxonomy() {
  const hardware = await db.productType.upsert({
    where: { slug: "hardware" },
    update: { name: "Hardware" },
    create: { name: "Hardware", slug: "hardware" },
  });
  const appliance = await db.productType.upsert({
    where: { slug: "appliance" },
    update: { name: "Appliance" },
    create: { name: "Appliance", slug: "appliance" },
  });

  const hardwareCategories = [
    "Furniture Fittings",
    "Handles",
    "Hinges",
    "Locks & Security",
    "Digital Locks",
    "Safes",
    "Door Controls",
    "Architectural Hardware",
    "Sliding Systems",
    "Kitchen Accessories",
    "Wire Baskets",
    "Brass Accessories",
  ];
  const applianceCategories = [
    "Ovens",
    "Hobs",
    "Microwaves",
    "Dishwashers",
    "Refrigeration",
    "Built-In Appliances",
    "Coffee Machines",
    "Wine Coolers",
  ];

  const slugify = (name: string) =>
    name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  for (const name of hardwareCategories) {
    await db.productCategory.upsert({
      where: { productTypeId_slug: { productTypeId: hardware.id, slug: slugify(name) } },
      update: { name },
      create: { name, slug: slugify(name), productTypeId: hardware.id },
    });
  }
  for (const name of applianceCategories) {
    await db.productCategory.upsert({
      where: { productTypeId_slug: { productTypeId: appliance.id, slug: slugify(name) } },
      update: { name },
      create: { name, slug: slugify(name), productTypeId: appliance.id },
    });
  }
  console.log(
    `Seeded 2 product types, ${hardwareCategories.length + applianceCategories.length} categories`,
  );
}

async function seedCollections() {
  const collections: Array<{
    slug: string;
    title: string;
    space: string;
    shortDescription: string;
    coverImage: string;
  }> = [
    // Kitchen collections
    { slug: "german-kitchens", title: "German Kitchens", space: "kitchen", shortDescription: "Precision-engineered kitchen systems in the German tradition.", coverImage: img("kitchen-1") },
    { slug: "modern-kitchens", title: "Modern Kitchens", space: "kitchen", shortDescription: "Clean lines, current materials, and effortless function.", coverImage: img("kitchen-2") },
    { slug: "luxury-kitchens", title: "Luxury Kitchens", space: "kitchen", shortDescription: "Statement kitchens where material and detail take center stage.", coverImage: img("kitchen-3") },
    { slug: "minimal-kitchens", title: "Minimal Kitchens", space: "kitchen", shortDescription: "Quiet, handle-less, beautifully restrained kitchen design.", coverImage: img("kitchen-4") },
    { slug: "warm-contemporary-kitchens", title: "Warm Contemporary Kitchens", space: "kitchen", shortDescription: "Contemporary kitchens softened with wood, warmth, and texture.", coverImage: img("kitchen-2") },
    { slug: "smart-storage-kitchens", title: "Smart Storage Kitchens", space: "kitchen", shortDescription: "Kitchens organized around intelligent, accessible storage.", coverImage: img("kitchen-4") },
    // Wardrobe collections
    { slug: "walk-in-wardrobes", title: "Walk-In Wardrobes", space: "wardrobe", shortDescription: "Dedicated dressing spaces designed around your wardrobe.", coverImage: img("wardrobe-1") },
    { slug: "minimal-wardrobes", title: "Minimal Wardrobes", space: "wardrobe", shortDescription: "Calm, concealed wardrobe design that disappears into the room.", coverImage: img("wardrobe-2") },
    { slug: "luxury-wardrobes", title: "Luxury Wardrobes", space: "wardrobe", shortDescription: "Wardrobes finished like furniture — refined inside and out.", coverImage: img("wardrobe-3") },
    { slug: "storage-solutions", title: "Storage Solutions", space: "wardrobe", shortDescription: "Customized storage for every corner of the home.", coverImage: img("wardrobe-2") },
    // Hardware collections
    { slug: "modern-hardware", title: "Modern Hardware", space: "hardware", shortDescription: "Contemporary fittings that elevate everyday touchpoints.", coverImage: img("hardware-1") },
    { slug: "premium-hardware", title: "Premium Hardware", space: "hardware", shortDescription: "Hardware chosen for feel, finish, and longevity.", coverImage: img("hardware-2") },
    { slug: "architectural-hardware", title: "Architectural Hardware", space: "hardware", shortDescription: "Door and building hardware with architectural intent.", coverImage: img("hardware-3") },
    { slug: "smart-security", title: "Smart Security", space: "hardware", shortDescription: "Digital locks and security designed for modern living.", coverImage: img("hardware-1") },
    // Appliance collections
    { slug: "smart-kitchens", title: "Smart Kitchens", space: "appliances", shortDescription: "Connected, intelligent appliances for the modern kitchen.", coverImage: img("appliance-1") },
    { slug: "built-in-appliances", title: "Built-In Appliances", space: "appliances", shortDescription: "Seamlessly integrated cooking, cooling, and cleaning.", coverImage: img("appliance-2") },
    { slug: "premium-appliances", title: "Premium Appliances", space: "appliances", shortDescription: "Appliances at the intersection of performance and design.", coverImage: img("appliance-1") },
    { slug: "german-engineering", title: "German Engineering", space: "appliances", shortDescription: "Appliance brands defined by German engineering standards.", coverImage: img("appliance-2") },
  ];

  for (const collection of collections) {
    const space = await db.space.findUnique({ where: { slug: collection.space } });
    const data = {
      title: collection.title,
      shortDescription: collection.shortDescription,
      coverImage: collection.coverImage,
      spaceId: space?.id ?? null,
    };
    await db.collection.upsert({
      where: { slug: collection.slug },
      update: data,
      create: { slug: collection.slug, ...data },
    });
  }
  console.log(`Seeded ${collections.length} collections`);
}

async function seedShowroomSections() {
  const sections = [
    {
      name: "Reception",
      floorNumber: 0,
      description:
        "Your visit begins here — a calm welcome, a conversation about your project, and a guided route through the showroom.",
      images: [img("showroom-1")],
      brands: [] as string[],
    },
    {
      name: "Hardware Floor",
      floorNumber: 1,
      description:
        "Touch and compare premium hardware in person — hinges, drawer systems, handles, locks, and architectural fittings from the brands we trust.",
      images: [img("showroom-2")],
      brands: ["hafele", "hettich", "blum", "godrej", "dorset", "yale", "spitze", "brass-barony", "everyday"],
    },
    {
      name: "Mrida Floor",
      floorNumber: 2,
      description:
        "Full-scale Mrida kitchens and wardrobes — see materials, finishes, and storage ideas exactly as they would live in your home.",
      images: [img("showroom-3")],
      brands: ["mrida"],
    },
    {
      name: "Nolte Floor",
      floorNumber: 3,
      description:
        "The Nolte experience — complete German kitchen displays showing what precision design feels like in person.",
      images: [img("showroom-4")],
      brands: ["nolte"],
    },
  ];

  for (const section of sections) {
    const existing = await db.showroomSection.findFirst({ where: { name: section.name } });
    const data = {
      name: section.name,
      floorNumber: section.floorNumber,
      description: section.description,
      images: section.images,
    };
    const record = existing
      ? await db.showroomSection.update({ where: { id: existing.id }, data })
      : await db.showroomSection.create({ data });

    for (const brandSlug of section.brands) {
      const brand = await db.brand.findUnique({ where: { slug: brandSlug } });
      if (!brand) continue;
      await db.showroomBrandMapping.upsert({
        where: {
          showroomSectionId_brandId: { showroomSectionId: record.id, brandId: brand.id },
        },
        update: {},
        create: { showroomSectionId: record.id, brandId: brand.id },
      });
    }
  }
  console.log(`Seeded ${sections.length} showroom sections`);
}

async function seedInspirations() {
  // DEMO design concepts derived from documented collections. Replace imagery
  // and copy with real curated projects before launch.
  const inspirations: Array<{
    slug: string;
    title: string;
    space: string;
    collections: string[];
    brands: string[];
    shortDescription: string;
    longDescription: string;
    primaryImage: string;
    galleryImages: string[];
    isFeatured?: boolean;
    showroomSection?: string;
  }> = [
    {
      slug: "light-oak-minimal-kitchen",
      title: "Light Oak Minimal Kitchen",
      space: "kitchen",
      collections: ["minimal-kitchens", "modern-kitchens"],
      brands: ["nolte", "hettich"],
      shortDescription: "A handle-less kitchen in light oak and warm white, designed to disappear into the living space.",
      longDescription:
        "This concept pairs flat, handle-less fronts with light oak grain and a warm white worktop. Tall units conceal appliances and pantry storage, keeping every surface calm. Soft-close hinges and full-extension drawers make the minimalism practical, not precious.",
      primaryImage: img("kitchen-4"),
      galleryImages: [img("kitchen-4"), img("kitchen-2"), img("hardware-2")],
      isFeatured: true,
      showroomSection: "Nolte Floor",
    },
    {
      slug: "graphite-german-kitchen",
      title: "Graphite German Kitchen",
      space: "kitchen",
      collections: ["german-kitchens", "luxury-kitchens"],
      brands: ["nolte", "blum"],
      shortDescription: "Deep graphite cabinetry with precision-engineered storage, in the German tradition.",
      longDescription:
        "A kitchen built like an instrument: graphite matt fronts, a continuous island, and interior organization planned to the centimeter. Lift systems open overhead units with one touch, and the island integrates seating without breaking the line.",
      primaryImage: img("kitchen-1"),
      galleryImages: [img("kitchen-1"), img("kitchen-3"), img("appliance-1")],
      isFeatured: true,
      showroomSection: "Nolte Floor",
    },
    {
      slug: "warm-walnut-family-kitchen",
      title: "Warm Walnut Family Kitchen",
      space: "kitchen",
      collections: ["warm-contemporary-kitchens", "modern-kitchens"],
      brands: ["mrida", "hafele"],
      shortDescription: "A Mrida kitchen in walnut and stone tones, designed around a busy family's everyday rhythm.",
      longDescription:
        "Designed for a family that cooks together: a generous prep run, a breakfast counter at the window, and storage zoned by routine — daily dishes within reach, festival cookware above. Walnut tones keep it warm; stone-look surfaces keep it easy.",
      primaryImage: img("kitchen-2"),
      galleryImages: [img("kitchen-2"), img("kitchen-4"), img("hardware-1")],
      isFeatured: true,
      showroomSection: "Mrida Floor",
    },
    {
      slug: "smart-storage-galley-kitchen",
      title: "Smart Storage Galley Kitchen",
      space: "kitchen",
      collections: ["smart-storage-kitchens"],
      brands: ["mrida", "hettich", "everyday"],
      shortDescription: "A compact galley kitchen where every centimeter works — corner units, tall pull-outs, and wire systems.",
      longDescription:
        "Proof that smaller kitchens can work harder: magic-corner units reach dead space, a tall larder pull-out holds a week of groceries, and wire baskets keep vegetables ventilated. The layout keeps the cooking triangle tight and the walkway clear.",
      primaryImage: img("kitchen-3"),
      galleryImages: [img("kitchen-3"), img("hardware-2")],
      showroomSection: "Mrida Floor",
    },
    {
      slug: "walk-in-wardrobe-suite",
      title: "Walk-In Wardrobe Suite",
      space: "wardrobe",
      collections: ["walk-in-wardrobes", "luxury-wardrobes"],
      brands: ["mrida", "hafele"],
      shortDescription: "A Mrida walk-in wardrobe with open hanging, glass-front drawers, and a central island.",
      longDescription:
        "A dressing room planned like a boutique: open hanging zones by length, glass-front drawers for accessories, and a central island for folding and display. Warm internal lighting switches on as you enter.",
      primaryImage: img("wardrobe-1"),
      galleryImages: [img("wardrobe-1"), img("wardrobe-3")],
      isFeatured: true,
      showroomSection: "Mrida Floor",
    },
    {
      slug: "minimal-sliding-wardrobe",
      title: "Minimal Sliding Wardrobe",
      space: "wardrobe",
      collections: ["minimal-wardrobes"],
      brands: ["mrida", "hettich"],
      shortDescription: "Floor-to-ceiling sliding doors in a soft matt finish — a wardrobe that reads as a wall.",
      longDescription:
        "Designed to disappear: full-height sliding panels in a soft matt lacquer, no visible handles, and an interior organized into hanging, shelving, and deep drawers. The sliding system glides on dampened tracks.",
      primaryImage: img("wardrobe-2"),
      galleryImages: [img("wardrobe-2"), img("hardware-3")],
      showroomSection: "Mrida Floor",
    },
    {
      slug: "his-and-hers-storage-wall",
      title: "His & Hers Storage Wall",
      space: "wardrobe",
      collections: ["storage-solutions", "luxury-wardrobes"],
      brands: ["mrida"],
      shortDescription: "A full bedroom wall converted into mirrored his-and-hers wardrobes with a dresser between.",
      longDescription:
        "Two personal wardrobes share one architectural language: mirrored fronts widen the room, while a recessed dresser nook bridges the pair. Inside, each side is planned around its owner's wardrobe, not a generic template.",
      primaryImage: img("wardrobe-3"),
      galleryImages: [img("wardrobe-3"), img("wardrobe-1")],
      showroomSection: "Mrida Floor",
    },
    {
      slug: "brass-detail-entryway",
      title: "Brass Detail Entryway",
      space: "hardware",
      collections: ["premium-hardware", "architectural-hardware"],
      brands: ["brass-barony", "dorset"],
      shortDescription: "An entry sequence elevated by handcrafted brass — handles, hooks, and trims that age beautifully.",
      longDescription:
        "Hardware as jewelry: a solid brass entrance pull, coat hooks with hand-finished patina, and door trims that catch warm light. Small details, chosen once, enjoyed daily.",
      primaryImage: img("hardware-3"),
      galleryImages: [img("hardware-3"), img("hardware-1")],
      isFeatured: true,
      showroomSection: "Hardware Floor",
    },
    {
      slug: "smart-secure-entrance",
      title: "Smart, Secure Entrance",
      space: "hardware",
      collections: ["smart-security", "modern-hardware"],
      brands: ["yale", "godrej"],
      shortDescription: "A modern main door with digital lock, video access, and a clean architectural handle.",
      longDescription:
        "Security that doesn't look like a fortress: a flush digital lock with fingerprint and PIN entry, a discreet door closer, and a full-height handle in brushed steel. Family members get keyless entry; the design stays quiet.",
      primaryImage: img("hardware-1"),
      galleryImages: [img("hardware-1"), img("hardware-2")],
      showroomSection: "Hardware Floor",
    },
    {
      slug: "built-in-appliance-wall",
      title: "Built-In Appliance Wall",
      space: "appliances",
      collections: ["built-in-appliances", "german-engineering"],
      brands: ["bosch", "siemens", "liebherr"],
      shortDescription: "Oven, coffee machine, and refrigeration aligned in one seamless tall-unit wall.",
      longDescription:
        "A cooking wall planned as one composition: oven and compact oven stacked at eye level, a plumbed coffee machine beside them, and integrated refrigeration completing the run. Handle-less fronts keep the line unbroken.",
      primaryImage: img("appliance-1"),
      galleryImages: [img("appliance-1"), img("appliance-2")],
      isFeatured: true,
      showroomSection: "Hardware Floor",
    },
  ];

  for (const item of inspirations) {
    const space = await db.space.findUnique({ where: { slug: item.space } });
    if (!space) continue;
    const data = {
      title: item.title,
      shortDescription: item.shortDescription,
      longDescription: item.longDescription,
      primaryImage: item.primaryImage,
      galleryImages: item.galleryImages,
      spaceId: space.id,
      isFeatured: item.isFeatured ?? false,
    };
    const inspiration = await db.inspiration.upsert({
      where: { slug: item.slug },
      update: data,
      create: { slug: item.slug, ...data },
    });

    for (const collectionSlug of item.collections) {
      const collection = await db.collection.findUnique({ where: { slug: collectionSlug } });
      if (!collection) continue;
      await db.collectionInspiration.upsert({
        where: {
          collectionId_inspirationId: {
            collectionId: collection.id,
            inspirationId: inspiration.id,
          },
        },
        update: {},
        create: { collectionId: collection.id, inspirationId: inspiration.id },
      });
    }
    for (const brandSlug of item.brands) {
      const brand = await db.brand.findUnique({ where: { slug: brandSlug } });
      if (!brand) continue;
      await db.inspirationBrand.upsert({
        where: {
          inspirationId_brandId: { inspirationId: inspiration.id, brandId: brand.id },
        },
        update: {},
        create: { inspirationId: inspiration.id, brandId: brand.id },
      });
    }
    if (item.showroomSection) {
      const section = await db.showroomSection.findFirst({
        where: { name: item.showroomSection },
      });
      if (section) {
        await db.showroomInspirationMapping.upsert({
          where: {
            showroomSectionId_inspirationId: {
              showroomSectionId: section.id,
              inspirationId: inspiration.id,
            },
          },
          update: {},
          create: { showroomSectionId: section.id, inspirationId: inspiration.id },
        });
      }
    }
  }
  console.log(`Seeded ${inspirations.length} inspirations (demo content)`);
}

async function seedProducts() {
  // DEMO catalog entries consistent with the documented brand/category matrix
  // (project-vault/09_Content_Taxonomy). SKUs, prices, and specs are samples.
  const products: Array<{
    slug: string;
    name: string;
    sku: string;
    brand: string;
    type: "hardware" | "appliance";
    categories: string[];
    shortDescription: string;
    priceRange: string;
    image: string;
    isFeatured?: boolean;
    availability?: AvailabilityStatus;
    specs?: Record<string, string>;
    inspirations?: string[];
  }> = [
    {
      slug: "hettich-sensys-soft-close-hinge",
      name: "Sensys Soft-Close Hinge",
      sku: "DEMO-HET-001",
      brand: "hettich",
      type: "hardware",
      categories: ["hinges", "furniture-fittings"],
      shortDescription: "Integrated soft-close hinge with a wide opening angle for kitchen and wardrobe doors.",
      priceRange: "₹350 – ₹650 per piece",
      image: img("hardware-2"),
      isFeatured: true,
      specs: { "Opening angle": "110°", "Soft close": "Integrated", Material: "Steel, nickel-plated" },
      inspirations: ["light-oak-minimal-kitchen", "minimal-sliding-wardrobe"],
    },
    {
      slug: "blum-aventos-hf-lift-system",
      name: "AVENTOS HF Lift System",
      sku: "DEMO-BLU-001",
      brand: "blum",
      type: "hardware",
      categories: ["hinges", "furniture-fittings"],
      shortDescription: "Bi-fold lift system for overhead kitchen units — opens with one touch, stays where you stop it.",
      priceRange: "₹6,500 – ₹12,000 per set",
      image: img("hardware-3"),
      isFeatured: true,
      specs: { Type: "Bi-fold lift", "Cabinet height": "480–1040 mm", "Soft close": "BLUMOTION" },
      inspirations: ["graphite-german-kitchen"],
    },
    {
      slug: "hafele-slido-sliding-system",
      name: "Slido Sliding Door System",
      sku: "DEMO-HAF-001",
      brand: "hafele",
      type: "hardware",
      categories: ["sliding-systems", "architectural-hardware"],
      shortDescription: "Dampened sliding track system for wardrobe and partition doors up to 80 kg.",
      priceRange: "₹8,000 – ₹18,000 per door set",
      image: img("hardware-1"),
      specs: { "Door weight": "Up to 80 kg", Damping: "Both directions", Track: "Aluminium" },
      inspirations: ["minimal-sliding-wardrobe"],
    },
    {
      slug: "dorset-lina-lever-handle",
      name: "Lina Lever Handle",
      sku: "DEMO-DOR-001",
      brand: "dorset",
      type: "hardware",
      categories: ["handles", "architectural-hardware"],
      shortDescription: "Minimal lever handle in satin and matt black finishes for interior doors.",
      priceRange: "₹1,200 – ₹2,800 per pair",
      image: img("hardware-2"),
      specs: { Finishes: "Satin steel, matt black", Base: "Concealed fix rose", Material: "Zinc alloy" },
      inspirations: ["smart-secure-entrance"],
    },
    {
      slug: "yale-smart-digital-lock",
      name: "Smart Digital Door Lock",
      sku: "DEMO-YAL-001",
      brand: "yale",
      type: "hardware",
      categories: ["digital-locks", "locks-and-security"],
      shortDescription: "Fingerprint, PIN, and key access in one flush digital lock for main doors.",
      priceRange: "₹18,000 – ₹35,000",
      image: img("hardware-1"),
      isFeatured: true,
      specs: { Access: "Fingerprint, PIN, mechanical key", Alarm: "Tamper + low battery", Body: "Mortise" },
      inspirations: ["smart-secure-entrance"],
    },
    {
      slug: "godrej-advantis-digital-lock",
      name: "Advantis Digital Lock",
      sku: "DEMO-GOD-001",
      brand: "godrej",
      type: "hardware",
      categories: ["digital-locks", "locks-and-security", "door-controls"],
      shortDescription: "Keyless entry with PIN and RFID, designed for Indian main-door conditions.",
      priceRange: "₹12,000 – ₹24,000",
      image: img("hardware-2"),
      specs: { Access: "PIN, RFID card, key", Battery: "AA x 4 with low-battery alert", Suitable: "Wooden main doors" },
    },
    {
      slug: "godrej-curvo-home-safe",
      name: "Curvo Home Safe",
      sku: "DEMO-GOD-002",
      brand: "godrej",
      type: "hardware",
      categories: ["safes", "locks-and-security"],
      shortDescription: "Compact electronic home safe for documents, jewelry, and valuables.",
      priceRange: "₹9,000 – ₹16,000",
      image: img("hardware-3"),
      specs: { Capacity: "8–15 L", Lock: "Motorized electronic + override key", Mounting: "Floor/wall anchors" },
    },
    {
      slug: "brass-barony-artisan-pull",
      name: "Artisan Brass Pull",
      sku: "DEMO-BRB-001",
      brand: "brass-barony",
      type: "hardware",
      categories: ["brass-accessories", "handles"],
      shortDescription: "Hand-finished solid brass cabinet pull that develops a living patina.",
      priceRange: "₹900 – ₹2,200 per piece",
      image: img("hardware-3"),
      specs: { Material: "Solid brass", Finish: "Hand-patinated", Lengths: "128 / 160 / 224 mm" },
      inspirations: ["brass-detail-entryway"],
    },
    {
      slug: "spitze-corner-carousel",
      name: "Corner Carousel Unit",
      sku: "DEMO-SPZ-001",
      brand: "spitze",
      type: "hardware",
      categories: ["kitchen-accessories", "furniture-fittings"],
      shortDescription: "Rotating corner storage that brings dead kitchen corners within reach.",
      priceRange: "₹7,500 – ₹14,000",
      image: img("hardware-1"),
      specs: { Type: "3/4 carousel", Shelves: "2, chrome wire", "Cabinet width": "900 mm corner" },
      inspirations: ["smart-storage-galley-kitchen"],
    },
    {
      slug: "everyday-wire-basket-set",
      name: "Ventilated Wire Basket Set",
      sku: "DEMO-EVD-001",
      brand: "everyday",
      type: "hardware",
      categories: ["wire-baskets", "kitchen-accessories"],
      shortDescription: "Stainless wire baskets for vegetables and pantry storage, sized for standard cabinets.",
      priceRange: "₹1,800 – ₹4,500 per set",
      image: img("hardware-2"),
      specs: { Material: "SS 304", Sizes: "450 / 600 / 900 mm cabinets", Mounting: "Soft-close runners" },
      inspirations: ["smart-storage-galley-kitchen"],
    },
    {
      slug: "bosch-series-8-built-in-oven",
      name: "Series 8 Built-In Oven",
      sku: "DEMO-BOS-001",
      brand: "bosch",
      type: "appliance",
      categories: ["ovens", "built-in-appliances"],
      shortDescription: "Flagship built-in oven with assisted cooking programs and pyrolytic self-cleaning.",
      priceRange: "₹95,000 – ₹1,60,000",
      image: img("appliance-1"),
      isFeatured: true,
      specs: { Capacity: "71 L", Cleaning: "Pyrolytic", Display: "TFT touch" },
      inspirations: ["built-in-appliance-wall"],
    },
    {
      slug: "bosch-series-6-dishwasher",
      name: "Series 6 Built-In Dishwasher",
      sku: "DEMO-BOS-002",
      brand: "bosch",
      type: "appliance",
      categories: ["dishwashers", "built-in-appliances"],
      shortDescription: "Fully integrated 13-place dishwasher tuned for Indian cookware.",
      priceRange: "₹75,000 – ₹1,10,000",
      image: img("appliance-2"),
      specs: { "Place settings": "13", Programs: "6 incl. intensive kadhai", Noise: "44 dB" },
    },
    {
      slug: "siemens-iq700-coffee-machine",
      name: "iQ700 Built-In Coffee Machine",
      sku: "DEMO-SIE-001",
      brand: "siemens",
      type: "appliance",
      categories: ["coffee-machines", "built-in-appliances"],
      shortDescription: "Plumbed-in bean-to-cup coffee center with one-touch milk specialities.",
      priceRange: "₹2,20,000 – ₹3,20,000",
      image: img("appliance-2"),
      isFeatured: true,
      specs: { Pressure: "19 bar", Milk: "Integrated frother", Connectivity: "Home Connect" },
      inspirations: ["built-in-appliance-wall"],
    },
    {
      slug: "siemens-iq500-induction-hob",
      name: "iQ500 Induction Hob",
      sku: "DEMO-SIE-002",
      brand: "siemens",
      type: "appliance",
      categories: ["hobs", "built-in-appliances"],
      shortDescription: "Frameless 4-zone induction hob with flexible cooking areas.",
      priceRange: "₹65,000 – ₹95,000",
      image: img("appliance-1"),
      specs: { Zones: "4 with flexInduction", Width: "60 cm", Control: "Touch slider" },
    },
    {
      slug: "liebherr-integrated-refrigerator",
      name: "Integrated Refrigerator-Freezer",
      sku: "DEMO-LIE-001",
      brand: "liebherr",
      type: "appliance",
      categories: ["refrigeration", "built-in-appliances"],
      shortDescription: "Fully integrated refrigeration with BioFresh zones that keep produce fresher, longer.",
      priceRange: "₹1,80,000 – ₹2,80,000",
      image: img("appliance-1"),
      specs: { Volume: "260 L net", Zones: "BioFresh + freezer", Install: "Fully integrated" },
      inspirations: ["built-in-appliance-wall"],
    },
    {
      slug: "liebherr-wine-cooler",
      name: "Vinidor Wine Cabinet",
      sku: "DEMO-LIE-002",
      brand: "liebherr",
      type: "appliance",
      categories: ["wine-coolers"],
      shortDescription: "Dual-zone wine cabinet with UV-protected glass door and vibration-free cooling.",
      priceRange: "₹1,50,000 – ₹2,40,000",
      image: img("appliance-2"),
      availability: AvailabilityStatus.LIMITED,
      specs: { Bottles: "Up to 80", Zones: "2 independent", Door: "UV-protected glass" },
    },
    {
      slug: "blaupunkt-built-in-microwave",
      name: "Built-In Microwave Oven",
      sku: "DEMO-BLA-001",
      brand: "blaupunkt",
      type: "appliance",
      categories: ["microwaves", "built-in-appliances"],
      shortDescription: "Compact built-in microwave with grill, matched to Blaupunkt oven aesthetics.",
      priceRange: "₹38,000 – ₹58,000",
      image: img("appliance-2"),
      specs: { Capacity: "25 L", Grill: "1000 W quartz", Finish: "Black glass" },
    },
    {
      slug: "hafele-built-in-hob",
      name: "Built-In Gas Hob",
      sku: "DEMO-HAF-002",
      brand: "hafele",
      type: "appliance",
      categories: ["hobs", "built-in-appliances"],
      shortDescription: "Four-burner glass-top gas hob with cast-iron supports and auto-ignition.",
      priceRange: "₹28,000 – ₹45,000",
      image: img("appliance-1"),
      specs: { Burners: "4 brass", Top: "8 mm tempered glass", Ignition: "Auto" },
    },
  ];

  for (const item of products) {
    const brand = await db.brand.findUnique({ where: { slug: item.brand } });
    const productType = await db.productType.findUnique({ where: { slug: item.type } });
    if (!brand || !productType) continue;

    const data = {
      name: item.name,
      sku: item.sku,
      brandId: brand.id,
      productTypeId: productType.id,
      shortDescription: item.shortDescription,
      longDescription: item.shortDescription,
      priceRange: item.priceRange,
      primaryImage: item.image,
      galleryImages: [item.image],
      availabilityStatus: item.availability ?? AvailabilityStatus.AVAILABLE,
      technicalSpecs: item.specs ?? {},
      isFeatured: item.isFeatured ?? false,
    };
    const product = await db.product.upsert({
      where: { slug: item.slug },
      update: data,
      create: { slug: item.slug, ...data },
    });

    for (const categorySlug of item.categories) {
      const category = await db.productCategory.findFirst({
        where: { slug: categorySlug, productTypeId: productType.id },
      });
      if (!category) continue;
      await db.productCategoryMapping.upsert({
        where: { productId_categoryId: { productId: product.id, categoryId: category.id } },
        update: {},
        create: { productId: product.id, categoryId: category.id },
      });
    }
    for (const inspirationSlug of item.inspirations ?? []) {
      const inspiration = await db.inspiration.findUnique({ where: { slug: inspirationSlug } });
      if (!inspiration) continue;
      await db.inspirationProduct.upsert({
        where: {
          inspirationId_productId: { inspirationId: inspiration.id, productId: product.id },
        },
        update: {},
        create: { inspirationId: inspiration.id, productId: product.id },
      });
    }
  }
  console.log(`Seeded ${products.length} products (demo content)`);
}

async function main() {
  await seedSpaces();
  await seedBrands();
  await seedProductTaxonomy();
  await seedCollections();
  await seedShowroomSections();
  await seedInspirations();
  await seedProducts();
}

main()
  .then(async () => {
    await db.$disconnect();
    console.log("Seed complete.");
  })
  .catch(async (error) => {
    console.error(error);
    await db.$disconnect();
    process.exit(1);
  });
