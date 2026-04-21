import { useState } from "react";
import logo from "@/assets/logo.webp";

const Navbar = ({ variant = "dark", bg }: { variant?: "dark" | "light"; bg?: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = variant === "dark";
  const textColor = isDark
    ? "text-primary-foreground/80"
    : "text-navy/80";
  const hoverColor = isDark
    ? "hover:text-primary-foreground"
    : "hover:text-navy";

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    {
      href: "/founder-on",
      label: (
        <>
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
        </>
      ),
    },
    { href: "/founder-freedom-score", label: "Founder Freedom Score" },
    { href: "/results", label: "Results" },
  ];

  return (
    <>
      <nav
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-6"
        style={bg ? { backgroundColor: bg } : undefined}
      >
        <a href="/">
          <img
            src={logo}
            alt="Thriving Founder"
            className="h-14 md:h-12"
            style={isDark ? undefined : { filter: "brightness(0) saturate(100%)" }}
          />
        </a>

        {/* Desktop nav */}
        <div className={`hidden md:flex items-center gap-10 font-body text-sm tracking-wide ${textColor}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`${hoverColor} transition-colors`}>
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://founderfreedomscore.netlify.app/assessment"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xs px-6 py-3 hidden md:inline-block"
        >
          Take the Founder Freedom Score →
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-[hsl(43,50%,54%)] transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(0, 7px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 bg-[hsl(43,50%,54%)] mt-1.5 transition-all duration-300"
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 bg-[hsl(43,50%,54%)] mt-1.5 transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(0, -7px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300"
        style={{
          backgroundColor: "hsl(220, 16%, 12%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-8 font-body text-lg tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://founderfreedomscore.netlify.app/assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm px-8 py-3 mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Take the Founder Freedom Score →
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
