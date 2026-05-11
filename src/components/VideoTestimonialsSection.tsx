import { Play } from "lucide-react";

interface VideoSlot {
  videoSrc?: string;
  posterSrc?: string;
}

// Empty 4-slot grid. Drop MP4s at /videos/testimonial-{1-4}.mp4 + posters
// at /posters/testimonial-{1-4}.jpg later — placeholder auto-replaced if videoSrc set.
const SLOTS: VideoSlot[] = [{}, {}, {}, {}];

const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg, #2a1a3e, #5a2d4e)",
  "linear-gradient(135deg, #1a2e3a, #2d5a4e)",
  "linear-gradient(135deg, #3a1a1a, #5a4d2d)",
  "linear-gradient(135deg, #1a1a3a, #2d3a5a)",
];

const VideoTestimonialsSection = () => (
  <section className="py-20 sm:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-14 reveal">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight">
          Unable to <span className="text-[hsl(var(--gold))]">decide?</span>
        </h2>
        <div
          className="mx-auto mt-4"
          style={{
            height: 2,
            width: 80,
            background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
          }}
        />
        <p className="text-base text-muted-foreground mt-4">
          Video testimonials from people I've worked with — coming soon.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {SLOTS.map((slot, i) => {
          const hasVideo = Boolean(slot.videoSrc);
          return (
            <div
              key={i}
              className="reveal relative rounded-xl overflow-hidden border border-[hsl(var(--gold))]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold))]/60"
              style={{ aspectRatio: "4 / 5" }}
            >
              {hasVideo ? (
                <video
                  controls
                  preload="metadata"
                  poster={slot.posterSrc}
                  className="w-full h-full object-cover"
                >
                  <source src={slot.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <>
                  <div
                    className="absolute inset-0"
                    style={{ background: PLACEHOLDER_GRADIENTS[i % PLACEHOLDER_GRADIENTS.length] }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="rounded-full flex items-center justify-center"
                      style={{
                        width: 50,
                        height: 50,
                        background: "linear-gradient(135deg, #ff7a1a, #d51e10)",
                        border: "2px solid #fff",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider text-white/70 bg-black/40 backdrop-blur-sm rounded px-2 py-1">
                    Video coming soon
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default VideoTestimonialsSection;
