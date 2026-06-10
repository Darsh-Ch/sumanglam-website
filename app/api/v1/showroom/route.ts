import { handleRoute, ok } from "@/lib/api/response";
import { getShowroomSections } from "@/server/showroom";

export const dynamic = "force-dynamic";

export async function GET() {
  return handleRoute(async () => ok(await getShowroomSections()));
}
