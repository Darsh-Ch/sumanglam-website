import { handleRoute, ok } from "@/lib/api/response";
import { getSpaces } from "@/server/spaces";

export const dynamic = "force-dynamic";

export async function GET() {
  return handleRoute(async () => ok(await getSpaces()));
}
