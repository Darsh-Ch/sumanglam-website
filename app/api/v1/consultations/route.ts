import { NextResponse } from "next/server";
import { errors, handleRoute } from "@/lib/api/response";
import { clientKey, rateLimit } from "@/lib/api/rate-limit";
import { consultationSchema } from "@/lib/validation/consultation";
import { createConsultation } from "@/server/leads";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleRoute(async () => {
    if (!rateLimit(clientKey(request, "consultations"), { limit: 5, windowMs: 60_000 })) {
      return errors.rateLimited();
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const input = consultationSchema.parse(body);
    const { consultation } = await createConsultation({
      name: input.name,
      phone: input.phone,
      email: input.email ?? null,
      projectType: input.projectType,
      requirements: input.requirements,
      preferredContactMethod: input.preferredContactMethod ?? null,
      sourcePage: input.sourcePage ?? null,
      sourceType: input.sourceType ?? null,
      referringUrl: input.referringUrl ?? request.headers.get("referer"),
    });

    // Documented response shape (project-vault/11_API_Backend/API - Consultations.md).
    return NextResponse.json(
      { success: true, consultationId: consultation.id },
      { status: 201 },
    );
  });
}
