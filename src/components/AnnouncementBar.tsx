import { useCountdown } from "@/hooks/useCountdown";
import { PRICING } from "@/lib/constants";

const AnnouncementBar = () => {
  const { hours, minutes, seconds, expired } = useCountdown();

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-cta text-primary-foreground py-2 px-4 text-center text-sm font-semibold relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="hidden sm:inline">🔥</span>
        <span className="sm:hidden">🔥 {PRICING.discount}% OFF — ${PRICING.sale} for 2,000+ Workflows</span>
        <span className="hidden sm:inline">
          Launch Pricing: {PRICING.discount}% OFF — 2,000+ Workflows for Just ${PRICING.sale}
        </span>
        {!expired && (
          <span className="font-mono bg-primary-foreground/20 rounded px-2 py-0.5 text-xs sm:text-sm">
            {pad(hours)}:{pad(minutes)}:{pad(seconds)}
          </span>
        )}
        {expired && (
          <span className="font-mono bg-primary-foreground/20 rounded px-2 py-0.5 text-xs sm:text-sm">
            ENDING SOON
          </span>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBar;
