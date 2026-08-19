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
    heading: "Ready to Start Your Global Journey?",
    subtext:
      "Get in touch for personalized guidance on universities, applications, and visas for studying abroad.",
    ctaLabel: "Get in Touch",
    ctaHref: "/educonnect/contact",
    // Line the closing banner up with this site's own 7xl section rail.
    maxWidthClass: "max-w-7xl",
    // Same opt-in pill treatment as navVariant above.
    variant: "premium",
  },
};
