export const SITE_URL = "https://helsiomattia.github.io/salesforce-skill-shine";
export const DATE_PUBLISHED = "2026-07-06";
export const DATE_MODIFIED = "2026-07-06";

export const AUTHOR_NAME = "Helsio Mattia";
export const AUTHOR_URL = `${SITE_URL}/about`;
export const AUTHOR_SAME_AS = [
  "https://github.com/helsiomattia",
  "https://linkedin.com/in/helsiomattia",
  "https://trailblazer.me/id/helsiomattia",
];

export const authorJsonLd = {
  "@type": "Person",
  "@id": `${AUTHOR_URL}#person`,
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
  sameAs: AUTHOR_SAME_AS,
};

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
