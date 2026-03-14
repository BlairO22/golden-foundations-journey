import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultsHeroSection from "@/components/results/ResultsHeroSection";
import ClientOutcomesSection from "@/components/results/ClientOutcomesSection";
import ResultsGuaranteeSection from "@/components/results/ResultsGuaranteeSection";
import ResultsCTASection from "@/components/results/ResultsCTASection";

const Results = () => (
  <div className="min-h-screen">
    <Navbar />
    <ResultsHeroSection />
    <ClientOutcomesSection />
    <ResultsGuaranteeSection />
    <ResultsCTASection />
    <Footer />
  </div>
);

export default Results;
