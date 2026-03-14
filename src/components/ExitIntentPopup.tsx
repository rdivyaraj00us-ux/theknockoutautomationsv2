import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getCheckoutUrl, PRICING } from "@/lib/constants";
import { X, Zap } from "lucide-react";

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

    // Delay attaching to avoid triggering immediately
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
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          Use code <span className="font-mono font-bold text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 px-2 py-0.5 rounded">WAIT10</span> for
          an extra 10% off. That's {PRICING.discount}%+ savings on 8,000+ workflows.
        </p>

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
