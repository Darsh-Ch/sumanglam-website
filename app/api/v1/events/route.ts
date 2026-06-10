import { NextResponse } from "next/server";
import { errors, handleRoute } from "@/lib/api/response";
import { clientKey, rateLimit } from "@/lib/api/rate-limit";
import { analyticsEventSchema } from "@/lib/validation/events";

export const dynamic = "force-dynamic";

/**
 * Analytics event sink. GA4 is the documented analytics provider; local
 * persistence is an open question, so V1 validates and logs without storing
 * (no undocumented tables). See project-vault/15_Open_Questions.md.
 */
export async function POST(request: Request) {
  return handleRoute(async () => {
    if (!rateLimit(clientKey(request, "events"), { limit: 60, windowMs: 60_000 })) {
      return errors.rateLimited();
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const event = analyticsEventSchema.parse(body);
    console.info(
      `[analytics] ${event.eventName}`,
      JSON.stringify({ sourceType: event.sourceType, sourceId: event.sourceId }),
    );

    return NextResponse.json({ success: true });
  });
}
