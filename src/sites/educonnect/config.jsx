export const eduConnectConfig = {
  siteName: "EduConnect",
  homeHref: "/educonnect",
  navItems: [
    { label: "Home", href: "/educonnect" },
    { label: "About", href: "/educonnect/about" },
    { label: "Services", href: "/educonnect/services" },
    { label: "Blog", href: "/educonnect/blog" },
    { label: "Contact", href: "/educonnect/contact" },
  ],
  navCtaLabel: "Get in Touch",
  navCtaHref: "/educonnect/contact",
  // Match DigiConnect's wider nav rail instead of the default max-w-6xl.
  navMaxWidthClass: "max-w-7xl",
  // Opts into Navbar's pill-button treatment — DigiConnect/SkillConnect
  // configs don't set this, so they keep the default rounded-lg button.
  navVariant: "premium",
  contactCta: {
    headingLead: "Ready to talk with us?",
    subtext:
      "Tell us where you're headed and what stage you're at. We'll get back to you with next steps.",
    ctaLabel: "Connect today",
    ctaHref: "/educonnect/contact",
    // Line the closing banner up with this site's own 7xl section rail.
    maxWidthClass: "max-w-7xl",
    // No `variant` here on purpose. This site takes ContactCmp's default
    // centred banner; DigiConnect and SkillConnect opt into "panel". A "dark"
    // value used to sit here asking for a gray panel with a black pill button,
    // but no such variant was ever built, so it fell through to this same
    // default and only made the config look like it did something.
  },
};
