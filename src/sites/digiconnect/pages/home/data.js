import whatWeDoImage from "../../assets/image2.webp";
import partnershipImage from "../../assets/image3.webp";

export const hero = {
  eyebrow: "Software and cloud engineering",
  eyebrowHref: "/digiconnect/about",
  headingLead: "Software your business can ",
  headingAccent: "actually run on.",
  lead: "DigiConnect designs, builds, and maintains custom software, SaaS products, cloud infrastructure, and the integrations that hold them together. One team, from architecture through to production.",
  primaryCta: { label: "Start a project", href: "/digiconnect/contact" },
  secondaryCta: { label: "Explore More", href: "/digiconnect/services" },
};

export const whatWeDo = {
  eyebrow: "What we do",
  headingLines: "Delivering strategic clarity for modern business ",
  headingAccent: "challenges",
  lead: "Tailored solutions to streamline operations and scale faster.",
  image: whatWeDoImage,
  cards: [
    {
      id: "strategy",
      label: "Show the people behind your strategy",
      description:
        "We help organizations communicate value clearly, align teams around strategy, and deliver experiences that build credibility and lasting relationships.",
    },
    {
      id: "expertise",
      label: "Humanize your brand and highlight expertise",
      description:
        "We provide strategic guidance that helps businesses overcome challenges, improve performance, and achieve long-term sustainable growth.",
    },
    {
      id: "results",
      label: "Transform knowledge into real results",
      description:
        "We partner with businesses to apply deep expertise, solve complex problems, and implement solutions that drive performance and long-term success.",
    },
  ],
};

export const offerings = {
  eyebrow: "Services",
  headingLead: "What we build ",
  headingAccent: "and run.",
  cta: { href: "/digiconnect/services" },
  services: [
    {
      id: "custom-software",
      name: "Custom Software Development",
      description:
        "Web and mobile apps, internal tools, and the business systems your team runs on all day. Built around how you already work.",
    },
    {
      id: "saas-product",
      name: "SaaS Product Development",
      description:
        "Multi-tenant products with the boring parts handled properly: accounts, roles, billing, and the reporting your customers will ask for in month three.",
    },
    {
      id: "cloud-infrastructure",
      name: "Cloud & Infrastructure Solutions",
      description:
        "Environments that can be rebuilt from scratch rather than nursed along, with monitoring that tells you something is wrong before a customer does.",
    },
    {
      id: "devops-automation",
      name: "DevOps & Automation Services",
      description:
        "Pipelines that get code to production without a person shepherding each step, so releasing stops being an event you schedule around.",
    },
    {
      id: "api-integration",
      name: "API Development & System Integration",
      description:
        "Getting your payment gateway, CRM, and whatever else you already pay for to talk to each other properly, including the failure cases.",
    },
    {
      id: "technical-consulting",
      name: "Technical Consulting",
      description:
        "A straight answer on architecture, stack choices, and what will break first as you grow. Useful whether or not you hire us to build it.",
    },
  ],
};

export const howWeWork = {
  eyebrow: "How we work",
  headingLead: "Fewer surprises, ",
  headingAccent: "by design.",
  image: partnershipImage,
  paragraphs: [
    "We would rather lose a project at the scoping call than halfway through it. That means telling you when a simpler build solves the problem, and when the thing you asked for is not the thing you need.",
    "Understanding the problem properly is the part most of the industry rushes. We stay in that part longer, and the finished product is where you see the difference.",
  ],
  principles: [
    {
      term: "Scope in writing",
      detail:
        "You get the plan, the assumptions, and what is explicitly out of scope before work starts.",
    },
    {
      term: "Built to hand over",
      detail:
        "Documented, deployable, and readable by whoever maintains it next, including your own team.",
    },
    {
      term: "One team throughout",
      detail:
        "The people who design it are the people who build and deploy it. No handoff to a different bench.",
    },
  ],
  cta: { label: "More about DigiConnect", href: "/digiconnect/about" },
};


