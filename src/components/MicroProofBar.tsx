import { Star } from "lucide-react";

interface MicroProofBarProps {
  quote?: string;
  attribution?: string;
  rating?: number;
  ratingLabel?: string;
  className?: string;
}

/**
 * Compact above-the-fold trust signal.
 * Designed to be the ONE testimonial-style cue every visitor sees,
 * even if they bounce before scrolling.
 */
const MicroProofBar = ({
  quote = "Finally, n8n workflows that actually work out of the box.",
  attribution = "Aarav S. — Digital Consultant",
  rating = 5,
  ratingLabel = "Rated 5.0 by early builders",
  className = "",
}: MicroProofBarProps) => {
  return (
    <div
      className={`mx-auto max-w-2xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm ${className}`}
    >
      <div
        className="flex items-center gap-1 shrink-0"
        aria-label={`${rating} out of 5 stars — ${ratingLabel}`}
      >
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
          />
        ))}
        <span className="ml-1.5 text-[11px] sm:text-xs font-semibold text-muted-foreground hidden sm:inline">
          {ratingLabel}
        </span>
      </div>
      <span className="hidden sm:inline text-muted-foreground/40">·</span>
      <p className="text-[11px] sm:text-xs text-foreground/90 text-center">
        <span className="font-serif italic">&ldquo;{quote}&rdquo;</span>{" "}
        <span className="text-muted-foreground not-italic">— {attribution}</span>
      </p>
    </div>
  );
};

export default MicroProofBar;
