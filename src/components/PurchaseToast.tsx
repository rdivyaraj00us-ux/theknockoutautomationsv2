import { useEffect, useState } from "react";
import { PURCHASE_NAMES } from "@/lib/constants";
import { ShoppingCart } from "lucide-react";

const PurchaseToast = () => {
  const [current, setCurrent] = useState<{ name: string; city: string } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let idx = Math.floor(Math.random() * PURCHASE_NAMES.length);

    const show = () => {
      setCurrent(PURCHASE_NAMES[idx]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
      idx = (idx + 1) % PURCHASE_NAMES.length;
    };

    // First show after 15s
    const initial = setTimeout(show, 15000);
    // Then every 30-45s
    const interval = setInterval(show, 30000 + Math.random() * 15000);

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
      <div className="h-9 w-9 rounded-full bg-[hsl(var(--success))]/20 flex items-center justify-center shrink-0">
        <ShoppingCart className="h-4 w-4 text-[hsl(var(--success))]" />
      </div>
      <div>
        <p className="text-sm font-semibold">{current.name}</p>
        <p className="text-xs text-muted-foreground">
          from {current.city} just purchased · <span className="text-[hsl(var(--success))]">Verified</span>
        </p>
      </div>
    </div>
  );
};

export default PurchaseToast;
