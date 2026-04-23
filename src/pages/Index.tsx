import { useState } from "react";
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
import antoineImg from "@/assets/antoine-vaillant.jpeg";

const homeTestimonials = [
  {
    quote: "Aaron is much more than a dedicated business strategist and management expert. His unique blend of creativity, artistic ability, and grounded approach stands out. Even more impressive is his emotional intelligence and spiritual depth, which allow him to hold space while offering practical, no-nonsense guidance.",
    name: "Josh Reichmann",
    role: "Founder, Luxara Tech Solutions",
    image: joshImg,
  },
  {
    quote: "When I first started working with Aaron, I was rebuilding my life from a very low point. His insight, presence, and guidance became a constant through that process. Aaron played an important role in that transformation, and he's someone I trust to support me through whatever comes next.",
    name: "Antoine Vaillant",
    role: "IFBB Professional Bodybuilder, Entrepreneur",
    image: antoineImg,
  },
];

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
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
      {/* Testimonial Slider */}
      <section className="section-offwhite py-20 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${testimonialIdx * 100}%)` }}
            >
              {homeTestimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="border-l-2 border-gold pl-6 md:pl-8 mb-8">
                    <p className="font-body text-lg md:text-xl text-charcoal/85 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pl-6 md:pl-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-body text-base md:text-lg font-semibold text-charcoal">{t.name}</p>
                      <p className="font-body text-sm md:text-base text-charcoal/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setTestimonialIdx(Math.max(0, testimonialIdx - 1))}
              disabled={testimonialIdx === 0}
              className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center transition-opacity disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={() => setTestimonialIdx(Math.min(homeTestimonials.length - 1, testimonialIdx + 1))}
              disabled={testimonialIdx === homeTestimonials.length - 1}
              className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center transition-opacity disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
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
