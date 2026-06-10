import { errors, handleRoute, ok } from "@/lib/api/response";
import { getBrandBySlug } from "@/server/brands";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  return handleRoute(async () => {
    const { slug } = await params;
    const data = await getBrandBySlug(slug);
    if (!data) {
      return errors.notFound("BRAND_NOT_FOUND", "Requested brand does not exist.");
    }
    return ok(data);
  });
}
