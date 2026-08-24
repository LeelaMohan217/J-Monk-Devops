// Copy for the EduConnect about page, kept separate from ../home/data.js so
// the two pages can evolve independently — mirrors DigiConnect's
// src/sites/digiconnect/pages/about/data.js structure.
// Longer than the "The people behind EduConnect." this replaced, which ran to a
// single line and left the header looking thin beside the services and blog
// ones, but deliberately not much longer: at 56px in a max-w-3xl rail the
// heading turns over around 52 characters, and the services and blog headings
// both sit at two lines. A first attempt at 63 characters pushed this one to
// three lines and a 256-character lead to four, which overshot the other two
// rather than matching them.
//
// There is no `image` key: this header is text only, like the other two.
export const pageHeader = {
  eyebrow: "About",
  headingLead: "The counsellor you start with ",
  headingAccent: "is the one you keep.",
  lead: "EduConnect is JMonkDevops' study abroad guidance practice, run out of Guntur, Andhra Pradesh, with one counsellor assigned to each student from shortlist to landing.",
};

export const story = {
  eyebrow: "Our Story",
  headingLead: "Built around what students ",
  headingAccent: "actually need",
  paragraphs: [
    "We started EduConnect because too many students were making five- and six-figure decisions about their education based on rankings lists and rumours, without anyone walking them through the tradeoffs.",
    "Our counsellors work with students one-on-one, evaluating academic profiles, shortlisting universities and courses that genuinely fit, and staying involved through applications, visas, and pre-departure preparation.",
  ],
};

export const values = {
  eyebrow: "What That Means In Practice",
  headingLead: "A few things worth knowing ",
  headingAccent: "before you call.",
  items: [
    {
      term: "Student-first, not university-first",
      detail:
        "Every recommendation starts with your goals, budget, and academic profile. Not a preferred-partner list.",
    },
    {
      term: "Honest, even when it costs us",
      detail:
        "We'll tell you when a course or country isn't the right fit, even if that means a harder conversation.",
    },
    {
      term: "One team, start to finish",
      detail:
        "The same counsellor stays with you from shortlisting through landing abroad, with no relay between departments.",
    },
    {
      term: "Years of applications behind us",
      detail:
        "Counsellors who've guided hundreds of students through admissions, visas, and the move itself.",
    },
  ],
};
