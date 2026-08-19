// All copy for the DigiConnect home page lives here so the section components
// stay purely presentational. Assets are imported directly from ../../assets/
// rather than through ../../constants — that barrel still carries the stale
// pre-rebrand copy and instantiates lucide JSX at module scope.
import productImage from "../../assets/image2.webp";
import platformImage from "../../assets/image4.webp";
import consultingImage from "../../assets/image1.webp";
import partnershipImage from "../../assets/image3.webp";

export const hero = {
  heading: "Software your business can actually run on.",
  lead: "DigiConnect designs, builds, and maintains custom software, SaaS products, cloud infrastructure, and the integrations that hold them together — one team, from architecture to production.",
  primaryCta: { label: "Start a project", href: "/digiconnect/contact" },
  secondaryCta: { label: "See our offerings", href: "/digiconnect/businessman" },
};

export const whatWeDo = {
  eyebrow: "What we do",
  heading: "Three things we get asked for most.",
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
  eyebrow: "Offerings",
  heading: "What we build and run.",
  cta: { label: "See the full offerings page", href: "/digiconnect/businessman" },
  // Mirrors the `services` array in src/pages/home/data.js, which the umbrella
  // landing page does not render. Kept local so DigiConnect can evolve this copy
  // independently; the duplicate should be reconciled when the offerings page
  // is rewritten.
  services: [
    {
      name: "Custom Software Development",
      description:
        "We design and develop scalable web applications, mobile applications, enterprise platforms, and business management systems tailored to your operational needs.",
    },
    {
      name: "SaaS Product Development",
      description:
        "Build powerful SaaS products with secure architecture, modern UI/UX, scalable backend systems, subscription models, and cloud-native infrastructure.",
    },
    {
      name: "Cloud & Infrastructure Solutions",
      description:
        "Deploy and manage secure cloud environments with optimized infrastructure, server management, scalability planning, and performance monitoring.",
    },
    {
      name: "DevOps & Automation Services",
      description:
        "Streamline development workflows using CI/CD pipelines, infrastructure automation, deployment strategies, monitoring systems, and operational optimization.",
    },
    {
      name: "API Development & System Integration",
      description:
        "Integrate third-party platforms, payment gateways, CRMs, ERPs, communication tools, and automation systems for seamless business operations.",
    },
    {
      name: "Technical Consulting",
      description:
        "Get expert guidance on digital transformation, software architecture, product strategy, technology stack selection, and scalability planning.",
    },
  ],
};

export const howWeWork = {
  eyebrow: "How we work",
  heading: "Fewer surprises, by design.",
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
        "Documented, deployable, and readable by whoever maintains it next — including your own team.",
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
  heading: "Two ways in.",
  lead: "Most people arrive for one of these. Pick the closer one — we will redirect you if it is the other.",
  paths: [
    {
      id: "01",
      label: "Business",
      title: "Offerings",
      line: "Software, cloud, and automation built around how your business already works.",
      href: "/digiconnect/businessman",
    },
    {
      id: "02",
      label: "Student",
      title: "Student programs",
      line: "Internships, freelancing routes, and training that put you on real project work.",
      href: "/digiconnect/student",
    },
  ],
};

// Exactly the eight published on the umbrella landing page. Do not extend this
// list — the landing records a standing decision not to fabricate capability
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
