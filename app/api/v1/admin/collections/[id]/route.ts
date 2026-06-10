import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { updateCollectionSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const { id } = await params;
    const existing = await db.collection.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existing) {
      return errors.notFound("COLLECTION_NOT_FOUND", "Collection not found.");
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const data = updateCollectionSchema.parse(body);

    try {
      const collection = await db.collection.update({ where: { id }, data });
      return ok({ collection });
    } catch (error) {
      const mapped = mapPrismaConstraintError(error);
      if (mapped) return mapped;
      throw error;
    }
  });
}
