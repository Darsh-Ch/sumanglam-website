import { db } from "@/lib/db";
import { BrandType, ContentStatus } from "@prisma/client";

export async function getBrands() {
  const brands = await db.brand.findMany({
    where: { status: ContentStatus.PUBLISHED },
    include: { parentBrand: true },
    orderBy: { name: "asc" },
  });
  return {
    solutionBrands: brands.filter((brand) => brand.brandType === BrandType.SOLUTION),
    productBrands: brands.filter((brand) => brand.brandType === BrandType.PRODUCT),
  };
}

export async function getBrandBySlug(slug: string) {
  const brand = await db.brand.findUnique({
    where: { slug },
    include: {
      parentBrand: true,
      childBrands: { where: { status: ContentStatus.PUBLISHED } },
    },
  });
  if (!brand || brand.status !== ContentStatus.PUBLISHED) return null;

  const [inspirationLinks, products] = await Promise.all([
    db.inspirationBrand.findMany({
      where: { brandId: brand.id, inspiration: { status: ContentStatus.PUBLISHED } },
      include: { inspiration: { include: { space: true } } },
    }),
    db.product.findMany({
      where: { brandId: brand.id, status: ContentStatus.PUBLISHED },
      include: { brand: true },
      orderBy: [{ isFeatured: "desc" }, { name: "asc" }],
      take: 12,
    }),
  ]);

  return {
    brand,
    inspirations: inspirationLinks.map((link) => link.inspiration),
    products,
  };
}
