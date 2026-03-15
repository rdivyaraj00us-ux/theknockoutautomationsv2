import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCheckoutUrl } from "@/lib/constants";

const categories = [
  { name: "AI & Machine Learning", count: 301, color: "#a855f7" },
  { name: "Automation & Integration", count: 515, color: "#ef4444" },
  { name: "Messaging & Chatbots", count: 318, color: "#3b82f6" },
  { name: "Data & Analytics", count: 249, color: "#22c55e" },
  { name: "Email & Communication", count: 210, color: "#f59e0b" },
  { name: "CRM & Sales", count: 146, color: "#ec4899" },
  { name: "Social Media", count: 132, color: "#06b6d4" },
  { name: "DevOps & IT", count: 121, color: "#6366f1" },
];

const features = [
  "8,000+ ready-to-use workflow templates",
  "19 categories covering every business need",
  "74+ tool integrations (OpenAI, Slack, Shopify, etc.)",
  "Import & run in under 2 minutes",
  "No coding skills required",
  "Works with free, self-hosted n8n",
  "Commercial use allowed (agencies welcome)",
  "Lifetime access with one-time payment",
];

const SolutionSection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 20% 50%, hsl(0 76% 57% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative" style={{ perspective: "1000px" }}>
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{
                  background: "linear-gradient(135deg, hsl(0 76% 57%), hsl(44 81% 61%))",
                }}
              />

              <div
                className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 overflow-hidden"
                style={{
                  transform: "rotateY(-2deg) rotateX(1deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-cta flex items-center justify-center">
                      <span className="text-white font-black text-sm">KO</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">The Knockout Bundle</h3>
                      <p className="text-muted-foreground text-xs">Complete n8n Workflow Library</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground line-through">$149</span>
                    <span className="block text-xl font-black text-[hsl(var(--gold))]">$24.99</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {categories.map((cat, i) => (
                    <div
                      key={cat.name}
                      className="flex items-center gap-2 rounded-lg bg-background border border-border px-3 py-2.5 group hover:border-primary/40 transition-colors"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <div className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] sm:text-xs font-medium truncate">{cat.name}</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold shrink-0" style={{ color: cat.color }}>
                        {cat.count}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    {[
                      { n: "8,000+", l: "Workflows" },
                      { n: "74+", l: "Tools" },
                      { n: "19", l: "Categories" },
                    ].map((s) => (
                      <div key={s.l} className="text-center">
                        <span className="block text-sm font-black text-primary font-mono">{s.n}</span>
                        <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{s.l}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[hsl(var(--success))] text-xs font-semibold">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--success))] animate-pulse" />
                    Ready to Import
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-2xl border border-border bg-card -z-10"
                style={{
                  transform: "rotateY(-2deg) rotateX(1deg) translateZ(-20px) translateX(8px) translateY(8px)",
                  opacity: 0.4,
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl border border-border bg-card -z-20"
                style={{
                  transform: "rotateY(-2deg) rotateX(1deg) translateZ(-40px) translateX(16px) translateY(16px)",
                  opacity: 0.2,
                }}
              />
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
              Everything You Need to <span className="text-primary">Automate Anything</span>
            </h2>

            <div className="bg-card border-l-2 border-primary rounded-r-lg px-4 py-3 mb-8">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "You're not just buying workflow files. You're buying hundreds of hours of testing, debugging, and
                optimization — so you can ship with confidence instead of gambling."
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 group">
                  <div className="h-5 w-5 rounded-full bg-[hsl(var(--success))]/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[hsl(var(--success))]/25 transition-colors">
                    <Check className="h-3 w-3 text-[hsl(var(--success))]" />
                  </div>
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => {
                window.location.href = getCheckoutUrl();
              }}
              className="bg-gradient-cta hover:opacity-90 font-bold px-8 py-6 text-sm group"
            >
              Get the Full Bundle — $24.99
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
