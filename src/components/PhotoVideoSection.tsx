import section3Img from "@/assets/getty-images-ibIpjC0pbqo-unsplash.jpg";

const PhotoVideoSection = () => {
  return (
    <section className="bg-card pt-12 md:pt-16 pb-24 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src={section3Img}
            alt="A founder reflecting"
            loading="lazy"
            className="w-full object-cover aspect-square"
          />
        </div>
        <div>
          <h2 className="heading-display text-4xl md:text-5xl text-navy mb-8">
            You've built a career.
          </h2>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            What's missing is the freedom to live your day to day how you want — without trading quality of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoVideoSection;
