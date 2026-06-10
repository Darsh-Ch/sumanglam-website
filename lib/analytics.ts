"use client";

import { clientEnv } from "@/lib/env";

/**
 * Frontend analytics helper. Documented events go to GA4 (when configured)
 * and to POST /api/v1/events for server-side validation/logging.
 * No PII is sent through this channel.
 */

export type AnalyticsEventName =
  | "homepage_viewed"
  | "inspiration_viewed"
  | "collection_viewed"
  | "brand_viewed"
  | "product_viewed"
  | "consultation_started"
  | "consultation_submitted"
  | "whatsapp_clicked"
  | "showroom_viewed"
  | "showroom_visit_intent"
  | "brand_cta_clicked"
  | "product_cta_clicked";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  context?: { sourceType?: string; sourceId?: string },
) {
  try {
    if (clientEnv.NEXT_PUBLIC_GA4_MEASUREMENT_ID && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        source_type: context?.sourceType,
        source_id: context?.sourceId,
      });
    }
    // Fire-and-forget; analytics must never break the page.
    void fetch("/api/v1/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        sourceType: context?.sourceType ?? null,
        sourceId: context?.sourceId ?? null,
      }),
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // Swallow analytics failures silently.
  }
}
