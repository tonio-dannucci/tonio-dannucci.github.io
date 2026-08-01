import type { ReactNode } from "react";
import { BOOK_COUNT } from "@/lib/books";

/**
 * The back matter of the page: who he is, how he taught, who vouched for him.
 *
 * It sits after the index of works and is built like the apparato of a book —
 * a narrow reading column, marginal notes in the typewriter register, hairline
 * rules instead of boxes. No work is listed here: the index above does that.
 *
 * Apostrophes are written as a literal `'`, never `&apos;`: the two render the
 * same character, but an HTML entity in a JSX text node makes this toolchain
 * drop that node's leading space, welding the word to whatever precedes it.
 *
 * Bodoni is kept for the `h2` of each section, where it is set at 32px and up.
 * Everything smaller — the sub-headings, the pull quote, the names in the
 * recognitions — is Newsreader, because a didone below ~28px is hard work.
 */

const YOUTUBE_URL = "https://www.youtube.com/@toniodannucci9485/videos";

/** Shared measures, so every section keeps the same reading column. */
const PROSE = "space-y-7 font-testo text-[1.25rem] leading-[1.75]";
/**
 * The marginal notes are full sentences, not labels, so they are set sentence
 * case: 16px of tracked-out uppercase Courier would be four lines of shouting
 * in a 16rem rail.
 */
const META = "font-macchina text-[1rem] tracking-[0.02em] text-grafite";
/** Sub-headings inside a section: Newsreader semibold, well above the floor. */
const SUBHEAD = "font-semibold font-testo text-[1.5rem] leading-snug";

