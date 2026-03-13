import { ShoppingCart, Megaphone, Code2, Briefcase } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Order processing, inventory sync, customer follow-ups, abandoned cart recovery, multi-channel listing.",
    workflows: "400+",
    tools: ["Shopify", "WooCommerce", "Stripe"],
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    description: "Social media scheduling, lead nurturing, SEO reporting, client dashboards, campaign automation.",
    workflows: "600+",
    tools: ["LinkedIn", "Google Sheets", "HubSpot"],
  },
  {
    icon: Code2,
    title: "SaaS & Dev Teams",
    description: "CI/CD alerts, bug tracking, user onboarding, churn prediction, deployment notifications.",
    workflows: "500+",
    tools: ["GitHub", "Jira", "Slack"],
  },
  {
    icon: Briefcase,
    title: "Freelancers & Solopreneurs",
    description: "Invoice automation, email sequences, content repurposing, lead capture, scheduling workflows.",
    workflows: "800+",
    tools: ["Gmail", "Notion", "Calendly"],
  },
];

const IndustryCards = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Use Cases</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Built for <span className="text-primary">Every Industry</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {industries.map((ind, i) => (
          <div
            key={ind.title}
            className={`reveal reveal-delay-${i + 1} rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all group`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ind.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{ind.title}</h3>
                <span className="text-xs font-mono text-[hsl(var(--gold))]">{ind.workflows} workflows</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{ind.description}</p>
            <div className="flex flex-wrap gap-2">
              {ind.tools.map((t) => (
                <span key={t} className="text-xs font-mono bg-muted text-muted-foreground rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryCards;
