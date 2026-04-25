const FreedomMasterySection = () => {
  return (
    <section className="section-navy py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Dramatic pull quote, grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 text-left">
          <h3 className="heading-display text-2xl md:text-3xl text-primary-foreground leading-snug border border-primary-foreground/15 bg-primary-foreground/5 rounded-lg p-6 md:p-8">
            <span className="text-gold">Freedom</span> without mastery collapses.
          </h3>
          <h3 className="heading-display text-2xl md:text-3xl text-primary-foreground leading-snug border border-primary-foreground/15 bg-primary-foreground/5 rounded-lg p-6 md:p-8">
            <span className="text-gold">Mastery</span> without freedom suffocates.
          </h3>
        </div>

        {/* Supporting paragraph */}
        <h3 className="heading-display text-2xl md:text-3xl text-primary-foreground leading-snug mb-12">
          Thriving Founder is built on the belief that meaningful entrepreneurship requires both.
        </h3>

        {/* Definitions grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-left">
          <div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-3">
              Freedom
            </p>
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              The ability to direct your work and life with greater balance and truth.
            </p>
          </div>
          <div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-3">
              Mastery
            </p>
            <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              The wisdom and disciplined development of what it takes to build something that lasts.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <div className="h-px w-16 bg-gold mx-auto mb-8" />
        <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          Together, they create a different standard of success, one that includes prosperity, leadership, and a life that still feels like your own.
        </p>
      </div>
    </section>
  );
};

export default FreedomMasterySection;
