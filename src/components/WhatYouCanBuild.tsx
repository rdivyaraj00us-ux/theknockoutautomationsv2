import { ArrowRight } from "lucide-react";

const scenarios = [
  {
    before: "Manually copying leads from web forms into your CRM",
    after: "Automatic lead capture, scoring, and CRM routing in under 2 minutes",
    time: "45 min/day → 0 min/day",
  },
  {
    before: "Writing weekly reports by pulling data from 5 different tools",
    after: "Auto-generated reports delivered to Slack every Monday at 9am",
    time: "3 hours/week → fully automated",
  },
  {
    before: "Manually sending follow-up emails to new customers",
    after: "Triggered welcome sequences with personalized content via Gmail/SendGrid",
    time: "30 min/day → 0 min/day",
  },
  {
    before: "Checking inventory levels across multiple Shopify stores",
    after: "Real-time stock alerts and automatic reorder notifications",
    time: "1 hour/day → instant alerts",
  },
];

const WhatYouCanBuild = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Real Results</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          What You Can <span className="text-primary">Build in Minutes</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          These aren't hypothetical — every scenario below maps to real workflows in the bundle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${(i % 3) + 1} rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-primary/60 font-bold text-xs uppercase mt-1 shrink-0 w-14">Before</span>
                  <p className="text-muted-foreground text-sm line-through decoration-primary/30">{s.before}</p>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[hsl(var(--success))] font-bold text-xs uppercase mt-1 shrink-0 w-14">After</span>
                  <p className="text-foreground text-sm font-medium">{s.after}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <span className="text-xs font-bold text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 rounded-full px-3 py-1">
                {s.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouCanBuild;
