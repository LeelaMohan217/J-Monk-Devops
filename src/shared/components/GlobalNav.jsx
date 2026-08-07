import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { digiConnectConfig } from "../../sites/digiconnect/config";
import { skillConnectConfig } from "../../sites/skillconnect/config";
import { eduConnectConfig } from "../../sites/educonnect/config";
import Logo from "../assets/Logo.png";

const brandGroups = [
  { name: "DigiConnect", homeHref: digiConnectConfig.homeHref, navItems: digiConnectConfig.navItems, available: true },
  { name: "SkillConnect", homeHref: skillConnectConfig.homeHref, navItems: skillConnectConfig.navItems, available: true },
  { name: "EduConnect", homeHref: eduConnectConfig.homeHref, navItems: eduConnectConfig.navItems, available: true },
];

const MenuToggleIcon = ({ open }) => (
  <div className="relative w-5 h-5">
    <motion.span
      className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current"
      initial={false}
      animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    />
    <motion.span
      className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current"
      initial={false}
      animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    />
    <motion.span
      className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current"
      initial={false}
      animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    />
  </div>
);

const GlobalNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openBrand, setOpenBrand] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenBrand(null);
  }, [location]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-60">
      <div
        className={`w-full grid grid-cols-3 items-center h-16 px-6 md:px-8 bg-white border-b transition-shadow duration-300 ${
          scrolled
            ? "border-neutral-200 shadow-md shadow-black/5"
            : "border-transparent"
        }`}
      >
        <Link to="/" className="col-start-1 flex items-center gap-3 shrink-0 justify-self-start">
          <img className="w-10 h-10" alt="JMonkDevOps" src={Logo} />
          <span className="text-base font-semibold tracking-tight text-black">
            JMonkDevOps
          </span>
        </Link>

        <ul className="col-start-2 hidden lg:flex items-center gap-8 justify-self-center">
          {brandGroups.map((brand) =>
            brand.available ? (
              <li key={brand.name}>
                <Link
                  to={brand.homeHref}
                  className="inline-block py-1 text-sm font-medium text-neutral-600 hover:text-black transition-colors"
                >
                  {brand.name}
                </Link>
              </li>
            ) : (
              <li key={brand.name}>
                <span className="text-xs font-medium text-neutral-400 cursor-default">
                  {brand.name}
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
            className="relative z-50 lg:hidden text-neutral-700 hover:text-black transition-colors"
          >
            <MenuToggleIcon open={mobileOpen} />
          </button>

          <Link
            to="/#who-we-are"
            className="hidden lg:inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            Get Started
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={closeMenu}
            className="fixed inset-0 z-30 lg:hidden bg-black/40"
          />

          <div className="fixed top-0 left-0 z-40 h-screen p-6 bg-white w-[75%] max-w-xs lg:hidden border-r border-neutral-200 overflow-y-auto transition-all ease-in-out duration-500">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <h5 className="text-base font-semibold text-black uppercase">Menu</h5>
            <button type="button" aria-label="Close menu" onClick={closeMenu}>
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          <div className="mt-4 flex flex-col">
            {brandGroups.map((brand) => {
              const isOpen = openBrand === brand.name;
              return (
                <div key={brand.name} className="border-b border-neutral-100">
                  <button
                    type="button"
                    onClick={() => setOpenBrand(isOpen ? null : brand.name)}
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-wide text-neutral-900"
                  >
                    {brand.name}
                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-4 h-4 text-neutral-500" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="sublist"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="flex flex-col pb-2">
                          {brand.navItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                onClick={closeMenu}
                                className="block py-2 pl-3 text-sm text-neutral-600 hover:text-black transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          </div>
        </>
      )}
    </header>
  );
};

export default GlobalNav;
