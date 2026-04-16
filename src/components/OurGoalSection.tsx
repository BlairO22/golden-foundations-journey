import { useEffect, useRef, useState } from "react";
import bgImg from "@/assets/tuvalum-kwlcKkMoPZU-unsplash.jpg";

const OurGoalSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - rect.top) / (vh + rect.height);
      setProgress(p - 0.5);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // 30% parallax = bg moves 30% of scroll distance relative to section
  const bgOffset = progress * 0.3 * 200;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24 px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -z-10"
        style={{
          top: "-100px",
          bottom: "-100px",
          left: 0,
          right: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          transform: `translate3d(0, ${bgOffset}px, 0)`,
          willChange: "transform",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: "hsl(var(--navy) / 0.75)" }}
      />
      <div className="relative max-w-6xl mx-auto text-left">
        <h3 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground max-w-2xl">
          Our goal is not just to help you launch your business.
        </h3>
        <p className="font-body text-xl md:text-2xl text-primary-foreground/85 leading-relaxed max-w-md ml-auto mt-16 md:mt-32">
          It is to help you build a day-to-day life that feels aligned, sustainable, and free.
        </p>
      </div>
    </section>
  );
};

export default OurGoalSection;
