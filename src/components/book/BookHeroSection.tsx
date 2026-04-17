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
        {/* Calendly embed placeholder */}
        <div className="w-full bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px]">
          <p className="font-body text-sm text-primary-foreground/40 mb-6 text-center">
            Calendar loading...
          </p>
          <p className="font-body text-xs text-primary-foreground/30 text-center">
            Calendly embed will appear here.
          </p>
          {/* Replace with: <iframe src="your-calendly-url" className="w-full h-full min-h-[500px] border-0" /> */}
        </div>
      </div>
    </div>
  </section>
);

export default BookHeroSection;
