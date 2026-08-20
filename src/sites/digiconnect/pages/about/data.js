// Copy for the DigiConnect about page, kept separate from ../home/data.js so
// the two pages can evolve independently even though they share a narrative
// universe. Deliberately does not restate the home page's hero pitch or its
// "how we work" delivery principles. This page covers identity and origin, home
// covers what gets delivered and how.
//
// Headings split into headingLead / headingAccent for the red Playfair accent,
// and no sentence uses a dash as punctuation.
import storyImage from "../../assets/why.webp";

export const pageHeader = {
  eyebrow: "About",
  headingLead: "The team behind ",
  headingAccent: "DigiConnect.",
  lead: "DigiConnect is JMonkDevOps' software and cloud engineering practice, run out of Guntur, Andhra Pradesh. We keep the group small enough that the people who scope your project are the same people who ship it.",
};

export const story = {
  eyebrow: "Our story",
  headingLead: "Started small, stayed small ",
  headingAccent: "on purpose.",
  image: storyImage,
  paragraphs: [
    "DigiConnect began as a handful of developers taking on custom software work for businesses around Guntur. The projects got bigger, moving into SaaS products, cloud migrations, and DevOps pipelines. The way we run them did not change.",
    "We still take on a limited number of engagements at a time. That is a constraint we chose rather than one we are working around. It is what lets the same engineers stay on a project from the first scoping call through whatever comes after launch.",
  ],
};

export const values = {
  eyebrow: "What that means in practice",
  headingLead: "A few things worth knowing ",
  headingAccent: "before you call.",
  items: [
    {
      term: "We turn down mismatched work",
      detail:
        "If what you are asking for is not what you need, we say so before anything is signed. Even when it costs us the project.",
    },
    {
      term: "No layer between you and the engineers",
      detail:
        "Whoever you talk to during scoping is who you talk to during the build. There is no account-management relay in between.",
    },
    {
      term: "Client work and student programs, one team",
      detail:
        "The internships, freelancing routes, and training now run under SkillConnect, staffed by the same engineers doing the client work here rather than a separate offshoot.",
    },
  ],
};
