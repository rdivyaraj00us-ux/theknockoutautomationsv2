import { Button } from "@/components/ui/button";
import { getCheckoutUrl, STATS } from "@/lib/constants";
import { ArrowRight, Shield, Star, Users, Zap } from "lucide-react";

const HeroSection = () => {
  const handleCTA = () => {
    window.location.href = getCheckoutUrl();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-24 pb-16 px-4 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Micro-trust bar */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <Star className="h-4 w-4 text-[hsl(var(--gold))]" fill="currentColor" />
            <span>{STATS.rating}/5 Rating</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{STATS.customers} Customers</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-[hsl(var(--success))]" />
            <span>30-Day Guarantee</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
          Stop Wasting{" "}
          <span className="text-primary">20+ Hours</span>{" "}
          Every Week on Tasks AI Can Automate
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Get <span className="text-foreground font-semibold">8,000+ production-ready n8n workflow templates</span> for just $24.99.
          Automate your business in minutes, not months.
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
