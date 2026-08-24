// All copy for the SkillConnect home page lives here so the section components
// stay purely presentational, the same split DigiConnect's home page uses in
// ../../../digiconnect/pages/home/data.js.
//
// Headings are split into a `headingLead` and a `headingAccent`. The lead stays
// in the sans face, the accent takes red Playfair italic from
// ../../headingStyles. Kept as two plain strings rather than markup so this file
// stays pure data, which is also why an offering carries an `id` for the section
// to look its icon up by instead of a lucide component.
//
// The wording is carried over from the single-file home page this replaced. It
// had already been rewritten away from the keyword strings it shipped with, so
// this pass restructures the page rather than changing what it says.
//
// No sentence here uses a dash as punctuation.

export const hero = {
  headingLead: "Learn. Build. ",
  headingAccent: "Grow.",
  lead: "A hands-on learning ecosystem where students, freshers, and career-switchers gain industry exposure, real-world experience, and career-building opportunities beyond traditional education.",
  primaryCta: { label: "Get in touch", href: "/skillconnect/contact" },
  secondaryCta: { label: "See the tracks", href: "/skillconnect/services" },
};

export const offerings = {
  eyebrow: "What we offer",
  headingLead: "A practical path from learning to ",
  headingAccent: "career-ready.",
  lead: "Six things you get here that a course does not give you. The first one is the reason for the other five.",
  items: [
    {
      id: "projects",
      title: "Real project work",
      description:
        "You are put on live client projects with a real deadline and someone waiting on the result, not an exercise built to be marked and thrown away.",
    },
    {
      id: "stack",
      title: "Skills in the stack we use",
      description:
        "Training covers what our engineers actually build client work in, so nothing you learn is a warm-up for the thing you will really be asked to do.",
    },
    {
      id: "routes",
      title: "Internships and freelance work",
      description:
        "Two ways in besides training. An internship placed on an active project, or freelance work you take on directly while we handle the client side.",
    },
    {
      id: "portfolio",
      title: "Something to point at",
      description:
        "You finish with work you can show and talk through in an interview, which does more than a certificate saying you attended.",
    },
    {
      id: "mentorship",
      title: "Mentorship from working engineers",
      description:
        "Reviews and guidance come from the people shipping client projects, not from a separate training department.",
    },
    {
      id: "team",
      title: "People to build with",
      description:
        "You work alongside other learners and the engineers reviewing your code, which is closer to a real team than a classroom is.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why SkillConnect",
  headingLead: "Built around real experience, ",
  headingAccent: "not just theory.",
  paragraphs: [
    "The point is to get you onto work somebody is depending on, with engineers reviewing it, early enough that you have something to show before you start applying.",
    "None of that requires you to finish a syllabus first. Where you start depends on what you can already do, and the tracks below run in whichever order suits that.",
  ],
  points: [
    "Live projects rather than practice exercises",
    "Taught in the stack our client work runs on",
    "Reviewed by engineers who ship, not trainers",
    "The freelancing track pays while you learn",
    "Work you can show, not just a certificate",
    "A team to build with, not a classroom",
  ],
};

// The three tracks in full live on the services page. These rows are the way out
// of the home page rather than a second copy of that section, so each carries
// one line and links there instead of restating the whole offer.
// Deliberately not the services page's "Pick the track that fits where you
// are." Both sections introduce the same three tracks, and running the same
// sentence twice would make the services page read as a reload of this one.
export const tracks = {
  eyebrow: "The tracks",
  headingLead: "Three ways in, depending on ",
  headingAccent: "what you can already do.",
  lead: "Most people start with training or the internship, then move to freelancing once they are ready to work independently.",
  items: [
    {
      id: "01",
      label: "On a team",
      title: "Internship",
      line: "Placed on an active client project alongside the engineers delivering it.",
      href: "/skillconnect/services",
    },
    {
      id: "02",
      label: "Paid work",
      title: "Freelancing",
      line: "Project work matched to what you already know, on your own schedule, with the client side handled for you.",
      href: "/skillconnect/services",
    },
    {
      id: "03",
      label: "From scratch",
      title: "Training",
      line: "Coursework in the stack we build client work in, covering web, mobile, and cloud, before you go near a live project.",
      href: "/skillconnect/services",
    },
  ],
};

// Also published on the about page. Kept in sync deliberately: both pages reach
// the same natural question, and the about page's data.js records the same note.
export const audience = {
  eyebrow: "Who can join",
  items: [
    "Students",
    "Freshers",
    "Career Switchers",
    "Freelancers",
    "Tech Enthusiasts",
    "Creators",
  ],
};
