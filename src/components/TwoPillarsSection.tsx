import founderPortrait from "@/assets/founder-portrait.png";
import foundersDuo from "@/assets/founders-duo.png";

const TwoPillarsSection = () => {
  return (
    <section className="bg-card py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-4xl md:text-5xl text-navy text-center mb-20">
          Two pillars. One partnership.<br />Everything you need.
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coaching */}
          <div>
            <img loading="lazy" alt="Aaron McLean" className="w-full aspect-[3/2] object-cover object-top mb-8" src="/lovable-uploads/3c0590e8-23b2-4e12-917d-0fec9db2be67.png" />
            <h3 className="heading-display text-2xl text-navy mb-2">Strategic Advisory + Transformational Coaching</h3>
            <p className="font-body text-sm font-semibold text-gold mb-4 tracking-wide">Led by Aaron McLean</p>
            <p className="font-body text-base text-charcoal/80 leading-relaxed">
              Weekly 90-minute one-on-one sessions that go beyond business strategy. Aaron works with you on the decisions, the doubts, the identity shift, and the vision — building the internal operating system that determines whether your business thrives or stalls.
            </p>
          </div>
          {/* Production */}
          <div>
            <img loading="lazy" alt="Blair Owens and team" className="w-full aspect-[3/2] object-cover mb-8" src="/lovable-uploads/50a3bf20-eabe-4102-9a84-2f70d150be6c.png" />
            <h3 className="heading-display text-2xl text-navy mb-2">Business Production</h3>
            <p className="font-body text-sm font-semibold text-gold mb-4 tracking-wide">Led by Blair Owens, Creative Director</p>
            <p className="font-body text-base text-charcoal/80 leading-relaxed">
              Done-with-you production of everything your business needs to launch: brand identity, professional website, social media strategy, marketing systems, sales infrastructure, and operational tools. You don't just plan your business — the Thriving Founder team builds it alongside you.
            </p>
          </div>
        </div>
        <div className="text-center mt-20">
          <h2 className="heading-display text-3xl md:text-4xl text-navy mb-6">
            This is not a course.<br />This is not a group program.
          </h2>
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            This is a one-on-one partnership that combines the strategic depth of executive coaching with the tangible output of a full-service agency.
          </p>
        </div>
      </div>
    </section>);

};

export default TwoPillarsSection;