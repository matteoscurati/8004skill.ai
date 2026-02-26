"use client";

import { useEffect, useRef } from "react";

const stars = [
  { x: 5, y: 3, size: 2, delay: 0 }, { x: 12, y: 8, size: 1.5, delay: 1.2 },
  { x: 20, y: 2, size: 1, delay: 0.5 }, { x: 28, y: 12, size: 2, delay: 2 },
  { x: 35, y: 5, size: 1.5, delay: 0.8 }, { x: 42, y: 1, size: 1, delay: 1.5 },
  { x: 48, y: 9, size: 2, delay: 0.3 }, { x: 55, y: 4, size: 1.5, delay: 2.5 },
  { x: 62, y: 11, size: 1, delay: 1 }, { x: 68, y: 2, size: 2, delay: 0.7 },
  { x: 75, y: 7, size: 1.5, delay: 1.8 }, { x: 82, y: 3, size: 1, delay: 2.2 },
  { x: 88, y: 10, size: 2, delay: 0.4 }, { x: 93, y: 6, size: 1.5, delay: 1.3 },
  { x: 15, y: 15, size: 1, delay: 0.9 }, { x: 38, y: 14, size: 1.5, delay: 2.1 },
  { x: 52, y: 13, size: 1, delay: 0.6 }, { x: 72, y: 16, size: 2, delay: 1.7 },
  { x: 85, y: 14, size: 1.5, delay: 0.2 }, { x: 8, y: 18, size: 1, delay: 2.8 },
  { x: 25, y: 6, size: 1.5, delay: 1.1 }, { x: 45, y: 17, size: 1, delay: 0.1 },
  { x: 60, y: 7, size: 2, delay: 2.4 }, { x: 78, y: 12, size: 1, delay: 1.6 },
  { x: 95, y: 8, size: 1.5, delay: 0.9 },
];

const sunStripes = [
  { top: 55, height: 3 },
  { top: 62, height: 5 },
  { top: 71, height: 7 },
  { top: 82, height: 8 },
  { top: 94, height: 6 },
];

export default function VaporwaveScene() {
  const skyRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const mountainsRef = useRef<SVGSVGElement>(null);
  const horizonRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const t = window.scrollY / window.innerHeight;

        if (skyRef.current) {
          skyRef.current.style.opacity = `${Math.max(0, 1 - t * 0.8)}`;
        }
        if (starsRef.current) {
          starsRef.current.style.transform = `translateY(${-t * 25}%)`;
          starsRef.current.style.opacity = `${Math.max(0, 1 - t * 0.5)}`;
        }
        if (sunRef.current) {
          sunRef.current.style.transform = `translateX(-50%) translateY(${-t * 15}px)`;
        }
        if (mountainsRef.current) {
          mountainsRef.current.style.transform = `translateY(${-t * 8}%)`;
        }
        if (horizonRef.current) {
          horizonRef.current.style.transform = `translateY(${-t * 10}%)`;
        }
        if (gridRef.current) {
          gridRef.current.style.transform = `perspective(350px) rotateX(70deg) translateY(${t * 3}%)`;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="vw-scene" aria-hidden="true">
      {/* Sky gradient - sunset visible only in lower portion */}
      <div
        ref={skyRef}
        style={{
          position: "absolute",
          inset: 0,
          height: "100%",
          background: `linear-gradient(180deg,
            #0D0221 0%,
            #0D0221 30%,
            #120330 38%,
            #1A0540 44%,
            #2D1260 49%,
            #4B1A80 53%,
            #6B2FA0 56%,
            #9B40D0 59%,
            #B967FF 62%,
            #D070E0 64%,
            #FF71CE 66%,
            #FF8F60 68%,
            #FFAB40 69%,
            #FFCE45 70%,
            #FF8F60 72%,
            #D070E0 75%,
            #6B2FA0 80%,
            #2D1260 85%,
            #1A0540 90%,
            #0D0221 95%
          )`,
        }}
      />

      {/* Stars - only in upper portion */}
      <div ref={starsRef} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "55%" }}>
        {stars.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: "50%",
              background: "#fff",
              boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,0.8)`,
              animation: `twinkle ${2 + s.delay}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Sun - centered so upper arc peeks above mountain ridge */}
      <div
        ref={sunRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "56%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "linear-gradient(180deg, #FFCE45 0%, #FFA040 25%, #FF71CE 60%, #B967FF 100%)",
          boxShadow: "0 0 60px rgba(255,159,67,0.5), 0 0 120px rgba(255,113,206,0.25)",
          transform: "translateX(-50%)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {sunStripes.map((stripe, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${stripe.top}%`,
                height: `${stripe.height}%`,
                background: "#0D0221",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floor base - purple gradient like classic synthwave */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "20%",
          background: "linear-gradient(180deg, #1A0540 0%, #2D1260 40%, #3B1A6E 100%)",
        }}
      />

      {/* Grid floor - near edge flush at viewport bottom, far edge reaches horizon */}
      <div
        ref={gridRef}
        style={{
          position: "absolute",
          left: "-50%",
          right: "-50%",
          bottom: 0,
          height: "40%",
          background: `
            linear-gradient(90deg, rgba(255, 113, 206, 0.35) 0.5px, transparent 0.5px),
            linear-gradient(0deg, rgba(255, 113, 206, 0.35) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "35px 35px",
          transform: "perspective(350px) rotateX(70deg)",
          transformOrigin: "center top",
          animation: "grid-scroll 4s linear infinite",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)",
        }}
      />

      {/* Mountains - lifted above floor to create grid floor area */}
      <svg
        ref={mountainsRef}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "100%",
          bottom: "20%",
          height: "42%",
        }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Back mountain range - valley/corridor shape opening toward sun */}
        <polygon
          points="0,320 0,180 60,140 140,170 220,90 320,130 420,60 520,100 600,140 660,190 720,210 780,190 840,140 920,100 1020,60 1120,130 1220,90 1320,170 1400,140 1440,180 1440,320"
          fill="#0D0221"
          stroke="rgba(1,205,254,0.6)"
          strokeWidth="2"
        />
        {/* Front mountain range - valley/corridor with central gap */}
        <polygon
          points="0,320 0,230 80,200 180,220 280,150 380,190 480,140 560,180 640,230 720,250 800,230 880,180 960,140 1080,190 1180,150 1280,220 1360,200 1440,230 1440,320"
          fill="#0D0221"
          stroke="rgba(1,205,254,0.45)"
          strokeWidth="2"
        />
      </svg>

      {/* Horizon line - at mountain base / grid boundary */}
      <div
        ref={horizonRef}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "20%",
          height: "2px",
          background: "linear-gradient(90deg, transparent 5%, #FF71CE 25%, #FFCE45 50%, #FF71CE 75%, transparent 95%)",
          boxShadow: "0 0 20px rgba(255,113,206,0.4)",
        }}
      />

      {/* Scanlines + VHS */}
      <div className="vw-scanlines" />
    </div>
  );
}
