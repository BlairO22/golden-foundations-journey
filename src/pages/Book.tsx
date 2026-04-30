import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookHeroSection from "@/components/book/BookHeroSection";
import BookStepsSection from "@/components/book/BookStepsSection";

const Book = () => (
  <>
    <div className="min-h-screen relative z-10 bg-background">
      <Navbar bg="#1F3F78" />
      <BookHeroSection />
      <BookStepsSection />
    </div>
    <Footer />
  </>
);

export default Book;
