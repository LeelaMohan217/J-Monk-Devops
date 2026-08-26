import { ACCENT_CLASS } from "./headingStyles";

export const skillConnectConfig = {
  siteName: "SkillConnect",
  homeHref: "/skillconnect",
  navItems: [
    { label: "Home", href: "/skillconnect" },
    { label: "About", href: "/skillconnect/about" },
    { label: "Services", href: "/skillconnect/services" },
    { label: "Contact", href: "/skillconnect/contact" },
  ],
  navCtaLabel: "Get in Touch",
  navCtaHref: "/skillconnect/contact",
  navMaxWidthClass: "max-w-7xl",
  navCtaArrow: true,
  contactCta: {
    headingLead: "Tell us where you are ",
    headingAccent: "starting from.",
    accentClass: ACCENT_CLASS,
    subtext:
      "You do not need a portfolio or a finished course to get in touch. Say what you can already do and which track sounds closest, and we will tell you where you would fit.",
    ctaLabel: "Get in Touch",
    ctaHref: "/skillconnect/contact",
    maxWidthClass: "max-w-7xl",
  },
};
