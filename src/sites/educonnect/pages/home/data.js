import ananyaPortrait from "../../assets/testimonials/ananya-r.webp";
import rahulPortrait from "../../assets/testimonials/rahul-m.webp";
import priyaPortrait from "../../assets/testimonials/priya-s.webp";
import karthikPortrait from "../../assets/testimonials/karthik-v.webp";
import meeraPortrait from "../../assets/testimonials/meera-k.webp";

const reviewers = [
  { image: ananyaPortrait, name: "Ananya R." },
  { image: rahulPortrait, name: "Rahul M." },
  { image: priyaPortrait, name: "Priya S." },
  { image: karthikPortrait, name: "Karthik V." },
  { image: meeraPortrait, name: "Meera K." },
];

export const hero = {
  eyebrow: "Dream. Move. Become.",
  headingLead: "Expert guidance, ",
  headingAccent: "real global outcomes.",
  lead: "EduConnect pairs every student with a dedicated counsellor for university selection, applications, visas, and the practical work of settling in abroad. One team from start to finish, not a directory you're left to figure out alone.",
  primaryCta: { label: "Book a free consultation", href: "/educonnect/contact" },
  secondaryCta: { label: "See how it works", href: "/educonnect/services" },
  stats: [
    { value: "500+", label: "Students placed" },
    { value: "50+", label: "Partner universities" },
    { value: "7", label: "Study destinations" },
  ],
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
  cta: { label: "Know More", href: "/educonnect/about" },
  stat: { value: "98%", label: "Client satisfaction rate" },
};

export const services = {
  eyebrow: "What We Help With",
  headingLead: "Everything between deciding to go and ",
  headingAccent: "landing there.",
  lead: "Four services, one counsellor. You don't get handed off between departments as your application moves along.",
  cta: { label: "See the full services page", href: "/educonnect/services" },
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
