import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="py-20 sm:py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">See It In Action</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Import & Run Your First Workflow in <span className="text-primary">2 Minutes</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Watch how easy it is to go from download to a fully running automation.
        </p>
      </div>

      <div className="reveal reveal-delay-1 relative rounded-2xl border border-border bg-card overflow-hidden aspect-video flex items-center justify-center group cursor-pointer glow-red">
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-primary/5" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />

        <div className="relative z-10 text-center">
          <div className="h-20 w-20 rounded-full bg-gradient-cta flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-2xl">
            <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
          <p className="text-foreground font-bold text-lg">Demo Coming Soon</p>
          <p className="text-muted-foreground text-sm mt-1">How to Import & Run Your First Workflow</p>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
