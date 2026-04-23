import { STARTER_CHECKOUT_URL, STARTER_PRICING } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

function buildStarterUrl(): string {
  if (typeof window === "undefined") return STARTER_CHECKOUT_URL;
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id"];
  const sep = STARTER_CHECKOUT_URL.includes("?") ? "&" : "?";
  const extras: string[] = [];
  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) extras.push(`${key}=${encodeURIComponent(val)}`);
  });
  return extras.length ? `${STARTER_CHECKOUT_URL}${sep}${extras.join("&")}` : STARTER_CHECKOUT_URL;
}

/**
 * Starter Pack ($9.99) — fires Meta Pixel + GA4 with starter-specific IDs
 * so analytics never commingle with the Complete Library.
 */
export function trackAndRedirectStarter(): void {
  const url = buildStarterUrl();
  const value = STARTER_PRICING.price;

  try {
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout", {
        value,
        currency: "USD",
        content_name: "TKOA Starter Pack",
        content_type: "product",
        content_ids: ["tkoa_starter"],
      });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "begin_checkout", {
        currency: "USD",
        value,
        items: [
          {
            item_id: "starter_999",
            item_name: "TKOA Starter Pack",
            price: value,
            quantity: 1,
          },
        ],
      });
    }
  } catch {
    /* never block navigation */
  }

  setTimeout(() => {
    window.location.href = url;
  }, 100);
}
