import { useEffect, useState } from "react";
import { WORKFLOW_CATEGORIES } from "@/lib/constants";
import { Eye } from "lucide-react";

const PurchaseToast = () => {
  const [current, setCurrent] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let idx = Math.floor(Math.random() * WORKFLOW_CATEGORIES.length);
    let showCount = 0;
    const MAX_SHOWS = 5;

    const show = () => {
      if (showCount >= MAX_SHOWS) return;
      showCount++;
      setCurrent(WORKFLOW_CATEGORIES[idx]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
      idx = (idx + 1) % WORKFLOW_CATEGORIES.length;
    };

    const initial = setTimeout(show, 15000);
    const interval = setInterval(() => {
      if (showCount >= MAX_SHOWS) {
        clearInterval(interval);
        return;
      }
      show();
    }, 30000 + Math.random() * 15000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 hidden md:flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-2xl transition-all duration-500 max-w-xs ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
        <Eye className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-sm font-semibold">Trending Now</p>
        <p className="text-xs text-muted-foreground">
          Someone is viewing <span className="text-primary">{current}</span> workflows
        </p>
      </div>
    </div>
  );
};

export default PurchaseToast;
