import { Button } from "@/components/ui/button";
import { getCheckoutUrl, PRICING } from "@/lib/constants";
import { ArrowRight, Check, Gift, Shield, Zap } from "lucide-react";

const inclusions = [
  "2,000+ ready-to-use n8n workflows",
  "19 categories, 74+ integrations",
  "Instant download access",
  "Import & run in 2 minutes",
  "30-day money-back guarantee",
  "Priority email support",
];

const PricingSection = () => {
  const handleCTA = () => {
    window.location.href = getCheckoutUrl();
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 px-4 bg-gradient-section">
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal">
          <p className="text-[hsl(var(--primary))] font-semibold text-sm uppercase tracking-widest mb-3">
            Limited Time Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Get Everything for <span className="text-[hsl(var(--primary))]">${PRICING.sale}</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg mb-12">
            That's just ${PRICING.perWorkflow} per workflow. Less than a cup of coffee for a complete automation library.
          </p>
        </div>

        {/* Pricing card with animated border */}
        <div className="reveal reveal-delay-1 relative">
          {/* Animated gradient border */}
          <div
            className="absolute -inset-[2px] rounded-2xl z-0"
            style={{
              background: "linear-gradient(270deg, hsl(0 76% 57%), hsl(44 81% 61%), hsl(0 76% 57%), hsl(44 81% 61%))",
              backgroundSize: "300% 300%",
              animation: "border-rotate 4s ease infinite",
            }}
          />

          <div className="relative rounded-2xl bg-[hsl(var(--card))] p-8 sm:p-12 z-10">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-cta text-[hsl(var(--primary-foreground))] px-6 py-1.5 rounded-full text-sm font-bold badge-shine">
              Save ${(PRICING.original - PRICING.sale).toFixed(0)} ({PRICING.discount}% OFF)
            </div>

            {/* Price */}
            <div className="mb-8 mt-4">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-[hsl(var(--muted-foreground))] line-through font-medium">
                  ${PRICING.original}
                </span>
                <span className="text-6xl sm:text-7xl font-black text-foreground">${PRICING.sale}</span>
              </div>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                One-time payment · No subscriptions · No hidden fees
              </p>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 text-left mb-6">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* What's Inside */}
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wide mb-3 flex items-center justify-center gap-2">
                <Gift className="h-4 w-4 text-[hsl(var(--gold))]" />
                <span className="text-[hsl(var(--gold))]">What's Inside Your Bundle:</span>
              </p>
              <div className="space-y-2">
                {[
                  "2,000+ n8n Workflow Templates — Ready to import & customize",
                  "BONUS 1: Top 100 Workflows Quick-Start Guide",
                  "BONUS 2: Master Prompt Engineering Guidebook — 200 AI Prompts",
                  "BONUS 3: OpenClaw + n8n Integration Guide — 50 Workflow Combos",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20 rounded-lg px-4 py-3">
                    <Check className="h-4 w-4 text-[hsl(var(--success))] shrink-0" />
                    <span className="text-sm font-semibold text-left">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={handleCTA}
              size="lg"
              className="w-full bg-gradient-cta hover:opacity-90 text-lg py-7 font-bold animate-pulse-glow group cta-btn"
            >
              <Zap className="h-5 w-5 mr-2" />
              Get Instant Access Now
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Trust */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-[hsl(var(--muted-foreground))] flex-wrap">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[hsl(var(--success))]" />
                30-Day Money-Back Guarantee
              </span>
              <span>🔒 Secure Checkout via Shopify</span>
            </div>
          </div>
        </div>

        <p className="text-[hsl(var(--muted-foreground))] text-sm mt-8 reveal reveal-delay-2">
          <span className="text-[hsl(var(--gold))] font-semibold">⚡ {PRICING.discount}% OFF</span> — Launch pricing
          won't last forever. Get 2,000+ production-ready n8n workflows before the price increases.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
