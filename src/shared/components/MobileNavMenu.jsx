import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, X } from "lucide-react";
import { digiConnectConfig } from "../../sites/digiconnect/config";
import { skillConnectConfig } from "../../sites/skillconnect/config";
import { eduConnectConfig } from "../../sites/educonnect/config";
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

const getCurrentBrandName = (pathname) =>
  brandGroups.find(
    (brand) => brand.available && pathname.startsWith(brand.homeHref),
  )?.name ?? null;

const MobileNavMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openBrand, setOpenBrand] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const openMenu = () => {
    setOpenBrand(getCurrentBrandName(location.pathname));
    setMobileOpen(true);
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {!mobileOpen && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-70 flex h-16 items-center justify-end px-6 lg:hidden">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={false}
            aria-controls="mobile-nav-panel"
            onClick={openMenu}
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

            <motion.div
              key="panel"
              id="mobile-nav-panel"
              initial={{ clipPath: "circle(0% at 100% 0%)" }}
              animate={{ clipPath: "circle(150% at 100% 0%)" }}
              exit={{ clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 z-70 flex h-dvh w-full flex-col bg-white lg:hidden"
            >
              <div className="flex shrink-0 flex-col">
                <div className="flex items-center justify-between px-6 py-2">
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
                        <ChevronLeft className="h-5 w-5 shrink-0" aria-hidden="true" />
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
                              <Link
                                to={brand.homeHref}
                                onClick={closeMenu}
                                className="flex w-full items-center justify-between py-4 text-xl font-normal text-neutral-900 transition-colors hover:text-red-600"
                              >
                                {brand.name}
                                <ArrowRight
                                  className="h-4 w-4 text-neutral-400"
                                  aria-hidden="true"
                                />
                              </Link>
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

              <div className="shrink-0 p-6">
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
