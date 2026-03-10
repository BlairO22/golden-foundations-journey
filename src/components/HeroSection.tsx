const HeroSection = () => {
  return (
    <section className="section-navy min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-8">
        Become the founder.
      </h1>
      <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
        Thriving Founder is a one-on-one partnership that combines transformational coaching with done-with-you business production — so you don't just plan your next chapter. You build it.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#" className="btn-gold">Take the Founder Freedom Score →</a>
        <a href="#" className="btn-outline-light">Learn About the Program →</a>
      </div>
    </section>
  );
};

export default HeroSection;
