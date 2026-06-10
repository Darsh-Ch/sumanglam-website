import { handleRoute, ok } from "@/lib/api/response";
import { listProducts } from "@/server/products";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return handleRoute(async () => {
    const url = new URL(request.url);
    const data = await listProducts({
      page: Number(url.searchParams.get("page")) || undefined,
      limit: Number(url.searchParams.get("limit")) || undefined,
      brand: url.searchParams.get("brand") ?? undefined,
      type: url.searchParams.get("type") ?? undefined,
      category: url.searchParams.get("category") ?? undefined,
      subcategory: url.searchParams.get("subcategory") ?? undefined,
    });
    return ok(data);
  });
}
