// Copy for the DigiConnect services page, the destination of Home's "See the
// full services page" link. Deliberately built as the full version of
// home/data.js's `offerings.services` (same six names, in the same order)
// rather than the old, unrelated three-item list this page used to show, so
// the CTA's promise actually holds.
//
// The `summary` lines used to be keyword strings ("scalable enterprise
// platforms tailored to your operational needs"). They now say what the work is
// in plain terms, and no sentence uses a dash as punctuation.
//
// The `offerings` export keeps its name: it is the content concept, independent
// of what the nav calls the page.
export const pageHeader = {
  eyebrow: "Services",
  headingLead: "Everything DigiConnect builds and runs, ",
  headingAccent: "in detail.",
  lead: "The homepage covers this in a few lines. Here are the same six services with what each one actually includes.",
};

export const offerings = [
  {
    name: "Custom Software Development",
    summary:
      "Web and mobile apps, internal tools, and the business systems your team sits in all day.",
    detail:
      "Each build starts from how your team already works rather than from a template. The internal tools and business platforms we deliver are meant to fit an existing process, not force a new one on everybody.",
  },
  {
    name: "SaaS Product Development",
    summary:
      "Multi-tenant products with accounts, roles, billing, and reporting designed in from the start.",
    detail:
      "That includes the parts that are easy to leave out of a first version. Role-based access, subscription billing, and the account and reporting layers your first paying customers will actually ask for.",
  },
  {
    name: "Cloud & Infrastructure Solutions",
    summary:
      "Environments that can be rebuilt from scratch instead of nursed along by hand.",
    detail:
      "We run this primarily on AWS, with infrastructure defined as code so environments can be rebuilt rather than hand-maintained. Monitoring goes in before launch, not after the first outage.",
  },
  {
    name: "DevOps & Automation Services",
    summary:
      "Pipelines that get code to production without a person shepherding every step.",
    detail:
      "Pipelines run on GitHub Actions with containerized deployments through Docker and Kubernetes where the workload calls for it, so releasing becomes a routine step in the workflow rather than an event you schedule around.",
  },
  {
    name: "API Development & System Integration",
    summary:
      "Making the platforms you already pay for talk to each other properly, including the failure cases.",
    detail:
      "This is usually the unglamorous part of a project, mapping how data moves between systems that were never designed to talk to each other. It is also where a lot of engagements start.",
  },
  {
    name: "Technical Consulting",
    summary:
      "A straight answer on architecture, stack choices, and what will break first as you grow.",
    detail:
      "Useful before you commit budget to a rebuild or a new platform, or when you need an outside read on why something that used to work is now the thing slowing your team down.",
  },
];
