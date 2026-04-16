import logo from "@/assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
      <a href="#">
        <img src={logo} alt="Thriving Founder" className="h-10 md:h-12" />
      </a>
      <div className="hidden md:flex items-center gap-10 font-body text-sm tracking-wide text-primary-foreground/80">
        <a href="/" className="hover:text-primary-foreground transition-colors">Home</a>
        <a href="/about" className="hover:text-primary-foreground transition-colors">About Us</a>
        <a href="/founder-on" className="hover:text-primary-foreground transition-colors">Founder ON</a>
        <a href="/founder-freedom-score" className="hover:text-primary-foreground transition-colors">Founder Freedom Score</a>
        <a href="/results" className="hover:text-primary-foreground transition-colors">Results</a>
      </div>
      <a
        href="https://founderfreedomscore.netlify.app/assessment"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold text-xs px-6 py-3"
      >
        Take the Founder Freedom Score →
      </a>
    </nav>
  );
};

export default Navbar;
