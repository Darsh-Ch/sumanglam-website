import { db } from "@/lib/db";
import { ContentStatus } from "@prisma/client";

export async function getCollections() {
  return db.collection.findMany({
    where: { status: ContentStatus.PUBLISHED },
    include: { space: true },
    orderBy: { title: "asc" },
  });
}

export async function getCollectionBySlug(slug: string) {
  const collection = await db.collection.findUnique({
    where: { slug },
    include: { space: true },
  });
  if (!collection || collection.status !== ContentStatus.PUBLISHED) return null;

  const [memberships, relatedCollections] = await Promise.all([
    db.collectionInspiration.findMany({
      where: {
        collectionId: collection.id,
        inspiration: { status: ContentStatus.PUBLISHED },
      },
      include: { inspiration: { include: { space: true } } },
    }),
    db.collection.findMany({
      where: {
        id: { not: collection.id },
        spaceId: collection.spaceId,
        status: ContentStatus.PUBLISHED,
      },
      take: 3,
    }),
  ]);

  return {
    collection,
    inspirations: memberships.map((membership) => membership.inspiration),
    relatedCollections,
  };
}
