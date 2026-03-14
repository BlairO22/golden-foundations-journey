import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldLineIcon from "@/components/GoldLineIcon";

const foundations = [
  {
    icon: "clarity" as const,
    title: "Clarity",
    description: "Do you know exactly what you're building, who it's for, and why it matters? Clarity isn't just about vision — it's about alignment between what you want and what you're actually doing every day.",
  },
  {
    icon: "capacity" as const,
    title: "Capacity",
    description: "Can you sustain this? Capacity measures your energy, time management, stress resilience, and ability to build without burning out. Most founders underestimate how much this determines everything else.",
  },
  {
    icon: "cashflow" as const,
    title: "Cashflow",
    description: "Are you making strategic financial decisions or survival decisions? Cashflow measures your runway, pricing confidence, revenue systems, and the financial foundation that gives you freedom to build.",
  },
  {
    icon: "confidence" as const,
    title: "Confidence",
    description: "Do you trust yourself to make the hard calls? Confidence measures your ability to handle setbacks, make decisions under uncertainty, and keep going when things get uncomfortable.",
  },
];

const ScoreFoundationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="heading-display text-4xl md:text-5xl text-navy text-center mb-20">
          The 4 Foundations
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          {foundations.map((f) => (
            <div key={f.title} className="flex gap-6">
              <div className="shrink-0 mt-1">
                <GoldLineIcon type={f.icon} size={40} />
              </div>
              <div>
                <h3 className="heading-display text-xl text-navy mb-3">{f.title}</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScoreFoundationsSection;
