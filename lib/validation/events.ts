import { z } from "zod";

/** Documented analytics events (project-vault/11_API_Backend/API - Analytics Events.md). */
export const analyticsEventSchema = z.object({
  eventName: z.enum([
    "homepage_viewed",
    "inspiration_viewed",
    "collection_viewed",
    "brand_viewed",
    "product_viewed",
    "consultation_started",
    "consultation_submitted",
    "whatsapp_clicked",
    "showroom_viewed",
    "showroom_visit_intent",
    "brand_cta_clicked",
    "product_cta_clicked",
  ]),
  sourceType: z.string().trim().max(60).nullish(),
  sourceId: z.string().trim().max(60).nullish(),
});

export const whatsappClickSchema = z.object({
  sourceType: z.string().trim().min(1).max(60),
  sourceId: z.string().trim().max(60).nullish(),
  sourcePage: z.string().trim().max(300).nullish(),
});
