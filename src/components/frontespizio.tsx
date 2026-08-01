import { BOOK_COUNT } from "@/lib/books";

/**
 * The frontispiece — the page opens the way a book opens.
 *
 * Everything here is title-page furniture: the name at plate scale, the line
 * that says what he is, the portrait with its caption, and one way in. The
 * schema.org Person microdata that used to hang off the old marketing hero
 * (name, jobTitle, image, description, birthDate/birthPlace) is carried over
 * onto this markup unchanged; only the visual chrome was discarded.
 *
 * Bodoni is a didone: hairline strokes that are handsome at plate size and
 * hard work below ~28px. It is therefore used for the name and nothing else
 * here; the standfirst, which tops out at 28px, is set in Newsreader italic.
 */

/** Metadata in the typewriter register. Uppercase only, and never below 16px. */
const META = "font-macchina text-[1rem] uppercase tracking-[0.08em]";

export function Frontespizio() {
  return (
    <section
      aria-labelledby="frontespizio-nome"
      className="pt-16 pb-20 md:pt-28 md:pb-28"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <h1
          className="font-display font-normal text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.9] tracking-[-0.02em]"
          id="frontespizio-nome"
          itemProp="name"
        >
          Tonio d’Annucci
        </h1>

        <p
          className="mt-6 text-balance font-testo text-[clamp(1.375rem,2.6vw,1.75rem)] text-grafite italic leading-[1.4] md:mt-8"
          itemProp="jobTitle"
        >
          Maestro elementare, autore e promotore culturale lucano
        </p>

        <div className="mt-12 grid gap-y-12 border-inchiostro/20 border-t pt-12 md:mt-16 md:pt-16 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-24">
          <figure>
            {/*
              The plate. `aspect-square` plus square width/height attributes
              means the box is reserved correctly at every width: the image is
              capped at its declared 384px and only shrinks below ~430px
              viewports, so it never degrades into an avatar.
            */}
            <img
              alt="Tonio d’Annucci nel suo studio: legge con la pipa in bocca, davanti agli scaffali della sua biblioteca"
              className="block aspect-square w-full max-w-[24rem] object-cover"
              decoding="async"
              height={384}
              itemProp="image"
              loading="eager"
              src="/tonio.jpg"
              width={384}
            />

            <figcaption
              className={`mt-5 flex max-w-[24rem] flex-col gap-2 border-inchiostro/20 border-t pt-4 text-grafite ${META}`}
            >
              <span>
                <span content="1944-05-26" itemProp="birthDate">
                  26 maggio 1944
                </span>
                {" · "}
                <span itemProp="birthPlace">Atella (PZ)</span>
              </span>
              <span>Insegnamento 1968–2011</span>
            </figcaption>
          </figure>

          <div className="lg:self-center">
            <p
              className="max-w-[62ch] font-testo text-[1.25rem] leading-[1.75]"
              itemProp="description"
            >
              Mentre insegnava, è andato a cercare i resti del mondo contadino
              che gli anni Sessanta avevano spazzato via: mestieri, riti, paure,
              il dialetto di Atella. Ne sono venuti {BOOK_COUNT} libri, molti
              dei quali scritti insieme ai suoi alunni.
            </p>

            <p className="mt-10 md:mt-12">
              {/*
                The rule under the whole link is its underline: it spans the
                label and the count together, so the link is never signalled by
                colour alone.
              */}
              <a
                className="group inline-flex min-h-11 flex-wrap items-baseline gap-x-4 gap-y-1 border-ciclostile/60 border-b-2 pb-2 font-testo text-[1.25rem] text-ciclostile transition-colors hover:border-ciclostile"
                href="#indice"
              >
                Apri l’indice delle opere
                <span
                  className={`text-grafite transition-colors group-hover:text-ciclostile ${META}`}
                >
                  {BOOK_COUNT} PDF gratuiti
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
