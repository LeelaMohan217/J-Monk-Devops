// Copy for the EduConnect home page, kept separate from the section
// components so they stay purely presentational — same pattern as
// DigiConnect's src/sites/digiconnect/pages/home/data.js.
export const hero = {
  eyebrow: "Study Abroad Consulting",
  heading: "A clear path from shortlist to offer letter.",
  lead: "EduConnect pairs every student with a dedicated counsellor for university selection, applications, visas, and the practical work of settling in abroad — one team, start to finish, not a directory you're left to figure out alone.",
  primaryCta: { label: "Book a free consultation", href: "/educonnect/contact" },
  secondaryCta: { label: "See how it works", href: "/educonnect/services" },
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

// `coordinates` are [latitude, longitude] marker positions for the globe in
// DestinationsSection — one representative city per destination, since the
// globe plots points rather than borders. The catch-all entry has none, so it
// renders as a label only.
export const destinations = {
  eyebrow: "Where We Send Students",
  heading: "Seven destinations, and the paperwork for all of them.",
  hint: "The globe tours every destination we place students in — drag it to look around.",
  items: [
    { name: "USA", coordinates: [40.7128, -74.006] }, // New York
    { name: "UK", coordinates: [51.5074, -0.1278] }, // London
    { name: "Canada", coordinates: [43.6532, -79.3832] }, // Toronto
    { name: "Australia", coordinates: [-33.8688, 151.2093] }, // Sydney
    { name: "Europe", coordinates: [52.52, 13.405] }, // Berlin
    { name: "Ireland", coordinates: [53.3498, -6.2603] }, // Dublin
    { name: "New Zealand", coordinates: [-36.8485, 174.7633] }, // Auckland
    { name: "Other Global Destinations" },
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
        "Every plan starts with a real conversation about your profile, budget, and goals — not a generic checklist.",
    },
    {
      term: "One team, start to finish",
      detail:
        "The same counsellor stays with you from your first shortlist through visa approval and the flight itself.",
    },
    {
      term: "Transparent, even when it's not what you want to hear",
      detail:
        "Clear pricing, honest timelines, and straight answers — including when a university isn't the right fit for you.",
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
