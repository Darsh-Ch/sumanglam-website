import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { createInspirationSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const { collectionIds, brandIds, productIds, ...data } =
      createInspirationSchema.parse(body);

    try {
      const inspiration = await db.inspiration.create({
        data: {
          ...data,
          collections: collectionIds?.length
            ? { create: collectionIds.map((collectionId) => ({ collectionId })) }
            : undefined,
          brands: brandIds?.length
            ? { create: brandIds.map((brandId) => ({ brandId })) }
            : undefined,
          products: productIds?.length
            ? { create: productIds.map((productId) => ({ productId })) }
            : undefined,
        },
        include: { collections: true, brands: true, products: true },
      });
      return ok({ inspiration }, { status: 201 });
    } catch (error) {
      const mapped = mapPrismaConstraintError(error);
      if (mapped) return mapped;
      throw error;
    }
  });
}
