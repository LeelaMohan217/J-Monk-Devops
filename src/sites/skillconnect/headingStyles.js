// SkillConnect's heading accent treatment, in one place.
//
// Same structure as ../digiconnect/headingStyles.js and
// ../educonnect/headingStyles.js. Kept per brand rather than shared because each
// brand tunes its own type, and a single shared constant would mean one brand's
// adjustment silently restyling the other two.
//
// Playfair Display is already loaded globally in src/index.css, so using it here
// costs no extra font request.

// For split headings: the lead stays in the sans face at text-neutral-900 and
// only the trailing phrase takes the accent. Driven by a `headingLead` /
// `headingAccent` pair in each section's data.
export const ACCENT_CLASS =
  "font-['Playfair_Display',serif] text-red-600 italic";

// For headings that cannot be split, because the text is dynamic or is a short
// standalone label: card titles, value terms, track names.
//
// Same declarations as ACCENT_CLASS today, kept separate so card titles can be
// softened later without touching the section-heading accent above.
export const HEADING_FULL_CLASS =
  "font-['Playfair_Display',serif] text-red-600 italic";
