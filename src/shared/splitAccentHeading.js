// Splits a `headingLead` / `headingAccent` string pair (the shape every site's
// data.js stores its headings in) into one line of words for WordReveal, with
// the accent half flagged. Punctuation rides along with its word, so nothing has
// to be escaped and the data files stay pure strings.
//
// Its own module rather than an export from WordReveal.jsx, so that file exports
// only a component and keeps fast refresh working.
export const splitAccentHeading = (lead, accent) => [
  ...lead
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((text) => ({ text })),
  ...accent
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((text) => ({ text, accent: true })),
];

export default splitAccentHeading;
