const items = [
  {
    text: "Online courses give you frameworks",
    sub: "— but no accountability.",
  },
  {
    text: "Executive coaches help with mindset",
    sub: "— but don't build anything with you.",
  },
  {
    text: "Agencies will build your website",
    sub: "— but rarely understand the vision behind it.",
  },
];

const BuildingMoreSection = () => {
  return (
    <section className="section-offwhite py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="heading-display text-4xl md:text-5xl text-navy">
            You're building more<br />than a business.
          </h2>
        </div>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="border-l-2 border-gold pl-6">
              <p className="font-body text-base md:text-lg font-semibold text-charcoal">
                {item.text}
              </p>
              <p className="font-body text-base text-charcoal/60 mt-1">{item.sub}</p>
            </div>
          ))}
          <p className="font-body text-base text-charcoal/70 leading-relaxed pt-4">
            None of them treat you as a whole person navigating more than a business launch — but an identity shift.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildingMoreSection;
