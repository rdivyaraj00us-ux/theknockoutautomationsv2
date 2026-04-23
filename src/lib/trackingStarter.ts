import { STARTER_CHECKOUT_URL, STARTER_PRICING } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/tracking";

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
 * Starter Pack ($9.99) — fires unified product-aware tracking then redirects.
 */
export function trackAndRedirectStarter(): void {
  const url = buildStarterUrl();
  void STARTER_PRICING; // keep import used

  trackInitiateCheckout("/starter");

  setTimeout(() => {
    window.location.href = url;
  }, 100);
}
