import { errors, handleRoute, ok } from "@/lib/api/response";
import { getProductBySlug } from "@/server/products";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  return handleRoute(async () => {
    const { slug } = await params;
    const data = await getProductBySlug(slug);
    if (!data) {
      return errors.notFound("PRODUCT_NOT_FOUND", "Requested product does not exist.");
    }
    return ok(data);
  });
}
