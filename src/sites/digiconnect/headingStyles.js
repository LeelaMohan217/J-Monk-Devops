// DigiConnect's heading accent treatment, in one place.
//
// Every heading on this site carries red Playfair Display italic. Keeping the
// class string here rather than pasted inline in fifteen components means
// retuning the accent later is one edit, not a grep you can get wrong.
//
// Playfair Display is already loaded globally in src/index.css. It was added
// there for EduConnect and the umbrella landing page, so using it here costs no
// extra font request.

// For split headings: the lead stays in the page's sans face at
// text-neutral-900 and only the trailing phrase takes the accent. This is the
// dominant pattern, driven by a `headingLead` / `headingAccent` pair in each
// section's data.js.
export const ACCENT_CLASS =
  "font-['Playfair_Display',serif] text-red-600 italic";

// For headings that cannot be split because the text is dynamic or is a short
// standalone label: service names, value terms, offering titles. The whole
// heading takes the treatment rather than an arbitrary slice of a sentence.
//
// Same declarations as ACCENT_CLASS today, kept separate because the two are
// tuned for different jobs. If card titles ever need to soften (lighter red, or
// dropping italic at small sizes), that belongs here and must not leak into the
// section-heading accent above.
export const HEADING_FULL_CLASS =
  "font-['Playfair_Display',serif] text-red-600 italic";
