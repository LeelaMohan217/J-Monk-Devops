import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { companyConfig } from "../companyConfig";
import { digiConnectConfig } from "../../sites/digiconnect/config";
import { skillConnectConfig } from "../../sites/skillconnect/config";
import { eduConnectConfig } from "../../sites/educonnect/config";

// Rendered once at the App level, after every route's content, the same way
// GlobalNav is rendered once above every route. One footer, company-wide,
// for the landing page and all three brand sites — no per-site copy to keep
// in sync.
const socialIcons = {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn: Linkedin,
};

// Each platform's own navItems, straight from its config, so the footer's
// per-platform link list never drifts out of sync with that platform's own
// navbar.
const platformNavGroups = [
  { name: digiConnectConfig.siteName, items: digiConnectConfig.navItems },
  { name: skillConnectConfig.siteName, items: skillConnectConfig.navItems },
  { name: eduConnectConfig.siteName, items: eduConnectConfig.navItems },
];

const legalLinks = ["Terms of Service", "Privacy Policy"];

const GlobalFooter = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
        <div className="flex flex-col gap-4 max-w-sm">
          <Link to="/" className="w-fit">
            <span className="text-base font-semibold tracking-tight text-white">
              {companyConfig.name}
            </span>
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {companyConfig.description}
          </p>
          <ul className="flex gap-3 mt-2">
            {companyConfig.social.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="rounded-lg text-neutral-400 border border-neutral-800 p-2 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tighter x-gap below sm widens each of the two columns: a heading
            like "SkillConnect" needs ~114px with its tracking. */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 sm:gap-10 lg:gap-12">
          {platformNavGroups.map((group) => (
            <div key={group.name} className="flex flex-col gap-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-white sm:tracking-[0.15em]">
                {group.name}
              </h3>
              {/* py-1 with a tighter gap keeps the visual rhythm while lifting
                  each link's hit area to 28px — a bare 20px line of text is
                  under the 24x24 minimum for standalone links. */}
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="inline-block py-1 text-neutral-400 text-sm font-medium hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-white sm:tracking-[0.15em]">
              Location
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-neutral-400 text-sm font-medium leading-relaxed break-words">
                {companyConfig.address}
              </li>
              <li>
                <a
                  href={`tel:${companyConfig.phone.replace(/\s/g, "")}`}
                  // max-w-full is what makes the sibling break-words actually
                  // work: an inline-block shrink-wraps to its content, so the
                  // email grew to its full 172px and spilled out of the grid
                  // cell (off-screen entirely at 320px) instead of wrapping.
                  // Capping it at the cell width gives break-words something to
                  // break the unbreakable address against.
                  className="inline-block max-w-full py-1 text-neutral-400 text-sm font-medium break-words hover:text-white transition-colors duration-300"
                >
                  {companyConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyConfig.email}`}
                  // max-w-full is what makes the sibling break-words actually
                  // work: an inline-block shrink-wraps to its content, so the
                  // email grew to its full 172px and spilled out of the grid
                  // cell (off-screen entirely at 320px) instead of wrapping.
                  // Capping it at the cell width gives break-words something to
                  // break the unbreakable address against.
                  className="inline-block max-w-full py-1 text-neutral-400 text-sm font-medium break-words hover:text-white transition-colors duration-300"
                >
                  {companyConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} {companyConfig.name}. All rights
            reserved.
          </p>
          <p className="text-neutral-600 text-xs">
            {legalLinks.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
