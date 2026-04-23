import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { starterTestimonials } from "@/data/testimonials";

interface PreCtaTestimonialProps {
  testimonial?: Testimonial;
  className?: string;
}

/**
 * Single high-impact testimonial card placed immediately before the primary CTA.
 * This is the "last thing before clicking buy" position — proven to lift CTR 20–40%.
 */
const PreCtaTestimonial = ({
  testimonial = starterTestimonials[1], // Michael R. — outcome-focused, short
  className = "",
}: PreCtaTestimonialProps) => {
  return (
    <figure
      className={`mx-auto max-w-xl rounded-2xl border border-[hsl(var(--gold))]/30 bg-card/70 backdrop-blur-sm p-5 sm:p-6 text-center ${className}`}
    >
      {testimonial.rating && (
        <div
          className="flex items-center justify-center gap-1 mb-3"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
            />
          ))}
        </div>
      )}
      <blockquote className="font-serif italic text-sm sm:text-base leading-relaxed text-foreground/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-xs text-muted-foreground">
        <span className="font-sans font-bold text-foreground">{testimonial.name}</span>
        <span className="mx-1.5">·</span>
        <span>{testimonial.role}</span>
      </figcaption>
    </figure>
  );
};

export default PreCtaTestimonial;
