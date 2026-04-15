const phases = [
  {
    label: "Phase 1",
    name: "Empower",
    body: "Clarify the vision, truth, and foundations.",
  },
  {
    label: "Phase 2",
    name: "Build",
    body: "Shape the business, offer, brand, and strategic architecture.",
  },
  {
    label: "Phase 3",
    name: "Operate",
    body: "Develop the systems, structure, and leadership required to run well.",
  },
  {
    label: "Phase 4",
    name: "Thrive",
    body: "Refine for growth, freedom, sustainability, and long-term success.",
  },
];

const FounderONProcessSection = () => {
  return (
    <>
      {/* Big Founder ON introduction */}
      <section className="section-offwhite pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-8">
            Introducing
          </p>
          <h2 className="heading-display text-6xl md:text-8xl lg:text-9xl text-navy leading-[1.05] mb-10">
            Founder ON
            <span className="align-super text-2xl md:text-3xl">™</span>
          </h2>
          <div className="h-px w-24 bg-gold mx-auto mb-10" />
          <p className="font-body text-xl md:text-2xl text-charcoal leading-relaxed max-w-3xl mx-auto">
            Thriving Founder's proprietary 4-stage founder development and business execution process.
          </p>
        </div>
      </section>

      {/* "Founder ON is designed..." — separate section */}
      <section className="bg-card py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xl md:text-2xl text-charcoal leading-relaxed">
            Founder ON is designed for capable professionals who want more than advice, coaching, or disconnected services. Founder ON helps you build a fully operational business — and become the founder required to lead it.
          </p>
        </div>
      </section>

    <section className="section-offwhite py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col max-w-5xl mx-auto">
          {phases.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-8 md:gap-16 items-start py-10 md:py-14 border-t border-gold/30 last:border-b"
            >
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
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-2 md:pt-4">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  {p.label}
                </p>
                <h3 className="heading-display text-3xl md:text-4xl text-navy mb-4">
                  {p.name}
                </h3>
                <p className="font-body text-lg md:text-xl text-charcoal/75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto border-2 border-gold/40 bg-gold/5 rounded-lg p-8 md:p-10 relative">
          <span
            aria-hidden
            className="absolute -top-3 left-6 bg-[hsl(var(--off-white))] px-3 font-body text-xs tracking-[0.25em] uppercase text-gold"
          >
            In other words
          </span>
          <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed">
            This is not a course or a stack of separate services. It is a proprietary process for building the business, developing the founder, and creating a stronger path to freedom, mastery, and a more fully lived life.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default FounderONProcessSection;
