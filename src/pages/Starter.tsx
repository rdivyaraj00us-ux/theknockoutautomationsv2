import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { trackAndRedirectStarter } from "@/lib/trackingStarter";
import { ArrowRight, Check, Shield, Zap, Star, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const WORKFLOW_CARDS = [
  { title: "Lead Enrichment: LinkedIn → CRM", desc: "Auto-pull profile data and push enriched leads into HubSpot or Pipedrive." },
  { title: "Slack Bot Powered by Notion", desc: "Answers team questions instantly using your Notion knowledge base." },
  { title: "AI Email Reply Drafter", desc: "Reads incoming Gmail threads and drafts on-brand replies with GPT-4." },
  { title: "Shopify Order → WhatsApp Alert", desc: "New order pings your phone in under 5 seconds. Zero apps to install." },
  { title: "Web Scraper → Google Sheets → Alert", desc: "Monitor competitor pricing or stock and get notified on change." },
  { title: "+ 895 more workflows", desc: "AI agents, CRM sync, content automation, DevOps, finance, and more.", more: true },
];

const FAQS = [
  { q: "What if they don't work for me?", a: "30-day money-back guarantee. Email us, get a full refund. No questions, no forms, no friction." },
  { q: "Is this compatible with my n8n version?", a: "Yes — works with n8n 1.0 and above (cloud or self-hosted)." },
  { q: "Can I use these commercially?", a: "Yes. Full commercial rights. Use them for clients, agencies, or your own SaaS." },
  { q: "What if I don't know n8n?", a: "Each workflow is plug-and-play. Import the JSON, add your API keys, run. No coding required." },
  { q: "Is it really a one-time payment?", a: "Yes. Pay $9.99 once, own all 900 workflows forever. No subscription, no upsells in your inbox." },
];

const Starter = () => {
  usePageMeta(
    "900 n8n Workflows for $9.99 — Starter Pack | TKOA",
    "Get 900 hand-picked n8n workflow templates for $9.99. Lifetime access. Import and run in 30 seconds. 30-day refund guarantee.",
  );

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show sticky CTA after user scrolls past ~1.5 viewports (past §4 grid)
      setShowSticky(window.scrollY > window.innerHeight * 1.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buy = () => trackAndRedirectStarter();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* §1 · HERO — above the fold */}
      <section className="px-4 pt-8 pb-10 sm:pt-14 sm:pb-16 max-w-2xl mx-auto text-center">
        <Link to="/" className="inline-block text-xs text-muted-foreground hover:text-foreground mb-6 tracking-wide">
          ← The Knockout Automations
        </Link>

        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-5">
          STARTER PACK · MOST-REQUESTED
        </span>

        <h1 className="text-[2rem] leading-[1.1] sm:text-5xl font-black tracking-tight mb-4">
          900 n8n workflows. <span className="text-[hsl(var(--gold))]">$9.99.</span>{" "}
          <span className="text-muted-foreground">Lifetime access.</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
          Stop staring at a blank canvas. The 900 most-requested automations, ready to import and run in 30 seconds.
        </p>

        <Button
          onClick={buy}
          size="lg"
          className="w-full sm:w-auto bg-gradient-cta hover:opacity-90 text-base px-8 py-7 font-bold glow-red"
        >
          <Zap className="h-5 w-5 mr-2" />
          Get 900 Workflows — $9.99
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>

        <div className="flex items-center justify-center gap-4 mt-5 text-[11px] sm:text-xs text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-primary" /> 30-day refund</span>
          <span>·</span>
          <span>Apple Pay · Google Pay · Card</span>
        </div>
        <p className="text-[10px] text-muted-foreground/70 mt-2">
          Secure checkout powered by Dodo Payments · PCI DSS Compliant
        </p>
      </section>

      {/* §2 · Trust strip (honest, no fake metrics) */}
      <section className="px-4 py-6 border-y border-border bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Built by <span className="text-foreground font-semibold">TKOA Private Limited</span> · Registered Indian Company · CIN U58199GJ2025PTC169791
          </p>
        </div>
      </section>

      {/* §3 · The problem */}
      <section className="px-4 py-12 sm:py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black mb-4">You already know n8n is powerful.</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          The problem is the empty canvas. You spend 4 hours wiring a "simple" webhook. You chain nodes that silently break at midnight. You re-Google the same OAuth flow for the third time this week. You don't need another tutorial — you need a starting point that already works.
        </p>
      </section>

      {/* §4 · What's inside */}
      <section className="px-4 py-12 sm:py-16 bg-card/20 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">What's actually inside</h2>
            <p className="text-sm text-muted-foreground">Real workflows. Import the JSON, add credentials, run.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKFLOW_CARDS.map((w) => (
              <div
                key={w.title}
                className={`rounded-xl border p-5 ${w.more ? "border-primary/30 bg-primary/5" : "border-border bg-card"}`}
              >
                <h3 className={`font-bold text-sm mb-2 ${w.more ? "text-primary" : "text-foreground"}`}>{w.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 · Social proof — honest placeholder, no fabricated quotes */}
      <section className="px-4 py-12 sm:py-16 max-w-2xl mx-auto">
        <div className="text-center">
          <Star className="h-8 w-8 text-[hsl(var(--gold))] mx-auto mb-3" />
          <h2 className="text-xl sm:text-2xl font-black mb-3">Be one of the first 5 reviewers</h2>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            We launched the Starter Pack this week. We're not going to fake testimonials — we'd rather earn yours. The first 5 buyers who send us a written review get a free upgrade to the full 2,000+ Complete Library ($24.99 value).
          </p>
          <a
            href="mailto:support@theknockoutautomations.com?subject=Starter%20Pack%20Review"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Mail className="h-4 w-4" /> support@theknockoutautomations.com
          </a>
        </div>
      </section>

      {/* §6 · Comparison */}
      <section className="px-4 py-12 sm:py-16 bg-card/20 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">Starter vs Complete</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border-2 border-primary bg-card p-6 relative">
              <span className="absolute -top-3 left-6 text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                YOU'RE HERE
              </span>
              <h3 className="text-lg font-black mb-1">Starter</h3>
              <div className="text-3xl font-black text-[hsl(var(--gold))] mb-4">$9.99</div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 900 hand-picked workflows</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Lifetime access</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Email support</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 30-day refund</li>
              </ul>
              <Button onClick={buy} className="w-full mt-5 bg-gradient-cta hover:opacity-90 font-bold">
                Get Starter — $9.99
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-lg font-black mb-1">Complete</h3>
              <div className="text-3xl font-black text-foreground mb-4">$24.99</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" /> 2,000+ workflows (full library)</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" /> Lifetime access</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" /> Priority support</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" /> OpenClaw integration guide</li>
              </ul>
              <Link to="/" className="block text-center mt-5 text-sm text-muted-foreground hover:text-foreground underline underline-offset-2">
                See Complete Library →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* §7 · FAQ — refund first */}
      <section className="px-4 py-12 sm:py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">Quick answers</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer font-semibold text-sm flex justify-between items-center gap-3">
                {f.q}
                <span className="text-primary text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* §8 · Guarantee */}
      <section className="px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto rounded-2xl border-4 border-primary/40 bg-card p-8 sm:p-10 text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-4xl font-black mb-3">30-Day Money-Back Guarantee</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Try the entire Starter Pack risk-free for 30 days. Not satisfied for any reason? Email us — full refund, no questions asked.
          </p>
        </div>
      </section>

      {/* §9 · Final CTA */}
      <section className="px-4 pt-8 pb-20 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-3">
          Grab the 900 workflows for <span className="text-[hsl(var(--gold))]">$9.99</span>.
        </h2>
        <p className="text-sm text-muted-foreground mb-6">One-time payment. Lifetime access. Import in 30 seconds.</p>
        <Button
          onClick={buy}
          size="lg"
          className="w-full sm:w-auto bg-gradient-cta hover:opacity-90 text-base px-10 py-7 font-bold glow-red"
        >
          Get Instant Access <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
        <p className="text-[11px] text-muted-foreground mt-4">Apple Pay · Google Pay · Cards accepted</p>
      </section>

      <Footer />

      {/* Sticky mobile buy bar — appears after §4 */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 px-4 py-3 bg-background/95 backdrop-blur border-t border-border transition-transform duration-200 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showSticky}
      >
        <Button
          onClick={buy}
          className="w-full bg-gradient-cta hover:opacity-90 text-sm font-bold py-6"
        >
          <Zap className="h-4 w-4 mr-2" /> Get 900 Workflows — $9.99
        </Button>
      </div>
    </div>
  );
};

export default Starter;
