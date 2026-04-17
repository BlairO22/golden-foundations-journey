import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramHeroSection from "@/components/program/ProgramHeroSection";
import PartnershipIncludesSection from "@/components/program/PartnershipIncludesSection";
import ProgramONMethodSection from "@/components/program/ProgramONMethodSection";
import MilestonesSection from "@/components/program/MilestonesSection";
import ProgramGuaranteeSection from "@/components/program/ProgramGuaranteeSection";
import InvestmentSection from "@/components/program/InvestmentSection";
import WhoIsForSection from "@/components/program/WhoIsForSection";
import ProgramFinalCTASection from "@/components/program/ProgramFinalCTASection";

const Program = () => (
  <div className="min-h-screen relative z-10 bg-background">
    <Navbar />
    <ProgramHeroSection />
    <PartnershipIncludesSection />
    <ProgramONMethodSection />
    <MilestonesSection />
    <ProgramGuaranteeSection />
    <InvestmentSection />
    <WhoIsForSection />
    <ProgramFinalCTASection />
    <Footer />
  </div>
);

export default Program;
