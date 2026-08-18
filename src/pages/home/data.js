export const visionMission = {
  vision:
    "In ten years, we want where you're born in Bharath to say less about your future than it does today — because the technology, mentorship, and doors abroad that once belonged to a privileged few became ordinary and expected.",
  mission:
    "We measure ourselves by what happens after the contract ends, the course finishes, or the visa is stamped — staying in the room long enough to understand the real problem, building relationships that outlast a single project, and choosing depth over volume even when it's slower.",
};

export const services = [
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
];

export const platforms = [
  {
    id: "01",
    name: "DigiConnect",
    tagline: "Connect. Automate. Scale.",
    href: "/digiconnect",
    contactHref: "/digiconnect/contact",
    audienceLabel: "Business",
    intent: "Business & Technology",
    routerLine: "Software, cloud infrastructure and DevOps automation.",
    description:
      "Custom software, cloud infrastructure, and automation that turn ideas into reliable, scalable digital products.",
    serves:
      "Founders and business owners, from a first product to infrastructure that has outgrown itself.",
    problem:
      "Plans stall in the gap between an idea and something that runs reliably every day.",
  },
  {
    id: "02",
    name: "SkillConnect",
    tagline: "Learn. Build. Grow.",
    href: "/skillconnect",
    contactHref: "/skillconnect/contact",
    audienceLabel: "Student / Career",
    intent: "Skills & Career",
    routerLine: "Live projects, mentorship and hands-on experience.",
    description:
      "A hands-on learning ecosystem where students and career-switchers gain real industry experience through live projects and mentorship.",
    serves:
      "Students and career-switchers who want to be judged on work, not on a certificate.",
    problem:
      "Coursework rarely resembles the job, and the first job asks for experience nobody will hand out.",
  },
  {
    id: "03",
    name: "EduConnect",
    tagline: "Dream. Move. Become.",
    href: "/educonnect",
    contactHref: "/educonnect/contact",
    audienceLabel: "Study abroad",
    intent: "Education Abroad",
    routerLine: "University selection, applications and visa guidance.",
    description:
      "End-to-end guidance for students pursuing international education, from university selection to visa support.",
    serves:
      "Students planning to study abroad, and the families weighing that decision with them.",
    problem:
      "The route to a foreign university is opaque, and one piece of bad advice costs a year.",
  },
];

// The umbrella argument: what actually connects the three verticals.
// Written to stand on its own — the section's visual treatment is additive.
export const ecosystem = {
  heading: "Why one company runs all three.",
  lead: "Most people arrive needing one of these. The reason they sit under one roof is that the three keep running into each other — the same work, seen from a different point in someone's life.",
  links: [
    {
      from: "SkillConnect",
      to: "DigiConnect",
      statement: "Practice only counts if it looks like the real thing.",
      detail:
        "The projects learners build against are drawn from the kind of work DigiConnect delivers — client-shaped problems, production constraints, code that has to survive after the demo.",
    },
    {
      from: "DigiConnect",
      to: "SkillConnect",
      statement: "The people who learn here are the people who build here.",
      detail:
        "Mentorship comes from the same engineers doing delivery work, so what gets taught is what is currently true — not last year's curriculum written by someone who left the industry.",
    },
    {
      from: "SkillConnect",
      to: "EduConnect",
      statement: "Ambition rarely stops at the border.",
      detail:
        "A student who has built something real is a stronger applicant abroad, and the same person often comes back looking for the work the other two do. It is one path, not three.",
    },
  ],
  closing:
    "Different doors into the same company. Whichever one you walk through, the standard on the other side is the same.",
};

export const faqs = [
  {
    question: "What is JMonkDevOps?",
    answer:
      "JMonkDevOps is an umbrella of three connected platforms — DigiConnect, SkillConnect, and EduConnect — each focused on a different kind of growth: business technology, hands-on skill-building, and global education, all held to the same standard of quality.",
  },
  {
    question: "What's the difference between DigiConnect, SkillConnect, and EduConnect?",
    answer:
      "DigiConnect builds custom software, cloud infrastructure, and DevOps automation for businesses. SkillConnect gives students and career-switchers real-world project experience and mentorship. EduConnect guides students through international education, from university selection to visa support.",
  },
  {
    question: "Do I need to already be a business to work with DigiConnect?",
    answer:
      "No — DigiConnect works with everything from early-stage startups to established businesses, whether you need a first product built or existing infrastructure modernized.",
  },
  {
    question: "Is SkillConnect only for students?",
    answer:
      "SkillConnect is built for both students and career-switchers who want practical, real-world experience through live projects and mentorship rather than purely theoretical learning.",
  },
  {
    question: "How does EduConnect help with university applications and visas?",
    answer:
      "EduConnect supports the full journey — from choosing the right university and program, through the application process, to visa assistance and pre-departure preparation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact page of the platform that fits your need, and our team will walk you through next steps based on your goals.",
  },
];

// Real figures, provided directly by the user — a curated subset, not the
// full list they gave us, to keep the section to a handful of numbers worth
// reading rather than every metric available.
export const stats = [
  { value: "100+", label: "Clients served", platform: "DigiConnect" },
  {
    value: "200+",
    label: "Students trained and mentored",
    platform: "SkillConnect",
  },
  { value: "98%", label: "Visa success rate", platform: "EduConnect" },
  { value: "3+", label: "Years operating", platform: "Company-wide" },
];

// Placeholder content only — no real client/student feedback exists yet.
// TestimonialsSection is built and ready but deliberately not rendered on
// the live Landing page (see Landing.jsx) until each slot below is replaced
// with a real quote and real attribution. Do not ship the bracketed text.
export const testimonials = [
  {
    platform: "DigiConnect",
    role: "Business client",
    quote: "[Add a real quote from a DigiConnect client about the project delivered together.]",
    name: "[Client name]",
  },
  {
    platform: "SkillConnect",
    role: "Student",
    quote: "[Add a real quote from a SkillConnect student or mentee about their experience.]",
    name: "[Student name]",
  },
  {
    platform: "EduConnect",
    role: "Student",
    quote: "[Add a real quote from an EduConnect student about their study-abroad journey.]",
    name: "[Student name]",
  },
];

export const commitments = [
  {
    icon: "MessageCircle",
    title: "Clear Communication",
    description:
      "You'll know what's happening and why, every step of the way — no jargon, no radio silence.",
  },
  {
    icon: "ShieldCheck",
    title: "Built to Last",
    description:
      "We design for maintainability from day one, not just to hit a launch deadline.",
  },
  {
    icon: "Scale",
    title: "Honest Scoping",
    description:
      "If a simpler approach solves your problem, we'll say so — even when the complex one pays more.",
  },
];
