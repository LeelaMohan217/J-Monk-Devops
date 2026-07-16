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
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="px-8 lg:px-8 xl:px-20 pt-16 md:pt-20 pb-10 flex flex-col gap-16">
        <div className="flex flex-col gap-4 max-w-sm">
          <Link to="/" className="w-fit">
            <span className="font-display text-base font-bold tracking-tight text-neutral-900">
              JMonkDevOps
            </span>
          </Link>
          <p className="text-neutral-600 text-sm leading-relaxed">
            {footer.description}
          </p>
          <ul className="flex gap-5 mt-2">
            {footer.platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-500 border border-neutral-300 p-2 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-bleed top divider — spans edge to edge, unlike the padded content
          above and below it, per the reference layout. */}
      <div className="border-t border-neutral-200">
        <div className="px-8 lg:px-8 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            <div className="flex flex-col gap-5 py-10 sm:px-8 min-h-72">
              <h3 className="text-neutral-500 text-sm">Platforms</h3>
              <ul className="flex flex-col gap-3">
                {platformLinks.map((link) =>
                  link.available ? (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="inline-block text-neutral-900 text-sm font-medium hover:text-red-600 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.name} className="text-neutral-400 text-sm">
                      {link.name} (Coming Soon)
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="flex flex-col gap-5 py-10 sm:px-8 min-h-72">
              <h3 className="text-neutral-500 text-sm">Company</h3>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.href}
                      className="inline-block text-neutral-900 text-sm font-medium hover:text-red-600 transition-colors duration-300"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 py-10 sm:px-8 min-h-72">
              <h3 className="text-neutral-500 text-sm">Contact</h3>
              <ul className="flex flex-col gap-3">
                <li className="text-neutral-900 text-sm font-medium">
                  {footer.address}
                </li>
                <li className="text-neutral-900 text-sm font-medium">
                  {footer.phone}
                </li>
                <li className="text-neutral-900 text-sm font-medium">
                  {footer.email}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5 py-10 sm:px-8 min-h-72">
              <h3 className="text-neutral-500 text-sm">Legal</h3>
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
      </div>

      <div className="border-t border-neutral-200">
        <div className="px-8 lg:px-8 xl:px-20 py-6">
          <p className="text-neutral-500 text-sm text-center">
            © {new Date().getFullYear()} JMonkDevOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
