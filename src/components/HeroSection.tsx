import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { trackAndRedirect } from "@/lib/tracking";
import { ArrowRight, Shield, Zap, Clock, Download } from "lucide-react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

function useNodeCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const mouseRef = useRef({ x: -999, y: -999 });
  const nodesRef = useRef<Node[]>([]);
  const frameRef = useRef(0);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let cleanupRef: (() => void) | undefined;

    // Delay canvas init by 3s so hero text/CTA render first
    const delayTimer = setTimeout(() => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const resize = () => {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      };
      resize();
      window.addEventListener("resize", resize);

      const COUNT = window.innerWidth < 768 ? 8 : 20;
      const w = () => canvas.offsetWidth;
      const h = () => canvas.offsetHeight;

      if (nodesRef.current.length === 0) {
        for (let i = 0; i < COUNT; i++) {
          nodesRef.current.push({
            x: Math.random() * w(),
            y: Math.random() * h(),
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: 2 + Math.random() * 2,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.01 + Math.random() * 0.02,
          });
        }
      }

      const onMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      };
      canvas.addEventListener("mousemove", onMouseMove, { passive: true });

      let running = true;
      let visible = true;

      // Pause RAF when hero scrolls out of view (huge INP win on long pages)
      const io = new IntersectionObserver(
        (entries) => {
          visible = entries[0]?.isIntersecting ?? false;
          if (visible && running) draw();
        },
        { threshold: 0 },
      );
      io.observe(canvas);

      const onVisibility = () => {
        if (document.hidden) visible = false;
        else {
          visible = true;
          if (running) draw();
        }
      };
      document.addEventListener("visibilitychange", onVisibility);

      const draw = () => {
        if (!running || !visible) return;
        const W = canvas.offsetWidth;
        const H = canvas.offsetHeight;
        ctx.clearRect(0, 0, W, H);
        const nodes = nodesRef.current;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += n.pulseSpeed;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
          const dx = n.x - mx;
          const dy = n.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            n.x += (dx / dist) * 0.5;
            n.y += (dy / dist) * 0.5;
          }
        });

        const CONNECTION_DIST = 140;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST) {
              const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(220, 60, 60, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        nodes.forEach((n) => {
          const glow = 0.4 + Math.sin(n.pulse) * 0.3;
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 6);
          grad.addColorStop(0, `rgba(220, 60, 60, ${glow * 0.2})`);
          grad.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 6, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 60, 60, ${0.6 + glow * 0.4})`;
          ctx.fill();
        });

        const time = Date.now() / 1000;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST && (i + j) % 5 === 0) {
              const t = (time * 0.4 + i * 0.3) % 1;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(234, 179, 56, 0.8)";
              ctx.fill();
            }
          }
        }

        frameRef.current = requestAnimationFrame(draw);
      };

      draw();

      cleanupRef = () => {
        running = false;
        cancelAnimationFrame(frameRef.current);
        window.removeEventListener("resize", resize);
        canvas.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("visibilitychange", onVisibility);
        io.disconnect();
      };
    }, 3000);

    return () => {
      clearTimeout(delayTimer);
      cleanupRef?.();
    };
  }, [canvasRef]);
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeCanvas(canvasRef);

  const handleCTA = () => {
    trackAndRedirect();
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-8 pb-12 sm:pb-20 px-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, hsl(0 76% 57% / 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, hsl(44 81% 61% / 0.04) 0%, transparent 50%), hsl(240 33% 8%)",
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-10 flex-wrap">
          {[
            { icon: Download, label: "Instant Digital Delivery" },
            { icon: Clock, label: "Import & Run in 2 Min" },
            { icon: Shield, label: "30-Day Money-Back Guarantee" },
          ].map((b) => (
            <span
              key={b.label}
              className="flex items-center gap-1.5 text-[11px] sm:text-xs tracking-wide text-muted-foreground bg-card/60 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 pointer-events-none cursor-default"
            >
              <b.icon className="h-3 w-3 text-primary" />
              {b.label}
            </span>
          ))}
        </div>

        <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black leading-[1.05] tracking-tight mb-5 sm:mb-7 pointer-events-none cursor-default">
          <span className="block">
            <span className="text-gradient">2,000+</span> n8n Workflows.
          </span>
          <span className="block mt-1">
            <span className="text-[hsl(var(--gold))]">$24.99.</span>{" "}
            <span className="text-muted-foreground text-[0.6em] font-bold">Import & Run in 2 Minutes.</span>
          </span>
        </h1>

        {/* CTA moved directly under headline for mobile visibility */}
        <div className="flex flex-col items-center gap-3 mb-6 sm:mb-8">
          <Button
            onClick={handleCTA}
            size="lg"
            className="bg-gradient-cta hover:opacity-90 text-base sm:text-lg px-10 py-7 font-bold glow-red animate-pulse-glow group"
          >
            <Zap className="h-5 w-5 mr-2" />
            Get Instant Access — $24.99
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-muted-foreground flex-wrap justify-center">
            <span>✓ Instant Download</span>
            <span>✓ One-Time Payment</span>
            <span>✓ 30-Day Money Back</span>
            <span>✓ 2,000+ Workflows</span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-sm font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5 sm:mb-8">
          ⚡ NEW: Connect n8n with OpenClaw — Build AI Agents That Run Your Business 24/7
        </span>

        <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
          Stop building workflows from scratch. Get{" "}
          <span className="text-foreground font-semibold">production-ready n8n templates</span> across 19 categories and
          75+ integrations — ready to import, customize, and deploy.
        </p>

        <div className="hidden sm:flex items-center justify-center gap-3 mb-8 flex-wrap">
          {[
            { num: "2,000+", label: "Workflows" },
            { num: "75+", label: "Integrations" },
            { num: "19", label: "Categories" },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5">
              <span className="text-lg font-black text-primary font-mono">{p.num}</span>
              <span className="text-xs text-muted-foreground font-medium">{p.label}</span>
            </div>
          ))}
        </div>

        <a
          href="/workflows"
          className="text-xs text-primary hover:underline underline-offset-2 transition-colors"
        >
          Browse 1,967 workflows in our live explorer before you buy →
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
