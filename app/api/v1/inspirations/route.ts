import { handleRoute, ok } from "@/lib/api/response";
import { listInspirations } from "@/server/inspirations";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return handleRoute(async () => {
    const url = new URL(request.url);
    const data = await listInspirations({
      page: Number(url.searchParams.get("page")) || undefined,
      limit: Number(url.searchParams.get("limit")) || undefined,
      space: url.searchParams.get("space") ?? undefined,
      collection: url.searchParams.get("collection") ?? undefined,
    });
    return ok(data);
  });
}
