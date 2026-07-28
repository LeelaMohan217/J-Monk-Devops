import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../assets/Logo.png";

const connects = [
  { name: "DigiConnect", href: "/digiconnect", available: true },
  { name: "SkillConnect", href: "/skillconnect", available: true },
  { name: "EduConnect", href: "/educonnect", available: true },
];

const GlobalNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-60 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-neutral-200"
          : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-3 items-center h-16">
        <Link to="/" className="flex items-center gap-3 shrink-0 justify-self-start">
          <LazyLoadImage
            className="w-8 h-8"
            alt="JMonkDevOps"
            src={Logo}
            effect="blur"
          />
          <span className="text-base font-semibold tracking-tight text-black">
            JMonkDevOps
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 justify-self-center">
          {connects.map((connect) =>
            connect.available ? (
              <li key={connect.name}>
                <Link
                  to={connect.href}
                  className="inline-block py-1 text-sm font-medium text-neutral-500 hover:text-black transition-colors"
                >
                  {connect.name}
                </Link>
              </li>
            ) : (
              <li key={connect.name}>
                <span className="text-xs font-medium text-neutral-400 cursor-default">
                  {connect.name}
                </span>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          aria-label="Search"
          className="text-neutral-500 hover:text-black transition-colors justify-self-end"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default GlobalNav;
