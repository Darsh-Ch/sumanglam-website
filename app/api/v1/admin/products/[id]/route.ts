import { ContentStatus } from "@prisma/client";
import { auth } from "@/auth";
import { mapPrismaConstraintError } from "@/lib/api/prisma-errors";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { db } from "@/lib/db";
import { updateProductSchema } from "@/lib/validation/admin-content";

export const dynamic = "force-dynamic";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    const { id } = await params;
    const existing = await db.product.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existing) {
      return errors.notFound("PRODUCT_NOT_FOUND", "Product not found.");
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const { categoryIds, ...data } = updateProductSchema.parse(body);

    try {
      const product = await db.product.update({
        where: { id },
        data: {
          ...data,
          categories: categoryIds
            ? {
                deleteMany: {},
                create: categoryIds.map((categoryId) => ({ categoryId })),
              }
            : undefined,
        },
        include: { categories: true },
      });
      return ok({ product });
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
    const existing = await db.product.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existing) {
      return errors.notFound("PRODUCT_NOT_FOUND", "Product not found.");
    }

    // Documented decision: DELETE archives content instead of hard-deleting.
    const product = await db.product.update({
      where: { id },
      data: { status: ContentStatus.ARCHIVED },
    });
    return ok({ product });
  });
}
