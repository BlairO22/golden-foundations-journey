const ExpertiseRequiresSection = () => {
  return (
    <section className="section-offwhite py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.05]">
          Entrepreneurship requires more than expertise.
        </h2>
        <div className="md:mt-32 lg:mt-48">
          <div className="h-px w-16 bg-gold mb-6" />
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            But the path is often fragmented, leaving you to piece together strategy, growth, and direction on your own.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mt-6">
            The result is not freedom.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mt-6">
            It is hesitation, second-guessing, and the fear of building a business that either fails — or costs you the life you are trying to create.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseRequiresSection;
