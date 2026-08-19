// Copy for the EduConnect home page, kept separate from the section
// components so they stay purely presentational — same pattern as
// DigiConnect's src/sites/digiconnect/pages/home/data.js.
export const hero = {
  eyebrow: "Study Abroad Consulting",
  // Split so HeroSection can colour the back half of the sentence — kept as
  // two plain strings rather than markup so this file stays pure data.
  headingLead: "A clear path from shortlist to ",
  headingAccent: "offer letter.",
  lead: "EduConnect pairs every student with a dedicated counsellor for university selection, applications, visas, and the practical work of settling in abroad. One team from start to finish, not a directory you're left to figure out alone.",
  primaryCta: { label: "Book a free consultation", href: "/educonnect/contact" },
  secondaryCta: { label: "See how it works", href: "/educonnect/services" },
  // PLACEHOLDER — swap in real figures before this goes live. "Study
  // destinations" is the one real number here (matches the seven countries
  // listed on the services/about pages); the other two need actual data.
  stats: [
    { value: "500+", label: "Students placed" },
    { value: "50+", label: "Partner universities" },
    { value: "7", label: "Study destinations" },
  ],
  // PLACEHOLDER — replace with the real rating, source, and review count.
  rating: {
    value: "4.8",
    outOf: "5",
    source: "Google Reviews",
  },
};

export const services = {
  eyebrow: "What We Help With",
  heading: "Everything between deciding to go and landing there.",
  lead: "Six services, one counsellor. You don't get handed off between departments as your application moves along.",
  cta: { label: "See the full services page", href: "/educonnect/services" },
  // Mirrors the service list on the dedicated /educonnect/services page —
  // kept local so the home section can evolve its copy independently.
  items: [
    {
      name: "Career Counselling & Profile Evaluation",
      description:
        "One-on-one sessions to map your academic profile against realistic country, university, and course options, before you spend money on applications that won't work.",
    },
    {
      name: "University & Course Selection",
      description:
        "Shortlists built around your marks, budget, and what you actually want to do after graduating. Not just name recognition.",
    },
    {
      name: "Application & Admission Support",
      description:
        "Document preparation, statement of purpose guidance, and deadline management, so nothing slips through at the worst possible time.",
    },
    {
      name: "Visa Assistance",
      description:
        "Financial documentation, form filing, and interview preparation handled by people who've sat through hundreds of these.",
    },
    {
      name: "IELTS / TOEFL / PTE Guidance",
      description:
        "Test strategy and study planning matched to which exam actually suits how you test.",
    },
    {
      name: "Pre-Departure & Settling-In Support",
      description:
        "Accommodation, travel, and the practical groundwork for your first weeks in a new country.",
    },
  ],
};

// PLACEHOLDER — every quote/name/detail below is a stand-in for layout
// purposes, not a real student. Replace all three before this goes live.
export const testimonials = {
  eyebrow: "What Students Say",
  heading: "A few voices from the journey.",
  items: [
    {
      quote:
        "My counsellor walked me through every step, from shortlisting universities to the visa interview. I never felt like I was figuring it out alone.",
      name: "Ananya R.",
      detail: "MS in Data Science, Canada",
    },
    {
      quote:
        "I was overwhelmed by all the options until EduConnect helped me narrow things down to what actually fit my budget and goals.",
      name: "Rahul M.",
      detail: "MBA, United Kingdom",
    },
    {
      quote:
        "They handled the paperwork so I could focus on preparing for the move itself. Genuinely made the whole process less stressful.",
      name: "Priya S.",
      detail: "Bachelor's, Australia",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why EduConnect",
  heading: "Why students choose to go through us.",
  lead: "There are cheaper directories and freer forums. Here's what a dedicated counsellor actually gets you.",
  points: [
    {
      term: "Personalized from the first call",
      detail:
        "Every plan starts with a real conversation about your profile, budget, and goals. Not a generic checklist.",
    },
    {
      term: "One team, start to finish",
      detail:
        "The same counsellor stays with you from your first shortlist through visa approval and the flight itself.",
    },
    {
      term: "Transparent, even when it's not what you want to hear",
      detail:
        "Clear pricing, honest timelines, and straight answers, including when a university isn't the right fit for you.",
    },
    {
      term: "Counsellors, not a call center",
      detail:
        "People who've guided hundreds of applications and know where they actually go wrong.",
    },
    {
      term: "Paperwork handled, not just explained",
      detail:
        "We manage the document complexity so you can focus on preparing for the move itself.",
    },
    {
      term: "Support past the visa stamp",
      detail:
        "We stay reachable through your first weeks abroad, not just until the offer letter arrives.",
    },
  ],
};
