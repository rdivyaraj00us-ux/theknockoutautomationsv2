import { getCheckoutUrl, PRICING } from "@/lib/constants";

export type ProductContext = {
  product_id: string;
  product_name: string;
  value: number;
  currency: "USD";
};

const STARTER_CONTEXT: ProductContext = {
  product_id: "tkoa_starter_999",
  product_name: "Starter Pack",
  value: 9.99,
  currency: "USD",
};

const COMPLETE_CONTEXT: ProductContext = {
  product_id: "tkoa_complete_2499",
  product_name: "Complete Library",
  value: 24.99,
  currency: "USD",
};

export function getProductContext(pathname: string): ProductContext {
  if (pathname === "/starter" || pathname.startsWith("/starter/")) {
    return STARTER_CONTEXT;
  }
  return COMPLETE_CONTEXT;
}

function safeFbq(...args: any[]) {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq(...args);
    }
  } catch {
    /* noop */
  }
}

function safeGtag(...args: any[]) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag(...args);
    }
  } catch {
    /* noop */
  }
}

function safeClarity(...args: any[]) {
  try {
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity(...args);
    }
  } catch {
    /* noop */
  }
}

export function trackViewContent(pathname: string): void {
  const ctx = getProductContext(pathname);
  safeFbq("track", "ViewContent", {
    content_ids: [ctx.product_id],
    content_name: ctx.product_name,
    content_type: "product",
    value: ctx.value,
    currency: ctx.currency,
  });
  safeGtag("event", "view_item", {
    currency: ctx.currency,
    value: ctx.value,
    items: [
      {
        item_id: ctx.product_id,
        item_name: ctx.product_name,
        price: ctx.value,
        quantity: 1,
      },
    ],
  });
}

export function trackInitiateCheckout(pathname: string): void {
  const ctx = getProductContext(pathname);
  safeFbq("track", "InitiateCheckout", {
    content_ids: [ctx.product_id],
    content_name: ctx.product_name,
    content_type: "product",
    value: ctx.value,
    currency: ctx.currency,
    num_items: 1,
  });
  safeGtag("event", "begin_checkout", {
    currency: ctx.currency,
    value: ctx.value,
    items: [
      {
        item_id: ctx.product_id,
        item_name: ctx.product_name,
        price: ctx.value,
        quantity: 1,
      },
    ],
  });
  safeClarity("event", "initiate_checkout");
  safeClarity("set", "product", ctx.product_id);
}

export function trackPurchase(pathname: string, transactionId: string): void {
  const ctx = getProductContext(pathname);
  safeFbq("track", "Purchase", {
    content_ids: [ctx.product_id],
    content_name: ctx.product_name,
    content_type: "product",
    value: ctx.value,
    currency: ctx.currency,
    num_items: 1,
  });
  safeGtag("event", "purchase", {
    transaction_id: transactionId,
    currency: ctx.currency,
    value: ctx.value,
    items: [
      {
        item_id: ctx.product_id,
        item_name: ctx.product_name,
        price: ctx.value,
        quantity: 1,
      },
    ],
  });
  safeClarity("event", "purchase_complete");
}

/**
 * Legacy helper kept for the Complete Library ($24.99) buy buttons.
 * Now also forwards through the unified trackInitiateCheckout pipeline.
 */
export function trackAndRedirect(discountCode?: string): void {
  const url = getCheckoutUrl(discountCode);
  const value = discountCode === "WAIT10" ? 22.49 : PRICING.sale;
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  // Unified product-aware tracking
  trackInitiateCheckout(pathname);

  // Discount-aware overrides for the legacy WAIT10 path
  if (discountCode === "WAIT10") {
    safeFbq("track", "InitiateCheckout", {
      value,
      currency: "USD",
      content_name: "The Knockout Automations",
      content_type: "product",
      content_ids: ["tkoa_complete_2499"],
      discount_code: discountCode,
    });
    safeGtag("event", "begin_checkout", {
      currency: "USD",
      value,
      coupon: discountCode,
      items: [
        {
          item_id: "tkoa_complete_2499",
          item_name: "The Knockout Automations",
          price: value,
          quantity: 1,
        },
      ],
    });
  }

  setTimeout(() => {
    window.location.href = url;
  }, 100);
}
