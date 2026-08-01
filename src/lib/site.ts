/**
 * Single source of truth for anything that needs the canonical origin:
 * metadata, sitemap, robots and JSON-LD. The site is served by GitHub Pages.
 */
export const SITE_URL = "https://tonio-dannucci.github.io";

export const SITE_NAME = "Tonio d'Annucci";

export const SITE_TITLE =
  "Tonio d'Annucci - Maestro, Autore e Innovatore Pedagogico Lucano";

export const SITE_DESCRIPTION =
  "Antonio 'Tonio' d'Annucci (1944): maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 20 pubblicazioni e 43 anni di carriera didattica (1968-2011). Creatore dei laboratori di scrittura creativa apprezzati da Kenneth Koch (Columbia University).";

/** Square portrait: social cards crop a wide image straight through his face. */
export const OG_IMAGE = {
  alt: "Tonio d'Annucci nel suo studio, ritratto tra le librerie",
  height: 1200,
  url: "/og-image.jpg",
  width: 1200,
} as const;
