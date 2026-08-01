import { Apparato } from "@/components/apparato";
import { Footer } from "@/components/footer";
import { Frontespizio } from "@/components/frontespizio";
import { Indice } from "@/components/indice";

/**
 * The page reads like a book: title page, index of the works, then the
 * apparato (back matter) and the colophon.
 *
 * The skip link is the first focusable element in the document, so the first
 * Tab press on a keyboard offers the jump straight into the content. It is out
 * of the visual flow until it takes focus, then it prints top left.
 *
 * `<main>` carries `tabIndex={-1}` because a fragment link alone does not move
 * focus: the browser scrolls and leaves `document.activeElement` on `<body>`,
 * so a screen reader keeps reading from where it was. A negative tabindex makes
 * the element programmatically focusable without putting it in the tab order.
 * The focus ring is `:focus-visible`, so this does not draw a box on click; it
 * is drawn with a negative offset (see `globals.css`) because `main` is
 * full-bleed and an outward ring would fall outside the viewport.
 *
 * Apostrophes are written as a literal `'`, never `&apos;`: an HTML entity in a
 * JSX text node makes this toolchain drop that node's leading space.
 */
export default function Home() {
  return (
    <>
      <a
        className="sr-only font-macchina text-[1rem] uppercase tracking-[0.08em] focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:border focus:border-ciclostile focus:bg-carta-alta focus:px-5 focus:py-3 focus:text-ciclostile"
        href="#main-content"
      >
        Salta al contenuto
      </a>

      <main id="main-content" tabIndex={-1}>
        <Frontespizio />
        <Indice />
        <Apparato />
      </main>

      <Footer />
    </>
  );
}
