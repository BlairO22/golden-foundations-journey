import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";
import whyImg from "@/assets/spenser-sembrat-BBtlAlhUeT4-unsplash.webp";
import heroImg from "@/assets/derek-coleman-EvZOXp8os5s-unsplash.jpg";
import believeImg from "@/assets/adhd-creative-co-ltd-7ImP-qO93RY-unsplash.jpg";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <span
      aria-hidden
      className="flex-shrink-0 flex items-center justify-center rounded-full"
      style={{
        width: "1rem",
        height: "1rem",
        marginTop: "0.45rem",
        border: "1.5px solid hsl(var(--gold))",
      }}
    >
      <span
        className="rounded-full"
        style={{
          width: "0.4rem",
          height: "0.4rem",
          backgroundColor: "hsl(var(--gold))",
        }}
      />
    </span>
    <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
      {children}
    </p>
  </div>
);

const beliefs = [
  "Business should support life, not dominate it",
  "Structure should create freedom, not bureaucracy",
  "Wealth and meaning do not have to be enemies",
  "Ambition does not have to destroy aliveness",
  "Execution and human depth belong together",
  "Premium work should feel both precise and alive",
];

const About = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar bg="#1F3F78" />

      {/* Hero */}
      <section className="section-navy">
        <div className="grid md:grid-cols-2 items-stretch">
          {/* Left content */}
          <div className="flex flex-col justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-8 md:px-16">
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-8">
              Thriving Founder
              <sup
                style={{
                  fontSize: "0.2em",
                  position: "relative",
                  top: "-2.5em",
                  marginLeft: "0.1em",
                  verticalAlign: "baseline",
                  fontWeight: 500,
                }}
              >
                ™
              </sup>
            </h1>
            <p className="font-body text-xl md:text-2xl text-primary-foreground/90 leading-snug">
              A brand built on the belief that business should create more life, not less.
            </p>
          </div>

          {/* Right photo */}
          <div className="hidden md:block relative min-h-[600px]">
            <img
              src={heroImg}
              alt="Founders collaborating"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="bg-card pt-24 md:pt-32 pb-12 md:pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xl md:text-2xl text-charcoal leading-relaxed">
            Thriving Founder exists for professionals who want to build with ambition, integrity, and greater freedom — without recreating the pressure, fragmentation, or emptiness they wanted to leave behind.
          </p>
        </div>
      </section>

      {/* Why Thriving Founder Exists */}
      <section className="bg-card pt-12 md:pt-16 pb-24 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="w-full">
            <img
              src={whyImg}
              alt="A different standard for building"
              loading="lazy"
              className="w-full object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              Why Thriving Founder Exists
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
              There are many ways to build a business.
            </h2>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
              Some produce money but cost people their health. Some produce movement but not substance. Some sound inspiring but never become real.
            </p>
            <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed mb-6">
              Thriving Founder was created to hold a different standard.
            </p>
            <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
              One where business growth and personal depth are not treated as separate worlds. One where strategy and execution still leave room for humanity. One where success is measured not only by commercial traction, but by the quality of the life it makes possible.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story / Origin */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Origin
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            A long path through building, leading, and becoming.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            Thriving Founder emerges from a long path through business-building, creative leadership, reinvention, challenge, and personal transformation.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            It is grounded in lived experience across product, branding, innovation, execution, entrepreneurship, and human development — including the hard-won understanding that building something successful and building something sustainable are not the same thing. That lesson was not learned from a book. It was learned by living through the gap between the two.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            The philosophy of Freedom and Mastery was not created as a tagline. It was earned through years of seeing what happens when ambition is not matched by alignment — and what becomes possible when people build from a more integrated place.
          </p>
        </div>
      </section>

      {/* Freedom and Mastery */}
      <section className="section-navy py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Freedom and Mastery
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-12">
            The standard behind the brand.
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="border-t-2 border-gold pt-6">
              <h3 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                Freedom
              </h3>
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Not the absence of responsibility. The capacity to direct your work and life with greater ownership, flexibility, and truth.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                Mastery
              </h3>
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Not self-optimization for its own sake. The steady cultivation of capability, integrity, and depth.
              </p>
            </div>
          </div>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mt-12 max-w-3xl">
            Together, they describe the kind of founder we believe is worth becoming — and the kind of business we believe is worth building.
          </p>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
              What We Believe
            </p>
            <h2 className="heading-display text-4xl md:text-5xl text-navy mb-12">
              We believe:
            </h2>
            <div className="flex flex-col gap-5">
              {beliefs.map((t, i) => (
                <Bullet key={i}>{t}</Bullet>
              ))}
            </div>
          </div>
          <div className="w-full">
            <img
              src={believeImg}
              alt="Founders connecting"
              loading="lazy"
              className="w-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      {/* Why This Matters in Practice */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Why This Matters in Practice
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            This philosophy is not abstract.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            It shapes how we build, how we guide, what we prioritize, and what we refuse to glamorize.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
            We are not here to help you chase growth that hollows you out. We are here to help you build something stronger, cleaner, more aligned, and more sustaining.
          </p>
        </div>
      </section>

      <BottomCTASection
        heading="If this feels aligned, begin with the Founder Freedom Score."
        paragraph="A short, honest diagnostic to help you see where you stand — in about 3 minutes."
        ctaText="Discover Your Founder Freedom Score →"
        ctaHref="https://founderfreedomscore.netlify.app/assessment"
      /></div>
      <Footer />
      </>
  );
};

export default About;
