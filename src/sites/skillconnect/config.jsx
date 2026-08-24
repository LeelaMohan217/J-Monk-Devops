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
  // Match DigiConnect's wider nav rail instead of the default max-w-6xl.
  navMaxWidthClass: "max-w-7xl",
  // Puts the same ArrowRight the page CTAs use on the nav button. A boolean
  // rather than a node so this file stays pure data; App.jsx builds the element.
  navCtaArrow: true,
  contactCta: {
    // Rewritten from "Ready to Build Real-World Skills? / Get in touch to learn
    // more about upcoming projects, mentorship, and internship opportunities
    // with SkillConnect.", which was a generic call to action that repeated the
    // brand name back at the reader instead of saying anything.
    //
    // Split for the red Playfair accent, same as every other heading here.
    headingLead: "Tell us where you are ",
    headingAccent: "starting from.",
    accentClass: ACCENT_CLASS,
    subtext:
      "You do not need a portfolio or a finished course to get in touch. Say what you can already do and which track sounds closest, and we will tell you where you would fit.",
    ctaLabel: "Get in Touch",
    ctaHref: "/skillconnect/contact",
    // This site's newer pages run on a 7xl rail, same as DigiConnect's, so the
    // closing card lines up with them rather than the older 6xl home sections.
    maxWidthClass: "max-w-7xl",
    // No `variant` any more: ContactCmp renders one band for every brand, the
    // centred one EduConnect was already using.
  },
};
