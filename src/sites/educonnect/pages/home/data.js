// Copy for the EduConnect home page, kept separate from the section
// components so they stay purely presentational — same pattern as
// DigiConnect's src/sites/digiconnect/pages/home/data.js.
export const hero = {
  eyebrow: "Study Abroad Consulting",
  // Split so HeroSection can colour the back half of the sentence — kept as
  // two plain strings rather than markup so this file stays pure data.
  headingLead: "Expert guidance, real ",
  headingAccent: "global outcomes.",
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

export const aboutIntro = {
  eyebrow: "Who We Are",
  headingLead: "We guide the whole journey, not just the ",
  headingAccent: "paperwork.",
  paragraph:
    "EduConnect started because too many students were piecing together advice from forums, agents with hidden commissions, and outdated university brochures. We built a practice around one counsellor staying with you from your first shortlist to the day you land, so nothing falls through the cracks between departments.",
  cta: { label: "Know more about us", href: "/educonnect/about" },
  // PLACEHOLDER — swap in the real client satisfaction figure once tracked.
  stat: { value: "98%", label: "Client satisfaction rate" },
};

export const services = {
  eyebrow: "What We Help With",
  // Split so the section can colour the closing phrase — same pattern as
  // hero.headingLead/headingAccent.
  headingLead: "Everything between deciding to go and ",
  headingAccent: "landing there.",
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

// PLACEHOLDER — every quote/name below is a stand-in for layout purposes,
// not a real student. Replace all five before this goes live. avatarColor is
// a flat fill for the review's monogram circle, deliberately not a photo —
// no real reviewer headshots exist yet, and a fabricated one would read as
// a fake testimonial rather than a genuine review (same reasoning as the
// hero's rating card).
export const testimonials = {
  eyebrow: "Testimonials",
  headingLead: "Real progress, ",
  headingAccent: "real transformations.",
  lead: "A handful of reviews from students who went through the process with us.",
  items: [
    {
      quote:
        "EduConnect made a confusing process feel manageable from day one.",
      name: "Ananya R.",
      avatarColor: "bg-red-100",
    },
    {
      quote:
        "I had three different offers by the time I actually understood my own options. My counsellor walked me through every one of them without ever pushing a particular university.",
      name: "Rahul M.",
      avatarColor: "bg-neutral-200",
    },
    {
      quote:
        "What stood out wasn't just the guidance on applications, it was how available they stayed through the visa interview prep and even after I landed. I had questions about renting an apartment and opening a bank account, and someone actually answered them instead of pointing me to a generic FAQ page.",
      name: "Priya S.",
      avatarColor: "bg-red-200",
    },
    {
      quote:
        "Honest about which universities were actually a stretch for my profile, which saved me a lot of wasted application fees.",
      name: "Karthik V.",
      avatarColor: "bg-neutral-300",
    },
    {
      quote: "Straightforward pricing, no surprise add-ons partway through.",
      name: "Meera K.",
      avatarColor: "bg-red-100",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why EduConnect",
  headingLead: "Why students choose ",
  headingAccent: "to go through us.",
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
