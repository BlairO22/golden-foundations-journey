import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <img src={logo} alt="Thriving Founder" className="h-10 mb-4" />
            <p className="font-body text-sm text-primary-foreground/60 italic">
              Clarity. Capacity. Cashflow. Confidence.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <a href="/" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</a>
            <a href="/about" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</a>
            <a href="/program" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">The Program</a>
            <a href="/results" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Results</a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">LinkedIn</a>
            <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Facebook</a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-body text-xs text-primary-foreground/40">
            <a href="https://aaronmcleanadvisory.com" className="hover:text-primary-foreground/60 transition-colors">Part of AM Advisory</a>
          </div>
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Thriving Founder™. All rights reserved.
          </p>
          <div className="flex gap-4 font-body text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
