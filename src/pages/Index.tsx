import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KnowingSection from "@/components/KnowingSection";
import PhotoVideoSection from "@/components/PhotoVideoSection";
import ExpertiseRequiresSection from "@/components/ExpertiseRequiresSection";
import FounderONProcessSection from "@/components/FounderONProcessSection";
import FounderONDesignedSection from "@/components/FounderONDesignedSection";
import OurGoalSection from "@/components/OurGoalSection";
import OurApproachSection from "@/components/OurApproachSection";
import WhatYouLeaveWithSection from "@/components/WhatYouLeaveWithSection";
import FounderONCreatesSection from "@/components/FounderONCreatesSection";
import WhereYouStandCTASection from "@/components/WhereYouStandCTASection";
import RealWorldTransformationSection from "@/components/RealWorldTransformationSection";
import FreedomMasterySection from "@/components/FreedomMasterySection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import MoreLifeCTASection from "@/components/MoreLifeCTASection";
import BuildingMoreSection from "@/components/BuildingMoreSection";
import NoMoreInfoSection from "@/components/NoMoreInfoSection";
import TwoPillarsSection from "@/components/TwoPillarsSection";
import ONMethodSection from "@/components/ONMethodSection";
import FoundationsSection from "@/components/FoundationsSection";
import WhereDoYouStandSection from "@/components/WhereDoYouStandSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import danImg from "@/assets/dan-fox.png";
import antoineImg from "@/assets/antoine-vaillant.jpeg";
import michaelImg from "@/assets/michael-sanders.png";
import jamesImg from "@/assets/james-mcmillen.png";

const TestimonialCard = ({ quote, name, role, image }: { quote: string; name: string; role: string; image: string }) => (
  <div>
    <div className="border-l-2 border-gold pl-6 md:pl-8 mb-8">
      <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed italic">
        "{quote}"
      </p>
    </div>
    <div className="flex items-center gap-4 pl-6 md:pl-8">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-body text-xl font-semibold text-charcoal">{name}</p>
        <p className="font-body text-base text-charcoal/60">{role}</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar />
      <HeroSection />
      <KnowingSection />
      <PhotoVideoSection />
      <ExpertiseRequiresSection />
      <FounderONProcessSection />
      <OurGoalSection />

      <section className="section-offwhite py-24 md:py-32 px-6">
        <h2 className="heading-display text-4xl md:text-5xl text-navy mb-16 max-w-4xl mx-auto">
          Real founders. Real transformation.
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-20">
          <TestimonialCard
            quote="Aaron has supported me through building Dan Fox Coaching, helping me grow the business while also developing as a coach, entrepreneur, and leader. What I value most is that Aaron understands the business and the founder grow together. Our work has helped me move forward with greater clarity, confidence, and direction as a business owner."
            name="Dan Fox"
            role="Canadian Actor & Founder, Dan Fox Coaching"
            image={danImg}
          />
          <TestimonialCard
            quote="Working with Aaron helped me turn the vision for The Vital Man into a clear, structured business and brand. I had the ideas, experience, and desire to serve, but needed help shaping them into a functioning business. Aaron helped me clarify the offer, define the audience, develop the brand, organize the growth strategy, and build the foundations to move forward with confidence. What stood out most was his ability to support both the practical side of business building and me as a founder. The process gave me structure, direction, and momentum, and helped me step more fully into the next stage of my entrepreneurial journey."
            name="James McMillen"
            role="Author and Founder of The Vital Man & Landscapes in Bloom"
            image={jamesImg}
          />
          <TestimonialCard
            quote="When I started working with Aaron, I was rebuilding. His expertise, presence and mentorship became a constant through that process. I overcame addiction, rebuilt myself and my career, returned to professional bodybuilding, competed at Mr. Olympia twice, and am now stepping into a new chapter as a husband, father, and entrepreneur."
            name="Antoine Vaillant"
            role="IFBB Professional Bodybuilder, Entrepreneur"
            image={antoineImg}
          />
          <TestimonialCard
            quote="Aaron supported me through an important season as a founder, helping me navigate the immense pressures of leadership, scaling, transition, and the deeper process of coming into greater personal alignment. He brings a rare ability to hold both the strategic and deeply human sides of entrepreneurship, while understanding that how we build is inseparable from how we live."
            name="Michael Sanders"
            role="Co-Founder of Sequence, Acquired by Polygon"
            image={michaelImg}
          />
        </div>
      </section>

      <OurApproachSection />
      <WhatYouLeaveWithSection />
      <FounderONCreatesSection />
      <WhereYouStandCTASection />
      <RealWorldTransformationSection />
      <FreedomMasterySection />
      <WhoThisIsForSection />
      <MoreLifeCTASection />
      {/* Hidden sections below, restore by uncommenting
      <BuildingMoreSection />
      <NoMoreInfoSection />
      <TwoPillarsSection />
      <ONMethodSection />
      <FoundationsSection />
      <WhereDoYouStandSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <CTASection />
      */}</div>
      <Footer />
      </>
  );
};

export default Index;
