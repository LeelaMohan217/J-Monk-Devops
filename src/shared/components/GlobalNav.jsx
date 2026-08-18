import { Link } from "react-router-dom";
import { digiConnectConfig } from "../../sites/digiconnect/config";
import { skillConnectConfig } from "../../sites/skillconnect/config";
import { eduConnectConfig } from "../../sites/educonnect/config";
import useScrollPosition from "../hooks/useScrollPosition";
import Logo from "../assets/Logo.png";

const brandGroups = [
  { name: "DigiConnect", homeHref: digiConnectConfig.homeHref, available: true },
  { name: "SkillConnect", homeHref: skillConnectConfig.homeHref, available: true },
  { name: "EduConnect", homeHref: eduConnectConfig.homeHref, available: true },
];

// Desktop-only bar. Mobile menu duty for the whole app (regardless of route)
// belongs to the single shared MobileNavMenu, rendered once in App.jsx.
const GlobalNav = () => {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 1;

  return (
    <header className="fixed inset-x-0 top-0 z-60">
      <div
        className={`w-full border-b transition-colors duration-300 ${
          scrolled
            ? "bg-white border-neutral-200 shadow-md shadow-black/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center py-2 px-6">
          <Link
            to="/"
            className="col-start-1 flex items-center gap-1 shrink-0 justify-self-start"
          >
            <img
              className="h-12 w-12 object-contain"
              alt="JMonkDevOps"
              src={Logo}
              width={48}
              height={48}
            />
            <span className="text-lg font-semibold tracking-tight text-black">
              JMonkDevOps
            </span>
          </Link>

          <ul className="col-start-2 hidden lg:flex items-center gap-10 justify-self-center">
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
                  <span className="text-sm font-medium text-neutral-400 cursor-default">
                    {brand.name}
                  </span>
                </li>
              ),
            )}
          </ul>

          <div className="col-start-3 justify-self-end">
            <Link
              to="/#who-we-are"
              className="hidden lg:inline-block rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalNav;
