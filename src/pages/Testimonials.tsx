import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomCTASection from "@/components/BottomCTASection";
import joshImg from "@/assets/josh-reichmann.jpeg";
import antoineImg from "@/assets/antoine-vaillant.jpeg";

const testimonials = [
  {
    quote: "Aaron is much more than a dedicated business strategist and management expert. His unique blend of creativity, artistic ability, and grounded approach stands out. Even more impressive is his emotional intelligence and spiritual depth, which allow him to hold space while offering practical, no-nonsense guidance. His deep empathy and compassion help align the mission for founders of all kinds. I've benefited from his expertise in actionable and proven ways, and I truly value his friendship along the way.",
    name: "Josh Reichmann",
    role: "Founder, Luxara Tech Solutions",
    image: joshImg,
  },
  {
    quote: "When I first started working with Aaron, I was rebuilding my life from a very low point. His insight, presence, and guidance became a constant through that process. From overcoming addiction and time in a shelter, to returning to the professional bodybuilding stage and competing at Mr. Olympia twice, and now stepping into life as a husband, father, and entrepreneur. Aaron played an important role in that transformation, and he's someone I trust to support me through whatever comes next.",
    name: "Antoine Vaillant",
    role: "IFBB Professional Bodybuilder, Entrepreneur, and Social Influencer",
    image: antoineImg,
  },
];

const Testimonials = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar bg="#1F3F78" />

      {/* Hero */}
      <section className="section-navy">
        <div className="flex flex-col justify-center pt-40 pb-24 md:pt-48 md:pb-32 px-8 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-8">
              Testimonials
            </h1>
            <p className="font-body text-xl md:text-2xl text-primary-foreground/90 leading-snug">
              Real words from real founders who have been through the process.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center"
            >
              {/* Photo */}
              <div className="w-full md:w-72 aspect-square rounded-full overflow-hidden bg-charcoal/10 flex-shrink-0">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="heading-display text-4xl text-charcoal/20">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>

              {/* Quote */}
              <div>
                <div className="border-l-2 border-gold pl-6 md:pl-8">
                  <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                  <p className="font-body text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="font-body text-xs text-charcoal/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomCTASection
        heading="Ready to start your journey?"
        paragraph="Take the Founder Freedom Score to see where you stand."
        ctaText="Take the Founder Freedom Score →"
        ctaHref="https://founderfreedomscore.netlify.app/assessment"
      /></div>
      <Footer />
    </>
  );
};

export default Testimonials;
