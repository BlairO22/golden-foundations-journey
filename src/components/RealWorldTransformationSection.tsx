const outcomes = [
  "Moving from scattered expertise to a clear, premium offer that the market takes notice of",
  "Turning years of experience into a business with real commercial architecture",
  "Building a brand presence that matches the caliber of the founder behind it",
  "Replacing delay and self-doubt with direction, structure, and forward motion",
  "Creating a company that supports both ambition and quality of life",
];

const RealWorldTransformationSection = () => {
  return (
    <section className="section-offwhite py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
            This work is built for real-world transformation.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            Not just better ideas. Not just better branding. Better alignment between who you are, what you are building, and how you live.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
            Here is what that can look like:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {outcomes.map((text, i) => (
            <div
              key={i}
              className="bg-background/60 border border-charcoal/10 rounded-lg p-6 md:p-8 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gold/40"
            >
              <span
                aria-hidden
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginTop: "0.4rem",
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
              <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
                {text}
              </p>
            </div>
          ))}

          {/* 6th cell — CTA */}
          <div className="flex items-center justify-center p-6 md:p-8">
            <a href="/results" className="btn-gold">
              View Results →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldTransformationSection;
