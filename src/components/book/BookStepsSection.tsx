import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "1",
    title: "You book",
    description: "Choose a time that works for you. The call is 30 minutes.",
  },
  {
    number: "2",
    title: "We talk",
    description: "A candid conversation about where you are, what you're building, and what's in the way.",
  },
  {
    number: "3",
    title: "You decide",
    description: "If Founder ON™ is the right fit, we'll outline the next steps together. No pressure. No follow-up calls.",
  },
];

const BookStepsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-offwhite py-24 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="heading-display text-3xl md:text-4xl text-navy text-center mb-20">
          What happens after you book
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((s) => (
            <div key={s.number} className="text-center">
              <p className="heading-display text-5xl text-gold mb-6">{s.number}</p>
              <h3 className="heading-display text-xl text-navy mb-4">{s.title}</h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookStepsSection;
