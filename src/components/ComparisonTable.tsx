import { Check, X } from "lucide-react";

const features = [
  { feature: "Pre-built workflows", us: "2,000+", them: "100-500", better: true },
  { feature: "Price", us: "$24.99 one-time", them: "$29-99/month", better: true },
  { feature: "Tool integrations", us: "75+", them: "10-30", better: true },
  { feature: "n8n compatible", us: true, them: true, better: false },
  { feature: "No-code friendly", us: true, them: true, better: false },
  { feature: "One-time payment", us: true, them: false, better: true },
  { feature: "Money-back guarantee", us: "30 days", them: "None", better: true },
  { feature: "Instant download", us: true, them: false, better: true },
];

const Cell = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-[hsl(var(--success))] mx-auto" />
    ) : (
      <X className="h-5 w-5 text-primary mx-auto" />
    );
  }
  return <span>{value}</span>;
};

const ComparisonTable = () => (
  <section className="py-20 sm:py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Compare</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          See How We <span className="text-primary">Stack Up</span>
        </h2>
      </div>

      <div className="reveal reveal-delay-1 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card">
              <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Feature</th>
              <th className="text-center py-4 px-6 font-bold text-primary border-x border-border bg-primary/5">
                Knockout
              </th>
              <th className="text-center py-4 px-6 font-semibold text-muted-foreground">Typical n8n Bundles</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={f.feature} className={`border-t border-border ${i % 2 === 0 ? "" : "bg-card/30"}`}>
                <td className="py-3 px-6 text-muted-foreground">{f.feature}</td>
                <td className="py-3 px-6 text-center font-semibold border-x border-border bg-primary/5">
                  <Cell value={f.us} />
                </td>
                <td className="py-3 px-6 text-center text-muted-foreground">
                  <Cell value={f.them} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
