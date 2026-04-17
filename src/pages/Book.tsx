import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookHeroSection from "@/components/book/BookHeroSection";
import BookStepsSection from "@/components/book/BookStepsSection";

const Book = () => (
  <div className="min-h-screen relative z-10 bg-background">
    <Navbar />
    <BookHeroSection />
    <BookStepsSection />
    <Footer />
  </div>
);

export default Book;
