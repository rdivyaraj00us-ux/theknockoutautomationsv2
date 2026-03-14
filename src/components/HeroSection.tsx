import { Button } from "@/components/ui/button";
import { getCheckoutUrl } from "@/lib/constants";
import { ArrowRight, Shield, Zap, Package, Clock } from "lucide-react";

const HeroSection = () => {
  const handleCTA = () => {
    window.location.href = getCheckoutUrl();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-24 pb-16 px-6 sm:px-4 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Micro-trust bar */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <Package className="h-4 w-4 text-primary" />
            <span>Instant Digital Delivery</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-[hsl(var(--gold))]" />
            <span>Import & Run in 2 Min</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-[hsl(var(--success))]" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
          <span className="text-primary">8,000+ n8n Workflows.</span>{" "}
          $24.99.{" "}
          <span className="block sm:inline">Import & Run in 2 Minutes.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Stop building workflows from scratch. Get <span className="text-foreground font-semibold">production-ready n8n templates</span> across 19 categories and 74+ integrations — ready to import, customize, and deploy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            onClick={handleCTA}
            size="lg"
            className="bg-gradient-cta hover:opacity-90 text-lg px-10 py-7 font-bold glow-red animate-pulse-glow group"
          >
            <Zap className="h-5 w-5 mr-2" />
            Get Instant Access — $24.99
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Micro guarantees */}
        <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground flex-wrap">
          <span>✓ Instant Download</span>
          <span>✓ One-Time Payment</span>
          <span>✓ 30-Day Money Back</span>
          <span>✓ Lifetime Access</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
