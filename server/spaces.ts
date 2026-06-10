import { db } from "@/lib/db";
import { ContentStatus } from "@prisma/client";

export async function getSpaces() {
  return db.space.findMany({ orderBy: { title: "asc" } });
}

export async function getSpaceBySlug(slug: string) {
  const space = await db.space.findUnique({ where: { slug } });
  if (!space) return null;

  const [collections, featuredInspirations] = await Promise.all([
    db.collection.findMany({
      where: { spaceId: space.id, status: ContentStatus.PUBLISHED },
      orderBy: { title: "asc" },
    }),
    db.inspiration.findMany({
      where: { spaceId: space.id, status: ContentStatus.PUBLISHED },
      orderBy: [{ isFeatured: "desc" }, { updatedAt: "desc" }],
      take: 12,
    }),
  ]);

  return { space, collections, featuredInspirations };
}
