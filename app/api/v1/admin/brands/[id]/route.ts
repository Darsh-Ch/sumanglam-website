import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { updateBrandSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const { id } = await params;
    const existing = await db.brand.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existing) {
      return errors.notFound("BRAND_NOT_FOUND", "Brand not found.");
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const data = updateBrandSchema.parse(body);
    if (data.parentBrandId === id) {
      return errors.badRequest("A brand cannot be its own parent.");
    }

    try {
      const brand = await db.brand.update({ where: { id }, data });
      return ok({ brand });
    } catch (error) {
      const mapped = mapPrismaConstraintError(error);
      if (mapped) return mapped;
      throw error;
    }
  });
}
