import bgImg from "@/assets/aaron-working.jpg";

const OurGoalSection = () => {
  return (
    <section
      className="relative py-32 md:py-48 px-6"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: "hsl(var(--navy) / 0.75)" }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <h3 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-8">
          Our goal is not just to help you launch your business.
        </h3>
        <p className="font-body text-xl md:text-2xl text-primary-foreground/85 leading-relaxed">
          It is to help you build a day-to-day life that feels aligned, sustainable, and free.
        </p>
      </div>
    </section>
  );
};

export default OurGoalSection;
