import logo from "@/assets/logo.webp";

const Navbar = ({ variant = "dark", bg }: { variant?: "dark" | "light"; bg?: string }) => {
  const isDark = variant === "dark";
  const textColor = isDark
    ? "text-primary-foreground/80"
    : "text-navy/80";
  const hoverColor = isDark
    ? "hover:text-primary-foreground"
    : "hover:text-navy";

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6"
      style={bg ? { backgroundColor: bg } : undefined}
    >
      <a href="/">
        <img
          src={logo}
          alt="Thriving Founder"
          className="h-10 md:h-12"
          style={isDark ? undefined : { filter: "brightness(0) saturate(100%)" }}
        />
      </a>
      <div className={`hidden md:flex items-center gap-10 font-body text-sm tracking-wide ${textColor}`}>
        <a href="/" className={`${hoverColor} transition-colors`}>Home</a>
        <a href="/about" className={`${hoverColor} transition-colors`}>About Us</a>
        <a href="/founder-on" className={`${hoverColor} transition-colors`}>
          ON<sup
            style={{
              fontSize: "0.5em",
              position: "relative",
              top: "-0.7em",
              marginLeft: "0.1em",
              verticalAlign: "baseline",
              lineHeight: 1,
            }}
          >™</sup> Experience
        </a>
        <a href="/founder-freedom-score" className={`${hoverColor} transition-colors`}>Founder Freedom Score</a>
        <a href="/results" className={`${hoverColor} transition-colors`}>Results</a>
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
