import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
      <a href="#">
        <img src={logo} alt="Thriving Founder" className="h-10 md:h-12" />
      </a>
      <div className="hidden md:flex items-center gap-10 font-body text-sm tracking-wide text-primary-foreground/80">
        <a href="#" className="hover:text-primary-foreground transition-colors">Home</a>
        <a href="#" className="hover:text-primary-foreground transition-colors">About Us</a>
        <a href="#" className="hover:text-primary-foreground transition-colors">Our Process</a>
        <a href="#" className="hover:text-primary-foreground transition-colors">Results</a>
      </div>
      <a href="#" className="btn-gold text-xs px-6 py-3">Book a Strategy Call</a>
    </nav>
  );
};

export default Navbar;
