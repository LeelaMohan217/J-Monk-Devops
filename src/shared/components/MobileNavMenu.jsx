import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import { digiConnectConfig } from "../../sites/digiconnect/config";
import { skillConnectConfig } from "../../sites/skillconnect/config";
import { eduConnectConfig } from "../../sites/educonnect/config";
import { companyConfig } from "../companyConfig";
import Logo from "../assets/Logo.webp";
import MenuToggleIcon from "./MenuToggleIcon";

const brandGroups = [
  {
    name: "DigiConnect",
    homeHref: digiConnectConfig.homeHref,
    navItems: digiConnectConfig.navItems,
    available: true,
  },
  {
    name: "SkillConnect",
    homeHref: skillConnectConfig.homeHref,
    navItems: skillConnectConfig.navItems,
    available: true,
  },
  {
    name: "EduConnect",
    homeHref: eduConnectConfig.homeHref,
    navItems: eduConnectConfig.navItems,
    available: true,
  },
];

// Same icon map used in GlobalFooter, kept in sync with companyConfig.social.
const socialIcons = {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn: Linkedin,
};

// The single mobile menu for the whole app — rendered once in App.jsx,
// outside the routed page content, so it's the same drill-down panel
// (all three platforms + that platform's own pages) whether you're on the
// landing page or already inside a specific platform's site. GlobalNav and
// the per-brand Navbar each still render their own desktop-only bar, but
// neither owns a mobile hamburger/drawer of its own anymore — this is it.
const MobileNavMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openBrand, setOpenBrand] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenBrand(null);
  }, [location]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* Fixed at a height matching both GlobalNav's and Navbar's ~64px bar,
          so the toggle lines up with whichever one is underneath it. */}
      {!mobileOpen && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-70 flex h-16 items-center justify-end px-6 lg:hidden">
          {/* -m-3 p-3 grows the hit area to 44x44 without moving the 20px icon:
              this is the only navigation below lg, and a bare icon button was a
              20x20 target — under the 24x24 minimum, let alone comfortable. */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={false}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen(true)}
            className="pointer-events-auto -m-3 p-3 text-neutral-700 transition-colors hover:text-black"
          >
            <MenuToggleIcon open={false} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-70 lg:hidden bg-black/40"
            />

            {/* Reveals from the hamburger's corner (top-right) rather than a
                flat fade, so the panel visibly originates from the button
                that opened it instead of just appearing. */}
            <motion.div
              key="panel"
              id="mobile-nav-panel"
              initial={{ clipPath: "circle(0% at 100% 0%)" }}
              animate={{ clipPath: "circle(150% at 100% 0%)" }}
              exit={{ clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 z-70 flex h-dvh w-full flex-col bg-white lg:hidden"
            >
              {/* Top: logo + close, centered on the same row; a divider; then
                  the description below it. */}
              <div className="flex shrink-0 flex-col">
                <div className="flex items-center justify-between px-6 py-5">
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-1"
                  >
                    <img
                      className="h-12 w-12 object-contain"
                      alt="JMonkDevops"
                      src={Logo}
                      width={48}
                      height={48}
                    />
                    <span className="text-lg font-semibold tracking-tight text-black">
                      JMonkDevops
                    </span>
                  </Link>
                  <button
                    type="button"
                    aria-label="Close menu"
                    aria-expanded
                    aria-controls="mobile-nav-panel"
                    onClick={closeMenu}
                    className="-m-3 p-3 text-black"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="border-b border-neutral-200" />
                {!openBrand && (
                  <p className="px-6 py-4 text-xs leading-relaxed text-neutral-500">
                    Tap a platform to see the pages that belong to it.
                  </p>
                )}
              </div>

              {/* Middle: the platform list, or a platform's own pages once
                  tapped — a drill-down transition between the two "screens",
                  not an inline accordion. */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-2">
                <AnimatePresence mode="wait" initial={false}>
                  {openBrand ? (
                    <motion.div
                      key="detail"
                      initial={{ x: 48, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 48, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenBrand(null)}
                        className="flex w-full items-center gap-3 border-b border-neutral-200 py-4 text-xl font-normal text-neutral-900 transition-colors hover:text-red-600"
                      >
                        <ArrowLeft className="h-5 w-5 shrink-0" aria-hidden="true" />
                        {openBrand}
                      </button>

                      <ul className="flex flex-col">
                        {brandGroups
                          .find((brand) => brand.name === openBrand)
                          .navItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                onClick={closeMenu}
                                className="block py-3 text-base text-neutral-700 transition-colors hover:text-red-600"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="list"
                      initial={{ x: -48, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -48, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ul className="flex flex-col">
                        {brandGroups.map((brand) => (
                          <li
                            key={brand.name}
                            className="border-b border-neutral-100 last:border-b-0"
                          >
                            {brand.available ? (
                              <button
                                type="button"
                                onClick={() => setOpenBrand(brand.name)}
                                className="flex w-full items-center justify-between py-4 text-xl font-normal text-neutral-900 transition-colors hover:text-red-600"
                              >
                                {brand.name}
                                <ArrowRight
                                  className="h-4 w-4 text-neutral-400"
                                  aria-hidden="true"
                                />
                              </button>
                            ) : (
                              <span className="flex items-center justify-between py-4 text-xl font-normal text-neutral-400">
                                {brand.name}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom: social links, a divider, then the CTA — pinned to the
                  panel's bottom edge regardless of which "screen" is showing. */}
              <div className="shrink-0 p-6">
                <ul className="flex gap-3">
                  {companyConfig.social.map((link) => {
                    const Icon = socialIcons[link.label];
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={link.label}
                          // Circular, since the padding is even on both axes and
                          // every other button on the site is a pill. A square
                          // corner here was the one radius left that did not
                          // match.
                          className="flex items-center justify-center rounded-full border border-neutral-200 p-2 text-neutral-600 transition-colors hover:border-red-200 hover:text-red-600"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="my-4 border-b border-neutral-200" />

                <Link
                  to="/#who-we-are"
                  onClick={closeMenu}
                  className="block w-full rounded-full bg-red-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-red-700"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavMenu;
