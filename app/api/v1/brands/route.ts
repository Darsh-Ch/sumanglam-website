import { handleRoute, ok } from "@/lib/api/response";
import { getBrands } from "@/server/brands";

export const dynamic = "force-dynamic";

export async function GET() {
  return handleRoute(async () => ok(await getBrands()));
}
