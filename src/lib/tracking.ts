import { getCheckoutUrl, PRICING } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Fires Meta Pixel InitiateCheckout + GA4 begin_checkout events synchronously,
 * then redirects to checkout after a short delay so beacons can be queued.
 */
export function trackAndRedirect(discountCode?: string): void {
  const url = getCheckoutUrl(discountCode);
  const value = discountCode === "WAIT10" ? 22.49 : PRICING.sale;

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

  setTimeout(() => {
    window.location.href = url;
  }, 100);
}
