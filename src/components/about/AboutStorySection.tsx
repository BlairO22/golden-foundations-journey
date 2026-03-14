import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutStorySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-card py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="font-body text-base md:text-lg text-charcoal/80 leading-[1.9] space-y-8">
          <p>
            That loss — the partnership dissolution, the financial collapse, the rebuilding from zero — changed everything. Not because it broke him, but because it showed him what actually matters when everything else falls away.
          </p>
          <p>
            Aaron rebuilt. Not just a career, but a way of working that integrates the strategic rigor of two decades in product and business with the human depth that only comes from surviving the full cycle — the building, the breaking, and the rebuilding.
          </p>
          <p>
            That integration is what Thriving Founder™ is built on.
          </p>
          <p>
            For over twenty years, Aaron has worked as a transformational coach alongside his business career — helping individuals navigate the most consequential transitions of their personal and professional lives.
          </p>
          <p>
            He's worked with restaurateurs, athletes, executives, and entrepreneurs. The common thread is always the same: people who are successful on paper but know that something deeper needs to change.
          </p>
          <p>
            Thriving Founder™ is where both sides of Aaron's experience come together. The business expertise means your brand, website, and systems actually get built — to a professional standard, on a real timeline. The coaching depth means the internal work that determines whether the business thrives or stalls doesn't get ignored.
          </p>
          <p className="font-medium text-charcoal">
            This isn't just about building a business. It's about becoming the founder who can sustain one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
