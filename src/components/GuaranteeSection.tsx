import pathArt from "@/assets/path-art.png";

const GuaranteeSection = () => {
  return (
    <section className="bg-card py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Guarantee header */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
              We stand behind the work.
            </h2>
            <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
              If your brand and website are not live by Week 12 and you have not enrolled your first client by Week 20, Thriving Founder provides up to 8 additional weeks of production support and bi-weekly coaching check-ins at no cost — until your first client is enrolled.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={pathArt} alt="Path to success" className="max-w-xs w-full" />
          </div>
        </div>

        {/* Bilateral commitment */}
        <div className="border-t border-gold/30 pt-16 text-center">
          <h2 className="heading-display text-3xl md:text-5xl text-navy mb-4">
            This is a bilateral commitment.
          </h2>
          <h3 className="heading-display text-3xl md:text-5xl text-navy mb-4">
            We deliver. You do the work.
          </h3>
          <div className="mt-12">
            <h3 className="heading-display text-4xl md:text-6xl text-gold">
              The results follow.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
