import pathArt from "@/assets/path-art.webp";

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
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              If your brand and website are not live by Week 12 and you have not enrolled your first client by Week 20, Thriving Founder provides up to 8 additional weeks of production support and bi-weekly coaching check-ins at no cost, until your first client is enrolled.
            </p>
          </div>
          <div className="flex justify-center">
            <img loading="lazy" src={pathArt} alt="Path to success" className="max-w-xs w-full" />
          </div>
        </div>

        {/* Bilateral commitment */}
        <div className="border-t border-gold/30 pt-16 text-center">
          <p className="font-body text-lg md:text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
            We do this together. We bring the guidance, structure, and production support. You bring your experience, commitment, and willingness to step forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
