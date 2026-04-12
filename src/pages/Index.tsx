import { useEffect, lazy, Suspense } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";

const PricingSection = lazy(() => import("@/components/PricingSection"));
const SolutionSection = lazy(() => import("@/components/SolutionSection"));
const LogoMarquee = lazy(() => import("@/components/LogoMarquee"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const ProblemSection = lazy(() => import("@/components/ProblemSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const WhatYouCanBuild = lazy(() => import("@/components/WhatYouCanBuild"));
const SkillLevels = lazy(() => import("@/components/SkillLevels"));
const IndustryCards = lazy(() => import("@/components/IndustryCards"));
const WorkflowExplorerPreview = lazy(() => import("@/components/WorkflowExplorerPreview"));
const ComparisonTable = lazy(() => import("@/components/ComparisonTable"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const MobileStickyBar = lazy(() => import("@/components/MobileStickyBar"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const PurchaseToast = lazy(() => import("@/components/PurchaseToast"));

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
