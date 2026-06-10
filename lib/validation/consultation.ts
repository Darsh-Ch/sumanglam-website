import { z } from "zod";

/** Shared client/server validation for the consultation form (zod). */

export const projectTypeValues = [
  "KITCHEN",
  "WARDROBE",
  "COMPLETE_HOME",
  "HARDWARE_APPLIANCES",
  "OTHER",
] as const;

export const contactMethodValues = ["PHONE", "WHATSAPP", "EMAIL"] as const;

export const projectTypeLabels: Record<(typeof projectTypeValues)[number], string> = {
  KITCHEN: "Modular Kitchen",
  WARDROBE: "Wardrobe & Storage",
  COMPLETE_HOME: "Complete Home Interiors",
  HARDWARE_APPLIANCES: "Hardware & Appliances",
  OTHER: "Something Else",
};

export const contactMethodLabels: Record<(typeof contactMethodValues)[number], string> = {
  PHONE: "Phone Call",
  WHATSAPP: "WhatsApp",
  EMAIL: "Email",
};

const CONTROL_CHARS = new RegExp("[\\x00-\\x1f\\x7f]", "g");

// Strips ASCII control characters while preserving normal text.
const sanitized = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((value) => value.replace(CONTROL_CHARS, ""));

export const consultationSchema = z.object({
  name: sanitized(120).pipe(z.string().min(2, "Please tell us your name.")),
  phone: z
    .string()
    .trim()
    .regex(
      /^\+?[0-9][0-9\s-]{8,14}$/,
      "Please enter a valid phone number (10-15 digits).",
    ),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  projectType: z.enum(projectTypeValues, {
    message: "Please choose a project type.",
  }),
  requirements: sanitized(2000).pipe(
    z.string().min(10, "Tell us a little about your project (at least 10 characters)."),
  ),
  preferredContactMethod: z.enum(contactMethodValues).optional(),
  // Source tracking — captured automatically, never trusted blindly.
  sourcePage: sanitized(300).optional(),
  sourceType: sanitized(60).optional(),
  referringUrl: sanitized(500).optional(),
});

export type ConsultationFormInput = z.infer<typeof consultationSchema>;
