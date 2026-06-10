"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  type WhatsAppContext,
} from "@/features/whatsapp/whatsapp";

/** Maps the current route to a WhatsApp source type for context-aware messages. */
function sourceTypeForPath(pathname: string): WhatsAppContext["sourceType"] {
  if (pathname === "/") return "homepage";
  if (pathname.startsWith("/inspiration")) return "inspiration";
  if (pathname.startsWith("/collections")) return "collection";
  if (pathname.startsWith("/brands") || pathname.startsWith("/nolte") || pathname.startsWith("/mrida"))
    return "brand";
  if (pathname.startsWith("/products")) return "product";
  if (pathname.startsWith("/showroom")) return "showroom";
  if (pathname.startsWith("/kitchens")) return "kitchens";
  if (pathname.startsWith("/wardrobes")) return "wardrobes";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/book-consultation")) return "consultation";
  if (pathname.startsWith("/architects-designers")) return "architects";
  return "general";
}

/**
 * Persistent mobile WhatsApp access (vault: Mobile Experience).
 * Hidden on admin routes. Falls back to /contact when no number is configured.
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  function handleClick() {
    const sourceType = sourceTypeForPath(pathname);
    trackEvent("whatsapp_clicked", { sourceType });
    void fetch("/api/v1/events/whatsapp-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sourceType, sourceId: null, sourcePage: pathname }),
      keepalive: true,
    }).catch(() => undefined);

    const url = buildWhatsAppUrl(
      buildWhatsAppMessage({ sourceType, sourcePage: pathname }),
    );
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = "/contact";
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-13 items-center justify-center rounded-full bg-ink text-background shadow-lg transition-transform hover:scale-105 hover:bg-accent-deep md:bottom-7 md:right-7"
    >
      <MessageCircle className="size-6" aria-hidden />
    </button>
  );
}
