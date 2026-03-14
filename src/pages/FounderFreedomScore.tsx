import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScoreHeroSection from "@/components/score/ScoreHeroSection";
import ScoreWhatYouGetSection from "@/components/score/ScoreWhatYouGetSection";
import ScoreFoundationsSection from "@/components/score/ScoreFoundationsSection";
import ScoreAssessmentSection from "@/components/score/ScoreAssessmentSection";

const FounderFreedomScore = () => (
  <div className="min-h-screen">
    <Navbar />
    <ScoreHeroSection />
    <ScoreWhatYouGetSection />
    <ScoreFoundationsSection />
    <ScoreAssessmentSection />
    <Footer />
  </div>
);

export default FounderFreedomScore;
