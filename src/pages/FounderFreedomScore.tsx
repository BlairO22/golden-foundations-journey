import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";

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

const foundations = [
  {
    name: "Clarity",
    body: "Do you know what you are building, who it is for, and how it creates value?",
  },
  {
    name: "Capacity",
    body: "Do you have the time, energy, systems, and internal bandwidth to build well?",
  },
  {
    name: "Cashflow",
    body: "Do you have a viable commercial path, or are you still operating in uncertainty?",
  },
  {
    name: "Confidence",
    body: "Are you making grounded decisions from conviction, or hesitating at every step?",
  },
];

const receives = [
  "Your overall readiness score and tier placement",
  "Individual scores across all four foundations, displayed as a visual radar chart",
  "Insight into which foundation is your strongest — and which is most limiting your progress",
  "A clearer sense of what your next move may need to be",
  "A pathway toward deeper support through Founder ON, if the fit is right",
];

const FounderFreedomScore = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-navy pt-40 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="heading-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-[1.05] mb-8">
            Founder Freedom Score
            <span className="align-super text-2xl md:text-3xl">™</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-6 max-w-3xl mx-auto">
            A clear diagnostic of where you stand as an entrepreneur — in about 3 minutes.
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-6 max-w-3xl mx-auto">
            Assess your readiness across four core foundations: Clarity, Capacity, Cashflow, and Confidence.
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-12 max-w-3xl mx-auto">
            This is not a gimmicky quiz. It is a practical diagnostic designed to help you see what is supporting your next chapter — and what may still be limiting it.
          </p>
          <a href="#" className="btn-gold">
            Take the Founder Freedom Score →
          </a>
        </div>
      </section>

      {/* What It Measures */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            What It Measures
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-6">
            Freedom in business is not just a dream. It rests on foundations.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-16 max-w-3xl">
            The Founder Freedom Score helps you assess four areas that consistently shape readiness:
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {foundations.map((f, i) => (
              <div key={i} className="border-t-2 border-gold pt-6">
                <p className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-3">
                  0{i + 1}
                </p>
                <h3 className="heading-display text-3xl md:text-4xl text-navy mb-4">
                  {f.name}
                </h3>
                <p className="font-body text-base text-charcoal/80 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-offwhite py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            Why It Matters
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            Most people do not need more information. They need a more honest view of where they stand.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            When the foundations are weak, even talented people stay stuck in cycles of overthinking, inconsistency, and partial commitment.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-charcoal leading-relaxed">
            A better diagnosis leads to better decisions.
          </p>
        </div>
      </section>

      {/* What You Receive */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            What You Receive
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-10">
            After completing the Founder Freedom Score, you will receive:
          </h2>
          <div className="flex flex-col gap-5 mb-10">
            {receives.map((t, i) => (
              <Bullet key={i}>{t}</Bullet>
            ))}
          </div>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            The results are immediate, on-screen, and designed to be genuinely useful — not a teaser for a sales pitch.
          </p>
        </div>
      </section>

      {/* How It Connects to Founder ON */}
      <section className="section-navy py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block font-body text-sm tracking-[0.12em] uppercase text-gold border border-gold/60 bg-gold/10 rounded-md px-3 py-1 mb-6">
            How It Connects to Founder ON
          </p>
          <h2 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-10">
            The Founder Freedom Score is the front door, not the full journey.
          </h2>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6">
            For some people, the score will simply create clarity.
          </p>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6">
            For others, it will reveal that they are ready for a deeper build — one that requires strategy, execution, and support at a higher level.
          </p>
          <p className="font-body text-lg md:text-xl font-bold text-primary-foreground leading-relaxed">
            That is where Founder ON begins.
          </p>
        </div>
      </section>

      <BottomCTASection
        heading="See where you stand. Build from truth."
        paragraph="Your results are immediate, honest, and designed to help you move forward with clarity."
        ctaText="Take the Founder Freedom Score →"
        ctaHref="#"
      />

      <Footer />
    </div>
  );
};

export default FounderFreedomScore;
