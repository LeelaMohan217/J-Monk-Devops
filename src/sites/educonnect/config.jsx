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
    heading: "Ready to talk with us?",
    subtext:
      "Tell us where you're headed and what stage you're at. We'll get back to you with next steps.",
    ctaLabel: "Connect today",
    ctaHref: "/educonnect/contact",
    // Line the closing banner up with this site's own 7xl section rail.
    maxWidthClass: "max-w-7xl",
    // Gray panel, black pill button — DigiConnect/SkillConnect never set
    // this, so they keep ContactCmp's default red-on-white look.
    variant: "dark",
  },
};
