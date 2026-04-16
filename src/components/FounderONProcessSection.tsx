import { useEffect, useRef, useState } from "react";
import skyBg from "@/assets/natalia-blauth-QJWcEnP9x10-unsplash.jpg";
import onLogo from "@/assets/on-logo.png";
import phase1Img from "@/assets/angelina-sarycheva-a_DSYLkr9tc-unsplash.jpg";
import phase2Img from "@/assets/paolo-resteghini-ZTooTRx5B_k-unsplash.jpg";
import phase3Img from "@/assets/brooke-cagle-Ffh5_aiqUT0-unsplash.jpg";
import phase4Img from "@/assets/spenser-sembrat-BBtlAlhUeT4-unsplash.jpg";

function OnLogoReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        } else if (entry.boundingClientRect.top > 0) {
          setRevealed(false);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute select-none" style={{ bottom: "2rem", right: "0.5rem" }}>
      <img loading="lazy"         src={onLogo}
        alt="ON™"
        style={{
          height: "clamp(6rem, 12vw, 10rem)",
          width: "auto",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}

const phases = [
  {
    label: "Phase 1",
    name: "Empower",
    body: "Clarify the vision, truth, and foundations.",
    image: phase1Img,
  },
  {
    label: "Phase 2",
    name: "Build",
    body: "Shape the business, offer, brand, and strategic architecture.",
    image: phase2Img,
  },
  {
    label: "Phase 3",
    name: "Operate",
    body: "Develop the systems, structure, and leadership required to run well.",
    image: phase3Img,
  },
  {
    label: "Phase 4",
    name: "Thrive",
    body: "Refine for growth, freedom, sustainability, and long-term success.",
    image: phase4Img,
  },
];

function PhaseRow({
  p,
  index,
}: {
  p: (typeof phases)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-t border-gold/30 last:border-b overflow-hidden transition-colors duration-500"
    >
      {/* Full-width photo background (fades in on hover) */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `url(${p.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: hovered ? 1 : 0,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundColor: "rgba(12, 26, 49, 0.7)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Inner constrained content */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[10rem_1fr_auto] grid-cols-[6rem_1fr] gap-8 md:gap-16 items-center py-10 md:py-14 px-6">
        {/* Number */}
        <span
          className="block leading-none select-none"
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(5rem, 10vw, 9rem)",
            WebkitTextStroke: "1.5px hsl(var(--gold))",
            color: "transparent",
            letterSpacing: "-0.04em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Label + body */}
        <div className="pt-2 md:pt-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
            {p.label}
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-md">
            {p.body}
          </p>
        </div>

        {/* Phase name (right column, left-aligned) */}
        <h3 className="heading-display text-3xl md:text-4xl text-primary-foreground text-left md:min-w-[12rem]">
          {p.name}
        </h3>
      </div>
    </div>
  );
}

const FounderONProcessSection = () => {
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

  const empowerOffset = progress * -22;
  const buildOffset = progress * 32;
  const thriveOffset = progress * -14;

  const introRef = useRef<HTMLElement>(null);
  const [introProgress, setIntroProgress] = useState(0);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!introRef.current) return;
      const rect = introRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - rect.top) / (vh + rect.height);
      setIntroProgress(p - 0.5);
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

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          setIntroVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Big Founder ON introduction */}
      <section
        ref={introRef}
        className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden"
        style={{ backgroundColor: "#1F3F78" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="heading-display text-2xl md:text-3xl tracking-[0.3em] uppercase text-white mb-6"
            style={{
              opacity: introVisible ? 1 : 0,
              transform: `translate3d(0, ${introProgress * -20}px, 0)`,
              transition: "opacity 0.8s ease",
              willChange: "transform, opacity",
            }}
          >
            Meet
          </p>
          <img loading="lazy"             src={onLogo}
            alt="Founder ON™"
            className="mx-auto mb-0"
            style={{
              height: "clamp(10rem, 18vw, 16rem)",
              opacity: introVisible ? 1 : 0,
              transform: `translate3d(0, ${introProgress * 25}px, 0)`,
              transition: "opacity 1s ease 0.4s",
              willChange: "transform, opacity",
            }}
          />
        </div>
      </section>

      {/* Tagline section */}
      <section className="bg-white py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <h5 className="heading-display text-2xl md:text-3xl text-navy leading-snug max-w-3xl mx-auto text-center">
            Thriving Founder's proprietary 4-stage founder development and business execution process.
          </h5>
        </div>
      </section>

      {/* "Designed for capable..." — 2-column section */}
      <section style={{ backgroundColor: "#9DC4E7" }}>
        <div className="grid md:grid-cols-2 items-stretch">
          <div ref={photoRef} className="relative min-h-[420px] md:min-h-[560px] overflow-hidden">
            <img loading="lazy"               src={skyBg}
              alt="A thriving founder at ease"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                borderRadius: 0,
                objectPosition: "center 40%",
                transform: `translate3d(0, ${progress * 60}px, 0) scale(-1.12, 1.12)`,
                willChange: "transform",
              }}
            />

            <OnLogoReveal />
          </div>
          <div className="flex items-end pt-16 md:pt-24 pb-6 md:pb-8 px-8 md:px-16">
            <p className="font-body text-2xl md:text-3xl text-charcoal leading-relaxed max-w-xl">
              Designed for capable professionals who want more than advice, coaching, or disconnected services. ON<span className="text-xs" style={{ verticalAlign: "top", lineHeight: 1 }}>™</span> helps you build a fully operational business and become the founder required to lead it.
            </p>
          </div>
        </div>
      </section>

    <section
      className="pt-0 pb-24 md:pb-32"
      style={{ backgroundColor: "#1F3F78" }}
    >
      <div className="flex flex-col">
        {phases.map((p, i) => (
          <PhaseRow key={i} p={p} index={i} />
        ))}
      </div>

      <div className="mt-20 mx-6 max-w-3xl md:mx-auto border-2 border-gold/40 bg-gold/10 rounded-lg p-8 md:p-10 relative">
          <span
            aria-hidden
            className="absolute -top-3 left-6 px-3 font-body text-xs tracking-[0.25em] uppercase text-gold"
            style={{ backgroundColor: "#1F3F78" }}
          >
            In other words
          </span>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            This is not a course or a stack of separate services. It is a proprietary process for building the business, developing the founder, and creating a stronger path to freedom, mastery, and a more fully lived life.
          </p>
        </div>
    </section>
    </>
  );
};

export default FounderONProcessSection;
