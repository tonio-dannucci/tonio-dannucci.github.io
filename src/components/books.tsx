import Link from "next/link";

const books = [
  {
    titolo: "Atella del Villaggio pre-Globale (1900-1960)",
    editore: "Basiliskos",
    anno: 1996,
    ISBN: "88-8143-007-X",
    tags: ["Etno Antropologia"],
    description: `Un'arcaica società contadina, definitivamente collassata negli anni Sessanta e fagocitata dall'avvento del Villaggio Globale, è finita per diventare, nello spazio di pochi decenni, un'Atlantide dimenticata. L'Autore, in questo volume, ha inteso raccogliere gli appunti dei suoi scandagli nel "sommerso". La perlustrazione dei fondali, resi melmosi dal limo dell'oblio e dei conati di rimozione, non sempre è stata agevole; tuttavia dalle reiterate immersioni sono venuti alla luce reperti di notevole interesse demologico e di antropologia culturale. Questi beni "archeologici" riguardano la magia ed il mondo magico popolare, la medicina empirica e la farmacopea tradizionale, la produzione letteraria orale, i rituali e i cerimoniali collettivi, le paure e i tabu, il clero e la religiosità popolare, la gastronomia contadina, l'interpretazione dei sogni, la galassia dei giochi e del tempo libero, la morte ed il pianto rituale, la struttura della società contadina e delle classi sociali.`,
    href: "/books/atella-del-villaggio-preglobale.pdf",
  },
  {
    titolo: "Nei tuoi occhi di zagare assolati",
    editore: "Basiliskos",
    anno: 1997,
    ISBN: "88-8143010-X",
    tags: ["Poesia"],
    href: "/books/nei-tuoi-occhi-di-zagare-assolati.pdf",
    description: `C'è una strana "inattualità" nel testo di Tonio d'Annucci Nei tuoi occhi di zagare assolati : di fronte a tanta produzione letteraria versata sul piano delle contraddizioni sociali o della ricerca iniziatica attraverso il medium della parola salvifica, la silloge di d'Annucci percorre un sentiero tutto suo, che vede come maestri ispiratori i grandi poeti latini, da Giovenale (più volte richiamato nella raccolta) a Catullo, da Ovidio al conterraneo Orazio, i cui natali venosini non furono distanti da quelli del Nostro poeta, che è di Atella.`,
  },
  {
    titolo: "L'Acquario di Chandra",
    editore: "Edizioni Basiliskos",
    anno: 2018,
    tags: ["Poesia"],
    href: "/books/acquario-di-chandra.pdf",
    description:
      "La scrittura è democratica: di tutti e per tutti, come l'aria l'acqua l'amore la luce le erbe il sogno",
  },
  {
    titolo: "Laboratorio di Scrittura Creativa 1",
    editore: "Basiliskos",
    anno: 1995,
    ISBN: "88-8143-001-0",
    tags: ["Scrittura Creativa"],
    href: "/books/laboratorio-scrittura-creativa-1.pdf",
    description: `La mia proposta di attivare tm Laboratorio di Scrittura Creativa nelle scuole della Provincia, avanzata nel'anno '96 all'Assessore alla P.I. dott. Maria Vitacea, ha trovato il sostegno convinto e la piena disponibilità dell'Amministrazione Provinciale, cui ha fatto eco una larga e appassionata adesione da parte dei capi d'Istituto e di numerosi miei colleghi di sicura avangurdia didattica e pedagogica.`,
  },
  {
    titolo: "Laboratorio di Scrittura Creativa 2",
    editore: "Basiliskos",
    anno: 1997,
    ISBN: "88-8143-009-6",
    tags: ["Scrittura Creativa"],
    href: "/books/laboratorio-scrittura-creativa-2.pdf",
    description: `La scrittura creativa ben si colloca nel solco dell'educazione linguistica contemporanea, che mira principalmente a stimolare nei discenti la capacità di "produrre testi di vario tipo".`,
  },
  {
    titolo: "Laboratorio di Scrittura Creativa 3",
    anno: 2000,
    tags: ["Scrittura Creativa"],
    href: "/books/laboratorio-scrittura-creativa-3.pdf",
    description: `(...Così il tuo libro è stato una grande sorpresa. Io sono assolutamente deliziato del lavoro che hai fatto e della generosa dedica del Laboratorio.)`,
  },
  {
    titolo: "Le Stanze della Memoria",
    anno: 2003,
    tags: ["Scrittura Creativa"],
    href: "/books/le-stanze-della-memoria.pdf",
    description: `La vita è possibile perché è sorretta dalla memoria; essa garantisce la permanenza dell'identità individuale e di gruppo, in suo nome è possibile conferire senso alle azioni, fondare la vita e attraverso la ripetizione rifondarla simbolicamente quando su di essa incombe il rischio di un decisivo smarrimento.`,
  },
  {
    titolo: "I Racconti dei solstizi",
    anno: 2004,
    tags: ["Scrittura Creativa"],
    href: "/books/racconti-dei-solsisti.pdf",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut semper libero.`,
  },
  {
    titolo: "La Memoria della Oralità",
    anno: 2006,
    tags: ["Scrittura Creativa"],
    href: `/books/la-momeria-dell-oralita.pdf`,
    description: `Prima dell'awento della civiltà iconica- e fino agli '50 del Novecento- la cultura dei Villaggi non ancora globalizzati si autoperpetuava attraverso la trasmissione orale. La brusca transizione allo storico boom economico postbellico decretò una inversione epocale, sanzionando l'inizio di una lenta ma progressiva capitolazione dell'oralità.`,
  },
  {
    titolo: "Laboratorio di Scrittura Creativa 4",
    anno: 2008,
    tags: ["Scrittura Creativa"],
    href: "/books/laboratorio-scrittura-creativa-4.pdf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut semper libero.",
  },
  {
    titolo: "Laboratorio di Scrittura Creativa 5",
    anno: 2008,
    tags: ["Scrittura Creativa"],
    href: "/books/laboratorio-scrittura-creativa-5.pdf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut semper libero.",
  },
  {
    titolo: "Fabulandia 1",
    anno: 2009,
    tags: ["Scrittura Creativa"],
    href: "/books/fabulandia-1.pdf",
    description: `Questo libro è stato "immaginato" e confezionato per i semplici, dai 6 ai 90 anni, fabulanauti nella Galassia degli Arcani e degli Stupori, di Mondi incantati altri e di Epoche concluse, dei Portenti e dei Sogni, delle Metafore, dei Miti e dei Simboli, utili contravveleni al disincanto del Reale, strumenti per fronteggiare Quotidianità e Presente ostile.`,
  },
  {
    titolo: "Fabulandia 2",
    anno: 2009,
    tags: ["Scrittura Creativa"],
    href: "/books/fabulandia-2.pdf",
    description: `Questo libro è stato "immaginato" e confezionato per i semplici, dai 6 ai 90 anni, fabulanauti nella Galassia degli Arcani e degli Stupori, di Mondi incantati altri e di Epoche concluse, dei Portenti e dei Sogni, delle Metafore, dei Miti e dei Simboli, utili contravveleni al disincanto del Reale, strumenti per fronteggiare Quotidianità e Presente ostile.`,
  },
  {
    titolo: "Titicchio Taticchio detto Lunicchio",
    anno: 2010,
    tags: ["Scrittura Creativa"],
    href: "/books/lunicchio.pdf",
    description: `L'impegno del docente d'Annucci a sperimentare sulla propria classe una didattica laboratoriale innovativa è iniziato in questa Scuola nell'a.s. '07/'08 (la produzione è stata raccolta nel volume Laboratorio di Scrittura Creativa 4) ed è proseguito nell 'a.s. '08/'09 con l'edizione del volume Fabulandia l.`,
  },
  {
    titolo: "La Bottega delle risposte immaginifiche",
    anno: 2011,
    tags: ["Scrittura Creativa"],
    href: "/books/bottega-delle-risposte.pdf",
    description: `Tutto ciò che è stato scritto nei Laboratori di Scrittura Creativa è "vergognosamente" falso, ma sapidamente vero per gli appassionati della creatività e della metafora, per gli amanti della genesi dei miti e degli archetipi, per chi è abitato da animo semplice e spirito-bambino.`,
  },
  {
    titolo: "Creo, ergo sum",
    anno: 2012,
    tags: ["Scrittura Creativa"],
    href: `/books/creo-ergo-sum.pdf`,
    description: `Se volete essere creatii'i, rimanete bambini, con la creatività e la fantasia che contraddistingue i bambini prima che siano de.formati dalla società degli adulti. (Jean Piagct)`,
  },
  {
    titolo: "Fedora, la donna tradita da un fiore",
    editore: "Basiliskos",
    anno: 2021,
    tags: ["Memoriale"],
    href: `/books/fedora.pdf`,
    description: `Amava i fiori, sostanze nobili Ingenii Naturae, e quelle del Genio umano, come Letteratura, Opera lirica, Teatro, Arti visive e figurative, Filosofia, Saggistica.`,
  },
  {
    titolo: "Bianchina affatturata",
    anno: 2023,
    tags: ["Teatro"],
    href: `/books/bianchina.pdf`,
    description: `Uno spaccato di un possibile vissuto, contestualizzato agli anni 40/50 del Novecento. L'esilarante episodio immaginario stigmatizza come il tenace, secolare radicamento della superstizione popolare non arretra neanche di fronte all'evidenza scientifica. Un altro aspetto - sotteso - riguarda il disprezzo e l'irrisione delle classi sociali proletarie da parte della borghesia "del sapere e del potere", nutritasi, per decenni, di ideologia fascista.`,
  },
];

export const Books = () => {
  return (
    <div className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            La mia Bibliografia
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600"></p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {books.map((b) => (
            <Link
              href={b.href}
              target="_blank"
              className="p-2 hover:ring-1 hover:shadow-lg rounded-xl ring-red-500"
            >
              <article
                key={b.titolo}
                className="flex max-w-xl  flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">Anno {b.anno}</span>
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-red-600 ">
                    <span className="absolute inset-0" />
                    {b.titolo}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {b.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
