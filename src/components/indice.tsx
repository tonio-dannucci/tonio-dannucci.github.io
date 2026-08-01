"use client";

import { useCallback, useId, useState } from "react";
import { BOOK_COUNT, type Book, books } from "@/lib/books";

/**
 * The index of the works: one continuous typographic list, sorted by year
 * descending, set the way the index of a book is set. Every work is always
 * listed — there is no filtering, the list is the page. Every row opens a
 * disclosure panel holding the cover, the description and the link to the PDF.
 *
 * Twenty of the works have a real cover, extracted from the PDF and cropped;
 * they are shown at their own proportions, never squared off to a common ratio.
 * The twenty-first — Bianchina affatturata, a plain typescript — has no cover
 * art, so its panel typesets a `frontespizio` (title page) in HTML from the
 * bibliographic data instead: author, title, genre, imprint, year, ISBN.
 * Nothing here is invented — a field that is missing simply does not print, and
 * no cover is faked.
 *
 * The component stays a client component: the disclosures are stateful. Nothing
 * else in it is.
 *
 * Legibility rules this file. Bodoni is reserved for the section heading and
 * the plate titles, where it is set at 28px and up; the work titles in the
 * index are Newsreader semibold, because a didone at 22px is a squint. All
 * metadata is 16px in the typewriter register, uppercase only where the string
 * is a short label.
 *
 * Apostrophes are written as a literal `'`, never `&apos;`: an HTML entity in a
 * JSX text node makes this toolchain drop that node's leading space.
 */

/** The only author on this site; every title page is set for him. */
const AUTHOR = "Tonio d'Annucci";

/** A trailing "(1900-1960)" is set as a subtitle, the way a title page would. */
const TRAILING_PARENTHETICAL = /^(.*?)\s*\(([^()]+)\)$/;

/** Collapses a PDF path into something usable as part of a DOM id. */
const NON_ALPHANUMERIC = /[^a-z0-9]+/gi;

/** Title lengths at which the compositor drops to the next size down. */
const SHORT_TITLE = 16;
const MEDIUM_TITLE = 26;
const LONG_TITLE = 40;

/** Short labels: uppercase is legible here because the size is 16px. */
const META = "font-macchina text-[1rem] uppercase tracking-[0.08em]";
/** Longer strings in the same register, set sentence case so they still read. */
const META_PLAIN = "font-macchina text-[1rem] tracking-[0.02em]";
const BODY = "font-testo text-[1.25rem] leading-[1.75]";
/** Aligns a block with the title column of the index grid (7rem + 1.5rem gap). */
const TITLE_COLUMN = "lg:pl-[8.5rem]";
/** The plate column: covers and title pages share one measure. */
const PLATE = "mx-auto block w-full max-w-[20rem] lg:max-w-[22rem]";

/**
 * Bodoni is high-contrast: a compositor picks the size that fits the measure.
 * The floor is 28px — below that the hairlines start to disappear — so a long
 * title takes another line instead of another step down.
 */
function titleSizeClass(title: string): string {
  if (title.length <= SHORT_TITLE) {
    return "text-[2.5rem] leading-[1.1]";
  }
  if (title.length <= MEDIUM_TITLE) {
    return "text-[2.125rem] leading-[1.15]";
  }
  if (title.length <= LONG_TITLE) {
    return "text-[1.875rem] leading-[1.2]";
  }
  return "text-[1.75rem] leading-[1.25]";
}

function splitTitle(titolo: string): { main: string; sub: string | null } {
  const match = TRAILING_PARENTHETICAL.exec(titolo);
  if (match?.[1]) {
    return { main: match[1], sub: match[2] };
  }
  return { main: titolo, sub: null };
}

interface CoverProps {
  height?: number;
  src: string;
  titolo: string;
  width?: number;
}

/**
 * The real front cover of the book.
 *
 * The covers are genuinely different shapes — from about 0.58 to 0.70 wide to
 * tall — so only the width is constrained and the height follows: nothing is
 * stretched into a common ratio. `width` and `height` carry the real intrinsic
 * pixel size, which is what lets the browser reserve the box before the file
 * arrives. A hairline keeps the pale covers from bleeding into the paper.
 *
 * A plain `<img>` rather than `next/image`: the site is a static export
 * (`output: "export"` in `next.config.js`) with neither `images.unoptimized`
 * nor a custom loader, so the optimiser cannot run.
 */
function Cover({ height, src, titolo, width }: CoverProps) {
  return (
    <img
      alt={`Copertina di ${titolo}`}
      className={`h-auto border border-inchiostro/20 ${PLATE}`}
      height={height}
      loading="lazy"
      src={src}
      width={width}
    />
  );
}

/**
 * A typeset title page, for the one work with no cover art: author at the head,
 * title at the optical centre over a short rule, imprint at the foot inside a
 * double frame. Portrait 2:3.
 */
