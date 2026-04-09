import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getCheckoutUrl, PRICING } from "@/lib/constants";
import { X, Zap, CheckCircle2 } from "lucide-react";

const BUNDLE_ITEMS = [
  "2,000+ n8n Workflow Templates",
  "BONUS: Top 100 Quick-Start Guide",
  "BONUS: 200 AI Prompts Guidebook",
  "BONUS: OpenClaw + n8n Integration Guide",
];

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("knockout_exit_shown")) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) {
        sessionStorage.setItem("knockout_exit_shown", "1");
        setShow(true);
        document.removeEventListener("mouseout", handler);
      }
    };

    const timeout = setTimeout(() => {
      document.addEventListener("mouseout", handler);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseout", handler);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="relative max-w-md w-full rounded-2xl border-2 border-primary bg-card p-8 text-center glow-red">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-4xl mb-4">⏳</div>
        <h3 className="text-2xl font-black mb-3">Wait! Don't Leave Empty-Handed</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          Use code <span className="font-mono font-bold text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 px-2 py-0.5 rounded">WAIT10</span> for
          an extra 10% off. That's {PRICING.discount}%+ savings on 2,000+ workflows.
        </p>

        <div className="text-left mb-6 space-y-1.5">
          {BONUSES.map((bonus, i) => (
            <p key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
              FREE: {bonus}
            </p>
          ))}
        </div>

        <Button
          onClick={() => { window.location.href = getCheckoutUrl("WAIT10"); }}
          className="w-full bg-gradient-cta hover:opacity-90 font-bold py-6 text-base animate-pulse-glow"
        >
          <Zap className="h-4 w-4 mr-2" />
          Claim My Discount — ${PRICING.sale}
        </Button>

        <button
          onClick={() => setShow(false)}
          className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          No thanks, I don't want to save time
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
