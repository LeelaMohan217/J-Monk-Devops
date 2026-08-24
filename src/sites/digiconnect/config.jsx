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
  // DigiConnect's own pages run on a max-w-7xl rail; Navbar opts into it here
  // so SkillConnect/EduConnect keep their default max-w-6xl.
  navMaxWidthClass: "max-w-7xl",
  // Puts the same ArrowRight the page CTAs use on the nav button. A boolean
  // rather than a node so this file stays pure data; App.jsx builds the element.
  navCtaArrow: true,
  contactCta: {
    // Rewritten from "Ready to Elevate Your Business? / Contact us today to
    // discuss how our custom software solutions can take your business to the
    // next level. Let's innovate together!", which was generic filler and made
    // a promise the rest of the site deliberately avoids making.
    //
    // Split for the red Playfair accent, same as every other heading here.
    headingLead: "Tell us what you are ",
    headingAccent: "trying to build.",
    accentClass: ACCENT_CLASS,
    subtext:
      "A few lines is enough to start. If we are not the right fit for it, we will say so on the first call rather than three weeks in.",
    ctaLabel: "Start a project",
    ctaHref: "/digiconnect/contact",
    // This site's pages run on a 7xl rail, same as EduConnect's.
    maxWidthClass: "max-w-7xl",
    // No `variant` any more. This used to ask for "panel", a bordered card with
    // a red rule along its top edge; ContactCmp now renders one band for every
    // brand, the centred one EduConnect was already using.
  },
};
