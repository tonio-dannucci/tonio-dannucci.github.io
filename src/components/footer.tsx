/**
 * Colophon. Name, one line, the one place his work lives outside this site,
 * then the rights and — last, below them — the credit for building the site.
 *
 * Apostrophes are written as a literal `'`, never `&apos;`: an HTML entity in a
 * JSX text node makes this toolchain drop the node's leading space, which is
 * how "© 1995-2026 Tonio" used to render as "2026Tonio".
 */

const YOUTUBE_URL = "https://www.youtube.com/@toniodannucci9485/videos";
const BUILDER_URL = "https://ludusrusso.dev";

/**
 * Both destinations here are off-site and open in a new tab, which WCAG 3.2.5
 * only allows if it is announced. The visible text stays clean and the warning
 * rides inside the link's accessible name.
 */
const NEW_TAB = " (si apre in una nuova scheda)";

/** Underlined, never colour alone: the legibility rule for every link. */
const LINK =
  "text-ciclostile underline decoration-2 underline-offset-[0.3em] transition-colors hover:text-inchiostro";

/**
 * The typewriter register at 16px, sentence case. These are sentences rather
 * than labels, and tracked-out uppercase at this length is a wall.
 */
const META = "font-macchina text-[1rem] tracking-[0.02em]";

/**
 * An explicit, formatter-proof space. A literal `{" "}` is equivalent, but the
 * formatter collapses it back into plain text whenever the line fits, and the
 * space is then at the mercy of the transform described above.
 */
const SPACE = " ";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-inchiostro/20 border-t">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-10">
        {/* The left padding lands the colophon on the same column as the
            apparato above it: 16rem of margin rail plus its 2.5rem gutter, and
            at the same `lg` breakpoint where that rail appears. */}
        <div className="mx-auto max-w-[58rem] lg:pl-[18.5rem]">
          {/* Newsreader, not Bodoni: at 24px a didone is below the size where
              its hairlines survive. */}
          <p className="font-semibold font-testo text-[1.5rem] leading-tight">
            Tonio d'Annucci
          </p>
          <p className="mt-4 max-w-[62ch] font-testo text-[1.25rem] text-grafite leading-[1.75]">
            Maestro elementare ad Atella, dal 1968 al 2011. Tutti i suoi libri
            si scaricano da questo sito.
          </p>

          {/* One destination, so one line: a list of a single item would read
              as though something had gone missing from it. */}
          <p className={`mt-8 text-grafite ${META}`}>
            <a
              className={LINK}
              href={YOUTUBE_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              YouTube
              <span className="sr-only">{NEW_TAB}</span>
            </a>{" "}
            — video d'archivio
          </p>

          <div className="mt-10 border-inchiostro/20 border-t pt-6">
            <p className={`text-grafite ${META}`}>
              © 1995–{year}
              {SPACE}Tonio d'Annucci
            </p>
            <p className="mt-4 max-w-[62ch] font-testo text-[1.25rem] text-grafite leading-[1.75]">
              I testi sono suoi. I libri stanno qui per essere letti: si
              scaricano liberamente, senza registrazione.
            </p>

            {/* The builder's note, last and on its own: it belongs under the
                author's copyright line, not beside it. */}
            <p className={`mt-6 text-grafite ${META}`}>
              Sito realizzato da{SPACE}
              <a
                className={LINK}
                href={BUILDER_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ludovico Russo
                <span className="sr-only">{NEW_TAB}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
