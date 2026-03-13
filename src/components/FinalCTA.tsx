import { Button } from "@/components/ui/button";
import { getCheckoutUrl } from "@/lib/constants";
import { ArrowRight, Zap } from "lucide-react";

const FinalCTA = () => {
  const handleCTA = () => {
    window.location.href = getCheckoutUrl();
  };

  return (
    <section className="py-20 sm:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta opacity-10" />
      <div className="relative z-10 max-w-3xl mx-auto text-center reveal">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Ready to <span className="text-primary">Automate Everything</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 3,200+ professionals who stopped wasting time on repetitive tasks.
          Get 8,000+ workflows for just $24.99 — before the price goes up.
        </p>
        <Button
          onClick={handleCTA}
          size="lg"
          className="bg-gradient-cta hover:opacity-90 text-lg px-12 py-7 font-bold animate-pulse-glow group"
        >
          <Zap className="h-5 w-5 mr-2" />
          Get Instant Access — $24.99
          <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="text-muted-foreground text-xs mt-6 italic">
          "The best investment I've made for my business this year." — Sarah K., Agency Owner
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
