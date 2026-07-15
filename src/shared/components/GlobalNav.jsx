import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../assets/Logo.png";
import useHideOnScroll from "../hooks/useHideOnScroll";

const connects = [
  { name: "DigiConnect", href: "/digiconnect", available: true },
  { name: "SkillConnect", href: "/skillconnect", available: true },
  { name: "EduConnect", href: "/educonnect", available: true },
];

const GlobalNav = () => {
  const hidden = useHideOnScroll();

  return (
    <header
      className={`sticky top-0 z-[60] bg-white border-b border-neutral-200 shadow-sm transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="px-8 lg:px-8 xl:px-20 grid grid-cols-3 items-center h-16">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 justify-self-start">
          <LazyLoadImage
            className="w-8 h-8"
            alt="JMonkDevOps"
            src={Logo}
            effect="blur"
          />
          <span className="font-display text-base font-bold tracking-tight text-black">
            JMonkDevOps
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 justify-self-center">
          {connects.map((connect) =>
            connect.available ? (
              <li key={connect.name}>
                <Link
                  to={connect.href}
                  className="text-sm font-medium text-neutral-700 hover:text-red-600 transition-colors"
                >
                  {connect.name}
                </Link>
              </li>
            ) : (
              <li key={connect.name}>
                <span className="text-sm font-medium text-neutral-400 cursor-default">
                  {connect.name}
                </span>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          aria-label="Search"
          className="text-neutral-700 hover:text-red-600 transition-colors justify-self-end"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default GlobalNav;
