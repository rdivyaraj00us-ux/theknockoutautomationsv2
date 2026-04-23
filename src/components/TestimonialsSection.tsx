import { Star } from "lucide-react";
import { starterTestimonials, type Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  heading?: string;
  subheading?: string;
  className?: string;
}

const TestimonialsSection = ({
  testimonials = starterTestimonials,
  heading = "What builders are saying",
  subheading = "Real feedback from the n8n community",
  className = "",
}: TestimonialsSectionProps) => {
  return (
    <section className={`py-20 sm:py-28 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold))]/40 hover:shadow-[0_8px_32px_-12px_hsl(var(--gold)/0.25)]`}
            >
              {t.rating && (
                <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
                    />
                  ))}
                </div>
              )}

              <blockquote className="font-serif italic text-base sm:text-[1.05rem] leading-relaxed text-foreground/90 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-border/60">
                <p className="font-sans font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
