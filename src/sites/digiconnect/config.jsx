export const digiConnectConfig = {
  siteName: "DigiConnect",
  homeHref: "/digiconnect",
  navItems: [
    { label: "Home", href: "/digiconnect" },
    { label: "About", href: "/digiconnect/about" },
    { label: "Student", href: "/digiconnect/student" },
    { label: "Offerings", href: "/digiconnect/businessman" },
    { label: "Contact", href: "/digiconnect/contact" },
  ],
  navCtaLabel: "Get started",
  navCtaHref: "/digiconnect/contact",
  // DigiConnect's own pages run on a max-w-7xl rail; Navbar opts into it here
  // so SkillConnect/EduConnect keep their default max-w-6xl.
  navMaxWidthClass: "max-w-7xl",
  contactCta: {
    heading: "Ready to Elevate Your Business?",
    subtext:
      "Contact us today to discuss how our custom software solutions can take your business to the next level. Let's innovate together!",
    ctaLabel: "Get Started",
    ctaHref: "/digiconnect/contact",
  },
};
