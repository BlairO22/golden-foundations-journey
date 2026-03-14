import founderPortrait from "@/assets/founder-portrait.png";

const KnowingSection = () => {
  return (
    <section className="bg-card py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
            Knowing isn't<br />the problem.
          </h2>
          <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed">
            You may already know the business you want to build. But if you're a mid-career professional stepping into entrepreneurship, knowing what to do and actually building it are two very different things.
          </p>
        </div>
        <div>
          <img
            src={founderPortrait}
            alt="Founder at work"
            className="w-full object-cover aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowingSection;
