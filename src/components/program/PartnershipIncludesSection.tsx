import { useScrollReveal } from "@/hooks/useScrollReveal";

const columns = [
  {
    title: "Coaching",
    items: [
      "Weekly partnership sessions with Aaron McLean focused on strategy, clarity, and accountability.",
      "Founder Reset Sessions designed to restore clarity and break the stress-performance cycle.",
      "Between-session support so clients are never stuck waiting for the next session.",
    ],
  },
  {
    title: "Production",
    items: [
      "Full brand identity including logo, color palette, messaging framework, and brand guidelines co-built with Blair Owens.",
      "Professional website designed and built alongside the client.",
      "Social media strategy including content pillars, templates, and posting structure.",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Marketing and client acquisition systems including email sequences and lead generation tools.",
      "24 interactive playbooks delivered through ON Platform™ that guide weekly progress.",
    ],
    extra: {
      title: "ON Platform™",
      desc: "Your personal dashboard tracking milestones, playbooks, and the Transformation Scorecard.",
    },
  },
];

const PartnershipIncludesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-20">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-4">
            Everything you need to thrive.
          </h2>
          <h3 className="heading-display text-3xl md:text-4xl text-navy">
            Nothing that wastes your time.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
                {col.title}
              </p>
              <ul className="space-y-5">
                {col.items.map((item, i) => (
                  <li key={i} className="font-body text-sm text-charcoal/80 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              {col.extra && (
                <div className="mt-10 pt-8 border-t border-gold/20">
                  <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-4">
                    {col.extra.title}
                  </p>
                  <p className="font-body text-sm text-charcoal/80 leading-relaxed">
                    {col.extra.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipIncludesSection;
