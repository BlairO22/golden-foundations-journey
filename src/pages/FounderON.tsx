import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";
import { trackCTA } from "@/lib/gtag";
import aaronWorkingImg from "@/assets/angelina-sarycheva-a_DSYLkr9tc-unsplash.webp";
import gridPhoto1 from "@/assets/natalia-blauth-QJWcEnP9x10-unsplash.webp";
import gridPhoto2 from "@/assets/getty-images-dXR_QCJtQII-unsplash.webp";
import gridPhoto3 from "@/assets/molly-the-cat-TS4TIXJHmtc-unsplash.jpg";
import gridPhoto4 from "@/assets/Daylight studio Amsterdam for female entrepreneurs, coaches and creatives_.jpeg";
import gridPhoto5 from "@/assets/molly-the-cat-qP_ezdWEQEs-unsplash.jpg";
import gridPhoto6 from "@/assets/curated-lifestyle-d8FV5wLz8x4-unsplash.jpg";
import gridPhoto7 from "@/assets/getty-images--Z4GFAQ1HvA-unsplash.webp";
import gridPhoto8 from "@/assets/a-c-9jHHifbZlvg-unsplash.webp";
import premiumBgImg from "@/assets/tuvalum-kwlcKkMoPZU-unsplash.webp";
import blairPortraitImg from "@/assets/brooke-cagle-Ffh5_aiqUT0-unsplash.webp";
import foundersDuoImg from "@/assets/daiga-ellaby-yJ2KtO6Gwkk-unsplash.webp";
import pillarStrategyImg from "@/assets/getty-images-VMDKeRO351c-unsplash.webp";
import pillarFounderImg from "@/assets/rodrigo-rodrigues-wolf-r-t-_hvCRGeNrFo-unsplash.webp";
import pillarExecutionImg from "@/assets/paolo-resteghini-ZTooTRx5B_k-unsplash.webp";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <span
      aria-hidden
      className="flex-shrink-0 flex items-center justify-center rounded-full"
      style={{
        width: "1rem",
        height: "1rem",
        marginTop: "0.45rem",
        border: "1.5px solid hsl(var(--gold))",
      }}
    >
      <span
        className="rounded-full"
        style={{
          width: "0.4rem",
          height: "0.4rem",
          backgroundColor: "hsl(var(--gold))",
        }}
      />
    </span>
    <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
      {children}
    </p>
  </div>
);

const BulletLight = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <span
      aria-hidden
      className="flex-shrink-0 flex items-center justify-center rounded-full"
      style={{
        width: "1rem",
        height: "1rem",
        marginTop: "0.45rem",
        border: "1.5px solid hsl(var(--gold))",
      }}
    >
      <span
        className="rounded-full"
        style={{
          width: "0.4rem",
          height: "0.4rem",
          backgroundColor: "hsl(var(--gold))",
        }}
      />
    </span>
    <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
      {children}
    </p>
  </div>
);

const radialItems = [
  "your business model",
  "your positioning",
  "your offers",
  "your founder psychology",
  "your brand expression",
  "your website and core assets",
  "your decision-making and direction",
  "your path toward a more autonomous, profitable, and sustainable life",
];

const gridPhotos = [
  gridPhoto3,
  gridPhoto1,
  gridPhoto5,
  gridPhoto7,
  gridPhoto4,
  gridPhoto2,
  gridPhoto8,
  gridPhoto6,
];

