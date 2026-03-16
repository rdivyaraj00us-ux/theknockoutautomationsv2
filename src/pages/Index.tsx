import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import LogoMarquee from "@/components/LogoMarquee";
import HowItWorks from "@/components/HowItWorks";
import SkillLevels from "@/components/SkillLevels";
import IndustryCards from "@/components/IndustryCards";
import WorkflowExplorerPreview from "@/components/WorkflowExplorerPreview";
import WhatYouCanBuild from "@/components/WhatYouCanBuild";
import VideoSection from "@/components/VideoSection";
import ComparisonTable from "@/components/ComparisonTable";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import PurchaseToast from "@/components/PurchaseToast";

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
      {/* Screen 1-2: Hook + proof */}
      <HeroSection />
      <StatCounter />

      {/* Screen 3: Price (MOVED UP — critical for mobile) */}
      <PricingSection />

      {/* Screen 4: What's inside */}
      <SolutionSection />

      {/* Screen 5: Trust strip */}
      <LogoMarquee />

      {/* Screen 6: Guarantee */}
      <GuaranteeSection />

      {/* ═══ SUPPORTING CONTENT (for scrollers who need more) ═══ */}
      {/* These sections convince the undecided */}
      <ProblemSection />
      <HowItWorks />
      <WhatYouCanBuild />

      {/* ═══ HIDDEN ON MOBILE, VISIBLE ON DESKTOP ═══ */}
      {/* These sections add depth but are too long for mobile */}
      <div className="hidden md:block">
        <SkillLevels />
        <IndustryCards />
        <VideoSection />
        <WorkflowExplorerPreview />
        <ComparisonTable />
      </div>

      {/* ═══ CLOSING FLOW (both mobile + desktop) ═══ */}
      <FAQSection />
      <FinalCTA />
      <Footer />

      {/* ═══ OVERLAYS ═══ */}
      <MobileStickyBar />
      <ExitIntentPopup />
      <PurchaseToast />
    </div>
  );
};

export default Index;
