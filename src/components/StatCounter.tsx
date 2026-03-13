import { useCountUp } from "@/hooks/useCountUp";
import { Bot, Clock, Star, Users } from "lucide-react";

const stats = [
  { icon: Bot, value: 8000, suffix: "+", label: "Workflows", prefix: "" },
  { icon: Users, value: 3200, suffix: "+", label: "Happy Customers", prefix: "" },
  { icon: Clock, value: 20, suffix: "+", label: "Hrs Saved/Week", prefix: "" },
  { icon: Star, value: 49, suffix: "", label: "Star Rating", prefix: "", decimal: true },
];

const StatItem = ({ icon: Icon, value, suffix, label, prefix, decimal }: {
  icon: typeof Bot; value: number; suffix: string; label: string; prefix?: string; decimal?: boolean;
}) => {
  const { count, ref } = useCountUp(value);
  const display = decimal ? (count / 10).toFixed(1) : count.toLocaleString();

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
