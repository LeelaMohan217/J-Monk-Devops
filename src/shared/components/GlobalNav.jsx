import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const connects = [
  { name: "DigiConnect", href: "/digiconnect", available: true },
  { name: "SkillConnect", href: "/skillconnect", available: true },
  { name: "EduConnect", href: "/educonnect", available: true },
];

const GlobalNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-60 border-b transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/80 backdrop-blur-md border-neutral-200"
          : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-3 items-center h-16">
        <Link to="/" className="col-start-1 flex items-center gap-3 shrink-0 justify-self-start">
          <img className="w-8 h-8" alt="JMonkDevOps" src={Logo} />
          <span className="text-base font-semibold tracking-tight text-black">
            JMonkDevOps
          </span>
        </Link>

        <ul className="col-start-2 hidden md:flex items-center gap-8 justify-self-center">
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

        <div className="col-start-3 justify-self-end">
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden text-neutral-700 hover:text-black transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link
            to="/#who-we-are"
            className="hidden md:inline-block rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get Started
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-3 flex flex-col gap-1">
          <ul className="flex flex-col gap-1">
            {connects.map((connect) =>
              connect.available ? (
                <li key={connect.name}>
                  <Link
                    to={connect.href}
                    className="block py-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors"
                  >
                    {connect.name}
                  </Link>
                </li>
              ) : (
                <li key={connect.name}>
                  <span className="block py-2 text-sm font-medium text-neutral-400 cursor-default">
                    {connect.name}
                  </span>
                </li>
              )
            )}
          </ul>
          <Link
            to="/#who-we-are"
            className="mt-2 rounded-lg bg-neutral-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default GlobalNav;
