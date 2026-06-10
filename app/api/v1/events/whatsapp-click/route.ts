import { NextResponse } from "next/server";
import { errors, handleRoute } from "@/lib/api/response";
import { clientKey, rateLimit } from "@/lib/api/rate-limit";
import { whatsappClickSchema } from "@/lib/validation/events";

export const dynamic = "force-dynamic";

/**
 * WhatsApp click tracking with source context. Whether clicks should create
 * leads is an open question — V1 records the event for attribution via logs/
 * GA4 without creating undocumented tables.
 */
export async function POST(request: Request) {
  return handleRoute(async () => {
    if (!rateLimit(clientKey(request, "whatsapp"), { limit: 30, windowMs: 60_000 })) {
      return errors.rateLimited();
    }

    const body = await request.json().catch(() => null);
    if (!body) return errors.badRequest("Request body must be valid JSON.");

    const click = whatsappClickSchema.parse(body);
    console.info(
      "[whatsapp-click]",
      JSON.stringify({
        sourceType: click.sourceType,
        sourceId: click.sourceId,
        sourcePage: click.sourcePage,
        at: new Date().toISOString(),
      }),
    );

    return NextResponse.json({ success: true });
  });
}
