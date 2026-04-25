import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldLineIcon from "@/components/GoldLineIcon";

const credentials = [
  {
    icon: "build" as const,
    title: "Product & Business",
    description:
      "20+ years in product strategy, creative direction, and business development. Partnerships with Nintendo, Tim Hortons, Boston Pizza, HeartMath. Platform acquisition by Box (NYSE: BOX). Advisory work with enterprise teams and funded startups.",
  },
  {
    icon: "empower" as const,
    title: "Coaching",
    description:
      "20+ years of one-on-one transformational coaching. Worked with founders, executives, athletes, and professionals through career transitions, business launches, and personal transformation.",
  },
  {
    icon: "thrive" as const,
    title: "Creative",
    description:
      "Musician, visual artist, and creative director. The creative practice informs the coaching, Aaron brings an unusual ability to see patterns, hold complexity, and work with the whole person.",
  },
];

const AboutCredentialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-offwhite py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="heading-display text-4xl md:text-5xl text-navy text-center mb-20">
          The experience behind the method.
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {credentials.map((c) => (
            <div key={c.title} className="text-center">
              <div className="flex justify-center mb-6">
                <GoldLineIcon type={c.icon} size={48} />
              </div>
              <h3 className="heading-display text-xl text-navy mb-4">{c.title}</h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCredentialsSection;
