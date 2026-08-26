import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";
import Logo from "../assets/Logo.webp";

const Navbar = ({
  siteName,
  logo = Logo,
  homeHref = "/",
  navItems,
  ctaLabel,
  ctaHref,
  ctaAdornment = null,
  maxWidthClass = "max-w-6xl",
  variant = "default",
}) => {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 1;
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full border-b transition-colors duration-300 ${
          scrolled
            ? "bg-white border-neutral-200 shadow-md shadow-black/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className={`mx-auto flex items-center justify-between py-2 px-6 ${maxWidthClass}`}>
          <div className="flex shrink-0 items-center gap-2">
            {logo && (
              <Link to="/" className="group relative flex shrink-0">
                <img
                  src={logo}
                  alt="JMonkDevops"
                  className="h-12 w-12 object-contain"
                  width={48}
                  height={48}
                />
                <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Click here to go to main home page
                </span>
              </Link>
            )}
            <Link
              to={homeHref}
              className="text-lg font-semibold tracking-tight text-black"
            >
              {siteName}
            </Link>
          </div>

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

          <Link
            to={ctaHref}
            className={`group hidden items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-[background-color,transform] duration-200 hover:bg-red-700 lg:inline-flex ${
              variant === "premium" ? "active:scale-[0.97]" : ""
            }`}
          >
            {ctaLabel}
            {ctaAdornment}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
