/*
 * Archived earlier version of the phases layout — plain vertical rows,
 * no hover photo reveal. Kept so we can restore if needed.
 * Drop-in replacement for the phases block inside FounderONProcessSection.
 */

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

const PhasesSimple = () => {
  return (
    <section
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "#1F3F78" }}
    >
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
                <h3 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                  {p.name}
                </h3>
                <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhasesSimple;
