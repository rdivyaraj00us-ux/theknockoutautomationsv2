import { useEffect, Suspense } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";

const InlineCTA = lazyWithRetry(() => import("@/components/InlineCTA"));
const PricingSection = lazyWithRetry(() => import("@/components/PricingSection"));
const SolutionSection = lazyWithRetry(() => import("@/components/SolutionSection"));
const LogoMarquee = lazyWithRetry(() => import("@/components/LogoMarquee"));
const GuaranteeSection = lazyWithRetry(() => import("@/components/GuaranteeSection"));
const ProblemSection = lazyWithRetry(() => import("@/components/ProblemSection"));
const HowItWorks = lazyWithRetry(() => import("@/components/HowItWorks"));
const WhatYouCanBuild = lazyWithRetry(() => import("@/components/WhatYouCanBuild"));
const SkillLevels = lazyWithRetry(() => import("@/components/SkillLevels"));
const IndustryCards = lazyWithRetry(() => import("@/components/IndustryCards"));
const WorkflowExplorerPreview = lazyWithRetry(() => import("@/components/WorkflowExplorerPreview"));
const ComparisonTable = lazyWithRetry(() => import("@/components/ComparisonTable"));
const FAQSection = lazyWithRetry(() => import("@/components/FAQSection"));
const FinalCTA = lazyWithRetry(() => import("@/components/FinalCTA"));
const Footer = lazyWithRetry(() => import("@/components/Footer"));
const MobileStickyBar = lazyWithRetry(() => import("@/components/MobileStickyBar"));
const ExitIntentPopup = lazyWithRetry(() => import("@/components/ExitIntentPopup"));
const PurchaseToast = lazyWithRetry(() => import("@/components/PurchaseToast"));

const LazyFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />

      {/* ═══ CORE CONVERSION FLOW (screens 1-6) ═══ */}
      <HeroSection />
      <StatCounter />

      <Suspense fallback={null}>
        <InlineCTA />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <SolutionSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <LogoMarquee />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <GuaranteeSection />
      </Suspense>

      {/* ═══ SUPPORTING CONTENT ═══ */}
      <Suspense fallback={<LazyFallback />}>
        <ProblemSection />
      </Suspense>
      <Suspense fallback={<LazyFallback />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<LazyFallback />}>
        <WhatYouCanBuild />
      </Suspense>

      {/* ═══ HIDDEN ON MOBILE, VISIBLE ON DESKTOP ═══ */}
      <div className="hidden md:block">
        <Suspense fallback={<LazyFallback />}>
          <SkillLevels />
          <IndustryCards />
          <WorkflowExplorerPreview />
          <ComparisonTable />
        </Suspense>
      </div>

      {/* ═══ CLOSING FLOW ═══ */}
      <Suspense fallback={<LazyFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<LazyFallback />}>
        <FinalCTA />
      </Suspense>
      <Suspense fallback={<LazyFallback />}>
        <Footer />
      </Suspense>

      {/* ═══ OVERLAYS ═══ */}
      <Suspense fallback={null}>
        <MobileStickyBar />
        <ExitIntentPopup />
        <PurchaseToast />
      </Suspense>
    </div>
  );
};

export default Index;
