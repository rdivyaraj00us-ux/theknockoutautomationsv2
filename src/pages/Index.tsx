import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import LogoMarquee from "@/components/LogoMarquee";
import HowItWorks from "@/components/HowItWorks";
import IndustryCards from "@/components/IndustryCards";
import WorkflowExplorerPreview from "@/components/WorkflowExplorerPreview";
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <StatCounter />
      <ProblemSection />
      <SolutionSection />
      <LogoMarquee />
      <HowItWorks />
      <IndustryCards />
      <WorkflowExplorerPreview />
      <ComparisonTable />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      <FinalCTA />
      <Footer />
      <MobileStickyBar />
      <ExitIntentPopup />
      <PurchaseToast />
    </div>
  );
};

export default Index;
