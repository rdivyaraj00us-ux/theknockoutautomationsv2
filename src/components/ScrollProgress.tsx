import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9999] pointer-events-none"
      style={{
        width: `${width}%`,
        background: "linear-gradient(90deg, hsl(0 76% 57%), hsl(44 81% 61%))",
        transition: "width 0.05s linear",
      }}
    />
  );
};

export default ScrollProgress;