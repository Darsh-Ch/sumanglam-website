import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { updateShowroomSectionSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const { id } = await params;
    const existing = await db.showroomSection.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existing) {
      return errors.notFound(
        "SHOWROOM_SECTION_NOT_FOUND",
        "Showroom section not found.",
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const { brandIds, inspirationIds, ...data } =
      updateShowroomSectionSchema.parse(body);

    try {
      const showroomSection = await db.showroomSection.update({
        where: { id },
        data: {
          ...data,
          brands: brandIds
            ? {
                deleteMany: {},
                create: brandIds.map((brandId) => ({ brandId })),
              }
            : undefined,
          inspirations: inspirationIds
            ? {
                deleteMany: {},
                create: inspirationIds.map((inspirationId) => ({ inspirationId })),
              }
            : undefined,
        },
        include: { brands: true, inspirations: true },
      });
      return ok({ showroomSection });
    } catch (error) {
      const mapped = mapPrismaConstraintError(error);
      if (mapped) return mapped;
      throw error;
    }
  });
}
