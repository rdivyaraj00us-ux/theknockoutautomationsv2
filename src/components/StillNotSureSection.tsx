import { Button } from "@/components/ui/button";
import { trackAndRedirect } from "@/lib/tracking";
import { ArrowRight, Zap } from "lucide-react";
import MoneyBackSeal from "@/components/MoneyBackSeal";
import TrustRow from "@/components/TrustRow";

const StillNotSureSection = () => (
  <section
    className="py-20 sm:py-28 px-4 relative overflow-hidden"
    style={{
      background:
        "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--primary) / 0.08) 0%, transparent 70%), hsl(var(--background))",
    }}
  >
    <div className="max-w-5xl mx-auto reveal">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight">
          Still Not Sure? <span className="text-[hsl(var(--gold))]">We Got Your Back!</span>
        </h2>
        <div
          className="mx-auto mt-4"
          style={{
            height: 2,
            width: 80,
            background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
          }}
        />
      </div>

      <div className="rounded-3xl border border-[hsl(var(--gold))]/25 bg-card/40 backdrop-blur-sm p-8 sm:p-12">
        <div className="grid lg:grid-cols-[35%_1fr] gap-10 items-center">
          {/* Seal */}
          <div className="flex justify-center">
            <MoneyBackSeal size={160} />
          </div>

          {/* Copy + CTA */}
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-widest text-[hsl(var(--gold))] font-bold mb-3">
              Our Guarantee
            </p>
            <div className="space-y-4 text-muted-foreground" style={{ lineHeight: 1.7 }}>
              <p>
                Get the full Vault today for just <span className="text-foreground font-semibold">$24.99</span> and walk away with the strongest money-back guarantee in the automation space.
              </p>
              <p>
                Try every workflow. Customize them. Run them in your business. If it doesn't pay for itself inside 30 days, email us a single sentence — <span className="text-foreground font-semibold">"refund me"</span> — and you get every penny back. No forms. No "before you go" upsell. No hoops to jump through.
              </p>
              <p>
                You take <span className="text-foreground font-bold">ZERO risk</span>. We take <span className="text-[hsl(var(--gold))] font-bold">ALL the risk</span>.
              </p>
            </div>

            <div className="mt-7">
              <Button
                onClick={() => trackAndRedirect()}
                size="lg"
                className="w-full sm:w-auto bg-gradient-cta hover:opacity-90 text-base sm:text-lg px-10 py-6 font-bold animate-pulse-glow group cta-btn"
              >
                <Zap className="h-5 w-5 mr-2" />
                Get Instant Access at $24.99
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <TrustRow className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StillNotSureSection;
