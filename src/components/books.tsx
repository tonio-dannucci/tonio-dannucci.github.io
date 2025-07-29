import Link from "next/link";

const books = [
  {
    titolo: "Atella del Villaggio pre-Globale (1900-1960)",
    editore: "Basiliskos",
    anno: 1996,
    ISBN: "88-8143-007-X",
    tags: ["Etno-Antropologia"],
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
    description:
      "Sembra arduo oggi, nell'era postgutemberghiana, su cui incombe la minaccia dell'analfabetismo di ritorno, non alimentato o confortato dalla memoria, riuscire a motivare insegnanti ed alunni a dare ed aggiungere valore alla lettura del passato.",
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
      'Umberto Eco, nella Presentazione de I Draghi locopei I di Ersilia Zamponi (Einaudi), all\'incipit: "Ci lamentiamo che i nostri ragazzi, spendendo ore e ore alla tv, non siano più capaci di parlare e usare bene la lingua. Basterebbe insegnargli che con la lingua si può giocare, e si divertirebbero persino ad andare a caccia di errori sintattici dei presentatori tv "',
  },
  {
    titolo: "Laboratorio di Scrittura Creativa 5",
    anno: 2008,
    tags: ["Scrittura Creativa"],
    href: "/books/laboratorio-scrittura-creativa-5.pdf",
    description:
      "Negli anni trenta Lev. S. Vygotskij ancorò la creatività ad un bisogno primario dell'essere umano, il quale si realizza, egli affermò, creando. Da questa \"forza umanizzante dell'Io\" scaturisce il diritto dell'uomo ad essere se stesso:fruitore e produttore di cultura.",
  },
  {
    titolo: "Fabulandia 1",
    anno: 2009,
    tags: ["Scrittura Creativa"],
    href: "/books/fabulandia-1.pdf",
    description: `Il presente Volume, frutto del lavoro serio e continuo durante l'intero anno scolastico 2008/09 degli alunni delle classi I B e III C sotto la sapiente guida dei docenti d'Annucci e Rosati, si pone sicuramente come grande esempio di didattica attiva e creativa.`,
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
    description: `Se volete essere creativi, rimanete bambini, con la creatività e la fantasia che contraddistingue i bambini prima che siano de.formati dalla società degli adulti. (Jean Piaget)`,
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
  {
    titolo: "Affacci sul Novecento",
    anno: 2023,
    tags: ["Satira in Vernacolo"],
    href: `/books/affacci-novecento.pdf`,
    description: `C’è voluto un secolo intero, il Novecento, per stabilire definitivamente che il dialetto ha la stessa dignità di una lingua, almeno dal punto di vista letterario, anzi è una lingua a tutti gli effetti con le sue regole grammaticali, le sue norme, addirittura con il vanto di essere qualcosa assai più ricercato dell’italiano comune.`,
  },
  {
    titolo: "100 e più del Novecento",
    anno: 2024,
    tags: ["Satira in Vernacolo"],
    href: `/books/100-piu-novecento.pdf`,
    description: `Questa raccolta vuole essere la prosecuzione del precedente volumetto Affacci sul Novecento (2023), prefazione di Giuseppe Lupo.`,
  },
];

export const Books = () => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Etno-Antropologia': 'bg-blue-50/60 border-blue-300/60',
      'Scrittura Creativa': 'bg-green-50/60 border-green-300/60',
      'Poesia': 'bg-purple-50/60 border-purple-300/60',
      'Satira in Vernacolo': 'bg-orange-50/60 border-orange-300/60',
      'Teatro': 'bg-red-50/60 border-red-300/60',
      'Memoriale': 'bg-gray-50/60 border-gray-300/60'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50/60 border-gray-300/60';
  };

  return (
    <section className="py-16 bg-white" id="bibliografia">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-4xl">
            Bibliografia Completa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oltre 30 pubblicazioni nell&apos;arco di tre decenni (1995-2024), 
            dalla demo-antropologia alla scrittura creativa, dalla poesia in italiano 
            alle opere in dialetto lucano.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 bg-gray-50 rounded-full border">
              {books.length} opere totali
            </span>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 bg-gray-50 rounded-full border">
              Dal 1995 al 2024
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books
            .sort((a, b) => b.anno - a.anno)
            .map((book) => {
              const category = book.tags[0] || 'Altri';
              return (
                <Link
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={book.titolo}
                  className="group block"
                  aria-label={`Leggi "${book.titolo}" (${book.anno}) - si apre in una nuova finestra`}
                >
                  <article className={`h-full ${getCategoryColor(category)} rounded-lg border p-8 transition-all duration-200 group-hover:shadow-lg group-hover:border-gray-400`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white text-gray-700 rounded-full border shadow-sm">
                          {book.anno}
                        </span>
                        {book.editore && (
                          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/90 text-gray-600 rounded-full border">
                            {book.editore}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                      {book.titolo}
                    </h4>

                    {book.ISBN && (
                      <p className="text-sm text-gray-500 mb-4 font-mono bg-white/60 px-3 py-1 rounded">
                        ISBN: {book.ISBN}
                      </p>
                    )}

                    <p className="text-gray-600 line-clamp-5 leading-relaxed mb-6 text-base">
                      {book.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white text-gray-600 rounded-full border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm font-medium group-hover:text-gray-800 ml-4">
                        Leggi
                        <svg 
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8 border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Un percorso di ricerca e creatività
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ogni pubblicazione rappresenta un tassello del lungo percorso di ricerca 
              e sperimentazione pedagogica di Tonio d&apos;Annucci, dalla valorizzazione 
              delle tradizioni lucane all&apos;innovazione didattica nella scuola italiana.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
              <div>
                <div className="font-semibold text-gray-700 text-lg">1995</div>
                <div>Prima pubblicazione</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-lg">2024</div>
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
