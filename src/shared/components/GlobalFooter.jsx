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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-14">
          {platformNavGroups.map((group) => (
            <div key={group.name} className="flex flex-col gap-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
                {group.name}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="inline-block text-neutral-400 text-sm font-medium hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
              Location
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-neutral-400 text-sm font-medium leading-relaxed break-words">
                {companyConfig.address}
              </li>
              <li>
                <a
                  href={`tel:${companyConfig.phone.replace(/\s/g, "")}`}
                  className="text-neutral-400 text-sm font-medium break-words hover:text-white transition-colors duration-300"
                >
                  {companyConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="text-neutral-400 text-sm font-medium break-words hover:text-white transition-colors duration-300"
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
