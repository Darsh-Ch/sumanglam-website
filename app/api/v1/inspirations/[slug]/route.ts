import { errors, handleRoute, ok } from "@/lib/api/response";
import { getInspirationBySlug } from "@/server/inspirations";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  return handleRoute(async () => {
    const { slug } = await params;
    const data = await getInspirationBySlug(slug);
    if (!data) {
      return errors.notFound(
        "INSPIRATION_NOT_FOUND",
        "Requested inspiration does not exist.",
      );
    }
    return ok(data);
  });
}
