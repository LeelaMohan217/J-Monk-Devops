import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useHideOnScroll from "../hooks/useHideOnScroll";

const Navbar = ({ siteName, homeHref = "/", navItems, ctaLabel, ctaHref }) => {
  const [scrolled, setScrolled] = useState(false);
  const hidden = useHideOnScroll();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
        // Change the navbar as soon as you start scrolling
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky z-50 hidden lg:block transition-all duration-300 ${
        hidden ? "top-0" : "top-16"
      } ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-linear-to-b from-neutral-50 to-neutral-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-2">
        <div className="flex justify-between items-center">
          <Link
            to={homeHref}
            className="text-lg sm:text-xl tracking-tight text-black font-bold shrink-0"
          >
            {siteName}
          </Link>
        </div>

        <ul className="flex ml-12 gap-10">
          {navItems.map((item, index) => {
            const active = location.pathname === item.href;

            return (
              <li
                key={index}
                className={`group relative mx-0 text-base transition-colors duration-300 ${
                  active ? "text-red-600" : "text-black hover:text-red-600"
                }`}
              >
                <Link to={item.href} onClick={() => window.scrollTo(0, 0)}>
                  {item.label}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-red-600 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        <div>
          <Link
            to={ctaHref}
            className="bg-red-600 text-white font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:bg-red-700 transition-all duration-500"
          >
            <span>{ctaLabel}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
