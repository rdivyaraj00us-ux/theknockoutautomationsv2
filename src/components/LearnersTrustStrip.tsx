import { Lock, ShieldCheck } from "lucide-react";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #ff7a1a, #d51e10)",
  "linear-gradient(135deg, #5ad7c8, #2f8a83)",
  "linear-gradient(135deg, #ffd14d, #c4881a)",
  "linear-gradient(135deg, #8aff7a, #2f8a45)",
  "linear-gradient(135deg, #c084fc, #7c3aed)",
  "linear-gradient(135deg, #fb7185, #be123c)",
];

const LearnersTrustStrip = () => (
  <section className="py-12 sm:py-16 px-4">
    <div className="max-w-6xl mx-auto reveal">
      <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-center">
          {/* Left: headline + avatar row */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-foreground leading-tight">
              12,400+ operators have unlocked The Vault
            </h3>
            <div className="flex items-center mt-5" style={{ height: 44 }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 40,
                    height: 40,
                    background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                    border: "2px solid hsl(var(--background))",
                    marginLeft: i === 0 ? 0 : -12,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground mt-3">
              Active workflow builders across 47 countries
            </p>
          </div>

          {/* Right: 3 trust badge tiles */}
          <div className="space-y-3">
            {[
              {
                icon: <Lock className="h-5 w-5 text-[hsl(var(--success))]" />,
                title: "Stripe-secured checkout",
                sub: "256-bit SSL · PCI-DSS Compliant",
              },
              {
                icon: <ShieldCheck className="h-5 w-5 text-[hsl(var(--gold))]" />,
                title: "30-day money-back guarantee",
                sub: "No questions asked · No hoops",
              },
              {
                icon: <span className="text-lg">🇮🇳</span>,
                title: "Registered Indian company",
                sub: "TKOA Pvt Ltd · CIN U58199GJ2025PTC169791",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3"
              >
                <div className="shrink-0 w-8 flex items-center justify-center">{b.icon}</div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-foreground">{b.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LearnersTrustStrip;
