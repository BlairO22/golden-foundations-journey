import founderPortrait from "@/assets/pexels-arina-krasnikova-5951377.jpg";

const KnowingSection = () => {
  return (
    <section className="bg-card pt-24 md:pt-32 pb-12 md:pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
            You have the expertise.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            What is missing is the path to turn it into a business that actually works — without having to figure it all out alone.
          </p>
        </div>
        <div>
          <img
            src={founderPortrait}
            alt="Founder at work"
            className="w-full object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowingSection;
