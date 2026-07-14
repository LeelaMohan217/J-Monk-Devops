import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const digiConnectConfig = {
  siteName: "DigiConnect",
  navItems: [
    { label: "Home", href: "/digiconnect" },
    { label: "About", href: "/digiconnect/about" },
    { label: "Student", href: "/digiconnect/student" },
    { label: "Offerings", href: "/digiconnect/businessman" },
    { label: "Contact", href: "/digiconnect/contact" },
  ],
  navCtaLabel: "Get started",
  navCtaHref: "/digiconnect/contact",
  footer: {
    description:
      "J-Monk Devops enhances everyday lives by providing software that digitalizes to improve business growth with latest tools and technologies.",
    platformLinks: [
      { href: "#", icon: <Facebook /> },
      {
        href: "https://www.instagram.com/j_monk_devops/",
        icon: <Instagram />,
      },
      {
        href: "https://www.linkedin.com/company/j-monk-devops",
        icon: <Linkedin />,
      },
      { href: "#", icon: <Twitter /> },
    ],
    communityLinks: [
      { href: "/digiconnect/about", text: "About" },
      { href: "/digiconnect/contact", text: "Contact Us" },
      { href: "/digiconnect/businessman", text: "Businessman" },
      { href: "/digiconnect/student", text: "Student" },
    ],
    address:
      "Door No.5-69, Pedaparimi Village, Thullur Mandal, Guntur District, 522236, Andhra Pradesh",
    phone: "+91 7330300203",
    email: "jmonkdevops@gmail.com",
  },
  contactCta: {
    heading: "Ready to Elevate Your Business?",
    subtext:
      "Contact us today to discuss how our custom software solutions can take your business to the next level. Let's innovate together!",
    ctaLabel: "Get Started",
    ctaHref: "/digiconnect/contact",
  },
};
