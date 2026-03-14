import { Button } from "@/components/ui/button";
import { getCheckoutUrl, PRICING } from "@/lib/constants";
import { ArrowRight, Check, Shield, Zap } from "lucide-react";

const inclusions = [
  "8,000+ ready-to-use n8n workflows",
  "19 categories, 74+ integrations",
  "Instant download access",
  "Lifetime updates & access",
  "Commercial use license",
  "Import & run in 2 minutes",
  "30-day money-back guarantee",
  "Priority email support",
];

const PricingSection = () => {
  const handleCTA = () => {
    window.location.href = getCheckoutUrl();
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 bg-gradient-section">
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Limited Time Pricing</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Get Everything for <span className="text-primary">${PRICING.sale}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            That's just ${PRICING.perWorkflow} per workflow. Less than a cup of coffee for a lifetime of automation.
          </p>
        </div>

        <div className="reveal reveal-delay-1 rounded-2xl border-2 border-primary bg-card p-8 sm:p-12 glow-red relative">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-cta text-primary-foreground px-6 py-1.5 rounded-full text-sm font-bold">
            Save ${PRICING.original - PRICING.sale} ({PRICING.discount}% OFF)
          </div>

          {/* Price */}
          <div className="mb-8 mt-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-3xl text-muted-foreground line-through font-medium">${PRICING.original}</span>
              <span className="text-6xl sm:text-7xl font-black text-foreground">${PRICING.sale}</span>
            </div>
            <p className="text-muted-foreground text-sm">One-time payment · No subscriptions · No hidden fees</p>
          </div>

          {/* Checklist */}
          <div className="grid sm:grid-cols-2 gap-3 text-left mb-10">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <Check className="h-5 w-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            onClick={handleCTA}
            size="lg"
            className="w-full bg-gradient-cta hover:opacity-90 text-lg py-7 font-bold animate-pulse-glow group"
          >
            <Zap className="h-5 w-5 mr-2" />
            Get Instant Access Now
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-[hsl(var(--success))]" />
              30-Day Money-Back Guarantee
            </span>
            <span>🔒 Secure Checkout</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-8 reveal reveal-delay-2">
          <span className="text-[hsl(var(--gold))] font-semibold">⚡ {PRICING.discount}% OFF</span> — Launch pricing won't last forever.
          Get 8,000+ production-ready n8n workflows before the price increases.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
