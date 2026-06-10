import { errors, handleRoute, ok } from "@/lib/api/response";
import { getShowroomSectionById } from "@/server/showroom";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  return handleRoute(async () => {
    const { id } = await params;
    const data = await getShowroomSectionById(id);
    if (!data) {
      return errors.notFound(
        "SHOWROOM_SECTION_NOT_FOUND",
        "Requested showroom section does not exist.",
      );
    }
    return ok(data);
  });
}
