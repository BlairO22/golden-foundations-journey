const CTASection = () => {
  return (
    <section className="section-navy py-24 md:py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-display text-4xl md:text-6xl text-primary-foreground mb-12">
          Ready to build?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="btn-gold">Book a Strategy Call →</a>
          <a href="#" className="btn-outline-light">Take the Founder Freedom Score First →</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
