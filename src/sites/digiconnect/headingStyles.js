// DigiConnect's heading accent treatment, in one place.
//
// Playfair Display is already loaded globally in src/index.css. It was added
// there for EduConnect and the umbrella landing page, so using it here costs no
// extra font request.

// For split headings: the lead stays in the page's sans face at text-neutral-900
// and only the trailing phrase takes the accent, driven by a `headingLead` /
// `headingAccent` pair in each section's data.js. Keeping the class string here
// rather than pasted inline across fourteen components means retuning the accent
// later is one edit, not a grep you can get wrong.
//
// This is now the only place the accent appears. There used to be a second
// export, HEADING_FULL_CLASS, that put the same red Playfair italic on whole
// card titles: service names, value terms, offering titles. It was removed
// because EduConnect sets its card titles in plain sans, so DigiConnect was the
// only brand styling them that way, and the two sites read as different systems
// on what is meant to be one design language. Card titles here now use the same
// `font-medium tracking-tight text-neutral-900` that EduConnect's do.
export const ACCENT_CLASS =
  "font-['Playfair_Display',serif] text-red-600 italic";
