import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { getCheckoutUrl } from "@/lib/constants";
import { ArrowRight, Shield, Zap, Clock, Download } from "lucide-react";

/* ───────── animated node-network canvas ───────── */
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
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 40;
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
    canvas.addEventListener("mousemove", onMouseMove);

    let running = true;

    const draw = () => {
      if (!running) return;
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

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, [canvasRef]);
}

/* ───────── hero component ───────── */
const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeCanvas(canvasRef);

  const handleCTA = () => {
    window.location.href = getCheckoutUrl();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-4 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated node canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "auto" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Trust badges */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
          {[
            { icon: Download, label: "Instant Digital Delivery" },
            { icon: Clock, label: "Import & Run in 2 Min" },
            { icon: Shield, label: "30-Day Money-Back Guarantee" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
              <b.icon className="h-4 w-4 text-primary" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
          <span className="text-primary">8,000+ n8n Workflows.</span>{" "}
          <span className="block sm:inline">
            $24.99.{" "}
            <span className="text-foreground">Import & Run in 2 Minutes.</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Stop building workflows from scratch. Get{" "}
          <span className="text-foreground font-semibold">production-ready n8n templates</span>{" "}
          across 19 categories and 74+ integrations — ready to import, customize, and deploy.
        </p>

        {/* Product pills */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 flex-wrap">
          {[
            { num: "8,000+", label: "Workflows" },
            { num: "74+", label: "Integrations" },
            { num: "19", label: "Categories" },
          ].map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center px-5 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <span className="text-lg sm:text-xl font-bold text-primary">{p.num}</span>
              <span className="text-xs text-muted-foreground">{p.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div>
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-gradient-cta hover:opacity-90 text-lg px-10 py-7 font-bold glow-red animate-pulse-glow group"
            >
              <Zap className="h-5 w-5 mr-2" />
              Get Instant Access — $24.99
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Micro guarantees */}
          <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <span>✓ Instant Download</span>
            <span>✓ One-Time Payment</span>
            <span>✓ 30-Day Money Back</span>
            <span>✓ Lifetime Access</span>
          </div>

          {/* Explorer teaser */}
          <a href="/workflows" className="text-sm text-primary hover:underline mt-2">
            Browse 1,967 workflows in our live explorer before you buy →
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
