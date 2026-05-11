const stats = [
  { num: "10+ Years", label: "Business experience" },
  { num: "$50M+", label: "Client outcomes generated" },
  { num: "2,000+", label: "Workflows shipped" },
  { num: "TKOA Pvt Ltd", label: "Registered Indian company" },
];

const MeetYourMentor = () => (
  <section className="py-20 sm:py-28 px-4 bg-gradient-section">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[40%_1fr] gap-10 lg:gap-14 items-start">
        {/* Founder card */}
        <div className="reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
            Meet your Mentor
          </p>
          <div
            className="relative rounded-2xl overflow-hidden border border-[hsl(var(--gold))]/30 bg-card"
            style={{ aspectRatio: "4 / 5", boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)" }}
          >
            <img
              src="/founder.jpg"
              alt="Dan Murphy, founder of TKOA Private Limited"
              loading="lazy"
              decoding="async"
              width={400}
              height={500}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-black text-foreground">Dan Murphy</h3>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mt-1">
              Founder · TKOA Private Limited
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="reveal reveal-delay-1">
          <div className="space-y-5 text-[15px] sm:text-base text-muted-foreground" style={{ lineHeight: 1.75 }}>
            <p>
              Hey folks, I'm Dan Murphy, and I'm super excited to be your guide into automation that actually pays the bills.
            </p>
            <p>
              Over the last 10+ years I've built automation systems for marketing agencies, ecom stores, and SaaS founders — generating over $50M in client outcomes through n8n, AI agents, and lean workflow stacks. Every workflow in this bundle is one I built for a real client, then refactored and documented so you can import it in 60 seconds.
            </p>
            <p>
              When you grab The Vault, you're not getting a community or a course. You're getting the actual JSON files, the prompts, the model guides — everything I'd hand my own engineering team. Reply to any email after you buy. I respond personally — usually within hours.
            </p>
          </div>
          <p className="italic text-foreground/80 mt-5 text-sm">— Dan, Founder of TKOA Pvt Ltd</p>

          {/* Stat grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[hsl(var(--gold))]/25 bg-card/60 backdrop-blur-sm p-4 text-center"
              >
                <div className="text-xl sm:text-2xl lg:text-[28px] font-black text-[hsl(var(--gold))] leading-tight">
                  {s.num}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-mono mt-1.5 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            <a
              href="mailto:theknockoutacademy@gmail.com"
              className="text-[hsl(var(--gold))] hover:underline underline-offset-4"
            >
              Reply to any email after you buy — Dan answers personally.
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MeetYourMentor;
