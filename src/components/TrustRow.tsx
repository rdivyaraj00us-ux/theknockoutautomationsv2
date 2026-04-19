import { Lock, ShieldCheck, Download } from "lucide-react";

interface TrustRowProps {
  className?: string;
}

const TrustRow = ({ className = "" }: TrustRowProps) => (
  <div
    className={`flex items-center justify-center gap-3 sm:gap-5 text-[11px] sm:text-xs text-muted-foreground flex-wrap ${className}`}
  >
    <span className="flex items-center gap-1.5">
      <Lock className="h-3.5 w-3.5 text-[hsl(var(--success))]" />
      Secure Payment
    </span>
    <span className="flex items-center gap-1.5">
      <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--success))]" />
      30-Day Money-Back Guarantee
    </span>
    <span className="flex items-center gap-1.5">
      <Download className="h-3.5 w-3.5 text-[hsl(var(--success))]" />
      Instant Download
    </span>
  </div>
);

export default TrustRow;
