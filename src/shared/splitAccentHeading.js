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