function PhaseScrollItem({
  phase,
  index,
}: {
  phase: { label: string; name: string; body: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center min-h-[55vh]"
      style={{ paddingTop: index === 0 ? "50vh" : "2rem" }}
    >
      <div
        style={{
          opacity: visible ? 1 : 0.2,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
          {phase.label}
        </p>
        <h3 className="heading-display text-4xl md:text-5xl text-navy mb-4">
          {phase.name}
        </h3>
        <p className="font-body text-lg md:text-xl text-charcoal/75 leading-relaxed">
          {phase.body}
        </p>
      </div>
    </div>
  );
}

const HeroPhotoGrid = () => (
  <section className="w-full">
    <div className="grid grid-cols-4 md:grid-cols-8">
      {gridPhotos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover block"
          style={{ aspectRatio: "3 / 4", borderRadius: 0 }}
        />
      ))}
    </div>
  </section>
);

const BraceIntegrated = () => {
  return (
    <div className="grid md:grid-cols-[auto_auto_1fr] items-center gap-6 md:gap-10 max-w-4xl mx-auto">
      {/* Label */}
      <div className="hidden md:block text-left max-w-xs">
        <p className="heading-display text-2xl md:text-3xl text-navy leading-tight">
          ON<sup
            style={{
              fontSize: "0.4em",
              position: "relative",
              top: "-1.1em",
              marginLeft: "0.08em",
              verticalAlign: "baseline",
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: 0,
            }}
          >™</sup> is designed as one integrated system.
        </p>
      </div>

      {/* Brace */}
      <div
        aria-hidden
        className="hidden md:flex items-stretch justify-center self-stretch"
      >
        <svg
          viewBox="0 0 40 400"
          preserveAspectRatio="none"
          className="h-full"
          style={{ width: "40px" }}
        >
          <path
            d="M30 0 C 10 0, 20 100, 20 100 C 20 200, 10 200, 5 200 C 10 200, 20 200, 20 300 C 20 300, 10 400, 30 400"
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Mobile label */}
      <p className="md:hidden heading-display text-2xl text-navy leading-tight mb-2">
        ON is designed as one integrated system.
      </p>

      {/* Items */}
      <ul className="flex flex-col gap-2 md:gap-3">
        {radialItems.map((t, i) => (
          <li
            key={i}
            className="font-body text-lg md:text-xl text-charcoal/85 leading-snug"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RadialIntegrated = () => {
  // Start at top (-90°) and go clockwise
  const count = radialItems.length;
  return (
    <>
      {/* Desktop / tablet: radial layout */}
      <div
        className="radial-wrap hidden md:block relative mx-auto"
        style={{ width: "min(680px, 100%)", aspectRatio: "1 / 1" }}
      >
        {/* Faint circle guide */}
        <div
          aria-hidden
          className="absolute rounded-full border border-gold/30"
          style={{ inset: "18%" }}
        />

        {/* Center label (no hub background) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 max-w-[14rem]">
          <span className="heading-display text-lg md:text-xl text-navy leading-tight">
            One integrated system
          </span>
        </div>

        {radialItems.map((text, i) => {
          const angle = (i / count) * Math.PI * 2 - Math.PI / 2; // start at top
          const dotR = 32; // matches the guide circle radius (inset 18%)
          const labelR = 36; // labels sit just outside the circle
          const dotX = 50 + dotR * Math.cos(angle);
          const dotY = 50 + dotR * Math.sin(angle);
          const labelX = 50 + labelR * Math.cos(angle);
          const labelY = 50 + labelR * Math.sin(angle);

          // Positioning: labels on the left half anchor by right edge (so they
          // sit to the LEFT of their dot); labels on the right half anchor by
          // left edge. All text is left-aligned within its own box.
          const cos = Math.cos(angle);
          const onLeftSide = cos < -0.15;
          const translateX = onLeftSide ? "-100%" : "0%";
          const translateY =
            Math.sin(angle) > 0.5
              ? "0%"
              : Math.sin(angle) < -0.5
              ? "-100%"
              : "-50%";
          const textAlign: "left" = "left";

          return (
            <div key={i}>
              {/* Dot */}
              <span
                aria-hidden
                className="absolute rounded-full"
                style={{
                  left: `${dotX}%`,
                  top: `${dotY}%`,
                  width: "14px",
                  height: "14px",
                  transform: "translate(-50%, -50%)",
                  border: "1.5px solid hsl(var(--gold))",
                  backgroundColor: "hsl(var(--gold) / 0.15)",
                }}
              >
                <span
                  className="absolute left-1/2 top-1/2 rounded-full"
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "hsl(var(--gold))",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </span>
              {/* Label */}
              <p
                className="absolute font-body text-sm md:text-base text-charcoal/85 leading-snug"
                style={{
                  left: `${labelX}%`,
                  top: `${labelY}%`,
                  transform: `translate(${translateX}, ${translateY})`,
                  textAlign,
                  maxWidth: "11rem",
                  paddingLeft: onLeftSide ? 0 : "0.4rem",
                  paddingRight: onLeftSide ? "0.4rem" : 0,
                }}
              >
                {text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile fallback: plain bulleted list */}
      <div className="md:hidden flex flex-col gap-4">
        {radialItems.map((t, i) => (
          <Bullet key={i}>{t}</Bullet>
        ))}
      </div>
    </>
  );
};

const pillars = [
  {
    title: "Strategic Advisory",
    subtitle: "Build with clarity.",
    image: pillarStrategyImg,
    body: [
      "We work with you on the commercial side of the business: positioning, offer design, audience fit, business model, revenue logic, growth direction, and decision-making priorities.",
      "This is where scattered ideas become a stronger strategic foundation.",
    ],
  },
  {
    title: "Founder Development",
    subtitle: "Lead from a stronger place.",
    image: pillarFounderImg,
    body: [
      "You are not just building a company. You are building the self that can carry it.",
      "This pillar supports the identity, resilience, self-trust, standards, and internal alignment required to move through uncertainty and lead at a higher level.",
    ],
  },
  {
    title: "Expert-Led Execution",
    subtitle: "Turn ideas into assets.",
    image: pillarExecutionImg,
    body: [
      "A credible business needs more than insight. It needs build quality.",
      "We help translate strategy into the tangible assets that matter: brand expression, web presence, core messaging, and selected foundational systems that support launch and growth.",
    ],
  },
];

const PillarCard = ({ p }: { p: typeof pillars[0] }) => {
  const [hovered, setHovered] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = mobileRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Mobile: image + text below, revealed on scroll */}
      <div ref={mobileRef} className="md:hidden border-t-2 border-gold">
        <div className="relative" style={{ aspectRatio: "4 / 3" }}>
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
            <h3 className="heading-display text-2xl text-white mb-1">
              {p.title}
            </h3>
            <p className="font-body text-sm tracking-[0.15em] uppercase text-white/90">
              {p.subtitle}
            </p>
          </div>
        </div>
        <div
          className="bg-card px-6 pt-5 pb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {p.body.map((line, j) => (
            <p
              key={j}
              className="font-body text-base text-charcoal/80 leading-relaxed mb-4 last:mb-0"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Desktop: hover reveal */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden border-t-2 border-gold bg-card hidden md:block"
        style={{ minHeight: "420px" }}
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        />
        <div className="absolute inset-x-0 top-0 px-8 pt-8">
          <h3
            className="heading-display text-3xl mb-2"
            style={{
              color: hovered ? "hsl(var(--navy))" : "#FFFFFF",
              transition: "color 0.45s ease",
            }}
          >
            {p.title}
          </h3>
          <p
            className="font-body text-sm tracking-[0.15em] uppercase"
            style={{
              color: hovered ? "hsl(var(--gold))" : "rgba(255,255,255,0.9)",
              transition: "color 0.45s ease",
            }}
          >
            {p.subtitle}
          </p>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 px-8 pb-8"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.45s ease 0.1s",
          }}
        >
          {p.body.map((line, j) => (
            <p
              key={j}
              className="font-body text-base text-charcoal/80 leading-relaxed mb-4 last:mb-0"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const phases = [
  {
    label: "Phase 1",
    name: "Empower",
    body: "We assess where you are, clarify what you are actually building, identify the real constraints, and establish the strategic direction.",
  },
  {
    label: "Phase 2",
    name: "Build",
    body: "We develop the business, the offer architecture, the positioning, and the core brand and marketing foundation.",
  },
  {
    label: "Phase 3",
    name: "Operate",
    body: "We strengthen the systems, decisions, and practical structure required to begin operating with more professionalism and consistency.",
  },
  {
    label: "Phase 4",
    name: "Thrive",
    body: "We refine toward launch, traction, leadership maturity, and a more sustainable path forward.",
  },
];

const outcomes = [
  "Strategic clarity about what you are building, for whom, and why it will work",
  "Market positioning that differentiates you at a premium level",
  "A brand identity that reflects the quality and depth of your work",
  "A professional web presence that earns trust before you say a word",
  "Stronger leadership, sharper decisions, and the internal steadiness to sustain momentum",
  "A business designed to support greater freedom, prosperity, and quality of life",
];

const forItems = [
  "You already have real experience and capability",
  "You want to build a premium, freedom-based business",
  "You are tired of piecing together strategy, coaching, branding, and execution from separate places",
  "You value depth, quality, and real support",
  "You are ready to invest in building properly",
];

const notForItems = [
  "You are looking for a low-cost course",
  "You want passive inspiration without execution",
  "You are unwilling to make decisions or do the work required",
  "You are at a hobby stage rather than a committed build stage",
  "You want shortcuts instead of substance",
];

const FounderON = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar />

      {/* Hero */}
      <section className="section-navy pt-40 pb-12 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="leading-[1.05] mb-4 select-none"
            style={{
              fontFamily: "'Figtree', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(5rem, 14vw, 12rem)",
              letterSpacing: "-0.04em",
              WebkitTextStroke: "4px hsl(var(--gold))",
              color: "transparent",
            }}
          >
            ON
            <sup
              className="text-base md:text-3xl"
              style={{
                position: "relative",
                top: "-2.8rem",
                marginLeft: "0.05em",
                letterSpacing: 0,
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 600,
                WebkitTextStroke: "1px hsl(var(--gold))",
              }}
            >
              ™
            </sup>
          </h1>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/90 leading-snug mb-8">
            Build the business and the founder required to thrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://founderfreedomscore.netlify.app/assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Apply for ON →
            </a>
            <a href="/book" className="btn-outline-light" onClick={() => trackCTA("Book a Strategy Call", "founder_on_cta", "/book")}>Book a Strategy Call →</a>
          </div>
        </div>
      </section>

      <HeroPhotoGrid />

      {/* Program Overview */}
      <section className="bg-card pt-24 md:pt-32 pb-12 md:pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            The 24-Week Experience
          </p>
          <h2
            className="heading-display text-4xl md:text-5xl text-navy mb-8"
            style={{ lineHeight: 1.2 }}
          >
            One integrated path<br />to a thriving business.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            ON is a proprietary 24-week business-building experience that combines strategic advisory, founder development, and expert-led execution to help you create a thriving business with greater freedom, mastery, and commercial strength.
          </p>
        </div>
      </section>

      {/* What ON Is */}
      <section className="bg-card pt-12 md:pt-16 pb-24 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <div className="w-full">
            <img
              src={aaronWorkingImg}
              alt="Founder at work"
              loading="lazy"
              className="w-full object-cover aspect-[4/5]"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>

          {/* Content */}
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              What ON Is
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
              This is not another program.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              ON is a proprietary 4-stage founder development and business execution process, designed to build a fully operational business and the founder required to lead it.
            </p>
            <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mb-6">
              Most offers in this space give you one part of what is required.
            </p>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              You get:
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {[
                "Coaching without execution",
                "Consulting without transformation",
                "Design without strategy",
                "Advice without accountability",
                "Momentum without foundations",
              ].map((t, i) => (
                <Bullet key={i}>{t}</Bullet>
              ))}
            </div>
            <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
              ON was created to solve that.
            </p>
          </div>
        </div>
      </section>

      {/* Premium partnership statement */}
      <section
        className="relative py-20 md:py-24 px-6 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${premiumBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: "hsl(var(--navy) / 0.75)" }}
        />
        <div className="relative max-w-6xl mx-auto text-left">
          <h3 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground max-w-2xl">
            ON is a premium, integrated experience.
          </h3>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/85 leading-relaxed max-w-md ml-auto mt-16 md:mt-32">
            For qualified professionals who want to build a real business with real support, while becoming the person capable of leading it well.
          </p>
        </div>
      </section>

      {/* Why It Is Different */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Why It Is Different
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy">
              Most paths to entrepreneurship are fragmented.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mt-8 max-w-3xl">
              Inside ON<sup
                style={{
                  fontSize: "0.55em",
                  position: "relative",
                  top: "-0.55em",
                  marginLeft: "0.08em",
                  verticalAlign: "baseline",
                  lineHeight: 1,
                  fontWeight: 500,
                  letterSpacing: 0,
                }}
              >™</sup>, strategy, identity, execution, and outcomes are not treated as separate projects. We work across the parts that actually have to fit together.
            </p>
          </div>

          <BraceIntegrated />
        </div>
      </section>

      {/* Three-Pillar Model */}
      <section className="bg-card pt-24 pb-12 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-16 text-center">
            The Three-Pillar Model
          </h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-stretch">
            {pillars.map((p, i) => (
              <PillarCard key={i} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* What the Work Creates, photo right */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              What the Work Creates
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
              A fundamentally different position than where you started.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              ON is designed to leave you with more than a plan and more than clarity. You leave with a business that has real structure, real credibility, and real forward motion, and a founder who has the confidence and capability to lead it.
            </p>
          </div>
          <div className="order-1 md:order-2 w-full">
            <img
              src={blairPortraitImg}
              alt="A founder built to lead"
              loading="lazy"
              className="w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* What the Work Creates, photo left with outcomes */}
      <section className="bg-card pb-24 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="w-full">
            <img
              src={foundersDuoImg}
              alt="Building a business that lasts"
              loading="lazy"
              className="w-full object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <h2 className="heading-display text-3xl md:text-4xl text-navy mb-8">
              Depending on your stage and direction, that shift may include:
            </h2>
            <div className="flex flex-col gap-5 mb-8">
              {outcomes.map((t, i) => (
                <Bullet key={i}>{t}</Bullet>
              ))}
            </div>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              The point is not a list of deliverables. The point is that you leave with a business and a founder that are both built to last.
            </p>
          </div>
        </div>
      </section>

      {/* How the Experience Works */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Sticky left column */}
          <div className="md:sticky md:top-28 self-start">
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              How the Experience Works
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
              A 24-week build, not a loose container.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              ON follows a structured progression that moves from truth to design to execution to readiness. This is not about rushing you through a template. It is about building at a level that matches the weight of your next chapter.
            </p>
          </div>

          {/* Phases on the right */}
          <div className="flex flex-col gap-12 md:gap-16">
            {phases.map((p, i) => (
              <div key={i}>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  {p.label}
                </p>
                <h3 className="heading-display text-3xl md:text-4xl text-navy mb-3">
                  {p.name}
                </h3>
                <p className="font-body text-lg md:text-xl text-charcoal/75 leading-relaxed" style={{ maxWidth: "33rem" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Outcomes
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            A more powerful relationship with your work and your life.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-12">
            Clients come to ON for different reasons. But the deeper shift is usually the same:
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Less */}
            <div className="border-t-2 border-charcoal/20 pt-6">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-6">
                Less
              </p>
              <ul className="flex flex-col gap-3">
                {["confusion", "drift", "fragmentation"].map((w, i) => (
                  <li
                    key={i}
                    className="heading-display text-2xl md:text-3xl text-charcoal/45 line-through decoration-charcoal/30 decoration-1"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* More */}
            <div className="border-t-2 border-gold pt-6">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-6">
                More
              </p>
              <ul className="flex flex-col gap-3">
                {["clarity", "direction", "capability", "autonomy"].map((w, i) => (
                  <li
                    key={i}
                    className="heading-display text-2xl md:text-3xl text-navy"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            The business becomes stronger. The founder becomes stronger. And the future becomes something you are building toward, not something you are bracing for.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Who This Is For
            </p>
            <h3 className="heading-display text-3xl md:text-4xl text-navy mb-6">
              For capable professionals ready to build at a higher level.
            </h3>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
              This is likely for you if:
            </p>
            <div className="flex flex-col gap-5">
              {forItems.map((t, i) => (
                <Bullet key={i}>{t}</Bullet>
              ))}
            </div>
          </div>
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Who This Is Not For
            </p>
            <h3 className="heading-display text-3xl md:text-4xl text-navy mb-6">
              ON is not for everyone.
            </h3>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
              It is likely not for you if:
            </p>
            <div className="flex flex-col gap-5">
              {notForItems.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      marginTop: "0.45rem",
                      border: "1.5px solid hsl(var(--charcoal) / 0.35)",
                    }}
                  >
                    <span
                      className="rounded-full"
                      style={{
                        width: "0.4rem",
                        height: "0.4rem",
                        backgroundColor: "hsl(var(--charcoal) / 0.35)",
                      }}
                    />
                  </span>
                  <p className="font-body text-lg md:text-xl text-charcoal/70 leading-relaxed">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Investment
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            ON is a premium partnership.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            This experience is designed for people who understand the cost of delay, fragmentation, and under-building. The real cost is not the investment, it is another year of building without the right support.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            Investment details are shared during the strategy call so they can be discussed in the context of your goals, stage, and fit.
          </p>
        </div>
      </section>

      <BottomCTASection
        heading="Ready to build with real support?"
        paragraph="Apply for ON, or begin with the Founder Freedom Score if you want a lower-friction first step."
        ctaText="Apply for ON →"
        ctaHref="https://founderfreedomscore.netlify.app/assessment"
      /></div>
      <Footer />
      </>
  );
};

export default FounderON;
