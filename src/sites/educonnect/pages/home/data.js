import ananyaPortrait from "../../assets/testimonials/ananya-r.jpg";
import rahulPortrait from "../../assets/testimonials/rahul-m.jpg";
import priyaPortrait from "../../assets/testimonials/priya-s.jpg";
import karthikPortrait from "../../assets/testimonials/karthik-v.jpg";
import meeraPortrait from "../../assets/testimonials/meera-k.jpg";

// The five people the page shows: the hero's rating-card avatar stack and the
// testimonials list are the same students, so both read from this array rather
// than each holding its own copy that could drift when a portrait is swapped.
// Order is shared too, so the stack reads in the same order as the quotes.
const reviewers = [
  { image: ananyaPortrait, name: "Ananya R." },
  { image: rahulPortrait, name: "Rahul M." },
  { image: priyaPortrait, name: "Priya S." },
  { image: karthikPortrait, name: "Karthik V." },
  { image: meeraPortrait, name: "Meera K." },
];

// Copy for the EduConnect home page, kept separate from the section
// components so they stay purely presentational — same pattern as
// DigiConnect's src/sites/digiconnect/pages/home/data.js.
export const hero = {
  // Two jobs in one line. The first half names the field, because nothing else
  // above the fold does: the heading is abstract and the brand name alone does
  // not say what EduConnect is. The second half is the part that is actually
  // ours, the single counsellor rather than a directory or a handoff chain.
  // "Study Abroad Consulting" said only the first, and said it as a category
  // any competitor could print.
  //
  // Sentence case, like every other eyebrow on the site. It renders uppercase
  // so this is invisible, but the three below it still carry Title Case from an
  // earlier pass and only this one has been brought back in line.
  //
  // Length is the constraint on rewording it: at text-xs with 0.2em tracking an
  // uppercase character costs about 10px, so the 327px phone rail holds roughly
  // 30 before the eyebrow wraps to a second line. This is 28.
  eyebrow: "Study abroad, one counsellor",
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
  // PLACEHOLDER — replace with the real rating, source, and review count. The
  // portraits in the avatar stack below are attached to the same stand-in names
  // the testimonials use, so the faces, names, quotes, and this rating all have
  // to be replaced together rather than one at a time.
  //
  // The stack shows the first three of the five rather than all of them: it is
  // a glance-sized proof point next to the rating, not a roster, and five
  // circles crowded the card against the rating text. The testimonials section
  // below still lists all five.
  //
  // An entry with no `image` falls back to a neutral avatar glyph, so the stack
  // still renders if a portrait is ever removed.
  rating: {
    value: "4.8",
    outOf: "5",
    source: "Google Reviews",
    reviewers: reviewers.slice(0, 3),
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
  lead: "Four services, one counsellor. You don't get handed off between departments as your application moves along.",
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
// not a real student. Replace all five before this goes live, and note that the
// portraits are now attached to those stand-in names, so the two have to be
// replaced together rather than one at a time.
//
// `avatarColor` is the flat monogram fill an item falls back to when it has no
// `image`. Kept rather than deleted: it is what a sixth testimonial would render
// with before its portrait exists.
export const testimonials = {
  eyebrow: "Testimonials",
  headingLead: "Real progress, ",
  headingAccent: "real transformations.",
  lead: "A handful of reviews from students who went through the process with us.",
  items: [
    {
      quote:
        "EduConnect made a confusing process feel manageable from day one.",
      ...reviewers[0],
      avatarColor: "bg-red-100",
    },
    {
      quote:
        "I had three different offers by the time I actually understood my own options. My counsellor walked me through every one of them without ever pushing a particular university.",
      ...reviewers[1],
      avatarColor: "bg-neutral-200",
    },
    {
      quote:
        "What stood out wasn't just the guidance on applications, it was how available they stayed through the visa interview prep and even after I landed. I had questions about renting an apartment and opening a bank account, and someone actually answered them instead of pointing me to a generic FAQ page.",
      ...reviewers[2],
      avatarColor: "bg-red-200",
    },
    {
      quote:
        "Honest about which universities were actually a stretch for my profile, which saved me a lot of wasted application fees.",
      ...reviewers[3],
      avatarColor: "bg-neutral-300",
    },
    {
      quote: "Straightforward pricing, no surprise add-ons partway through.",
      ...reviewers[4],
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
