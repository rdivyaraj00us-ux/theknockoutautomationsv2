import { Download, Settings, Play, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Purchase & Download",
    description: "Get instant access to all 8,000+ workflow templates. Download the complete package in seconds.",
  },
  {
    icon: Settings,
    title: "Import to n8n",
    description: "Open any JSON file and import it directly into your n8n instance. No code required.",
  },
  {
    icon: Play,
    title: "Configure & Run",
    description: "Add your API credentials, customize to your needs, and activate. Your workflow is live.",
  },
  {
    icon: Rocket,
    title: "Scale Your Business",
    description: "Watch hours of manual work disappear. Combine workflows to build powerful automation systems.",
  },
];

const HowItWorks = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Up and Running in <span className="text-primary">4 Simple Steps</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className={`reveal reveal-delay-${i + 1} relative`}>
            <div className="rounded-xl border border-border bg-card p-6 h-full hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">STEP {i + 1}</span>
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
