interface MoneyBackSealProps {
  size?: number;
  className?: string;
}

/**
 * Gold "100% MONEY-BACK GUARANTEE" round seal.
 * Pure inline SVG + CSS — no image asset.
 * Outer dashed/serrated ring rotates slowly. Honors prefers-reduced-motion.
 */
const MoneyBackSeal = ({ size = 120, className = "" }: MoneyBackSealProps) => {
  // Reserve square box to prevent CLS
  const id = `mbs-${size}`;
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width: size,
        height: size,
        filter: "drop-shadow(0 14px 40px rgba(200,148,31,0.5))",
      }}
      aria-label="100% Money-back guarantee"
      role="img"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="mbs-rotate"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd54a" />
            <stop offset="50%" stopColor="#c8941f" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
        </defs>
        {/* Outer serrated star-burst ring */}
        <path
          d={(() => {
            const cx = 100;
            const cy = 100;
            const points = 24;
            const outer = 96;
            const inner = 86;
            const path: string[] = [];
            for (let i = 0; i < points * 2; i++) {
              const r = i % 2 === 0 ? outer : inner;
              const a = (Math.PI * i) / points - Math.PI / 2;
              const x = cx + Math.cos(a) * r;
              const y = cy + Math.sin(a) * r;
              path.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
            }
            path.push("Z");
            return path.join(" ");
          })()}
          fill={`url(#${id}-gold)`}
        />
      </svg>

      {/* Inner static disc with text */}
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="absolute inset-0"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id={`${id}-gold2`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe488" />
            <stop offset="100%" stopColor="#c8941f" />
          </linearGradient>
          <path id={`${id}-top`} d="M 30 100 a 70 70 0 0 1 140 0" fill="none" />
          <path id={`${id}-bot`} d="M 35 100 a 65 65 0 0 0 130 0" fill="none" />
        </defs>
        {/* Inner dark disc */}
        <circle cx="100" cy="100" r="78" fill="#0a0604" />
        {/* Thin inner gold ring */}
        <circle cx="100" cy="100" r="74" fill="none" stroke={`url(#${id}-gold2)`} strokeWidth="1.5" />
        {/* Curved top text */}
        <text
          fill={`url(#${id}-gold2)`}
          fontSize="14"
          fontWeight="800"
          letterSpacing="3"
          fontFamily="Inter, system-ui, sans-serif"
        >
          <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
            MONEY BACK
          </textPath>
        </text>
        {/* Center 100% */}
        <text
          x="100"
          y="112"
          textAnchor="middle"
          fill={`url(#${id}-gold2)`}
          fontSize="42"
          fontWeight="900"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-1"
        >
          100%
        </text>
        {/* Curved bottom text */}
        <text
          fill={`url(#${id}-gold2)`}
          fontSize="11"
          fontWeight="800"
          letterSpacing="2.5"
          fontFamily="Inter, system-ui, sans-serif"
        >
          <textPath href={`#${id}-bot`} startOffset="50%" textAnchor="middle">
            GUARANTEE
          </textPath>
        </text>
      </svg>

      <style>{`
        .mbs-rotate { animation: mbs-spin 30s linear infinite; transform-origin: center; }
        @media (prefers-reduced-motion: reduce) { .mbs-rotate { animation: none; } }
        @keyframes mbs-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default MoneyBackSeal;