export function Apparato() {
  return (
    <div className="mx-auto max-w-[1180px] px-6 md:px-10">
      {/*
        58rem, not 45rem: the marginal rail had to widen to 16rem to set a 16px
        note over two lines, and the reading column still has to reach its 62ch
        measure at 20px body.
      */}
      <div className="mx-auto max-w-[58rem] pb-8">
        <Section
          heading="Nota biografica"
          id="biografia"
          meta="Atella (PZ) 26 maggio 1944"
        >
          <div className={`mt-6 ${PROSE}`}>
            <p>
              Tonio d'Annucci è nato ad Atella, in provincia di Potenza, il 26
              maggio 1944. Ha fatto il maestro nella scuola primaria dal 1968 al
              2011: quarantatré anni.
            </p>
            <p>
              Ha scritto per tutto quel tempo, e non ha smesso: poesia, teatro,
              satira in vernacolo atellano, saggi sulla società contadina della
              Basilicata prima del boom economico, e i volumi che raccolgono i
              testi dei suoi alunni. I {BOOK_COUNT} libri riuniti in questo sito
              si scaricano gratuitamente.
            </p>
            <p>
              Atella torna spesso, come luogo e come materia. Buona parte dei
              saggi è il tentativo di mettere per iscritto quello che in paese
              si sapeva a memoria e non era mai finito su carta.
            </p>
          </div>
        </Section>

        <Section
          heading="Il metodo"
          id="metodo"
          meta="Laboratori di scrittura creativa 1995–2012"
        >
          <div className={`mt-6 ${PROSE}`}>
            <p>
              Fra il 1995 e il 2012 i Laboratori di Scrittura Creativa hanno
              prodotto dodici volumi: ognuno raccoglie i testi scritti dai
              bambini di una classe nel corso di un anno scolastico. Cinque di
              quei dodici sono raccolti in questo sito.
            </p>
            <p>
              Il metodo si appoggia a due letture. Gianni Rodari, per cui la
              fantasia si insegna come si insegna la grammatica; e Lev S.
              Vygotskij, per cui creare non è un ornamento ma un bisogno
              primario, e chi crea diventa insieme fruitore e produttore di
              cultura.
            </p>
          </div>

          <figure className="my-10 max-w-[52ch]">
            {/*
              The page's single use of `matita`: one stroke of the teacher's red
              pen in the margin of the passage that matters. Nothing else on the
              site is allowed to be red.
            */}
            <div aria-hidden="true" className="mb-6 h-[2px] w-14 bg-matita" />
            <blockquote className="font-testo text-[clamp(1.5rem,3vw,1.875rem)] italic leading-[1.5]">
              «La creatività è l'essenza dell'educazione: attraverso di essa i
              bambini scoprono non solo il mondo, ma anche se stessi.»
            </blockquote>
            <figcaption className={`mt-5 ${META}`}>
              Tonio d'Annucci, Didattica Educativa
            </figcaption>
          </figure>

          <div className={PROSE}>
            <p>
              Il senso pratico della frase sta nei volumi: il lavoro dei bambini
              è stato composto, stampato e rilegato come si fa con i libri degli
              adulti, e messo in mano a chi lo aveva scritto.
            </p>
          </div>

          <h3 className={`mt-12 ${SUBHEAD}`}>Fuori dall'aula</h3>
          <div className={`mt-4 ${PROSE}`}>
            <p>
              Negli anni Ottanta ha portato gli alunni a intervistare gli
              artigiani anziani di Atella: una raccolta di tradizione orale
              fatta finché c'era ancora qualcuno a cui chiederla.
            </p>
            <p>
              Nel 2000 ha tenuto un laboratorio di scrittura con tredici
              detenuti della Casa Circondariale di Melfi, d'intesa con il
              Ministero di Grazia e Giustizia. Attraverso il Provveditorato agli
              Studi ha condotto seminari di formazione per insegnanti in
              Basilicata e in Campania.
            </p>
          </div>
        </Section>

        <Section
          heading="Riconoscimenti"
          id="riconoscimenti"
          meta="Lettere, prefazioni, citazioni"
        >
          <div className={`mt-6 ${PROSE}`}>
            <p>Chi ha letto questo lavoro da fuori, e cosa ne ha fatto.</p>
          </div>

          <h3 className={`mt-10 ${SUBHEAD}`}>Persone</h3>
          <dl className="mt-5">
            <Recognition affiliation="Columbia University" name="Kenneth Koch">
              Ricevuto un volume dei Laboratori, rispose con una lettera: si
              diceva «assolutamente deliziato» del lavoro fatto e della dedica.
            </Recognition>
            <Recognition
              affiliation="Università di Bari"
              name="Daniele Giancane"
            >
              Prefazioni ai volumi e una collaborazione continua sul piano
              pedagogico.
            </Recognition>
            <Recognition affiliation="Scrittore" name="Giuseppe Lupo">
              Prefazioni alle due raccolte in dialetto del 2023 e del 2024.
            </Recognition>
            <Recognition
              affiliation="Giornalista e scrittore"
              name="Gian Antonio Stella"
            >
              Ha citato <cite className="italic">Le Stanze della Memoria</cite>{" "}
              nella bibliografia del romanzo{" "}
              <cite className="italic">Carmine Pascià</cite> (Rizzoli, 2008).
            </Recognition>
            <Recognition affiliation="Fisico" name="Roberto Fieschi">
              Lo ha ringraziato per la citazione nell'opera{" "}
              <cite className="italic">Pace s'impara</cite>.
            </Recognition>
          </dl>

          <h3 className={`mt-12 ${SUBHEAD}`}>Enti</h3>
          <dl className="mt-5">
            <Recognition affiliation="Casa editrice" name="Basiliskos">
              Pubblica i suoi libri dal 1995.
            </Recognition>
            <Recognition affiliation="Bando 1996" name="Regione Basilicata">
              Contributo per il concorso «1996: Anno dell'identità Lucana».
            </Recognition>
            <Recognition
              affiliation="Atella"
              name="Associazione Culturale Basileus"
            >
              Le presentazioni pubbliche dei volumi in paese.
            </Recognition>
            <Recognition
              affiliation="Melfi, 2000"
              name="Ministero di Grazia e Giustizia"
            >
              Il laboratorio con i detenuti della Casa Circondariale.
            </Recognition>
            <Recognition
              affiliation="Basilicata e Campania"
              name="Provveditorato agli Studi"
            >
              I seminari di formazione per gli insegnanti.
            </Recognition>
          </dl>
        </Section>

        <Section
          heading="L'archivio"
          id="archivio"
          meta="Filmati e registrazioni"
        >
          <div className={`mt-6 ${PROSE}`}>
            <p>
              Buona parte di quel lavoro è stata filmata. Sul canale YouTube ci
              sono le riprese delle attività di classe degli anni Ottanta e
              Novanta: gli incontri fra gli scolari e gli artigiani, le visite
              guidate al Castello di Melfi con gli alunni, e poi le
              registrazioni delle presentazioni dei libri.
            </p>
            <p>
              <a
                className="text-ciclostile underline decoration-2 underline-offset-[0.25em] transition-colors hover:text-inchiostro"
                href={YOUTUBE_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Il canale su YouTube
                {/* Opening a new tab unannounced is a WCAG 3.2.5 failure, so
                    the warning rides in the link's accessible name. */}
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </a>
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

/**
 * One block of back matter: a marginal note in the typewriter register, then
 * the heading and the reading column.
 */
function Section({
  children,
  heading,
  id,
  meta,
}: {
  children: ReactNode;
  heading: string;
  id: string;
  meta: string;
}) {
  return (
    <section
      aria-labelledby={id}
      className="border-inchiostro/20 border-t py-16 md:py-24"
    >
      {/*
        The note only becomes a margin rail at `lg`. Between `md` and `lg` a
        16rem rail would squeeze the reading column below 45 characters, so
        below that width the note simply sits above the heading.
      */}
      <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
        <p className={`${META} lg:pt-3`}>{meta}</p>
        <div className="mt-5 max-w-[62ch] lg:mt-0">
          <h2
            className="font-display font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.15]"
            id={id}
          >
            {heading}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

/** Name, affiliation, and what the person or the institution actually did. */
function Recognition({
  affiliation,
  children,
  name,
}: {
  affiliation: string;
  children: ReactNode;
  name: string;
}) {
  return (
    <div className="border-inchiostro/20 border-t py-5 first:border-t-0 first:pt-0">
      <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-semibold font-testo text-[1.25rem]">{name}</span>
        <span className={META}>{affiliation}</span>
      </dt>
      <dd className="mt-2 font-testo text-[1.25rem] leading-[1.75]">
        {children}
      </dd>
    </div>
  );
}
