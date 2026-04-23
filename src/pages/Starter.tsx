import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trackAndRedirectStarter } from "@/lib/trackingStarter";
import {
  ArrowRight,
  Check,
  Shield,
  Zap,
  Download,
  Clock,
  Gift,
  Sparkles,
  Mail,
  Lock,
  FileJson,
  PlayCircle,
  FolderTree,
  CreditCard,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

const WORKFLOW_CARDS = [
  {
    title: "Lead Enrichment: LinkedIn → CRM",
    desc: "Auto-pull profile data and push enriched leads into HubSpot, Pipedrive, or Salesforce.",
    tag: "Sales",
  },
  {
    title: "Slack Bot Powered by Notion",
    desc: "Answers your team's questions instantly using your Notion knowledge base + GPT-4.",
    tag: "AI",
  },
  {
    title: "AI Email Reply Drafter",
    desc: "Reads incoming Gmail threads and drafts on-brand replies you approve in one click.",
    tag: "Email",
  },
  {
    title: "Shopify Order → WhatsApp Alert",
    desc: "New order? Pings your phone in under 5 seconds. Zero apps to install.",
    tag: "E-commerce",
  },
  {
    title: "Web Scraper → Sheets → Alert",
    desc: "Monitor competitor pricing or stock levels and get notified the moment they change.",
    tag: "Data",
  },
  {
    title: "+ 895 more workflows",
    desc: "AI agents, CRM sync, content automation, DevOps, finance, support, marketing & more.",
    tag: "Library",
    more: true,
  },
];

const STARTER_INCLUSIONS = [
  "900 hand-picked n8n workflow templates",
  "Covers 19 categories, 60+ integrations",
  "Instant download — JSON files ready to import",
  "Lifetime access · No subscriptions",
  "30-day money-back guarantee",
];

const STARTER_FAQS = [
  {
    q: "What if they don't work for me?",
    a: "30-day money-back guarantee. Email support@theknockoutautomations.com, get a full refund. No forms, no questions, no friction.",
  },
  {
    q: "Is this compatible with my n8n version?",
    a: "Yes — every workflow works with n8n 1.0 and above, on n8n Cloud or self-hosted instances.",
  },
  {
    q: "Can I use these commercially?",
    a: "Yes. Full commercial rights. Use them for clients, agencies, or ship them inside your own SaaS.",
  },
  {
    q: "What if I don't know n8n?",
    a: "Each workflow is plug-and-play. Import the JSON, paste your API credentials, hit run. No coding required.",
  },
  {
    q: "Is it really a one-time payment?",
    a: "Yes. Pay $9.99 once and own all 900 workflows forever. No recurring charges, no upsell spam, no hidden fees.",
  },
  {
    q: "What's the difference vs the $24.99 Complete Library?",
    a: "Starter ($9.99) gets you 900 of the most-requested workflows. Complete ($24.99) unlocks all 2,000+ workflows plus the OpenClaw Integration Guide, the Master Prompt Engineering Guidebook, and priority support.",
  },
];

const Starter = () => {
  usePageMeta(
    "900 n8n Workflows for $9.99 — Starter Pack | The Knockout Automations",
    "Get 900 hand-picked n8n workflow templates for $9.99. Lifetime access. Import and run in 30 seconds. 30-day money-back guarantee.",
  );
  useScrollReveal();

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowSticky(window.scrollY > window.innerHeight * 1.4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buy = () => trackAndRedirectStarter();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-8 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, hsl(0 76% 57% / 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, hsl(44 81% 61% / 0.04) 0%, transparent 50%), hsl(240 33% 8%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-10 flex-wrap reveal">
            {[
              { icon: Download, label: "Instant Digital Delivery" },
              { icon: Clock, label: "Import & Run in 30 Sec" },
              { icon: Shield, label: "30-Day Refund Guarantee" },
            ].map((b) => (
              <span
                key={b.label}
                className="flex items-center gap-1.5 text-[11px] sm:text-xs tracking-wide text-muted-foreground bg-card/60 backdrop-blur-sm border border-border rounded-full px-3 py-1.5"
              >
                <b.icon className="h-3 w-3 text-primary" />
                {b.label}
              </span>
            ))}
          </div>

          <span className="reveal inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5 tracking-widest uppercase">
            <Sparkles className="h-3 w-3" /> Starter Pack · Most-Requested Workflows
          </span>

          <h1 className="reveal reveal-delay-1 text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black leading-[1.05] tracking-tight mb-5 sm:mb-7">
            <span className="block">
              <span className="text-gradient">900</span> n8n Workflows.
            </span>
            <span className="block mt-1">
              <span className="text-[hsl(var(--gold))]">$9.99.</span>{" "}
              <span className="text-muted-foreground text-[0.6em] font-bold">Lifetime Access.</span>
            </span>
          </h1>

          <p className="reveal reveal-delay-2 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop staring at a blank canvas. The{" "}
            <span className="text-foreground font-semibold">900 most-requested automations</span>, hand-picked by working n8n builders — ready to import and run in 30 seconds.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col items-center gap-3 mb-6 sm:mb-8">
            <Button
              onClick={buy}
              size="lg"
              className="bg-gradient-cta hover:opacity-90 text-base sm:text-lg px-10 py-7 font-bold glow-red animate-pulse-glow group cta-btn"
            >
              <Zap className="h-5 w-5 mr-2" />
              Get 900 Workflows — $9.99
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="flex items-center justify-center gap-4 text-[11px] sm:text-xs text-muted-foreground flex-wrap mt-1">
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-[hsl(var(--success))]" /> 30-day refund
              </span>
              <span>·</span>
              <span>Apple Pay · Google Pay · Card</span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground/80">
              Secure checkout powered by Dodo Payments · PCI DSS Compliant
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-3 mt-8 flex-wrap reveal reveal-delay-4">
            {[
              { num: "900", label: "Workflows" },
              { num: "60+", label: "Integrations" },
              { num: "19", label: "Categories" },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5">
                <span className="text-lg font-black text-primary font-mono">{p.num}</span>
                <span className="text-xs text-muted-foreground font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══ TRUST BAND — security, company, payments ═══ */}
      <section className="px-4 py-8 border-y border-border bg-card/30">
        <div className="max-w-5xl mx-auto reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { icon: BadgeCheck, label: "Registered Company", sub: "TKOA Pvt Ltd · CIN U58199GJ2025PTC169791" },
              { icon: Lock, label: "256-bit SSL Checkout", sub: "PCI DSS Compliant · Dodo Payments" },
              { icon: Shield, label: "30-Day Refund", sub: "No questions, no forms" },
              { icon: Download, label: "Instant Delivery", sub: "Email link in < 60 seconds" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1.5 px-2">
                <b.icon className="h-5 w-5 text-[hsl(var(--success))]" />
                <p className="text-xs sm:text-sm font-bold text-foreground leading-tight">{b.label}</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug">{b.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-semibold mr-1">
              We accept
            </span>
            {["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "UPI"].map((m) => (
              <span
                key={m}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-[10px] sm:text-xs font-mono font-semibold text-muted-foreground"
              >
                <CreditCard className="h-3 w-3" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS — real tool names = real product ═══ */}
      <LogoMarquee />

      {/* ═══ THE PROBLEM ═══ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 reveal">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 reveal reveal-delay-1">
            You already know n8n is <span className="text-primary">powerful</span>.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed reveal reveal-delay-2">
            The problem is the empty canvas. You spend{" "}
            <span className="text-foreground font-semibold">4 hours wiring a "simple" webhook</span>. You chain nodes that silently break at midnight. You re-Google the same OAuth flow for the third time this week.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4 reveal reveal-delay-3">
            You don't need another tutorial — you need a <span className="text-[hsl(var(--gold))] font-semibold">starting point that already works</span>.
          </p>
        </div>
      </section>

      {/* ═══ WHAT'S INSIDE ═══ */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 reveal">What's Inside</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 reveal reveal-delay-1">
              Real workflows. <span className="text-[hsl(var(--gold))]">Not mockups.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg reveal reveal-delay-2">
              Import the JSON, paste your credentials, hit run. Ready for immediate use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {WORKFLOW_CARDS.map((w, i) => (
              <div
                key={w.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} card-hover relative rounded-2xl border p-6 ${
                  w.more
                    ? "border-[hsl(var(--gold))]/40 bg-[hsl(var(--gold))]/5"
                    : "border-border bg-card"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 mb-3 ${
                    w.more
                      ? "bg-[hsl(var(--gold))]/15 text-[hsl(var(--gold))]"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {w.tag}
                </span>
                <h3 className={`font-bold text-base mb-2 ${w.more ? "text-[hsl(var(--gold))]" : "text-foreground"}`}>
                  {w.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXACTLY WHAT YOU GET — delivery proof ═══ */}
      <section className="py-20 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 reveal">Delivery</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 reveal reveal-delay-1">
              Exactly what lands in your <span className="text-primary">inbox</span>.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg reveal reveal-delay-2">
              No course portal. No waiting. No "check back next week." Real files, delivered in under a minute.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="reveal reveal-delay-1 card-hover rounded-2xl border border-border bg-card p-6">
              <FileJson className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-base mb-2">900 .json workflow files</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Native n8n format. Open n8n → Import from File → done. No conversion, no plugins.
              </p>
              <p className="text-[11px] font-mono text-[hsl(var(--gold))] uppercase tracking-wider">~14 MB · ZIP archive</p>
            </div>
          </div>

          <div className="mt-10 reveal reveal-delay-2 rounded-xl border border-border bg-card/40 p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
              {[
                { step: "1", label: "Pay $9.99", sub: "Apple Pay · Google Pay · Card · UPI" },
                { step: "2", label: "Email arrives", sub: "Within 60 seconds, from support@" },
                { step: "3", label: "Import & run", sub: "First workflow live in 30 seconds" },
              ].map((s) => (
                <div key={s.step} className="flex flex-col items-center gap-1">
                  <span className="h-7 w-7 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-black flex items-center justify-center">
                    {s.step}
                  </span>
                  <p className="font-semibold text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING — animated border, matching main site ═══ */}
      <section id="pricing" className="py-24 sm:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Starter Pack Pricing</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Everything for <span className="text-primary">$9.99</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              That's about a penny per workflow. One-time payment. Yours forever.
            </p>
          </div>

          <div className="reveal reveal-delay-1 relative">
            <div
              className="absolute -inset-[2px] rounded-2xl z-0"
              style={{
                background: "linear-gradient(270deg, hsl(0 76% 57%), hsl(44 81% 61%), hsl(0 76% 57%), hsl(44 81% 61%))",
                backgroundSize: "300% 300%",
                animation: "border-rotate 4s ease infinite",
              }}
            />

            <div className="relative rounded-2xl bg-card p-8 sm:p-12 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-cta text-primary-foreground px-6 py-1.5 rounded-full text-sm font-bold badge-shine whitespace-nowrap">
                Launch Price · Limited Time
              </div>

              <div className="mb-8 mt-4">
                <div className="flex items-end justify-center gap-3 mb-2">
                  <span className="text-6xl sm:text-7xl font-black text-foreground">$9.99</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  One-time payment · No subscriptions · No hidden fees
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-left mb-8">
                {STARTER_INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={buy}
                size="lg"
                className="w-full bg-gradient-cta hover:opacity-90 text-lg py-7 font-bold animate-pulse-glow group cta-btn"
              >
                <Zap className="h-5 w-5 mr-2" />
                Get Instant Access — $9.99
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-[hsl(var(--success))]" />
                  30-Day Money-Back Guarantee
                </span>
                <span>🔒 Secure Checkout</span>
              </div>
              <p className="text-[11px] text-muted-foreground/80 mt-3">
                Secure checkout powered by Dodo Payments · PCI DSS Compliant
              </p>
            </div>
          </div>

          <div className="mt-8 reveal reveal-delay-2 inline-flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground bg-card/60 border border-border rounded-full px-4 py-2">
            <Shield className="h-3.5 w-3.5 text-[hsl(var(--success))]" />
            <span>
              <span className="text-foreground font-semibold">TKOA Private Limited</span> · Registered Company · CIN: U58199GJ2025PTC169791
            </span>
          </div>
        </div>
      </section>

      {/* ═══ STARTER vs COMPLETE ═══ */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 reveal">Compare</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 reveal reveal-delay-1">
              Starter vs <span className="text-[hsl(var(--gold))]">Complete</span>
            </h2>
            <p className="text-muted-foreground text-base reveal reveal-delay-2">
              Start with Starter. Upgrade anytime — your purchase counts toward Complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Starter */}
            <div className="reveal reveal-delay-1 relative rounded-2xl border-2 border-primary bg-card p-7 sm:p-8 card-hover">
              <span className="absolute -top-3 left-6 text-[10px] font-bold tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full uppercase">
                You're Here
              </span>
              <h3 className="text-xl font-black mb-1">Starter Pack</h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-4xl font-black text-[hsl(var(--gold))]">$9.99</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
              <ul className="space-y-2.5 text-sm mb-6">
                {[
                  "900 hand-picked workflows",
                  "19 categories, 60+ integrations",
                  "Lifetime access",
                  "Full commercial rights",
                  "Email support",
                  "30-day refund",
                ].map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="h-4 w-4 text-[hsl(var(--success))] shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                onClick={buy}
                className="w-full bg-gradient-cta hover:opacity-90 font-bold cta-btn"
              >
                Get Starter — $9.99
              </Button>
            </div>

            {/* Complete */}
            <div className="reveal reveal-delay-2 rounded-2xl border border-[hsl(var(--gold))]/30 bg-card/60 p-7 sm:p-8 card-hover">
              <span className="inline-block text-[10px] font-bold tracking-widest text-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/30 px-3 py-1 rounded-full uppercase mb-3">
                Most Popular
              </span>
              <h3 className="text-xl font-black mb-1">Complete Library</h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-4xl font-black text-foreground">$24.99</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
              <ul className="space-y-2.5 text-sm mb-6">
                {[
                  "2,000+ workflows (full library)",
                  "75+ integrations",
                  "OpenClaw Integration Guide",
                  "Master Prompt Engineering Guidebook",
                  "Top 100 Quick-Start Guide",
                  "Priority email support",
                ].map((f) => (
                  <li key={f} className="flex gap-2.5 text-muted-foreground">
                    <Gift className="h-4 w-4 text-[hsl(var(--gold))] shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                className="block text-center w-full border border-border hover:border-[hsl(var(--gold))]/50 rounded-md py-2.5 text-sm font-semibold transition-colors"
              >
                See Complete Library →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HONEST SOCIAL PROOF — first 5 reviewers ═══ */}
      <section className="py-20 sm:py-24 px-4">
        <div className="max-w-2xl mx-auto reveal">
          <div className="rounded-2xl border border-[hsl(var(--gold))]/30 bg-gradient-to-br from-[hsl(var(--gold))]/5 to-transparent p-8 sm:p-10 text-center">
            <Sparkles className="h-10 w-10 text-[hsl(var(--gold))] mx-auto mb-4" />
            <p className="text-[hsl(var(--gold))] font-semibold text-xs uppercase tracking-widest mb-3">
              Founding Reviewer Offer
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Be one of the first 5 reviewers
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              We launched Starter Pack this week. We won't fake testimonials — we'd rather earn yours. The first 5 buyers who send a written review get a{" "}
              <span className="text-foreground font-semibold">free upgrade to the Complete Library</span> ($24.99 value) and their quote featured here.
            </p>
            <a
              href="mailto:support@theknockoutautomations.com?subject=Starter%20Pack%20Review"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              support@theknockoutautomations.com
            </a>
          </div>
        </div>
      </section>

      {/* ═══ GUARANTEE — matches main site ═══ */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-section">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="rounded-2xl border border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/5 p-8 sm:p-12">
            <Shield className="h-16 w-16 text-[hsl(var(--success))] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              30-Day <span className="text-[hsl(var(--success))]">Money-Back</span> Guarantee
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Try every workflow. Import them, customize them, run them in your business. If you're not completely satisfied within 30 days, email us and we'll refund every penny. No questions asked. No hoops to jump through.
            </p>
            <p className="text-foreground font-semibold text-sm">
              Your purchase is 100% risk-free. We take on all the risk so you don't have to.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Got Questions? <span className="text-primary">Answers.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1">
            <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
              {STARTER_FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 sm:py-32 px-4 bg-gradient-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-5 reveal">
            Grab the 900 workflows for{" "}
            <span className="text-[hsl(var(--gold))]">$9.99</span>.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10 reveal reveal-delay-1">
            One-time payment. Lifetime access. Import in 30 seconds.
          </p>
          <Button
            onClick={buy}
            size="lg"
            className="reveal reveal-delay-2 bg-gradient-cta hover:opacity-90 text-lg px-12 py-7 font-bold glow-red animate-pulse-glow group cta-btn"
          >
            <Zap className="h-5 w-5 mr-2" />
            Get Instant Access
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-xs text-muted-foreground mt-5 reveal reveal-delay-3">
            Apple Pay · Google Pay · Cards accepted · 30-day refund
          </p>
        </div>
      </section>

      <Footer />

      {/* Sticky mobile buy bar — appears after the user scrolls past hero+problem */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 px-4 py-3 bg-background/95 backdrop-blur-md border-t border-border transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showSticky}
      >
        <Button
          onClick={buy}
          className="w-full bg-gradient-cta hover:opacity-90 text-sm font-bold py-6 cta-btn"
        >
          <Zap className="h-4 w-4 mr-2" /> Get 900 Workflows — $9.99
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Starter;
