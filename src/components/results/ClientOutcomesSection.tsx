import { useScrollReveal } from "@/hooks/useScrollReveal";

const outcomes = [
  {
    name: "Client A",
    context: "Former corporate executive transitioning to independent consulting.",
    before: "Stuck in planning mode for over a year. No brand, no website, no pipeline. Overwhelmed by the gap between corporate experience and starting from scratch.",
    after: "Brand identity, website, and booking system live by Week 10. First paying client enrolled by Week 14. Operational systems in place. Revenue generating within the partnership timeline.",
  },
  {
    name: "Client B",
    context: "Experienced professional launching a coaching practice.",
    before: "Had deep expertise but no business infrastructure. Struggled with pricing, positioning, and the confidence to charge what the work was worth.",
    after: "Clear positioning and offer architecture defined by Week 6. Brand and website live by Week 11. Enrolled three clients within the first 20 weeks. Pricing aligned with market value.",
  },
  {
    name: "Client C",
    context: "Founder rebuilding after a business loss.",
    before: "Recovering from a failed partnership. Financial pressure, identity crisis, and no clarity on what to build next.",
    after: "Rebuilt personal clarity and professional direction through the coaching process. New brand launched by Week 12. First client enrolled by Week 18. Reported the highest confidence and lowest stress in five years.",
  },
];

const ClientOutcomesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="heading-display text-4xl md:text-5xl text-navy text-center mb-20">
          Client outcomes.
        </h2>
        <div className="space-y-24">
          {outcomes.map((o, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-4">
                  {o.name}
                </p>
                <p className="font-body text-sm text-charcoal/60 mb-6 italic">
                  {o.context}
                </p>
                <h3 className="heading-display text-lg text-navy mb-3">Before</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  {o.before}
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="heading-display text-lg text-navy mb-3">After</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  {o.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientOutcomesSection;
