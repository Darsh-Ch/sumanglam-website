import { db } from "@/lib/db";
import { ContentStatus } from "@prisma/client";

/** Data for GET /api/v1/homepage and the homepage itself. */
export async function getHomepageData() {
  const [featuredInspirations, featuredBrands, featuredProducts, showroomHighlights] =
    await Promise.all([
      db.inspiration.findMany({
        where: { isFeatured: true, status: ContentStatus.PUBLISHED },
        include: { space: true },
        orderBy: { updatedAt: "desc" },
        take: 6,
      }),
      db.brand.findMany({
        where: { isFeatured: true, status: ContentStatus.PUBLISHED },
        orderBy: [{ brandType: "asc" }, { name: "asc" }],
        take: 8,
      }),
      db.product.findMany({
        where: { isFeatured: true, status: ContentStatus.PUBLISHED },
        include: { brand: true },
        orderBy: { updatedAt: "desc" },
        take: 8,
      }),
      db.showroomSection.findMany({
        orderBy: { floorNumber: "asc" },
      }),
    ]);

  return { featuredInspirations, featuredBrands, featuredProducts, showroomHighlights };
}
