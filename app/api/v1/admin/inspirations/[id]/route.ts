import { ContentStatus } from "@prisma/client";
import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { updateInspirationSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const { id } = await params;
    const existing = await db.inspiration.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existing) {
      return errors.notFound("INSPIRATION_NOT_FOUND", "Inspiration not found.");
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const { collectionIds, brandIds, productIds, ...data } =
      updateInspirationSchema.parse(body);

    try {
      const inspiration = await db.inspiration.update({
        where: { id },
        data: {
          ...data,
          collections: collectionIds
            ? {
                deleteMany: {},
                create: collectionIds.map((collectionId) => ({ collectionId })),
              }
            : undefined,
          brands: brandIds
            ? {
                deleteMany: {},
                create: brandIds.map((brandId) => ({ brandId })),
              }
            : undefined,
          products: productIds
            ? {
                deleteMany: {},
                create: productIds.map((productId) => ({ productId })),
              }
            : undefined,
        },
        include: { collections: true, brands: true, products: true },
      });
      return ok({ inspiration });
    } catch (error) {
      const mapped = mapPrismaConstraintError(error);
      if (mapped) return mapped;
      throw error;
    }
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const { id } = await params;
    const existing = await db.inspiration.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existing) {
      return errors.notFound("INSPIRATION_NOT_FOUND", "Inspiration not found.");
    }

    // Documented decision: DELETE archives content instead of hard-deleting.
    const inspiration = await db.inspiration.update({
      where: { id },
      data: { status: ContentStatus.ARCHIVED },
    });
    return ok({ inspiration });
  });
}
