import { handleRoute, ok } from "@/lib/api/response";
import { getHomepageData } from "@/server/homepage";

export const dynamic = "force-dynamic";

export async function GET() {
  return handleRoute(async () => ok(await getHomepageData()));
}
