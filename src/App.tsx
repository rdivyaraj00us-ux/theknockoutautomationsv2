import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import ClarityLoader from "@/components/ClarityLoader";
import RouteAnalytics from "@/hooks/useAnalytics";

// Lazy-load every route so each page only ships its own JS.
const Index = lazyWithRetry(() => import("./pages/Index.tsx"));
const Starter = lazyWithRetry(() => import("./pages/Starter.tsx"));
const Workflows = lazyWithRetry(() => import("./pages/Workflows.tsx"));
const Docs = lazyWithRetry(() => import("./pages/Docs.tsx"));
const Contact = lazyWithRetry(() => import("./pages/Contact.tsx"));
const RefundPolicy = lazyWithRetry(() => import("./pages/RefundPolicy.tsx"));
const Privacy = lazyWithRetry(() => import("./pages/Privacy.tsx"));
const Terms = lazyWithRetry(() => import("./pages/Terms.tsx"));
const Success = lazyWithRetry(() => import("./pages/Success.tsx"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center text-muted-foreground">
    Loading…
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* Per-route Clarity project loader (mounted before page_view tracking) */}
            <ClarityLoader />
            {/* GA4 + Meta Pixel page_view on every route change */}
            <RouteAnalytics />
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/starter" element={<Starter />} />
                <Route path="/workflows" element={<Workflows />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
