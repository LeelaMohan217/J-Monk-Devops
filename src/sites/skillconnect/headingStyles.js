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

// There was a HEADING_FULL_CLASS here that put card titles, value terms and
// track names in the same Playfair red italic. It is gone, for the reason it
// went from ../digiconnect/headingStyles.js: the accent earns its weight by
// landing once per section, on the heading. Spending it again on every card
// title in the grid below turned it into the page's default voice. Card titles
// are sans at font-medium text-neutral-900 now, across all three brands.
