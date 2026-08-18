// Copy for the DigiConnect student page. Kept separate from ../about/data.js
// and ../home/data.js so each page can evolve independently. Reinforces the
// "one team" fact already established on the about page's values section,
// from the student's point of view, rather than restating it verbatim.

export const pageHeader = {
  eyebrow: "Student",
  heading: "Get on real project work, not a simulation of it.",
  lead: "DigiConnect runs three tracks for students moving into software development: an internship placed on live client work, freelancing project work you take on directly, and training that gets you ready for either.",
};

export const programs = {
  eyebrow: "Three ways in",
  heading: "Pick the track that fits where you are.",
  lead: "Most people start with training or the internship and move to freelancing once they are ready to work independently.",
  items: [
    {
      id: "internship",
      term: "Internship",
      detail:
        "Placed on an active client project alongside our engineers — not a sandbox exercise built to be thrown away.",
    },
    {
      id: "freelancing",
      term: "Freelancing",
      detail:
        "Take on project work matched to what you already know, on your own schedule, with DigiConnect handling the client-facing side.",
    },
    {
      id: "training",
      term: "Training",
      detail:
        "Structured coursework in the stack we actually use on client work — web, mobile, cloud — before you are put on a live project.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  heading: "Run by the same team that ships client work.",
  paragraphs: [
    "These are not a separate training department bolted onto the business — the same engineers who deliver DigiConnect's client projects run the internship, review the freelance work, and teach the training sessions.",
    "If you are not sure which track fits, say so when you reach out. We will point you to the right one.",
  ],
};
