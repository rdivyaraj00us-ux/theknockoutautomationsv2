import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { trackPurchase } from "@/lib/tracking";

const Success = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product");
  const tx = searchParams.get("tx") ?? "";

  useEffect(() => {
    const pathname = product === "starter" ? "/starter" : "/";
    trackPurchase(pathname, tx);
  }, [product, tx]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <SEO
        title="Thank you for your purchase | The Knockout Automations"
        description="Your purchase is confirmed. Your download link has been sent to your email."
        canonical="https://theknockoutautomations.com/success"
        noIndex
      />

      <div className="max-w-lg w-full text-center">
        <div className="rounded-2xl border border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/5 p-10 sm:p-12">
          <CheckCircle2 className="h-16 w-16 text-[hsl(var(--success))] mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-black mb-4">
            Thank you for your purchase
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            Your download link has been sent to your email.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-8">
            <Mail className="h-3.5 w-3.5" />
            <span>Check your inbox (and spam folder, just in case).</span>
          </div>

          <Button asChild size="lg" className="bg-gradient-cta hover:opacity-90 font-bold group">
            <Link to="/">
              Back to Home
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
