import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getCheckoutUrl, PRICING } from "@/lib/constants";
import { Zap } from "lucide-react";

const MobileStickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
      <Button
        onClick={() => { window.location.href = getCheckoutUrl(); }}
        className="w-full bg-gradient-cta hover:opacity-90 font-bold py-6 text-base"
      >
        <Zap className="h-4 w-4 mr-2" />
        Get Access — ${PRICING.sale}
      </Button>
    </div>
  );
};

export default MobileStickyBar;
