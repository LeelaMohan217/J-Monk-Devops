import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { companyConfig } from "../../shared/companyConfig";
import { platforms } from "./data";

// Icons live here rather than in the config so companyConfig stays a plain
// module — same lookup pattern CommitmentsSection uses.
const socialIcons = {
  Instagram,
  LinkedIn: Linkedin,
};

const companyLinks = [
  { text: "Who we are", href: "/#who-we-are" },
  { text: "How we work", href: "/#how-we-work" },
  { text: "FAQ", href: "/#faq" },
];

const legalLinks = ["Terms of Service", "Privacy Policy"];

const LandingFooter = () => {
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
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
              Verticals
            </h3>
            <ul className="flex flex-col gap-3">
              {platforms.map((platform) => (
                <li key={platform.id}>
                  <Link
                    to={platform.href}
                    className="inline-block text-neutral-400 text-sm font-medium hover:text-white transition-colors duration-300"
                  >
                    {platform.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.href}
                    className="inline-block text-neutral-400 text-sm font-medium hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
              Enquiries
            </h3>
            <ul className="flex flex-col gap-3">
              {platforms.map((platform) => (
                <li key={platform.id}>
                  <Link
                    to={platform.contactHref}
                    className="inline-block text-neutral-400 text-sm font-medium hover:text-white transition-colors duration-300"
                  >
                    {platform.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
              Reach us
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

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-2 lg:py-6 overflow-hidden">
        <p className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold text-center leading-none tracking-tight">
          {companyConfig.name}
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;
