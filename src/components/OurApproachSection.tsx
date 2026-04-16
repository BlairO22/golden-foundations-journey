const approach = [
  {
    accent: "the Business",
    body: "We create the strategy, structure, offer, brand, and commercial foundation required for real traction.",
  },
  {
    accent: "the Founder",
    body: "We strengthen the leadership, decision-making, identity, and internal standards required to sustain success.",
  },
  {
    accent: "for Freedom",
    body: "We design a company that supports greater autonomy, flexibility, ownership of time, and a more holistic life.",
  },
];

const OurApproachSection = () => {
  return (
    <section className="bg-card py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6">
            Entrepreneurship should not become a cage.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            It should become a path to both Freedom and Mastery.
          </p>
        </div>

        <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-8">
          Our Approach
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-8">
          {approach.map((item, i) => (
            <div
              key={i}
              className="relative bg-background/60 border border-charcoal/10 rounded-lg p-8 md:p-10 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/40"
            >
              <span
                className="select-none leading-none"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 5vw, 4rem)",
                  WebkitTextStroke: "1.5px hsl(var(--gold))",
                  color: "transparent",
                  letterSpacing: "-0.04em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-display leading-tight">
                <span className="block text-3xl md:text-4xl text-navy">Build</span>
                <span className="block text-3xl md:text-4xl text-navy">
                  {item.accent}
                </span>
              </h3>
              <p className="font-body text-base md:text-lg text-charcoal/75 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
