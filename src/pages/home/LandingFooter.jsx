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

const LandingFooter = () => {
  const { footer } = digiConnectConfig;

  return (
    <footer className="bg-red-700">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link to="/" className="w-fit">
            <span className="font-display text-base font-bold tracking-tight text-white">
              JMonkDevOps
            </span>
          </Link>
          <p className="text-neutral-200 text-sm leading-relaxed">
            {footer.description}
          </p>
          <ul className="flex gap-3 mt-2">
            {footer.platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-200 border border-white/40 p-2 flex items-center justify-center hover:bg-white hover:text-red-600 transition-all duration-300 hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide">
            Platforms
          </h3>
          <ul className="flex flex-col gap-3">
            {platformLinks.map((link) =>
              link.available ? (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="inline-block text-neutral-200 text-sm hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li key={link.name} className="text-neutral-300 text-sm">
                  {link.name}{" "}
                  <span className="text-neutral-400">(Coming Soon)</span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide">
            Company
          </h3>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link.text}>
                <Link
                  to={link.href}
                  className="inline-block text-neutral-200 text-sm hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-neutral-200 text-sm">
            <li>{footer.address}</li>
            <li>{footer.phone}</li>
            <li>{footer.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <p className="text-neutral-200 text-sm text-center">
            © {new Date().getFullYear()} JMonkDevOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
