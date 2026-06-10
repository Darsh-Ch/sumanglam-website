import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { createCollectionSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const data = createCollectionSchema.parse(body);

    try {
      const collection = await db.collection.create({ data });
      return ok({ collection }, { status: 201 });
    } catch (error) {
      const mapped = mapPrismaConstraintError(error);
      if (mapped) return mapped;
      throw error;
    }
  });
}
