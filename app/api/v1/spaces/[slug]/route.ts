import { errors, handleRoute, ok } from "@/lib/api/response";
import { getSpaceBySlug } from "@/server/spaces";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  return handleRoute(async () => {
    const { slug } = await params;
    const data = await getSpaceBySlug(slug);
    if (!data) {
      return errors.notFound("SPACE_NOT_FOUND", "Requested space does not exist.");
    }
    return ok(data);
  });
}
