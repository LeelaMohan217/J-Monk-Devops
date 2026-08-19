// Copy for the DigiConnect about page, kept separate from ../home/data.js so
// the two pages can evolve independently even though they share a narrative
// universe. Deliberately does not restate the home page's hero pitch or its
// "how we work" delivery principles — this page covers identity and origin,
// home covers what gets delivered and how.
import storyImage from "../../assets/why.webp";

export const pageHeader = {
  eyebrow: "About",
  heading: "The team behind DigiConnect.",
  lead: "DigiConnect is JMonkDevOps' software and cloud engineering practice, run out of Guntur, Andhra Pradesh. We keep the group small enough that the people who scope your project are the same people who ship it.",
};

export const story = {
  eyebrow: "Our story",
  heading: "Started small, stayed small on purpose.",
  image: storyImage,
  paragraphs: [
    "DigiConnect began as a handful of developers taking on custom software work for businesses around Guntur. The projects got bigger — SaaS products, cloud migrations, DevOps pipelines — but the way we run them did not change.",
    "We still take on a limited number of engagements at a time. That is a constraint we chose, not one we are working around: it is what lets the same engineers stay on a project from the first scoping call through whatever comes after launch.",
  ],
};

export const values = {
  eyebrow: "What that means in practice",
  heading: "A few things worth knowing before you call.",
  items: [
    {
      term: "We turn down mismatched work",
      detail:
        "If what you are asking for is not what you need, we say so before anything is signed — even when it costs us the project.",
    },
    {
      term: "No layer between you and the engineers",
      detail:
        "Whoever you talk to during scoping is who you talk to during the build. There is no account-management relay in between.",
    },
    {
      term: "Client work and student programs, one team",
      detail:
        "The internships, freelancing routes, and training on the student side are run by the same engineers doing the client work, not a separate offshoot.",
    },
  ],
};
