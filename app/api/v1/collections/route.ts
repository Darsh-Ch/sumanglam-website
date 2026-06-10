import { handleRoute, ok } from "@/lib/api/response";
import { getCollections } from "@/server/collections";

export const dynamic = "force-dynamic";

export async function GET() {
  return handleRoute(async () => ok(await getCollections()));
}
