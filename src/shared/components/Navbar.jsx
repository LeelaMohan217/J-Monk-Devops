import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";
import Logo from "../assets/Logo.webp";

// Per-brand sub-bar. Styled to match GlobalNav — transparent until scrolled, then
// white with a hairline border and a soft shadow — but on the brand shell's own
// rail (max-w-6xl by default) so it lines up with ContactCmp and Footer. Pass
// maxWidthClass to widen it for a brand whose own pages run wider.
//
// Desktop-only, same as GlobalNav — mobile menu duty for the whole app
// (regardless of route) belongs to the single shared MobileNavMenu, rendered
// once in App.jsx.
//
// Rendered at the top level in App.jsx (outside the routed page content) so
// it persists across route changes instead of remounting per page.
//
// logo defaults to the shared JMonkDevOps mark (same one GlobalNav uses) so
// every platform shows it without needing its own config entry.
const Navbar = ({
  siteName,
  logo = Logo,
  homeHref = "/",
  navItems,
  ctaLabel,
  ctaHref,
  maxWidthClass = "max-w-6xl",
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
          <Link
            to={homeHref}
            className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-black"
          >
            {logo && (
              <img
                src={logo}
                alt={siteName}
                className="h-12 w-12 object-contain"
                width={48}
                height={48}
              />
            )}
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

          <Link
            to={ctaHref}
            className="hidden rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 lg:inline-block"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
