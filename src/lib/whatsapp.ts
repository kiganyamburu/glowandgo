/**
 * Centralized WhatsApp helper for Glow & Go Studio.
 * Uses official wa.me shortlink with full URI encoding to ensure
 * messages with '&', spaces, newlines, and emojis are never truncated or 404.
 */

export const GLOW_AND_GO_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "254748897019";

export const INSTAGRAM_HANDLE = "glowandgo_lashwaxspa";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export function getWhatsAppLink(
  message: string,
  phone: string = GLOW_AND_GO_PHONE
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(
  message: string,
  phone: string = GLOW_AND_GO_PHONE
) {
  const url = getWhatsAppLink(message, phone);
  if (typeof window !== "undefined") {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
