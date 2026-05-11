import { useCountUp } from "@/hooks/useCountUp";
import { Star } from "lucide-react";

const BigStatShowcase = () => {
  const { count, ref } = useCountUp(12400, 1200);
  const display = count.toLocaleString();

  return (
    <section
      className="py-20 sm:py-24 px-4 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--gold) / 0.08) 0%, transparent 70%), hsl(var(--background))",
      }}
    >
      <div className="max-w-4xl mx-auto reveal">
        <div className="rounded-3xl border border-[hsl(var(--gold))]/20 bg-card/40 backdrop-blur-sm p-8 sm:p-14 text-center card-hover relative">
          <p className="text-sm sm:text-base uppercase tracking-widest text-muted-foreground font-semibold mb-3">
            Trained over
          </p>
          <div
            ref={ref}
            className="text-gradient font-black tracking-tight"
            style={{
              fontSize: "clamp(56px, 12vw, 96px)",
              lineHeight: 0.95,
              minHeight: "1em",
            }}
            aria-label="12,400 plus operators trained"
          >
            {display}+
          </div>
          <p className="text-base sm:text-xl text-muted-foreground mt-3">
            Operators in the Last 6 Months
          </p>

          <div
            className="mx-auto my-8"
            style={{
              height: 1,
              width: 200,
              background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
            }}
          />

          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-7 w-7 sm:h-8 sm:w-8"
                  style={{ fill: "#ffc94d", color: "#ffc94d" }}
                />
              ))}
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              <span className="font-bold text-foreground">1,840+ People</span> Rated The Vault with{" "}
              <span className="text-[hsl(var(--gold))] font-black">4.96 Stars</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigStatShowcase;
