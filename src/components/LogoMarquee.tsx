import { INTEGRATIONS } from "@/lib/constants";

const LogoMarquee = () => {
  const doubled = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section className="py-16 px-4 overflow-hidden border-y border-border bg-card/30">
      <div className="text-center mb-10 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Integrations</p>
        <h2 className="text-2xl sm:text-3xl font-black">
          Works With <span className="text-primary">75+ Tools</span> You Already Use
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap gap-3 mb-3">
          {doubled.map((name, i) => (
            <span
              key={`a-${i}`}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-border bg-card text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors shrink-0"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="flex whitespace-nowrap gap-3" style={{ animation: "marquee 40s linear infinite reverse" }}>
          {[...doubled].reverse().map((name, i) => (
            <span
              key={`b-${i}`}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-border bg-card text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
