import Link from "next/link";

const books = [
  {
    anno: 1996,
    description: `Un'arcaica società contadina, definitivamente collassata negli anni Sessanta e fagocitata dall'avvento del Villaggio Globale, è finita per diventare, nello spazio di pochi decenni, un'Atlantide dimenticata. L'Autore, in questo volume, ha inteso raccogliere gli appunti dei suoi scandagli nel "sommerso". La perlustrazione dei fondali, resi melmosi dal limo dell'oblio e dei conati di rimozione, non sempre è stata agevole; tuttavia dalle reiterate immersioni sono venuti alla luce reperti di notevole interesse demologico e di antropologia culturale. Questi beni "archeologici" riguardano la magia ed il mondo magico popolare, la medicina empirica e la farmacopea tradizionale, la produzione letteraria orale, i rituali e i cerimoniali collettivi, le paure e i tabu, il clero e la religiosità popolare, la gastronomia contadina, l'interpretazione dei sogni, la galassia dei giochi e del tempo libero, la morte ed il pianto rituale, la struttura della società contadina e delle classi sociali.`,
    editore: "Basiliskos",
    href: "/books/atella-del-villaggio-preglobale.pdf",
    ISBN: "88-8143-007-X",
    tags: ["Etno-Antropologia"],
    titolo: "Atella del Villaggio pre-Globale (1900-1960)",
  },
  {
    anno: 1997,
    description: `C'è una strana "inattualità" nel testo di Tonio d'Annucci Nei tuoi occhi di zagare assolati : di fronte a tanta produzione letteraria versata sul piano delle contraddizioni sociali o della ricerca iniziatica attraverso il medium della parola salvifica, la silloge di d'Annucci percorre un sentiero tutto suo, che vede come maestri ispiratori i grandi poeti latini, da Giovenale (più volte richiamato nella raccolta) a Catullo, da Ovidio al conterraneo Orazio, i cui natali venosini non furono distanti da quelli del Nostro poeta, che è di Atella.`,
    editore: "Basiliskos",
    href: "/books/nei-tuoi-occhi-di-zagare-assolati.pdf",
    ISBN: "88-8143010-X",
    tags: ["Poesia"],
    titolo: "Nei tuoi occhi di zagare assolati",
  },
  {
    anno: 2018,
    description:
      "La scrittura è democratica: di tutti e per tutti, come l'aria l'acqua l'amore la luce le erbe il sogno",
    editore: "Edizioni Basiliskos",
    href: "/books/acquario-di-chandra.pdf",
    tags: ["Poesia"],
    titolo: "L'Acquario di Chandra",
  },
  {
    anno: 1995,
    description: `La mia proposta di attivare tm Laboratorio di Scrittura Creativa nelle scuole della Provincia, avanzata nel'anno '96 all'Assessore alla P.I. dott. Maria Vitacea, ha trovato il sostegno convinto e la piena disponibilità dell'Amministrazione Provinciale, cui ha fatto eco una larga e appassionata adesione da parte dei capi d'Istituto e di numerosi miei colleghi di sicura avangurdia didattica e pedagogica.`,
    editore: "Basiliskos",
    href: "/books/laboratorio-scrittura-creativa-1.pdf",
    ISBN: "88-8143-001-0",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 1",
  },
  {
    anno: 1997,
    description: `La scrittura creativa ben si colloca nel solco dell'educazione linguistica contemporanea, che mira principalmente a stimolare nei discenti la capacità di "produrre testi di vario tipo".`,
    editore: "Basiliskos",
    href: "/books/laboratorio-scrittura-creativa-2.pdf",
    ISBN: "88-8143-009-6",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 2",
  },
  {
    anno: 2000,
    description:
      "(...Così il tuo libro è stato una grande sorpresa. Io sono assolutamente deliziato del lavoro che hai fatto e della generosa dedica del Laboratorio.)",
    href: "/books/laboratorio-scrittura-creativa-3.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 3",
  },
  {
    anno: 2003,
    description: `La vita è possibile perché è sorretta dalla memoria; essa garantisce la permanenza dell'identità individuale e di gruppo, in suo nome è possibile conferire senso alle azioni, fondare la vita e attraverso la ripetizione rifondarla simbolicamente quando su di essa incombe il rischio di un decisivo smarrimento.`,
    href: "/books/le-stanze-della-memoria.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Le Stanze della Memoria",
  },
  {
    anno: 2004,
    description:
      "Sembra arduo oggi, nell'era postgutemberghiana, su cui incombe la minaccia dell'analfabetismo di ritorno, non alimentato o confortato dalla memoria, riuscire a motivare insegnanti ed alunni a dare ed aggiungere valore alla lettura del passato.",
    href: "/books/racconti-dei-solsisti.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "I Racconti dei solstizi",
  },
  {
    anno: 2006,
    description: `Prima dell'awento della civiltà iconica- e fino agli '50 del Novecento- la cultura dei Villaggi non ancora globalizzati si autoperpetuava attraverso la trasmissione orale. La brusca transizione allo storico boom economico postbellico decretò una inversione epocale, sanzionando l'inizio di una lenta ma progressiva capitolazione dell'oralità.`,
    href: "/books/la-momeria-dell-oralita.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "La Memoria della Oralità",
  },
  {
    anno: 2008,
    description:
      'Umberto Eco, nella Presentazione de I Draghi locopei I di Ersilia Zamponi (Einaudi), all\'incipit: "Ci lamentiamo che i nostri ragazzi, spendendo ore e ore alla tv, non siano più capaci di parlare e usare bene la lingua. Basterebbe insegnargli che con la lingua si può giocare, e si divertirebbero persino ad andare a caccia di errori sintattici dei presentatori tv "',
    href: "/books/laboratorio-scrittura-creativa-4.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 4",
  },
  {
    anno: 2008,
    description:
      "Negli anni trenta Lev. S. Vygotskij ancorò la creatività ad un bisogno primario dell'essere umano, il quale si realizza, egli affermò, creando. Da questa \"forza umanizzante dell'Io\" scaturisce il diritto dell'uomo ad essere se stesso:fruitore e produttore di cultura.",
    href: "/books/laboratorio-scrittura-creativa-5.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 5",
  },
  {
    anno: 2009,
    description: `Il presente Volume, frutto del lavoro serio e continuo durante l'intero anno scolastico 2008/09 degli alunni delle classi I B e III C sotto la sapiente guida dei docenti d'Annucci e Rosati, si pone sicuramente come grande esempio di didattica attiva e creativa.`,
    href: "/books/fabulandia-1.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Fabulandia 1",
  },
  {
    anno: 2009,
    description: `Questo libro è stato "immaginato" e confezionato per i semplici, dai 6 ai 90 anni, fabulanauti nella Galassia degli Arcani e degli Stupori, di Mondi incantati altri e di Epoche concluse, dei Portenti e dei Sogni, delle Metafore, dei Miti e dei Simboli, utili contravveleni al disincanto del Reale, strumenti per fronteggiare Quotidianità e Presente ostile.`,
    href: "/books/fabulandia-2.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Fabulandia 2",
  },
  {
    anno: 2010,
    description: `L'impegno del docente d'Annucci a sperimentare sulla propria classe una didattica laboratoriale innovativa è iniziato in questa Scuola nell'a.s. '07/'08 (la produzione è stata raccolta nel volume Laboratorio di Scrittura Creativa 4) ed è proseguito nell 'a.s. '08/'09 con l'edizione del volume Fabulandia l.`,
    href: "/books/lunicchio.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Titicchio Taticchio detto Lunicchio",
  },
  {
    anno: 2011,
    description: `Tutto ciò che è stato scritto nei Laboratori di Scrittura Creativa è "vergognosamente" falso, ma sapidamente vero per gli appassionati della creatività e della metafora, per gli amanti della genesi dei miti e degli archetipi, per chi è abitato da animo semplice e spirito-bambino.`,
    href: "/books/bottega-delle-risposte.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "La Bottega delle risposte immaginifiche",
  },
  {
    anno: 2012,
    description:
      "Se volete essere creativi, rimanete bambini, con la creatività e la fantasia che contraddistingue i bambini prima che siano de.formati dalla società degli adulti. (Jean Piaget)",
    href: "/books/creo-ergo-sum.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Creo, ergo sum",
  },
  {
    anno: 2021,
    description:
      "Amava i fiori, sostanze nobili Ingenii Naturae, e quelle del Genio umano, come Letteratura, Opera lirica, Teatro, Arti visive e figurative, Filosofia, Saggistica.",
    editore: "Basiliskos",
    href: "/books/fedora.pdf",
    tags: ["Memoriale"],
    titolo: "Fedora, la donna tradita da un fiore",
  },
  {
    anno: 2023,
    description: `Uno spaccato di un possibile vissuto, contestualizzato agli anni 40/50 del Novecento. L'esilarante episodio immaginario stigmatizza come il tenace, secolare radicamento della superstizione popolare non arretra neanche di fronte all'evidenza scientifica. Un altro aspetto - sotteso - riguarda il disprezzo e l'irrisione delle classi sociali proletarie da parte della borghesia "del sapere e del potere", nutritasi, per decenni, di ideologia fascista.`,
    href: "/books/bianchina.pdf",
    tags: ["Teatro"],
    titolo: "Bianchina affatturata",
  },
  {
    anno: 2023,
    description:
      "C’è voluto un secolo intero, il Novecento, per stabilire definitivamente che il dialetto ha la stessa dignità di una lingua, almeno dal punto di vista letterario, anzi è una lingua a tutti gli effetti con le sue regole grammaticali, le sue norme, addirittura con il vanto di essere qualcosa assai più ricercato dell’italiano comune.",
    href: "/books/affacci-novecento.pdf",
    tags: ["Satira in Vernacolo"],
    titolo: "Affacci sul Novecento",
  },
  {
    anno: 2024,
    description:
      "Questa raccolta vuole essere la prosecuzione del precedente volumetto Affacci sul Novecento (2023), prefazione di Giuseppe Lupo.",
    href: "/books/100-piu-novecento.pdf",
    tags: ["Satira in Vernacolo"],
    titolo: "100 e più del Novecento",
  },
  {
    anno: 2026,
    description: `In un immaginario cortile minimale l'Autore declina per il Lettore molteplici registri narrativi inerenti tematiche che spaziano dalla irridente satira politica all'aforisma, dallo sguardo alla contemporaneità agli arcani del trascendente, dalla protervia dell'autocrate al narcisismo isterico del "politicume", dalle globali emergenze umanitarie ai fantasmi del passato, dalla banalità delle miserie umane all'anima azzurra della compassione, dal bullismo caricaturale dei potenti all'insolenza istrionica dell'ego, dalla efferatezza del male assoluto alla magnetica, intrigante bellezza della poesia. Ed altro ancora.`,
    editore: "Edizioni Basiliskos",
    href: "/books/tre-finestre-sul-cortile-minimale.pdf",
    tags: ["Satira", "Poesia"],
    titolo: "Tre finestre sul cortile minimale",
  },
];

