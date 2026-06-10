import { z } from "zod";

/**
 * Environment validation.
 *
 * Server vars are validated lazily (first access) so that builds and
 * placeholder-credential development remain possible. Missing optional
 * integrations (Cloudinary, GA4, WhatsApp) degrade gracefully and are
 * reported once via console.warn rather than crashing the app.
 */

const serverSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  AUTH_SECRET: z.string().min(16, "AUTH_SECRET must be at least 16 characters"),
  ADMIN_EMAIL: z.string().email().optional().or(z.literal("")),
  ADMIN_PASSWORD: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional().default(""),
  NEXT_PUBLIC_GA4_MEASUREMENT_ID: z.string().optional().default(""),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().optional().default(""),
  NEXT_PUBLIC_CONTACT_PHONE: z.string().optional().default(""),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().optional().default(""),
});

let warned = false;

function warnOnce(messages: string[]) {
  if (warned || messages.length === 0) return;
  warned = true;
  for (const message of messages) {
    console.warn(`[env] ${message}`);
  }
}

export function getServerEnv() {
  const parsed = serverSchema.safeParse(process.env);
  if (!parsed.success) {
    const issues = parsed.error.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`,
    );
    throw new Error(`Invalid server environment:\n${issues.join("\n")}`);
  }
  const warnings: string[] = [];
  if (!parsed.data.ADMIN_PASSWORD) {
    warnings.push("ADMIN_PASSWORD is empty — admin login is disabled.");
  }
  if (!parsed.data.CLOUDINARY_API_KEY) {
    warnings.push("Cloudinary keys missing — uploads disabled, local placeholders in use.");
  }
  warnOnce(warnings);
  return parsed.data;
}

// NEXT_PUBLIC_* vars are inlined at build time, so they must be referenced
// statically rather than via process.env[key].
export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  NEXT_PUBLIC_GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
});
