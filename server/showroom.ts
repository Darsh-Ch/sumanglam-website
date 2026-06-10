import { db } from "@/lib/db";
import { ContentStatus } from "@prisma/client";

export async function getShowroomSections() {
  return db.showroomSection.findMany({
    include: { brands: { include: { brand: true } } },
    orderBy: { floorNumber: "asc" },
  });
}

export async function getShowroomSectionById(id: string) {
  const section = await db.showroomSection.findUnique({
    where: { id },
    include: {
      brands: { include: { brand: true } },
      inspirations: {
        where: { inspiration: { status: ContentStatus.PUBLISHED } },
        include: { inspiration: { include: { space: true } } },
      },
    },
  });
  if (!section) return null;
  return {
    section,
    brands: section.brands.map((entry) => entry.brand),
    inspirations: section.inspirations.map((entry) => entry.inspiration),
  };
}
