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
