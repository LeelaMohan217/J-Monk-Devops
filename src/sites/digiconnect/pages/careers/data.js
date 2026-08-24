// Copy for the DigiConnect careers page. The small-team-on-purpose constraint
// the header states is one the site already makes in ../about/data.js.
//
// There are no invented job openings on this page. `openRoles.items` is empty
// and the section renders `openRoles.emptyState` instead of a listing. Fill the
// array in (shape commented below) and the listing turns itself on.
//
// No sentence uses a dash as punctuation.

// This page is now a job board and little else. Two prose sections used to sit
// between the header and the openings: `whatItIsLike`, three cards on owning
// your own work, and `tools`, the stack list. Both were removed because someone
// arriving here wants to see whether there is a job, and they had to scroll past
// roughly four hundred words of pitch to find out. What those sections said is
// still on the site: the ownership argument is in ../about/data.js, and the
// stack is on the home page's closing strip.
//
// The internship signpost that used to sit in the empty state is gone too, along
// with the rest of this site's student-facing content. SkillConnect owns that.
export const pageHeader = {
  eyebrow: "Careers",
  headingLead: "A small team, and ",
  headingAccent: "no bench to sit on.",
  // Trimmed from three sentences to one. The header's job is to frame the list
  // below it, not to argue the case before you have seen whether a job exists.
  lead: "We take on a limited number of engagements at a time, which shapes how we hire more than anything else does.",
};

export const openRoles = {
  eyebrow: "Open roles",
  headingLead: "What we are ",
  headingAccent: "hiring for.",
  // Shape for each entry, once there is a real opening to publish:
  // { id: "senior-backend", title: "Senior Backend Engineer",
  //   type: "Full-time, Guntur", summary: "...", href: "/digiconnect/contact" }
  //
  // The search field above the list appears only when this array has entries.
  // A search box over an empty list is a dead control, and it would be the first
  // thing a visitor touched on a page whose honest answer is "nothing yet".
  items: [],
  emptyState: {
    heading: "Nothing posted right now.",
    // Trimmed from five sentences to two. The point is that there is nothing
    // open and that unsolicited work is still welcome; the paragraph explaining
    // our stance on evergreen listings was longer than the roles list it stood
    // in for.
    body: "When something opens it goes here. If you want to be the first call, send us something you have built and we will keep it on file.",
    ctaLabel: "Send us your work",
    ctaHref: "/digiconnect/contact",
  },
};
