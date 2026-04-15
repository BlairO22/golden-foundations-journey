import { useRef, useEffect, useState } from "react";
import section2Small from "@/assets/section2-small.jpeg";
import section3Small from "@/assets/section3-small.jpeg";

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

const CenterImageScrollAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = rect.height - vh;
      const scrolled = -rect.top;
      setProgress(clamp(scrolled / totalScroll, 0, 1));
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Photo is fully visible as soon as the section enters view
  const photoEntrance = 1;

  // Left text: scroll up from bottom 0.1→0.25, hold, scroll out top 0.4→0.5
  const leftIn = clamp((progress - 0.1) / 0.15, 0, 1);
  const leftOut = clamp((progress - 0.4) / 0.1, 0, 1);
  const leftOpacity = leftIn * (1 - leftOut);
  // Enters from below (100px), rests at 0, exits upward (-100px)
  const leftY = 100 * (1 - leftIn) + -100 * leftOut;

  // Right text: scroll up from bottom 0.55→0.7, hold, scroll out top 0.8→0.9
  const rightIn = clamp((progress - 0.55) / 0.15, 0, 1);
  const rightOut = clamp((progress - 0.8) / 0.1, 0, 1);
  const rightOpacity = rightIn * (1 - rightOut);
  const rightY = 100 * (1 - rightIn) + -100 * rightOut;
  

  // Photo swap: crossfade at 0.45→0.55
  const photoSwap = clamp((progress - 0.45) / 0.1, 0, 1);

  return (
    <div
      ref={wrapperRef}
      style={{ height: "500vh" }}
    >
      <div
        className="sticky top-0 overflow-hidden section-navy"
        style={{
          height: "100vh",
          padding: "0 4%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "90rem",
            width: "100%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div
            style={{
              opacity: leftOpacity,
              transform: `translateY(${leftY}px)`,
              willChange: "opacity, transform",
            }}
          >
            <h2
              className="heading-display text-4xl md:text-5xl"
              style={{
                color: "hsl(0, 0%, 100%)",
                marginBottom: "0.75rem",
              }}
            >
              You have the expertise.
            </h2>
            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "hsl(0, 0%, 100%)",
                opacity: 0.8,
                margin: 0,
              }}
            >
              What is missing is the path to turn it into a business that actually works — without having to figure it all out alone.
            </p>
          </div>

          {/* Center photo */}
          <div
            style={{
              width: "22rem",
              height: "28rem",
              borderRadius: "0.5rem",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              position: "relative",
              flexShrink: 0,
              opacity: photoEntrance,
              transform: `translateY(${40 * (1 - photoEntrance)}px)`,
              willChange: "transform, opacity",
            }}
          >
            <img
              src={section2Small}
              alt="You have the expertise"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                opacity: 1 - photoSwap,
              }}
            />
            <img
              src={section3Small}
              alt="You've built a career"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                opacity: photoSwap,
              }}
            />
          </div>

          {/* Right column */}
          <div
            style={{
              opacity: rightOpacity,
              transform: `translateY(${rightY}px)`,
              willChange: "opacity, transform",
            }}
          >
            <h2
              className="heading-display text-4xl md:text-5xl"
              style={{
                color: "hsl(0, 0%, 100%)",
                marginBottom: "0.75rem",
              }}
            >
              You've built a career.
            </h2>
            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 400,
                lineHeight: 1.8,
                color: "hsl(0, 0%, 100%)",
                opacity: 0.8,
                margin: 0,
              }}
            >
              What's missing is the freedom to live your day to day how you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterImageScrollAnimation;
