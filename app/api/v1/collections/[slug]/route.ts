import { errors, handleRoute, ok } from "@/lib/api/response";
import { getCollectionBySlug } from "@/server/collections";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  return handleRoute(async () => {
    const { slug } = await params;
    const data = await getCollectionBySlug(slug);
    if (!data) {
      return errors.notFound(
        "COLLECTION_NOT_FOUND",
        "Requested collection does not exist.",
      );
    }
    return ok(data);
  });
}
