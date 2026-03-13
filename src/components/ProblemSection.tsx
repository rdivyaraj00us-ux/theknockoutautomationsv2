import { AlertTriangle, DollarSign, Clock } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "20+ Hours Wasted Weekly",
    description: "You're manually doing tasks that should be automated — data entry, follow-ups, report generation, file management.",
    cost: "$2,000+/month in lost productivity",
  },
  {
    icon: DollarSign,
    title: "Hiring Developers Is Expensive",
    description: "Custom automation development costs $5,000-$50,000+. And you still need to maintain, update, and debug every workflow.",
    cost: "$10,000+/year in dev costs",
  },
  {
    icon: AlertTriangle,
    title: "Starting From Scratch Every Time",
    description: "Building workflows from zero means weeks of trial and error. Most people give up before seeing results.",
    cost: "Months of wasted time",
  },
];

const ProblemSection = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          Your Time Is <span className="text-primary">Bleeding Money</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Every day without automation is costing you more than you think.
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
