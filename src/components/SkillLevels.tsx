import { Sparkles, Wrench, Code2 } from "lucide-react";

const levels = [
  {
    icon: Sparkles,
    tier: "Beginner",
    tagline: "Zero code needed",
    color: "#22c55e",
    features: [
      "One-click JSON import to n8n",
      "No coding skills required",
      "Step-by-step documentation included",
      "Safe defaults — just add your API keys",
    ],
  },
  {
    icon: Wrench,
    tier: "Intermediate",
    tagline: "Customize & combine",
    color: "#3b82f6",
    features: [
      "Swap integrations (e.g., Slack → Discord)",
      "Combine multiple workflows into systems",
      "Customize triggers and conditions",
      "Build client-specific automations",
    ],
  },
  {
    icon: Code2,
    tier: "Advanced",
    tagline: "Production-grade patterns",
    color: "#a855f7",
    features: [
      "Error handling & retry logic built-in",
      "Rate-limit aware batching patterns",
      "Modular, dev-ready JSON structure",
      "Auth refresh & pagination solved",
    ],
  },
];

const SkillLevels = () => (
  <section className="py-20 sm:py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14 reveal">
        <p className="text-[hsl(var(--primary))] font-semibold text-sm uppercase tracking-widest mb-3">
          For Everyone
        </p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Built for <span className="text-[hsl(var(--primary))]">Every Skill Level</span>
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
          Whether you're just starting with n8n or shipping client automations weekly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {levels.map((level, i) => (
          <div
            key={level.tier}
            className={`reveal reveal-delay-${i + 1} relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 card-hover overflow-hidden group`}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${level.color}, transparent)`,
              }}
            />

            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: level.color + "15" }}
              >
                <level.icon className="h-5 w-5" style={{ color: level.color }} />
              </div>
              <div>
                <h3 className="font-bold text-base">{level.tier}</h3>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">{level.tagline}</p>
              </div>
            </div>

            <div className="space-y-3">
              {level.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <div
                    className="h-1.5 w-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ backgroundColor: level.color }}
                  />
                  <span className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillLevels;