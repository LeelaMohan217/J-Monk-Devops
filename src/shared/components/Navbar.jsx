import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = ({ siteName, homeHref = "/", navItems, ctaLabel, ctaHref }) => {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 1;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full bg-white border-b transition-shadow duration-300 ${
        scrolled ? "border-neutral-200 shadow-lg" : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6 md:px-8">
        <Link
          to={homeHref}
          className="text-lg sm:text-xl tracking-tight text-black font-bold shrink-0"
        >
          {siteName}
        </Link>

        <ul className="hidden lg:flex ml-12 gap-10">
          {navItems.map((item, index) => {
            const active = location.pathname === item.href;

            return (
              <li
                key={index}
                className={`group relative mx-0 text-base transition-colors duration-300 ${
                  active ? "text-red-600" : "text-black hover:text-red-600"
                }`}
              >
                <Link to={item.href}>{item.label}</Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-red-600 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        <Link
          to={ctaHref}
          className="hidden lg:inline-block bg-red-600 text-white font-normal text-base px-4 md:px-6 py-3 hover:bg-red-700 transition-all duration-500"
        >
          <span>{ctaLabel}</span>
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="lg:hidden text-neutral-700 hover:text-black transition-colors"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={closeMenu}
            className="fixed inset-0 z-30 lg:hidden bg-black/40"
          />

          <div className="fixed top-0 left-0 z-40 h-screen w-[75%] max-w-xs overflow-y-auto border-r border-neutral-200 bg-white p-6 lg:hidden">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <span className="text-base font-semibold text-black uppercase">
                Menu
              </span>
              <button type="button" aria-label="Close menu" onClick={closeMenu}>
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <ul className="mt-4 flex flex-col">
              {navItems.map((item, index) => {
                const active = location.pathname === item.href;

                return (
                  <li key={index} className="border-b border-neutral-100">
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={`block py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                        active
                          ? "text-red-600"
                          : "text-neutral-900 hover:text-red-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to={ctaHref}
              onClick={closeMenu}
              className="mt-6 block bg-red-600 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              {ctaLabel}
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
