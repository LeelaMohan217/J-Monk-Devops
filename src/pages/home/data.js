import {
  Code2,
  Cloud,
  Workflow,
  Plug,
  Boxes,
  Compass,
  Route,
  ShieldCheck,
  Building2,
  Zap,
  Cog,
  Handshake,
  GraduationCap,
  Globe2,
  Search,
  TrendingUp,
} from "lucide-react";

export const platforms = [
  {
    id: "01",
    name: "DigiConnect",
    tagline: "Connect. Automate. Scale.",
    href: "/digiconnect",
    available: true,
    icon: Code2,
    description:
      "Custom software, cloud infrastructure, and automation that turn ideas into reliable, scalable digital products.",
    offerings: [
      "Custom Software & SaaS Development",
      "Cloud & Infrastructure Solutions",
      "DevOps & Automation Services",
    ],
  },
  {
    id: "02",
    name: "SkillConnect",
    tagline: "Learn. Build. Grow.",
    href: "/skillconnect",
    available: true,
    icon: GraduationCap,
    description:
      "A hands-on learning ecosystem where students and career-switchers gain real industry experience through live projects and mentorship.",
    offerings: [
      "Real-World Project Experience",
      "Internship & Collaboration Programs",
      "Mentorship & Career Guidance",
    ],
  },
  {
    id: "03",
    name: "EduConnect",
    tagline: "Dream. Move. Become.",
    href: "/educonnect",
    available: true,
    icon: Globe2,
    description:
      "End-to-end guidance for students pursuing international education, from university selection to visa support.",
    offerings: [
      "Career Counselling & University Selection",
      "Application & Visa Assistance",
      "Pre-Departure & Student Support",
    ],
  },
];

export const strengths = [
  {
    icon: Route,
    title: "End-to-End Support",
    description:
      "From the first idea to long-term growth, we stay involved across every stage of the journey.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable & Secure by Design",
    description:
      "Engineering practices built to grow with you, without compromising on reliability.",
  },
  {
    icon: Building2,
    title: "Startup to Enterprise Ready",
    description:
      "Solutions and guidance flexible enough for a first-time founder or an established organization.",
  },
  {
    icon: Zap,
    title: "Agile, Fast-Moving Delivery",
    description:
      "Shorter feedback loops and faster delivery cycles, without cutting corners.",
  },
  {
    icon: Cog,
    title: "Automation-Driven Approach",
    description:
      "We reduce manual work wherever it slows you down, from infrastructure to everyday operations.",
  },
  {
    icon: Handshake,
    title: "A Long-Term Partnership Mindset",
    description:
      "We measure success by your outcomes, not just by a project handoff.",
  },
];

export const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Scalable platforms built around how your business operates.",
  },
  {
    icon: Boxes,
    title: "SaaS Product Development",
    description: "Modern UI/UX and cloud-native infrastructure for subscriptions.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Solutions",
    description: "Secure cloud environments with scalability and monitoring.",
  },
  {
    icon: Workflow,
    title: "DevOps & Automation Services",
    description: "CI/CD pipelines and automation for fast, safe releases.",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description: "Connecting gateways, CRMs, and tools into one system.",
  },
  {
    icon: Compass,
    title: "Technical Consulting",
    description: "Guidance on architecture and technology before you commit.",
  },
];

export const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your goals, constraints, and the outcome you're actually trying to reach.",
  },
  {
    icon: Compass,
    step: "02",
    title: "Design",
    description:
      "We map an approach — architecture, scope, and a realistic path to ship.",
  },
  {
    icon: Workflow,
    step: "03",
    title: "Build & Automate",
    description:
      "We build, test, and automate the workflows that keep delivery fast and reliable.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Support & Scale",
    description:
      "We stay on as a technical partner as your needs grow.",
  },
];

export const testimonials = [
  {
    quote:
      "DigiConnect took the time to understand how we actually work before writing a single line of code. The end result felt custom-built, not off-the-shelf.",
    role: "Founder, Early-Stage Startup",
  },
  {
    quote:
      "What stood out was the follow-through — automation and deployment pipelines that just kept working long after launch.",
    role: "Operations Lead, Growing Business",
  },
  {
    quote:
      "Clear communication from day one, and they were upfront whenever a simpler approach made more sense than the fancier one.",
    role: "Product Owner, Digital Services Firm",
  },
];
