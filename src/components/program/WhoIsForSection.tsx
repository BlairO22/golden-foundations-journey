import { useScrollReveal } from "@/hooks/useScrollReveal";

const forList = [
  "Experienced professionals ready to build a consulting or advisory business.",
  "Corporate leaders planning a transition into entrepreneurship.",
  "Founders who need structure, strategy, and accountability, not just inspiration.",
  "People willing to invest the time and effort required to build something real.",
  "Individuals who value partnership over passive learning.",
];

const notForList = [
  "People looking for a quick-fix course or template.",
  "Those not ready to invest in professional-level infrastructure.",
  "Anyone expecting results without putting in the work.",
  "Founders seeking a purely DIY approach.",
  "People looking for group programs or cohort-based learning.",
];

const WhoIsForSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div>
          <h3 className="heading-display text-3xl md:text-4xl text-navy mb-8">
            Who this partnership is for.
          </h3>
          <ul className="space-y-4">
            {forList.map((item, i) => (
              <li key={i} className="font-body text-sm text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="heading-display text-3xl md:text-4xl text-navy mb-8">
            Who it is not for.
          </h3>
          <ul className="space-y-4">
            {notForList.map((item, i) => (
              <li key={i} className="font-body text-sm text-charcoal/60 leading-relaxed pl-4 border-l border-charcoal/20">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
