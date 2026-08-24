// Copy for the EduConnect about page, kept separate from ../home/data.js so the
// two pages can evolve independently.
//
// Rewritten by hand to stop reading like generated marketing text. The tells
// that got removed, in case they creep back in:
//
//   - Three item lists everywhere. "applications, visas, and pre-departure
//     preparation", "your goals, budget, and academic profile", "admissions,
//     visas, and the move itself". Once you notice the rhythm you cannot stop
//     noticing it.
//   - "actually" and "genuinely" propping up claims that were vague without
//     them: "what students actually need", "courses that genuinely fit".
//   - The X-not-Y construction on repeat: "student-first, not university-first",
//     "not a preferred-partner list".
//   - Abstract nouns doing the work a verb should. "guidance practice",
//     "one counsellor assigned to each student", "no relay between departments".
//   - Every sentence the same length, so the whole page reads at one pitch.
//
// What replaced them: contractions, fragments where a fragment is how a person
// would say it, one concrete detail per claim, and sentence lengths that vary.
// No new facts were invented. Every claim here already existed somewhere in this
// file or in ../services/data.js.
//
// Still no dash punctuation anywhere, and no `image` key on the header, which is
// text only like the services and blog ones.

export const pageHeader = {
  eyebrow: "About",
  headingLead: "One counsellor, ",
  headingAccent: "the whole way through.",
  lead: "We're a small study abroad team in Guntur, Andhra Pradesh, part of JMonkDevops. When you come to us, one of us takes your case and stays on it until you've landed.",
};

export const story = {
  eyebrow: "Why we started",
  headingLead: "Most students were guessing. ",
  headingAccent: "We wanted to fix that.",
  paragraphs: [
    "People were picking universities off ranking lists and WhatsApp forwards, then committing lakhs to the choice. Nobody sat down with them first to explain what they were giving up by choosing one place over another.",
    "So the setup here is plain. One counsellor per student. They read your marks, tell you which countries are realistic, help you get the application together, and pick up the phone when the visa interview goes badly.",
  ],
};

export const values = {
  eyebrow: "How we work",
  headingLead: "A few things worth knowing ",
  headingAccent: "before you call.",
  items: [
    {
      term: "No university pays us",
      detail:
        "Nobody here earns a commission for steering you towards a particular campus. If the cheaper course is the better fit, that's what you'll hear.",
    },
    {
      term: "We will tell you no",
      detail:
        "Sometimes the honest answer is that your marks won't get you into the place you had in mind. Better to hear that now than after the application fee is paid.",
    },
    {
      term: "The same person, all the way",
      detail:
        "You won't get passed to an applications team once the shortlist is done, then to a visa team after that. It stays with whoever you started with.",
    },
    {
      term: "We've done this a lot",
      detail:
        "Hundreds of applications and visa interviews between us. Most of what goes wrong, we've watched go wrong before.",
    },
  ],
};
