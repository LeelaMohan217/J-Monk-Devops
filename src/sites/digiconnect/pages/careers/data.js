// Copy for the DigiConnect careers page. Every claim here is one the site
// already makes elsewhere: the small-team-on-purpose constraint and the
// no-account-manager promise come from ../about/data.js, and the tools list is
// imported from ../home/data.js rather than restated, so there is one source of
// truth for what we actually work in.
//
// There are no invented job openings on this page. `openRoles.items` is empty
// and the section renders `openRoles.emptyState` instead of a listing. Fill the
// array in (shape commented below) and the listing turns itself on.
//
// No sentence uses a dash as punctuation.
import { stack } from "../home/data";

export const pageHeader = {
  eyebrow: "Careers",
  headingLead: "A small team, and ",
  headingAccent: "no bench to sit on.",
  lead: "DigiConnect takes on a limited number of engagements at a time so the same engineers stay on a project from the first scoping call through whatever comes after launch. That shapes how we hire more than anything else does.",
};

export const whatItIsLike = {
  eyebrow: "What the work looks like",
  headingLead: "You own ",
  headingAccent: "the thing you build.",
  items: [
    {
      term: "Scope it, build it, run it",
      detail:
        "The engineer in the scoping call is the one who ships it and the one who gets paged about it later. Handing work off to a different bench is not how this operates.",
    },
    {
      term: "No account-management relay",
      detail:
        "You talk to clients directly. That is not an extra duty bolted onto the job. It is the reason the work stays accurate.",
    },
    {
      term: "Not scaling headcount fast",
      detail:
        "We stayed small on purpose. It means fewer roles open at any time, and it means a new engineer lands on real client work rather than in a queue.",
    },
  ],
};

export const tools = {
  eyebrow: "What you would work in",
  headingLead: "The stack, without the ",
  headingAccent: "wishlist padding.",
  lead: "These are the tools actually in use on client projects today, not a list of everything we would like to claim.",
  items: stack,
};

export const openRoles = {
  eyebrow: "Open roles",
  headingLead: "What we are ",
  headingAccent: "hiring for.",
  // Shape for each entry, once there is a real opening to publish:
  // { id: "senior-backend", title: "Senior Backend Engineer",
  //   type: "Full-time, Guntur", summary: "...", href: "/digiconnect/contact" }
  items: [],
  emptyState: {
    heading: "Nothing posted right now.",
    body: "We do not keep evergreen listings up to collect resumes for roles that do not exist. When something opens it goes here. If you want to be the first call when it does, send us something you have built. A repo, a deployed thing, a write-up of a problem you fixed. We will keep it on file.",
    ctaLabel: "Send us your work",
    ctaHref: "/digiconnect/contact",
    // SkillConnect, not DigiConnect, runs the entry-level routes, so people
    // arriving here for an internship get pointed at the right brand.
    altText: "Looking for an internship, freelance project work, or training instead?",
    altLabel: "See SkillConnect's programs",
    altHref: "/skillconnect/services",
  },
};
