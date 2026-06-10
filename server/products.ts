import { db } from "@/lib/db";
import { ContentStatus, Prisma } from "@prisma/client";

export type ProductListParams = {
  page?: number;
  limit?: number;
  brand?: string;
  type?: string;
  category?: string;
  subcategory?: string;
};

/** Basic filters only (brand/type/category/subcategory) — advanced filtering
 * is excluded from V1 (project-vault/16_Conflicts.md, Conflict 5). */
export async function listProducts(params: ProductListParams = {}) {
  const page = Math.max(1, params.page ?? 1);
  const limit = Math.min(48, Math.max(1, params.limit ?? 12));

  const where: Prisma.ProductWhereInput = {
    status: ContentStatus.PUBLISHED,
    ...(params.brand ? { brand: { slug: params.brand } } : {}),
    ...(params.type ? { productType: { slug: params.type } } : {}),
    ...(params.category
      ? { categories: { some: { category: { slug: params.category } } } }
      : {}),
    ...(params.subcategory ? { subcategory: { slug: params.subcategory } } : {}),
  };

  const [items, total] = await Promise.all([
    db.product.findMany({
      where,
      include: { brand: true, productType: true },
      orderBy: [{ isFeatured: "desc" }, { name: "asc" }],
      skip: (page - 1) * limit,
      take: limit,
    }),
    db.product.count({ where }),
  ]);

  return {
    items,
    pagination: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
  };
}

export async function getProductBySlug(slug: string) {
  const product = await db.product.findUnique({
    where: { slug },
    include: {
      brand: true,
      productType: true,
      subcategory: true,
      categories: { include: { category: true } },
      inspirations: { include: { inspiration: { include: { space: true } } } },
    },
  });
  if (!product || product.status !== ContentStatus.PUBLISHED) return null;

  const categoryIds = product.categories.map((entry) => entry.categoryId);
  const relatedProducts = await db.product.findMany({
    where: {
      id: { not: product.id },
      status: ContentStatus.PUBLISHED,
      OR: [
        { brandId: product.brandId },
        ...(categoryIds.length
          ? [{ categories: { some: { categoryId: { in: categoryIds } } } }]
          : []),
      ],
    },
    include: { brand: true },
    orderBy: [{ isFeatured: "desc" }, { name: "asc" }],
    take: 4,
  });

  return {
    product,
    brand: product.brand,
    categories: product.categories.map((entry) => entry.category),
    inspirations: product.inspirations.map((entry) => entry.inspiration),
    relatedProducts,
  };
}

export async function getProductTaxonomy() {
  return db.productType.findMany({
    include: {
      categories: {
        include: { subcategories: true, _count: { select: { products: true } } },
        orderBy: { name: "asc" },
      },
    },
    orderBy: { name: "asc" },
  });
}
