import { Shield } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-3xl mx-auto text-center reveal">
      <div className="rounded-2xl border border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/5 p-8 sm:p-12">
        <Shield className="h-16 w-16 text-[hsl(var(--success))] mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          30-Day <span className="text-[hsl(var(--success))]">Money-Back</span> Guarantee
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          Try every single workflow. Import them, customize them, run them in your business.
          If you're not completely satisfied within 30 days, email us and we'll refund every penny.
          No questions asked. No hoops to jump through.
        </p>
        <p className="text-foreground font-semibold text-sm">
          Your purchase is 100% risk-free. We take on all the risk so you don't have to.
        </p>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
