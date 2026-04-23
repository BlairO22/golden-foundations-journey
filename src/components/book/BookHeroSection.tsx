const BookHeroSection = () => (
  <section className="section-navy min-h-[80vh] flex items-center px-6 pt-32 pb-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
      <div>
        <h1 className="heading-display text-5xl md:text-7xl text-primary-foreground mb-8">
          Let's talk about what you're building next.
        </h1>
        <div className="font-body text-base text-primary-foreground/70 leading-relaxed space-y-6">
          <p>
            A strategy call is a 30-minute conversation to explore where you are, where you want to go, and whether ON™ is the right partnership for your transition.
          </p>
          <p>
            There's no pitch, no pressure, and no obligation. This is a conversation between two professionals exploring whether the fit is right.
          </p>
          <p>
            If it's a match, we'll discuss timelines and next steps. If it's not, you'll still walk away with clarity on your situation.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <iframe
          src="https://calendly.com/aaron-thrivingfounder/30min"
          className="w-full border-0"
          style={{ minHeight: "650px" }}
          title="Book a Strategy Call"
        />
      </div>
    </div>
  </section>
);

export default BookHeroSection;
