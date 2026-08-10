import { Link } from "react-router-dom";
import { digiConnectConfig } from "../../sites/digiconnect/config";

const platformLinks = [
  { name: "DigiConnect", href: "/digiconnect", available: true },
  { name: "SkillConnect", href: "/skillconnect", available: true },
  { name: "EduConnect", href: "/educonnect", available: true },
];

const companyLinks = [
  { text: "About DigiConnect", href: "/digiconnect/about" },
  { text: "Contact", href: "/digiconnect/contact" },
];

const legalLinks = ["Terms of Service", "Privacy Policy"];

const LandingFooter = () => {
  const { footer } = digiConnectConfig;

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-16 md:py-20 flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
        <div className="flex flex-col gap-4 max-w-sm">
          <Link to="/" className="w-fit">
            <span className="text-base font-semibold tracking-tight text-white">
              JMonkDevOps
            </span>
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {footer.description}
          </p>
          <ul className="flex gap-3 mt-2">
            {footer.platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="rounded-lg text-neutral-400 border border-neutral-800 p-2 flex items-center justify-center hover:text-white hover:border-neutral-600 transition-colors duration-300 [&_svg]:w-4 [&_svg]:h-4"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-14">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
              Platforms
            </h3>
            <ul className="flex flex-col gap-3">
              {platformLinks.map((link) =>
                link.available ? (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="inline-block text-neutral-400 text-sm font-medium hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li key={link.name} className="text-neutral-600 text-sm">
                    {link.name} (Coming Soon)
                  </li>
                ),
              )}
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
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-neutral-400 text-sm font-medium leading-relaxed break-words">
                {footer.address}
              </li>
              <li className="text-neutral-400 text-sm font-medium break-words">
                {footer.phone}
              </li>
              <li className="text-neutral-400 text-sm font-medium break-words">
                {footer.email}
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((text) => (
                <li key={text} className="text-neutral-400 text-sm">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-0 py-6">
          <p className="text-neutral-600 text-xs text-center">
            © {new Date().getFullYear()} JMonkDevOps. All rights reserved.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-0 py-2 lg:py-6 overflow-hidden">
        <p className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold text-center leading-none tracking-tight">
          JMonkDevOps
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;
