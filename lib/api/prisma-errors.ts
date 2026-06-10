import { Prisma } from "@prisma/client";
import { errors } from "@/lib/api/response";

/**
 * Maps known Prisma constraint failures to documented API errors.
 * Returns null when the error is not a recognised constraint failure
 * so callers can rethrow and let handleRoute() respond with 500.
 */
export function mapPrismaConstraintError(error: unknown): Response | null {
  if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return null;

  if (error.code === "P2002") {
    const target = error.meta?.target;
    const fields = Array.isArray(target) ? target.join(", ") : "slug";
    return errors.badRequest(
      `A record with the same ${fields} already exists. Choose a unique value.`,
    );
  }

  if (error.code === "P2003") {
    return errors.badRequest(
      "A referenced record does not exist. Check the related ids.",
    );
  }

  return null;
}
