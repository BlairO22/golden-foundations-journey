const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    role: "Position, Company name",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    role: "Position, Company name",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    role: "Position, Company name",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-offwhite py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6">
          Real founders. Real results.
        </h2>
        <p className="font-body text-base text-charcoal/60 mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="border-t-2 border-gold pt-8">
              <p className="font-display text-lg text-navy mb-8 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body text-sm font-semibold text-charcoal">{t.name}</p>
                <p className="font-body text-xs text-charcoal/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
