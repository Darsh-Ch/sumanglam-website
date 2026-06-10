import { db } from "@/lib/db";
import { ContentStatus, Prisma } from "@prisma/client";

export type InspirationListParams = {
  page?: number;
  limit?: number;
  space?: string;
  collection?: string;
};

export async function listInspirations(params: InspirationListParams = {}) {
  const page = Math.max(1, params.page ?? 1);
  const limit = Math.min(48, Math.max(1, params.limit ?? 12));

  const where: Prisma.InspirationWhereInput = {
    status: ContentStatus.PUBLISHED,
    ...(params.space ? { space: { slug: params.space } } : {}),
    ...(params.collection
      ? { collections: { some: { collection: { slug: params.collection } } } }
      : {}),
  };

  const [items, total] = await Promise.all([
    db.inspiration.findMany({
      where,
      include: { space: true },
      orderBy: [{ isFeatured: "desc" }, { updatedAt: "desc" }],
      skip: (page - 1) * limit,
      take: limit,
    }),
    db.inspiration.count({ where }),
  ]);

  return {
    items,
    pagination: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
  };
}

export async function getInspirationBySlug(slug: string) {
  const inspiration = await db.inspiration.findUnique({
    where: { slug },
    include: {
      space: true,
      collections: { include: { collection: true } },
      products: { include: { product: { include: { brand: true } } } },
      brands: { include: { brand: true } },
    },
  });
  if (!inspiration || inspiration.status !== ContentStatus.PUBLISHED) return null;

  const relatedInspirations = await db.inspiration.findMany({
    where: {
      id: { not: inspiration.id },
      spaceId: inspiration.spaceId,
      status: ContentStatus.PUBLISHED,
    },
    include: { space: true },
    orderBy: [{ isFeatured: "desc" }, { updatedAt: "desc" }],
    take: 3,
  });

  return {
    inspiration,
    collections: inspiration.collections.map((entry) => entry.collection),
    products: inspiration.products.map((entry) => entry.product),
    brands: inspiration.brands.map((entry) => entry.brand),
    relatedInspirations,
  };
}
