import { ACCENT_CLASS } from "./headingStyles";

export const digiConnectConfig = {
  siteName: "DigiConnect",
  homeHref: "/digiconnect",
  navItems: [
    { label: "Home", href: "/digiconnect" },
    { label: "About", href: "/digiconnect/about" },
    { label: "Services", href: "/digiconnect/services" },
    { label: "Careers", href: "/digiconnect/careers" },
    { label: "Contact", href: "/digiconnect/contact" },
  ],
  navCtaLabel: "Get started",
  navCtaHref: "/digiconnect/contact",
  navMaxWidthClass: "max-w-7xl",
  navCtaArrow: true,
  contactCta: {
    headingLead: "Tell us what you are ",
    headingAccent: "trying to build.",
    accentClass: ACCENT_CLASS,
    subtext:
      "A few lines is enough to start. If we are not the right fit for it, we will say so on the first call rather than three weeks in.",
    ctaLabel: "Start a project",
    ctaHref: "/digiconnect/contact",
    maxWidthClass: "max-w-7xl",
  },
};
