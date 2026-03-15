import { Bot, Mail, MessageSquare, BarChart3, ShoppingCart, Users, Share2, Server } from "lucide-react";

const industries = [
  {
    icon: Bot,
    title: "AI & Machine Learning",
    count: 301,
    description: "GPT workflows, content generation, classification, embeddings, chatbots.",
    tools: ["OpenAI", "Google Gemini", "LangChain"],
    color: "#a855f7",
  },
  {
    icon: Share2,
    title: "Automation & Integration",
    count: 515,
    description: "Cross-platform sync, webhooks, data pipelines, multi-step triggers.",
    tools: ["Zapier Alt", "Webhooks", "HTTP"],
    color: "#ef4444",
  },
  {
    icon: MessageSquare,
    title: "Messaging & Chatbots",
    count: 318,
    description: "Telegram bots, Slack alerts, Discord notifications, WhatsApp flows.",
    tools: ["Telegram", "Slack", "Discord"],
    color: "#3b82f6",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    count: 249,
    description: "ETL pipelines, reporting dashboards, data cleanup, aggregation.",
    tools: ["Google Sheets", "PostgreSQL", "Airtable"],
    color: "#22c55e",
  },
  {
    icon: Mail,
    title: "Email & Communication",
    count: 210,
    description: "Drip campaigns, transactional emails, inbox automation, newsletters.",
    tools: ["Gmail", "Mailchimp", "SendGrid"],
    color: "#f59e0b",
  },
  {
    icon: Users,
    title: "CRM & Sales",
    count: 146,
    description: "Lead scoring, pipeline automation, follow-ups, deal tracking.",
    tools: ["HubSpot", "Salesforce", "Pipedrive"],
    color: "#ec4899",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    count: 132,
    description: "Order processing, inventory sync, abandoned carts, fulfillment.",
    tools: ["Shopify", "WooCommerce", "Stripe"],
    color: "#06b6d4",
  },
  {
    icon: Server,
    title: "DevOps & IT",
    count: 121,
    description: "CI/CD alerts, monitoring, deployment, incident response, infra sync.",
    tools: ["GitHub", "Jira", "Docker"],
    color: "#6366f1",
  },
];

const IndustryCards = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14 reveal">
        <p className="text-[hsl(var(--primary))] font-semibold text-sm uppercase tracking-widest mb-3">19 Categories</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Workflows for <span className="text-[hsl(var(--primary))]">Every Use Case</span>
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
          Real counts from our catalogued library. The full bundle includes 2,000+ across all categories.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {industries.map((ind, i) => (
          <div
            key={ind.title}
            className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 card-hover overflow-hidden group`}
          >
            {/* Left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ backgroundColor: ind.color + "60" }} />

            <div className="flex items-center gap-3 mb-3">
              <div
                className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{ backgroundColor: ind.color + "15" }}
              >
                <ind.icon className="h-4 w-4" style={{ color: ind.color }} />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm truncate">{ind.title}</h3>
                <span className="text-xs font-mono font-bold" style={{ color: ind.color }}>
                  {ind.count} workflows
                </span>
              </div>
            </div>

            <p className="text-[hsl(var(--muted-foreground))] text-xs leading-relaxed mb-3">{ind.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {ind.tools.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono bg-[hsl(var(--background))] text-[hsl(var(--muted-foreground))] rounded-full px-2 py-0.5 border border-[hsl(var(--border))]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[hsl(var(--muted-foreground))] text-xs mt-6 reveal">
        + 11 more categories including Social Media, Marketing & SEO, Finance, HR, Content Creation, and more.
      </p>
    </div>
  </section>
);

export default IndustryCards;
