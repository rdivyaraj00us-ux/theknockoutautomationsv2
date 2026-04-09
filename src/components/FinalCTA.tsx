import { Button } from "@/components/ui/button";
import { getCheckoutUrl } from "@/lib/constants";
import { ArrowRight, Zap, CheckCircle2, Gift } from "lucide-react";

const BUNDLE_ITEMS = [
  "2,000+ n8n Workflow Templates — Ready to import & customize",
  "BONUS 1: Top 100 Workflows Quick-Start Guide",
  "BONUS 2: Master Prompt Engineering Guidebook — 200 AI Prompts",
  "BONUS 3: OpenClaw + n8n Integration Guide — 50 Workflow Combos",
];

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
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Join automation professionals who stopped wasting time on repetitive tasks.
          Get 2,000+ workflows for just $24.99 — before the price goes up.
        </p>

        <div className="inline-block text-left mb-10 bg-card/60 border border-border rounded-xl p-6">
          <p className="flex items-center gap-2 text-sm font-bold text-[hsl(var(--gold))] mb-3">
            <Gift className="h-4 w-4" /> WHAT'S INSIDE YOUR BUNDLE:
          </p>
          <div className="space-y-2">
            {BUNDLE_ITEMS.map((item, i) => (
              <p key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div>
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
            100% risk-free. 30-day money-back guarantee, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
