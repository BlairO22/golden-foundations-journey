import aaronWorking from "@/assets/aaron-working.jpg";

const AboutHeroSection = () => (
  <section className="section-navy min-h-[80vh] flex items-center px-6 pt-32 pb-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="heading-display text-4xl md:text-6xl text-primary-foreground mb-8">
          Meet the founder behind Thriving Founder.
        </h1>
        <div className="font-body text-base text-primary-foreground/70 leading-relaxed space-y-6">
          <p>
            Aaron McLean has spent over two decades building products, companies, and people.
            He has led product strategy for partnerships with Nintendo, Tim Hortons, Boston Pizza, and HeartMath, reaching millions of users globally. He helped build a platform later acquired by Box (NYSE: BOX). Over the years he has advised enterprise innovation teams, funded startups, and creative agencies through some of the hardest decisions they face.
          </p>
          <p className="text-primary-foreground/90 font-medium italic">
            And then he lost a company he had spent ten years building.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img loading="lazy"           src={aaronWorking}
          alt="Aaron McLean working"
          className="w-full max-w-md object-cover aspect-[3/4]"
        />
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