function TitlePage({ book }: { book: Book }) {
  const { main, sub } = splitTitle(book.titolo);

  return (
    <div className={`border border-ciclostile/60 bg-carta-alta p-1.5 ${PLATE}`}>
      <div className="flex aspect-2/3 flex-col border border-ciclostile/30 px-6 py-8 text-center lg:px-7 lg:py-10">
        <p className="font-macchina text-[1rem] text-inchiostro uppercase tracking-[0.12em]">
          {AUTHOR}
        </p>

        <div className="flex flex-1 flex-col justify-center pb-6">
          <p
            className={`text-balance font-display font-normal text-inchiostro ${titleSizeClass(main)}`}
          >
            {main}
          </p>
          {sub && (
            <p className="mt-3 font-testo text-[1.125rem] text-grafite italic">
              {sub}
            </p>
          )}
          <div className="mx-auto mt-6 h-px w-12 bg-ciclostile/70" />
          <p className="mt-6 font-macchina text-[1rem] text-ciclostile tracking-[0.02em]">
            {book.tags.join(" · ")}
          </p>
        </div>

        <div className="border-ciclostile/40 border-t pt-4">
          {book.editore && (
            <p className="font-macchina text-[1rem] text-inchiostro tracking-[0.04em]">
              {book.editore}
            </p>
          )}
          <p className="mt-1 font-macchina text-[1rem] text-grafite tracking-[0.04em]">
            {book.anno}
          </p>
          {book.ISBN && (
            <p className="mt-1 font-macchina text-[0.9375rem] text-grafite tracking-[0.02em]">
              ISBN {book.ISBN}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * One entry of the index. Closed, it is a single row: year, title, genre. Open,
 * it discloses the cover, the description and the link to the PDF. A disclosure
 * rather than a hover reveal, so it works on touch and keyboard.
 *
 * The PDF opens in a new tab, at the author's request. Opening a window without
 * warning is a WCAG 3.2.5 failure, so the link says so: the visible label reads
 * "Leggi il PDF" and the accessible name continues with the title of the work
 * and "(si apre in una nuova scheda)". `rel="noopener noreferrer"` because
 * `target="_blank"` otherwise hands the PDF a handle on this page.
 */
function WorkRow({ book }: { book: Book }) {
  const [isOpen, setIsOpen] = useState(false);
  const uid = useId();
  const panelId = `${uid}${book.href.replace(NON_ALPHANUMERIC, "-")}`;
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  return (
    <li className="border-inchiostro/20 border-b">
      <h3>
        <button
          aria-controls={panelId}
          aria-expanded={isOpen}
          className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-3 py-6 text-left lg:grid-cols-[7rem_minmax(0,1fr)_13rem_1.5rem] lg:gap-x-6 lg:py-8"
          onClick={toggle}
          type="button"
        >
          <span className={`col-start-1 row-start-1 text-grafite ${META}`}>
            {book.anno}
          </span>
          <span className="col-start-1 col-end-4 row-start-2 font-semibold font-testo text-[1.375rem] text-inchiostro leading-[1.35] transition-colors group-hover:text-ciclostile lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:text-[1.5rem]">
            {book.titolo}
          </span>
          <span
            className={`col-start-2 row-start-1 text-grafite lg:col-start-3 lg:col-end-4 lg:row-start-1 ${META_PLAIN}`}
          >
            {book.tags.join(" · ")}
          </span>
          <span
            aria-hidden="true"
            className="col-start-3 row-start-1 justify-self-end font-macchina text-[1.25rem] text-ciclostile lg:col-start-4 lg:row-start-1"
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div className={`pb-14 ${TITLE_COLUMN}`} hidden={!isOpen} id={panelId}>
        <div className="grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-12">
          {book.cover ? (
            <Cover
              height={book.coverHeight}
              src={book.cover}
              titolo={book.titolo}
              width={book.coverWidth}
            />
          ) : (
            <TitlePage book={book} />
          )}
          <div>
            <p className={`max-w-[62ch] text-inchiostro ${BODY}`}>
              {book.description}
            </p>
            <a
              className={`mt-8 inline-flex min-h-11 items-center border border-ciclostile px-5 py-3 text-ciclostile transition-colors hover:bg-velo/60 ${META}`}
              href={book.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              Leggi il PDF
              <span className="sr-only">
                {` di ${book.titolo} (si apre in una nuova scheda)`}
              </span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

const years = books.map((book) => book.anno);
const FIRST_YEAR = Math.min(...years);
const LAST_YEAR = Math.max(...years);

/** Year descending, title as the tie-break, so the order never wobbles. */
const ordered = [...books].sort(
  (a, b) => b.anno - a.anno || a.titolo.localeCompare(b.titolo, "it")
);

export function Indice() {
  return (
    <section className="bg-carta py-24 lg:py-32" id="indice">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <header className="lg:grid lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-x-6">
          <p className={`text-grafite ${META}`}>
            {FIRST_YEAR}–{LAST_YEAR}
          </p>
          <div>
            <h2 className="mt-3 font-display font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.15] lg:mt-0">
              Indice delle opere
            </h2>
            <p className={`mt-6 max-w-[62ch] ${BODY}`}>
              Tutti i {BOOK_COUNT} libri di Tonio d'Annucci, pubblicati fra il{" "}
              {FIRST_YEAR} e il {LAST_YEAR}, si leggono da questa pagina in PDF,
              per intero e gratuitamente. Apri un titolo per vederne la
              copertina e leggere di cosa parla.
            </p>
          </div>
        </header>

        <ol className="mt-16 border-inchiostro/20 border-t">
          {ordered.map((book) => (
            <WorkRow book={book} key={book.href} />
          ))}
        </ol>
      </div>
    </section>
  );
}
