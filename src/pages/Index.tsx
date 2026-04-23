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
import joshImg from "@/assets/josh-reichmann.jpeg";

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
      <OurApproachSection />
      {/* Testimonial */}
      <section className="section-offwhite py-20 md:py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-8 items-center">
          <div className="w-32 md:w-40 aspect-square rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
            <img src={joshImg} alt="Josh Reichmann" className="w-full h-full object-cover" />
          </div>
          <div className="border-l-2 border-gold pl-6 md:pl-8">
            <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed italic mb-6">
              "Aaron is much more than a dedicated business strategist and management expert. His unique blend of creativity, artistic ability, and grounded approach stands out. Even more impressive is his emotional intelligence and spiritual depth, which allow him to hold space while offering practical, no-nonsense guidance."
            </p>
            <p className="font-body text-sm font-semibold text-charcoal">Josh Reichmann</p>
            <p className="font-body text-xs text-charcoal/60">Founder, Luxara Tech Solutions</p>
          </div>
        </div>
      </section>

      <WhatYouLeaveWithSection />
      <FounderONCreatesSection />
      <WhereYouStandCTASection />
      <RealWorldTransformationSection />
      <FreedomMasterySection />
      <WhoThisIsForSection />
      <MoreLifeCTASection />
      {/* Hidden sections below — restore by uncommenting
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
