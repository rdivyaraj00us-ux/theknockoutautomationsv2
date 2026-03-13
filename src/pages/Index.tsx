import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatCounter from "@/components/StatCounter";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <StatCounter />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
    </div>
  );
};

export default Index;
