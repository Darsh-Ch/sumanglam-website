import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { createShowroomSectionSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const { brandIds, inspirationIds, ...data } =
      createShowroomSectionSchema.parse(body);

    try {
      const showroomSection = await db.showroomSection.create({
        data: {
          ...data,
          brands: brandIds?.length
            ? { create: brandIds.map((brandId) => ({ brandId })) }
            : undefined,
          inspirations: inspirationIds?.length
            ? { create: inspirationIds.map((inspirationId) => ({ inspirationId })) }
            : undefined,
        },
        include: { brands: true, inspirations: true },
      });
      return ok({ showroomSection }, { status: 201 });
    } catch (error) {
      const mapped = mapPrismaConstraintError(error);
      if (mapped) return mapped;
      throw error;
    }
  });
}
