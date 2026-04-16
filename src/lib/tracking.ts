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

  // Meta Pixel
  console.log("[Tracking] CTA clicked, fbq available:", typeof window.fbq === "function");
  if (typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout", {
      value,
      currency: "USD",
      content_name: "The Knockout Automations",
      content_type: "product",
      content_ids: ["pdt_0NcjrfHtQQbPxzvoM7Iif"],
    });
  }

  // GA4
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

  // Wait 300ms for pixels to register before navigating
  setTimeout(() => {
    window.location.href = url;
  }, 300);
}
