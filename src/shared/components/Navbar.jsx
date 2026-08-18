import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import useScrollPosition from "../hooks/useScrollPosition";
import MenuToggleIcon from "./MenuToggleIcon";

// Per-brand sub-bar. Styled to match GlobalNav — transparent until scrolled, then
// white with a hairline border and a soft shadow — but on the brand shell's own
// rail (max-w-6xl by default) so it lines up with ContactCmp and Footer. Pass
// maxWidthClass to widen it for a brand whose own pages run wider.
//
// Rendered at the top level in App.jsx (outside the routed page content) so
// it persists across route changes instead of remounting per page.
const Navbar = ({
  siteName,
  homeHref = "/",
  navItems,
  ctaLabel,
  ctaHref,
  maxWidthClass = "max-w-6xl",
}) => {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 1;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full border-b transition-colors duration-300 ${
          scrolled
            ? "bg-white border-neutral-200 shadow-md shadow-black/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className={`mx-auto flex h-16 items-center justify-between px-6 md:px-8 ${maxWidthClass}`}>
          <Link
            to={homeHref}
            className="shrink-0 text-lg font-semibold tracking-tight text-black"
          >
            {siteName}
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.href;

              return (
                <li key={item.href} className="group relative">
                  <Link
                    to={item.href}
                    className={`inline-block py-1 text-sm font-medium transition-colors ${
                      active
                        ? "text-black"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {/* Red stays an accent mark, not a text colour. */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 -bottom-0.5 h-px w-full origin-left bg-red-600 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          <div className="flex items-center">
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="relative z-50 text-neutral-700 transition-colors hover:text-black lg:hidden"
            >
              <MenuToggleIcon open={mobileOpen} />
            </button>

            <Link
              to={ctaHref}
              className="hidden rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 lg:inline-block"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={closeMenu}
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          />

          <div className="fixed top-0 left-0 z-40 h-screen w-[75%] max-w-xs overflow-y-auto border-r border-neutral-200 bg-white p-6 lg:hidden">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <span className="text-base font-semibold uppercase text-black">
                {siteName}
              </span>
              <button type="button" aria-label="Close menu" onClick={closeMenu}>
                <X className="h-5 w-5 text-black" />
              </button>
            </div>

            <ul className="mt-4 flex flex-col">
              {navItems.map((item) => {
                const active = location.pathname === item.href;

                return (
                  <li key={item.href} className="border-b border-neutral-100">
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={`block py-3 text-sm font-medium transition-colors ${
                        active
                          ? "text-black"
                          : "text-neutral-600 hover:text-black"
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
              className="mt-6 block rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-red-700"
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
