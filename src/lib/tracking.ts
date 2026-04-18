import { getCheckoutUrl, PRICING } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Fires Meta Pixel InitiateCheckout + GA4 begin_checkout events,
 * waits ~300ms for the pixel to register, then redirects to checkout.
 */
export function trackAndRedirect(discountCode?: string): void {
  const url = getCheckoutUrl(discountCode);
  const value = discountCode === "WAIT10" ? 22.49 : PRICING.sale;

  // Defer all tracking + navigation off the click's interaction frame
  // so the browser can paint feedback immediately (improves INP).
  const fireAndGo = () => {
    try {
      if (typeof window.fbq === "function") {
        window.fbq("track", "InitiateCheckout", {
          value,
          currency: "USD",
          content_name: "The Knockout Automations",
          content_type: "product",
          content_ids: ["pdt_0NcjrfHtQQbPxzvoM7Iif"],
        });
      }
      if (typeof window.gtag === "function") {
        window.gtag("event", "begin_checkout", {
          currency: "USD",
          value,
          items: [
            {
              item_id: "pdt_0NcjrfHtQQbPxzvoM7Iif",
              item_name: "The Knockout Automations",
              price: value,
              quantity: 1,
            },
          ],
        });
      }
    } catch {
      /* never block navigation on tracking errors */
    }
    // Short delay so pixel beacons get queued before navigation
    setTimeout(() => {
      window.location.href = url;
    }, 100);
  };

  // Yield to the browser first — paint button feedback, then run trackers
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(fireAndGo, { timeout: 100 });
  } else {
    setTimeout(fireAndGo, 0);
  }
}
