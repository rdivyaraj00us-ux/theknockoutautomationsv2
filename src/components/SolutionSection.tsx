import { Check, Package } from "lucide-react";

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

const SolutionSection = () => (
  <section className="py-20 sm:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Product visual */}
        <div className="reveal">
          <div className="relative rounded-2xl border border-border bg-card p-8 glow-red">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-cta flex items-center justify-center">
                <Package className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">The Knockout Bundle</h3>
                <p className="text-muted-foreground text-sm">Complete n8n Workflow Library</p>
              </div>
            </div>

            <div className="space-y-3">
              {["Automation & Integration (515)", "Messaging & Chatbots (318)", "AI & Machine Learning (301)",
                "Data & Analytics (249)", "Email & Communication (210)", "CRM & Sales (146)",
                "Social Media (132)", "DevOps & IT (121)", "…and 11 more categories"].map((cat) => (
                <div key={cat} className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{cat}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <span className="font-mono text-2xl font-black text-[hsl(var(--gold))]">8,000+ Workflows</span>
            </div>
          </div>
        </div>

        {/* Right: Features */}
        <div className="reveal reveal-delay-2">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Everything You Need to <span className="text-primary">Automate Anything</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Skip months of building from scratch. Get a complete automation library that covers every workflow you'll ever need.
          </p>

          <div className="space-y-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[hsl(var(--success))]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[hsl(var(--success))]" />
                </div>
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
