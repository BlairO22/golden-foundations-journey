import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutCredentialsSection from "@/components/about/AboutCredentialsSection";
import AboutBlairSection from "@/components/about/AboutBlairSection";
import AboutCTASection from "@/components/about/AboutCTASection";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <AboutHeroSection />
    <AboutStorySection />
    <AboutCredentialsSection />
    <AboutBlairSection />
    <AboutCTASection />
    <Footer />
  </div>
);

export default About;