export const Books = () => {
  const getCategoryColor = (category: string) => {
    const colors = {
      "Etno-Antropologia": "bg-blue-50/60 border-blue-300/60",
      Memoriale: "bg-gray-50/60 border-gray-300/60",
      Poesia: "bg-purple-50/60 border-purple-300/60",
      Satira: "bg-amber-50/60 border-amber-300/60",
      "Satira in Vernacolo": "bg-orange-50/60 border-orange-300/60",
      "Scrittura Creativa": "bg-green-50/60 border-green-300/60",
      Teatro: "bg-red-50/60 border-red-300/60",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-50/60 border-gray-300/60"
    );
  };

  return (
    <section className="bg-white py-16" id="bibliografia">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-gray-900 sm:text-4xl">
            Bibliografia Completa
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            oltre 20 pubblicazioni nell&apos;arco di tre decenni (1995-2026),
            dalla demo-antropologia alla scrittura creativa, dalla poesia in
            italiano alle opere in dialetto lucano.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center rounded-full border bg-gray-50 px-3 py-1 font-medium text-gray-600 text-sm">
              {books.length} opere totali
            </span>
            <span className="inline-flex items-center rounded-full border bg-gray-50 px-3 py-1 font-medium text-gray-600 text-sm">
              Dal 1995 al 2026
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books
            .sort((a, b) => b.anno - a.anno)
            .map((book) => {
              const category = book.tags[0] || "Altri";
              return (
                <Link
                  aria-label={`Leggi "${book.titolo}" (${book.anno}) - si apre in una nuova finestra`}
                  className="group block"
                  href={book.href}
                  key={book.titolo}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <article
                    className={`h-full ${getCategoryColor(
                      category
                    )} rounded-lg border p-8 transition-all duration-200 group-hover:border-gray-400 group-hover:shadow-lg`}
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 font-medium text-gray-700 text-sm shadow-xs">
                          {book.anno}
                        </span>
                        {book.editore && (
                          <span className="inline-flex items-center rounded-full border bg-white/90 px-3 py-1 font-medium text-gray-600 text-sm">
                            {book.editore}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="mb-4 line-clamp-2 font-bold text-gray-900 text-xl leading-tight">
                      {book.titolo}
                    </h4>

                    {book.ISBN && (
                      <p className="mb-4 rounded-sm bg-white/60 px-3 py-1 font-mono text-gray-500 text-sm">
                        ISBN: {book.ISBN}
                      </p>
                    )}

                    <p className="mb-6 line-clamp-5 text-base text-gray-600 leading-relaxed">
                      {book.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            className="inline-flex items-center rounded-full border bg-white px-3 py-1 font-medium text-gray-600 text-sm"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="ml-4 flex items-center font-medium text-gray-600 text-sm group-hover:text-gray-800">
                        Leggi
                        <svg
                          aria-hidden="true"
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-lg border bg-gray-50 p-8">
            <h3 className="mb-4 font-bold text-2xl text-gray-900">
              Un percorso di ricerca e creatività
            </h3>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              Ogni pubblicazione rappresenta un tassello del lungo percorso di
              ricerca e sperimentazione pedagogica di Tonio d&apos;Annucci,
              dalla valorizzazione delle tradizioni lucane all&apos;innovazione
              didattica nella scuola italiana.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-gray-500 text-sm md:grid-cols-4">
              <div>
                <div className="font-semibold text-gray-700 text-lg">1995</div>
                <div>Prima pubblicazione</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-lg">2026</div>
                <div>Ultima opera</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-lg">12</div>
                <div>Laboratori creativi</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-lg">3</div>
                <div>Decenni di attività</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
