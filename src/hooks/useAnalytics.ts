import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Fires a GA4 page_view and Meta Pixel PageView on every route change.
 * Mount once inside <BrowserRouter>.
 */
export function useAnalytics(): void {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const page_path = pathname + search;
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_path,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView");
      }
    } catch {
      /* never break navigation on analytics */
    }
  }, [pathname, search]);
}

const RouteAnalytics = () => {
  useAnalytics();
  return null;
};

export default RouteAnalytics;
