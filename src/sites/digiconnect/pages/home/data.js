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
// whatWeDo used to import three of these, one per card. It takes a single image
// now that its cards are text tiles beside one image panel rather than three
// cards each topped by artwork. image4 and image1 went with that change and are
// no longer imported anywhere in src/.
import whatWeDoImage from "../../assets/image2.webp";
import partnershipImage from "../../assets/image3.webp";

export const hero = {
  // Names the practice rather than the brand. SkillConnect's hero has no eyebrow
  // at all because the one it used to carry was the word "SkillConnect", which
  // the sub-navbar directly above already shows; this one earns its line by
  // saying what kind of outfit is speaking before the heading makes its claim.
  // The wording is the about page's own ("JMonkDevops' software and cloud
  // engineering practice") rather than a new phrase, so the two pages describe
  // the same company.
  //
  // Sentence case, and it renders that way: HeroSection sets this one lowercase
  // where the other eyebrows are uppercase, so unlike them the casing here is
  // visible and belongs to the string.
  //
  // Length is the one thing to watch when rewording it, because this eyebrow now
  // sits in a badge with a sparkle and an arrow beside it rather than running
  // free. Those plus the pill's padding cost about 70px, so on the 327px phone
  // rail the words themselves have roughly 255px, and at text-sm lowercase a
  // character runs about 7px. That leaves room for around 36; this is 29. Past
  // the limit the pill wraps to two lines rather than the text simply reflowing,
  // which looks like a broken button.
  eyebrow: "Software and cloud engineering",
  // The badge's arrow promises a destination. About rather than services because
  // the label names the practice and that page defines it, and because the two
  // CTAs below already own contact and services.
  eyebrowHref: "/digiconnect/about",
  headingLead: "Software your business can ",
  headingAccent: "actually run on.",
  lead: "DigiConnect designs, builds, and maintains custom software, SaaS products, cloud infrastructure, and the integrations that hold them together. One team, from architecture through to production.",
  primaryCta: { label: "Start a project", href: "/digiconnect/contact" },
  secondaryCta: { label: "Explore More", href: "/digiconnect/services" },
};

export const whatWeDo = {
  eyebrow: "What we do",
  // Three stacked lines, not one sentence that wraps. The reference this section
  // follows breaks its heading deliberately, a category word then a qualifier then
  // the subject, so the lines are stored separately rather than coaxed out of a
  // max-w. headingAccent stays the last of the three, so the red Playfair italic
  // still lands once on the closing phrase the way it does in the other 22 section
  // headings.
  headingLines: "Delivering strategic clarity for modern business ",
  headingAccent: "challenges",
  lead: "Tailored solutions to streamline operations and scale faster.",
  // One image for the section, sitting in the panel that runs down the left of the
  // tile grid. image2 rather than either of the other two: it shows code, layout
  // and design tooling together, so it reads for all three cards at once instead
  // of illustrating whichever one it used to sit on.
  image: whatWeDoImage,
  // Text only now. These are the three tiles to the right of the image panel, so
  // a label and a description is the whole of each one.
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
  // Rewritten away from the keyword lists this section used to carry ("scalable
  // enterprise platforms tailored to your operational needs"), which said very
  // little and read as filler. Each line now names something concrete instead.
  // Mirrors the `services` array in src/pages/home/data.js, which the umbrella
  // landing page does not render.
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

// `audiencePaths` used to live here, a "Where you fit / Two ways in" section
// offering a Business route and a Student route. The student programs run under
// SkillConnect now, so that second route was the only thing on this site still
// addressing students, and removing it left a two-way chooser with one way in.
// The section went with it. The business route it held is not lost: the
// offerings section above already closes on a link to the full services page.

// There was a `stack` list here — React, Node, AWS, Docker, Postgres, GitHub
// Actions, Tailwind, Kubernetes — feeding a StackStrip closing section on this
// page. Both are gone. It was the last tech list anywhere on the site, so if one
// is ever wanted again it starts from scratch, and the standing rule it carried
// still applies: name only what is actually used, never pad the list to look
// broader.
