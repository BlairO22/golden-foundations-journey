import { useEffect, useRef, useState } from "react";
import defaultImg from "@/assets/samsung-memory-wz8HHE9kBgo-unsplash.jpg";

interface BottomCTASectionProps {
  heading: string;
  paragraph: string;
  ctaText: string;
  ctaHref: string;
  image?: string;
  flipImage?: boolean;
}

const BottomCTASection = ({
  heading,
  paragraph,
  ctaText,
  ctaHref,
  image = defaultImg,
  flipImage = true,
}: BottomCTASectionProps) => {
  const photoRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
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

  const scaleX = flipImage ? -1.12 : 1.12;

  return (
    <section style={{ backgroundColor: "#FAF8F5" }}>
      <div className="grid md:grid-cols-2 items-stretch">
        <div
          ref={photoRef}
          className="relative min-h-[420px] md:min-h-[560px] overflow-hidden"
        >
          <img loading="lazy"             src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              borderRadius: 0,
              objectPosition: "center 40%",
              transform: `translate3d(0, ${progress * 60}px, 0) scale(${scaleX}, 1.12)`,
              willChange: "transform",
            }}
          />
        </div>
        <div className="flex flex-col justify-center pt-16 md:pt-24 pb-16 md:pb-20 px-8 md:px-16">
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-8 max-w-xl">
            {heading}
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-10 max-w-xl">
            {paragraph}
          </p>
          <a href={ctaHref} className="btn-gold self-start">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BottomCTASection;
