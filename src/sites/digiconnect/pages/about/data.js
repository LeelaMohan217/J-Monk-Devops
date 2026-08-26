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
  eyebrow: "Strategic growth insights",
  headingLead: "Discover new pathways to business ",
  headingAccent: "excellence.",
  lead: "Our team combines industry expertise with strategic insight to deliver solutions tailored to each client’s unique goals.",
};

export const story = {
  eyebrow: "About Us",
  headingLead: "Accelerate business performance through tailored ",
  headingAccent: "consulting solutions",
  image: storyImage,
  paragraphs: [
    "We work closely with clients to analyze challenges, enhance processes, and build strategies that support long-term success. Our hands-on approach ensures meaningful transformation and measurable progress.",
  ],
};

export const values = {
  eyebrow: "Our Values",
  headingLead: "We’re building better ways to run a ",
  headingAccent: "business.",
  items: [
    {
      term: "Values",
      detail:
        "We help businesses bring structure to how they operate—clarifying direction and supporting consistent execution over time.",
    },
    {
      term: "Mission",
      detail:
        "We help businesses bring structure to how they operate—clarifying direction and supporting consistent execution over time.",
    },
    {
      term: "Direction",
      detail:
        "We focus on improving how businesses run—identifying inefficiencies, strengthening operations, and supporting growth.",
    },
    // A third item used to sit here, "Client work and student programs, one
    // team", explaining that the internships and training run under SkillConnect
    // with the same engineers. It was the last place this site described the
    // student side, which belongs to SkillConnect now, so it is gone and the
    // grid below drops to two columns to suit. Nothing was invented to replace
    // it: two true things beat three with one padded out.
  ],
};
