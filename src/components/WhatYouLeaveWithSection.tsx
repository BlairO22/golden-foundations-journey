import photoImg from "@/assets/getty-images-h6QbnXWrtN8-unsplash.jpg";

const WhatYouLeaveWithSection = () => {
  return (
    <section className="bg-card py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
            What you leave with is not just inspiration.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            It is a business — and a different relationship with your work, your leadership, and your life.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            Imagine opening your laptop on a Tuesday morning and choosing what to work on. Not because nothing is urgent, but because the business now has the structure, direction, and momentum to move without depending on you in every conversation.
          </p>
        </div>
        <div>
          <img
            src={photoImg}
            alt="A different relationship with your work"
            className="w-full object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatYouLeaveWithSection;
