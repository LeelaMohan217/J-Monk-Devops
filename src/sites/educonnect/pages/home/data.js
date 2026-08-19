// Copy for the EduConnect home page, kept separate from the section
// components so they stay purely presentational — same pattern as
// DigiConnect's src/sites/digiconnect/pages/home/data.js.
export const hero = {
  heading: "A clear path from shortlist to offer letter.",
  lead: "EduConnect pairs every student with a dedicated counsellor for university selection, applications, visas, and the practical work of settling in abroad — one team, start to finish, not a directory you're left to figure out alone.",
  primaryCta: { label: "Book a free consultation", href: "/educonnect/contact" },
  secondaryCta: { label: "See how it works", href: "/educonnect/services" },
};

export const services = {
  eyebrow: "What We Help With",
  heading: "Everything between deciding to go and landing there.",
  cta: { label: "See the full services page", href: "/educonnect/services" },
  // Mirrors the service list on the dedicated /educonnect/services page —
  // kept local so the home section can evolve its copy independently.
  items: [
    {
      name: "Career Counselling & Profile Evaluation",
      description:
        "One-on-one sessions to map your academic profile against realistic country, university, and course options — before you spend money on applications that won't work.",
    },
    {
      name: "University & Course Selection",
      description:
        "Shortlists built around your marks, budget, and what you actually want to do after graduating — not just name recognition.",
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
