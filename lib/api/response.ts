import { NextResponse } from "next/server";
import { ZodError } from "zod";

/**
 * Standard API envelopes (project-vault/11_API_Backend/API - Error Format.md).
 * Success: { success: true, data }
 * Error:   { success: false, error: { code, message } }
 */

export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ success: true, data }, init);
}

export function fail(code: string, message: string, status: number) {
  return NextResponse.json(
    { success: false, error: { code, message } },
    { status },
  );
}

export const errors = {
  notFound: (code: string, message: string) => fail(code, message, 404),
  validation: (error: ZodError) =>
    fail(
      "VALIDATION_ERROR",
      error.issues
        .map((issue) => `${issue.path.join(".") || "input"}: ${issue.message}`)
        .join("; "),
      400,
    ),
  badRequest: (message: string) => fail("BAD_REQUEST", message, 400),
  unauthorized: () => fail("UNAUTHORIZED", "Authentication required.", 401),
  rateLimited: () =>
    fail("RATE_LIMITED", "Too many requests. Please try again shortly.", 429),
  server: () =>
    fail("INTERNAL_ERROR", "Something went wrong. Please try again.", 500),
};

/** Wraps a handler with consistent error mapping. */
export async function handleRoute(
  handler: () => Promise<Response>,
): Promise<Response> {
  try {
    return await handler();
  } catch (error) {
    if (error instanceof ZodError) return errors.validation(error);
    console.error("[api]", error);
    return errors.server();
  }
}
