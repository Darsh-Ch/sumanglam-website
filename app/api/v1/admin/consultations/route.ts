import { auth } from "@/auth";
import { errors, handleRoute, ok } from "@/lib/api/response";
import { getAdminConsultations } from "@/server/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  return handleRoute(async () => {
    const session = await auth();
    if (!session?.user) return errors.unauthorized();

    return ok(await getAdminConsultations());
  });
}
