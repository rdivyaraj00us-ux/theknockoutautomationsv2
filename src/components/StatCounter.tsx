import { useCountUp } from "@/hooks/useCountUp";
import { Bot, Clock, Layers, Wrench } from "lucide-react";

const stats = [
  { icon: Bot, value: 8000, suffix: "+", label: "n8n Workflows", prefix: "" },
  { icon: Layers, value: 1967, suffix: "", label: "Categorized Templates", prefix: "" },
  { icon: Wrench, value: 74, suffix: "+", label: "Tool Integrations", prefix: "" },
  { icon: Clock, value: 20, suffix: "+", label: "Hrs Saved/Week", prefix: "" },
];

const StatItem = ({ icon: Icon, value, suffix, label, prefix }: {
  icon: typeof Bot; value: number; suffix: string; label: string; prefix?: string;
}) => {
  const { count, ref } = useCountUp(value);
  const display = count.toLocaleString();

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
      <div className="text-3xl sm:text-4xl font-black text-foreground">
        {prefix}{display}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1 font-medium">{label}</div>
    </div>
  );
};

const StatCounter = () => (
  <section className="border-y border-border bg-card/50 py-4">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  </section>
);

export default StatCounter;
