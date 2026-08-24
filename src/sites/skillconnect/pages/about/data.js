// Copy for the SkillConnect about page. Every claim here already exists
// somewhere in the repo: the "judged on work, not a certificate" framing and the
// one-path-not-three positioning come from the umbrella landing's
// src/pages/home/data.js, and the "run by the engineers doing client work" fact
// comes from ../services/data.js. Nothing about headcount, cohort sizes,
// placement rates, or partner companies is asserted, because nothing in the
// project establishes those yet.
//
// Deliberately does not restate the services page's three tracks or the home
// page's "what we offer" grid. This page covers why SkillConnect exists and how
// it operates; those cover what you actually get.
//
// No sentence uses a dash as punctuation.

export const pageHeader = {
  eyebrow: "About",
  headingLead: "Built for people who want to be judged on ",
  headingAccent: "what they have built.",
  lead: "SkillConnect is the learning side of JMonkDevops, run out of Guntur, Andhra Pradesh. It exists so students and career-switchers can get onto real project work instead of collecting another certificate that says they might be able to do it.",
};

export const story = {
  eyebrow: "Why this exists",
  headingLead: "A certificate is a claim. ",
  headingAccent: "A shipped project is evidence.",
  paragraphs: [
    "Most training ends with something you can put on a resume and nothing you can point at. That gap is the entire reason SkillConnect is a separate brand rather than a page on DigiConnect's site. The goal is not to teach a syllabus, it is to get you onto work that somebody is actually depending on.",
    "SkillConnect sits alongside DigiConnect, which builds software for clients, and EduConnect, which guides students studying abroad. They are not three unrelated businesses. Somebody who has built something real is a stronger applicant abroad, and the same person often comes back looking for the engineering work. It is one path, not three.",
  ],
};

export const values = {
  eyebrow: "How it actually runs",
  headingLead: "A few things worth knowing ",
  headingAccent: "before you apply.",
  items: [
    {
      term: "Taught by the people doing the work",
      detail:
        "The engineers who deliver DigiConnect's client projects run the internship, review the freelance work, and teach the training. There is no separate training department staffed by people who left the industry.",
    },
    {
      term: "Live projects, not sandbox exercises",
      detail:
        "Work put in front of you has a real deadline and a real person waiting on it. It is not a throwaway build designed to be graded and discarded.",
    },
    {
      term: "You can earn while you learn",
      detail:
        "The freelancing track pays for project work matched to what you already know. Getting experience and getting paid for it are not sequenced one after the other here.",
    },
  ],
};

// Already published on the home page's "Who Can Join?" section. Kept in sync
// deliberately, because this page restates the audience as the natural question
// after the story section, not because the two lists drifted apart.
export const audience = {
  eyebrow: "Who it's for",
  headingLead: "If you are one of these, ",
  headingAccent: "you are in scope.",
  items: [
    "Students",
    "Freshers",
    "Career Switchers",
    "Freelancers",
    "Tech Enthusiasts",
    "Creators",
  ],
};
