import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const eduConnectConfig = {
  siteName: "EduConnect",
  homeHref: "/educonnect",
  navItems: [{ label: "Home", href: "/educonnect" }],
  navCtaLabel: "Get in Touch",
  navCtaHref: "/digiconnect/contact",
  footer: {
    description:
      "EduConnect guides students through every stage of their international education journey — from career counselling to visa assistance and pre-departure support.",
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
      { href: "/", text: "JMonkDevOps Home" },
      { href: "/digiconnect", text: "DigiConnect" },
      { href: "/digiconnect/contact", text: "Contact Us" },
    ],
    address:
      "Door No.5-69, Pedaparimi Village, Thullur Mandal, Guntur District, 522236, Andhra Pradesh",
    phone: "+91 7330300203",
    email: "jmonkdevops@gmail.com",
  },
  contactCta: {
    heading: "Ready to Start Your Global Journey?",
    subtext:
      "Get in touch for personalized guidance on universities, applications, and visas for studying abroad.",
    ctaLabel: "Get in Touch",
    ctaHref: "/digiconnect/contact",
  },
};
