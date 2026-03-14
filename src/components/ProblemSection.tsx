import { AlertTriangle, Clock, Puzzle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Building From Scratch Takes Weeks",
    description: "Every new automation means starting from zero — wiring up nodes, handling auth tokens, dealing with pagination, rate limits, and error handling. A single workflow can take days to get right.",
    cost: "Weeks lost per project",
  },
  {
    icon: Puzzle,
    title: "Community Templates Are Fragmented",
    description: "Free n8n templates are scattered across forums, GitHub repos, and blog posts. Most are outdated, poorly documented, or break after n8n updates. Finding one that actually works is a full-time job.",
    cost: "Hours wasted searching & debugging",
  },
  {
    icon: AlertTriangle,
    title: "Every Client Project Starts Over",
    description: "Agencies and freelancers rebuild the same integrations for every client — CRM syncs, lead routing, report generation. Without a template library, you're reinventing the wheel on every project.",
    cost: "Thousands in unbillable hours",
  },
];

const ProblemSection = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          Why Building n8n Workflows <span className="text-primary">From Scratch</span> Hurts
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          You already chose n8n. Now you need templates that actually work — not another week of debugging.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <div
            key={p.title}
            className={`reveal reveal-delay-${i + 1} rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 group`}
          >
            <p.icon className="h-10 w-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
            <div className="text-primary font-bold text-sm bg-primary/10 rounded-lg px-3 py-2 inline-block">
              {p.cost}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
