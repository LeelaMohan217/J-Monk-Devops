import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const skillConnectConfig = {
  siteName: "SkillConnect",
  homeHref: "/skillconnect",
  navItems: [{ label: "Home", href: "/skillconnect" }],
  navCtaLabel: "Get in Touch",
  navCtaHref: "/digiconnect/contact",
  footer: {
    description:
      "SkillConnect is a hands-on learning ecosystem that bridges the gap between education and industry through real-world projects, mentorship, and career-building opportunities.",
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
    heading: "Ready to Build Real-World Skills?",
    subtext:
      "Get in touch to learn more about upcoming projects, mentorship, and internship opportunities with SkillConnect.",
    ctaLabel: "Get in Touch",
    ctaHref: "/digiconnect/contact",
  },
};
