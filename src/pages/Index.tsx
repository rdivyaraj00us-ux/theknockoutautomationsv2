import { useEffect, Suspense } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trackViewContent } from "@/lib/tracking";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";

const BigStatShowcase = lazyWithRetry(() => import("@/components/BigStatShowcase"));
const PricingSection = lazyWithRetry(() => import("@/components/PricingSection"));
const SolutionSection = lazyWithRetry(() => import("@/components/SolutionSection"));
const LogoMarquee = lazyWithRetry(() => import("@/components/LogoMarquee"));
const ProblemSection = lazyWithRetry(() => import("@/components/ProblemSection"));
const HowItWorks = lazyWithRetry(() => import("@/components/HowItWorks"));
const MeetYourMentor = lazyWithRetry(() => import("@/components/MeetYourMentor"));
const WhatYouCanBuild = lazyWithRetry(() => import("@/components/WhatYouCanBuild"));
const SkillLevels = lazyWithRetry(() => import("@/components/SkillLevels"));
const IndustryCards = lazyWithRetry(() => import("@/components/IndustryCards"));
const WorkflowExplorerPreview = lazyWithRetry(() => import("@/components/WorkflowExplorerPreview"));
const ComparisonTable = lazyWithRetry(() => import("@/components/ComparisonTable"));
const FAQSection = lazyWithRetry(() => import("@/components/FAQSection"));
const TestimonialsSection = lazyWithRetry(() => import("@/components/TestimonialsSection"));
const StillNotSureSection = lazyWithRetry(() => import("@/components/StillNotSureSection"));
const FinalCTA = lazyWithRetry(() => import("@/components/FinalCTA"));
const Footer = lazyWithRetry(() => import("@/components/Footer"));
const MobileStickyBar = lazyWithRetry(() => import("@/components/MobileStickyBar"));
const ExitIntentPopup = lazyWithRetry(() => import("@/components/ExitIntentPopup"));

const LazyFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    trackViewContent(window.location.pathname);
  }, []);

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

      <HeroSection />

      <Suspense fallback={<LazyFallback />}>
        <section id="big-stat">
          <BigStatShowcase />
        </section>
      </Suspense>

      <StatCounter />

      <Suspense fallback={<LazyFallback />}>
        <SolutionSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <LogoMarquee />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <ProblemSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <HowItWorks />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <MeetYourMentor />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <WhatYouCanBuild />
      </Suspense>

      <div className="hidden md:block">
        <Suspense fallback={<LazyFallback />}>
          <SkillLevels />
          <IndustryCards />
          <WorkflowExplorerPreview />
          <ComparisonTable />
        </Suspense>
      </div>

      <Suspense fallback={<LazyFallback />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <StillNotSureSection />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <FinalCTA />
      </Suspense>

      <Suspense fallback={<LazyFallback />}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <MobileStickyBar />
        <ExitIntentPopup />
      </Suspense>
    </div>
  );
};

export default Index;
