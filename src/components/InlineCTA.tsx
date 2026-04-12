import { Button } from "@/components/ui/button";
import { getCheckoutUrl } from "@/lib/constants";
import { ArrowRight, Zap } from "lucide-react";

const InlineCTA = () => {
  return (
    <section className="py-8 sm:py-12 px-4">
      <div className="max-w-3xl mx-auto text-center bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8">
        <p className="text-sm sm:text-base text-muted-foreground mb-4">
          Still reading? Here's the deal →{" "}
          <span className="text-foreground font-semibold">2,000+ production-ready workflows</span> for one price.
        </p>
        <Button
          onClick={() => { window.location.href = getCheckoutUrl(); }}
          size="lg"
          className="bg-gradient-cta hover:opacity-90 text-sm sm:text-base px-8 py-6 font-bold glow-red group"
        >
          <Zap className="h-4 w-4 mr-2" />
          Get 2,000+ Workflows — $24.99
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default InlineCTA;
