import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useHideOnScroll from "../hooks/useHideOnScroll";

const Navbar = ({ siteName, homeHref = "/", navItems, ctaLabel, ctaHref }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hidden = useHideOnScroll();
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
    <>
      <nav
        className={`sticky z-50 transition-all duration-300 ${
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

          <ul className="hidden lg:flex ml-12 space-x-10">
            {navItems.map((item, index) => {
              const active = location.pathname === item.href;

              return (
                <li
                  key={index}
                  className={`group relative mx-0 text-base transition-colors duration-300 ${
                    active ? "text-red-600" : "text-black hover:text-red-600"
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={() => {
                      closeNavbar();
                      scrollToTop();
                    }}
                  >
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
              className="hidden lg:block bg-red-600 text-white font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:bg-red-700 transition-all duration-500"
            >
              <span>{ctaLabel}</span>
            </Link>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-black" />
              ) : (
                <Menu className="text-black" />
              )}
            </button>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed top-0 left-0 z-40 h-screen p-6 bg-white w-[75%] lg:hidden border-r border-gray-300 backdrop-blur-lg transition-all ease-in-out duration-500">
              <h5
                id="drawer-navigation-label"
                className="text-base font-semibold text-black uppercase border-b border-gray-300"
              >
                Menu
              </h5>
              <ul className="mt-6">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="py-4 text-sm md:text-lg text-black hover:text-red-600 transition-colors duration-300"
                  >
                    <Link to={item.href} onClick={closeNavbar}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
