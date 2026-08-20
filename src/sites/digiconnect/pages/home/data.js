// All copy for the DigiConnect home page lives here so the section components
// stay purely presentational. Assets are imported directly from ../../assets/
// rather than through ../../constants, since that barrel still carries the stale
// pre-rebrand copy and instantiates lucide JSX at module scope.
//
// Headings are split into a `headingLead` and a `headingAccent`. The lead stays
// in the sans face, the accent takes red Playfair italic from
// ../../headingStyles. Kept as two plain strings rather than markup so this file
// stays pure data.
//
// No sentence here uses a dash as punctuation. Where a dash was doing the work
// of a pause, the sentence was split or reworded instead.
import productImage from "../../assets/image2.webp";
import platformImage from "../../assets/image4.webp";
import consultingImage from "../../assets/image1.webp";
import partnershipImage from "../../assets/image3.webp";

export const hero = {
  headingLead: "Software your business can ",
  headingAccent: "actually run on.",
  lead: "DigiConnect designs, builds, and maintains custom software, SaaS products, cloud infrastructure, and the integrations that hold them together. One team, from architecture through to production.",
  primaryCta: { label: "Start a project", href: "/digiconnect/contact" },
  secondaryCta: { label: "See our services", href: "/digiconnect/services" },
};

export const whatWeDo = {
  eyebrow: "What we do",
  headingLead: "Three things we get asked for ",
  headingAccent: "most.",
  lead: "Most engagements start in one of these three places, then grow into the others. You do not have to know which one you need before calling.",
  cards: [
    {
      id: "product",
      image: productImage,
      label: "Product engineering",
      description:
        "Web and mobile applications, internal tools, and business platforms built around your workflow.",
    },
    {
      id: "platforms",
      image: platformImage,
      label: "Platforms and dashboards",
      description:
        "SaaS products with the reporting, roles, and billing layers already thought through.",
    },
    {
      id: "consulting",
      image: consultingImage,
      label: "Consulting and review",
      description:
        "An outside read on architecture, stack choices, and what breaks first as you scale.",
    },
  ],
};

export const offerings = {
  eyebrow: "Services",
  headingLead: "What we build ",
  headingAccent: "and run.",
  cta: { label: "See the full services page", href: "/digiconnect/services" },
  // Rewritten away from the keyword lists this section used to carry ("scalable
  // enterprise platforms tailored to your operational needs"), which said very
  // little and read as filler. Each line now names something concrete instead.
  // Mirrors the `services` array in src/pages/home/data.js, which the umbrella
  // landing page does not render.
  services: [
    {
      name: "Custom Software Development",
      description:
        "Web and mobile apps, internal tools, and the business systems your team runs on all day. Built around how you already work.",
    },
    {
      name: "SaaS Product Development",
      description:
        "Multi-tenant products with the boring parts handled properly: accounts, roles, billing, and the reporting your customers will ask for in month three.",
    },
    {
      name: "Cloud & Infrastructure Solutions",
      description:
        "Environments that can be rebuilt from scratch rather than nursed along, with monitoring that tells you something is wrong before a customer does.",
    },
    {
      name: "DevOps & Automation Services",
      description:
        "Pipelines that get code to production without a person shepherding each step, so releasing stops being an event you schedule around.",
    },
    {
      name: "API Development & System Integration",
      description:
        "Getting your payment gateway, CRM, and whatever else you already pay for to talk to each other properly, including the failure cases.",
    },
    {
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

export const audiencePaths = {
  eyebrow: "Where you fit",
  headingLead: "Two ",
  headingAccent: "ways in.",
  lead: "Most people arrive for one of these. Pick the closer one and we will redirect you if it turns out to be the other.",
  paths: [
    {
      id: "01",
      label: "Business",
      title: "Services",
      line: "Software, cloud, and automation built around how your business already works.",
      href: "/digiconnect/services",
    },
    {
      id: "02",
      label: "Student",
      // The student programs live on SkillConnect now, so this path leaves the
      // site. Same SPA, so a react-router Link still handles it client-side.
      title: "Student programs on SkillConnect",
      line: "Internships, freelancing routes, and training that put you on real project work.",
      href: "/skillconnect/services",
    },
  ],
};

// Exactly the eight published on the umbrella landing page. Do not extend this
// list. The landing records a standing decision not to fabricate capability
// claims.
export const stack = [
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "PostgreSQL",
  "GitHub Actions",
  "Tailwind CSS",
  "Kubernetes",
];
