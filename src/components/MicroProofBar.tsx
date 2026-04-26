import { Star } from "lucide-react";

interface MicroProofBarProps {
  quote?: string;
  attribution?: string;
  role?: string;
  rating?: number;
  ratingLabel?: string;
  className?: string;
}

/**
 * Compact above-the-fold trust signal, styled to match PreCtaTestimonial.
 * Gold-bordered card: stars on top, italic serif quote, attribution beneath.
 */
const MicroProofBar = ({
  quote = "Finally, n8n workflows that actually work out of the box.",
  attribution = "Aarav S.",
  role = "Digital Consultant",
  rating = 5,
  ratingLabel = "Rated 5.0 by early builders",
  className = "",
}: MicroProofBarProps) => {
  return (
    <figure
      className={`mx-auto max-w-xl rounded-2xl border border-[hsl(var(--gold))]/30 bg-card/70 backdrop-blur-sm p-5 sm:p-6 text-center ${className}`}
    >
      <div
        className="flex items-center justify-center gap-1 mb-3"
        aria-label={`${rating} out of 5 stars — ${ratingLabel}`}
      >
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
          />
        ))}
      </div>
      <blockquote className="font-serif italic text-sm sm:text-base leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-xs text-muted-foreground">
        <span className="font-sans font-bold text-foreground">{attribution}</span>
        <span className="mx-1.5">·</span>
        <span>{role}</span>
      </figcaption>
    </figure>
  );
};

export default MicroProofBar;
