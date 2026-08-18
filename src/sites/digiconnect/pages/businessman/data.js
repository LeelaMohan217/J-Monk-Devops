// Copy for the DigiConnect offerings ("Businessman") page — the destination
// of Home's "See the full offerings page" link. Deliberately built as the
// full version of home/data.js's `offerings.services` (same six names, in
// the same order) rather than the old, unrelated three-item list this page
// used to show, so the CTA's promise actually holds.
export const pageHeader = {
  eyebrow: "Offerings",
  heading: "Everything DigiConnect builds and runs, in detail.",
  lead: "The homepage covers this in a few lines. Here is the same six offerings with what each one actually includes.",
};

export const offerings = [
  {
    name: "Custom Software Development",
    summary:
      "We design and develop scalable web applications, mobile applications, enterprise platforms, and business management systems tailored to your operational needs.",
    detail:
      "Each build starts from how your team already works, not a template — the internal tools and business platforms we deliver are built to fit an existing process rather than force a new one.",
  },
  {
    name: "SaaS Product Development",
    summary:
      "Build powerful SaaS products with secure architecture, modern UI/UX, scalable backend systems, subscription models, and cloud-native infrastructure.",
    detail:
      "That includes the parts that are easy to leave out of a first version — role-based access, subscription billing, and the account and reporting layers your first paying customers will actually ask for.",
  },
  {
    name: "Cloud & Infrastructure Solutions",
    summary:
      "Deploy and manage secure cloud environments with optimized infrastructure, server management, scalability planning, and performance monitoring.",
    detail:
      "We run this primarily on AWS, with infrastructure defined as code so environments can be rebuilt rather than hand-maintained, and monitoring in place before launch — not added after an outage.",
  },
  {
    name: "DevOps & Automation Services",
    summary:
      "Streamline development workflows using CI/CD pipelines, infrastructure automation, deployment strategies, monitoring systems, and operational optimization.",
    detail:
      "Pipelines run on GitHub Actions with containerized deployments through Docker and Kubernetes where the workload calls for it, so releases are a routine step in the workflow rather than an event.",
  },
  {
    name: "API Development & System Integration",
    summary:
      "Integrate third-party platforms, payment gateways, CRMs, ERPs, communication tools, and automation systems for seamless business operations.",
    detail:
      "This is usually the unglamorous part of a project — mapping how data moves between systems that were never designed to talk to each other — and it is where a lot of engagements start.",
  },
  {
    name: "Technical Consulting",
    summary:
      "Get expert guidance on digital transformation, software architecture, product strategy, technology stack selection, and scalability planning.",
    detail:
      "Useful before you commit budget to a rebuild or a new platform, or when you need an outside read on why something that used to work is now the thing slowing your team down.",
  },
];
