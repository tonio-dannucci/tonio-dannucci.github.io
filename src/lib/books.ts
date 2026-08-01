/**
 * Bibliography data, shared by the library section, the sitemap and the JSON-LD
 * graph so the three can never drift apart.
 *
 * `cover` is the front cover extracted from the PDF and cropped, living in
 * `public/covers/`. `coverWidth` / `coverHeight` are its real intrinsic pixel
 * size, so the index can reserve the right box and never squash the image: the
 * covers are genuinely different shapes. Re-measure them whenever a cover is
 * replaced (`sips -g pixelWidth -g pixelHeight`). One work — Bianchina
 * affatturata, a plain typescript — has no cover art, so it has no `cover` and
 * the index typesets a title page for it instead. Nothing is faked.
 *
 * Never hardcode how many works there are: import `BOOK_COUNT` instead.
 */
export interface Book {
  anno: number;
  cover?: string;
  coverHeight?: number;
  coverWidth?: number;
  description: string;
  editore?: string;
  href: string;
  ISBN?: string;
  tags: string[];
  titolo: string;
}

export const books: Book[] = [
  {
    anno: 1996,
    cover: "/covers/atella-del-villaggio-preglobale.jpg",
    coverHeight: 1537,
    coverWidth: 900,
    description:
      "Raccolta di note antropologiche sulla comunità rurale di Atella tra il 1900 e il 1960, prima del suo assorbimento nella società globale. L'autore esamina la magia popolare, la medicina empirica, i rituali collettivi, la gastronomia contadina e la struttura sociale di un villaggio lucano ormai scomparso. Un'esplorazione dei fondali di una civiltà rurale dimenticata.",
    editore: "Basiliskos",
    href: "/books/atella-del-villaggio-preglobale.pdf",
    ISBN: "88-8143-007-X",
    tags: ["Etno-Antropologia"],
    titolo: "Atella del Villaggio pre-Globale (1900-1960)",
  },
  {
    anno: 1997,
    cover: "/covers/nei-tuoi-occhi-di-zagare-assolati.jpg",
    coverHeight: 1450,
    coverWidth: 900,
    description:
      "Raccolta di poesia lirica che dialoga con i classici latini attraverso un linguaggio ricco di risonanze arcaiche e musicalità. I versi di d'Annucci celebrano la donna e l'amore coniugando forme classiche e visione contemporanea, tessendo un invito al convivio e al contatto umano.",
    editore: "Basiliskos",
    href: "/books/nei-tuoi-occhi-di-zagare-assolati.pdf",
    ISBN: "88-8143010-X",
    tags: ["Poesia"],
    titolo: "Nei tuoi occhi di zagare assolati",
  },
  {
    anno: 2018,
    cover: "/covers/acquario-di-chandra.jpg",
    coverHeight: 1570,
    coverWidth: 980,
    description:
      "Testi poetici che costruiscono l'immagine di un acquario immaginario dove fiori, archetipi, visioni e simboli esoterici si accumulano in un paesaggio sognante. La lingua ricca di accumuli e salti associativi crea un universo al di là della logica ordinaria, dove elementi acquatici, celesti e vegetali si intrecciano in una rete di significati misteriosi. Lo stile fluido e incantato invita l'immersione nei fondali dell'inconscio.",
    editore: "Edizioni Basiliskos",
    href: "/books/acquario-di-chandra.pdf",
    tags: ["Poesia"],
    titolo: "L'Acquario di Chandra",
  },
  {
    anno: 1995,
    cover: "/covers/laboratorio-scrittura-creativa-1.jpg",
    coverHeight: 1340,
    coverWidth: 900,
    description:
      "Antologia di oltre millecento testi scritti da alunni delle scuole elementari e medie della provincia di Potenza durante laboratori di scrittura creativa coordinati da Tonio d'Annucci. I componimenti sono organizzati per forma letteraria — acrostici, allitterazioni, versi liberi, parodie e altre tecniche — documenti di un lavoro didattico svolto in quindici comuni con il sostegno dell'assessorato provinciale.",
    editore: "Basiliskos",
    href: "/books/laboratorio-scrittura-creativa-1.pdf",
    ISBN: "88-8143-001-0",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 1",
  },
  {
    anno: 1997,
    cover: "/covers/laboratorio-scrittura-creativa-2.jpg",
    coverHeight: 1480,
    coverWidth: 900,
    description:
      "Volume secondo raccoglie poesie e composizioni creative di alunni della scuola media statale 'Mons. A Caselle' di Rapolla, provincia di Potenza, dall'anno scolastico 1993-94. Gli studenti sviluppano capacità di espressione attraverso esercizi di scrittura guidata, producendo testi che riflettono il loro immaginario poetico.",
    editore: "Basiliskos",
    href: "/books/laboratorio-scrittura-creativa-2.pdf",
    ISBN: "88-8143-009-6",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 2",
  },
  {
    anno: 2000,
    cover: "/covers/laboratorio-scrittura-creativa-3.jpg",
    coverHeight: 1298,
    coverWidth: 900,
    description:
      "Il volume raccoglie i testi scritti dai detenuti della Casa Circondariale di Melfi durante un laboratorio di scrittura creativa. Le composizioni affrontano i temi della giustizia, della libertà e della rieducazione attraverso narrazioni e riflessioni che nascono direttamente dall'esperienza della privazione.",
    href: "/books/laboratorio-scrittura-creativa-3.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 3",
  },
  {
    anno: 2003,
    cover: "/covers/le-stanze-della-memoria.jpg",
    coverHeight: 1798,
    coverWidth: 1192,
    description:
      "Raccoglie testimonianze orali di abitanti di Capaccio e Paestum, raccolte da bambini in un progetto didattico di ricerca. Organizzato in diciannove sezioni tematiche, documenta le tradizioni, i saperi e la memoria collettiva della comunità rurale della Basilicata, preservando il patrimonio immateriale attraverso le voci del passato contadino.",
    href: "/books/le-stanze-della-memoria.pdf",
    tags: ["Etno-Antropologia"],
    titolo: "Le Stanze della Memoria",
  },
  {
    anno: 2004,
    cover: "/covers/racconti-dei-solsisti.jpg",
    coverHeight: 1361,
    coverWidth: 900,
    description:
      "Raccolta di racconti popolari e leggende organizzati intorno ai solstizi. Le narrazioni intrecciano il quotidiano con il soprannaturale, affrontando il fantastico, il magico e il misterioso. Le storie esplorano il conscio e l'inconscio, i sogni e le paure collettive, con valore pedagogico per lo sviluppo della psiche umana.",
    href: "/books/racconti-dei-solsisti.pdf",
    tags: ["Etno-Antropologia", "Scrittura Creativa"],
    titolo: "I Racconti dei solstizi",
  },
  {
    anno: 2006,
    cover: "/covers/la-momeria-dell-oralita.jpg",
    coverHeight: 1501,
    coverWidth: 900,
    description:
      "Raccoglie narrazioni orali, fiabe e canti popolari provenienti da Rapolla, in Basilicata, documentando le tradizioni, la religiosità e la memoria collettiva del territorio. Comprende narrativa popolare, produzione letteraria orale, raccolte di proverbi e modi di dire, descrizioni di pratiche religiose e celebrazioni locali, preservando una cultura trasmessa oralmente prima della modernizzazione.",
    href: "/books/la-momeria-dell-oralita.pdf",
    tags: ["Etno-Antropologia"],
    titolo: "La Memoria dell'Oralità",
  },
  {
    anno: 2008,
    cover: "/covers/laboratorio-scrittura-creativa-4.jpg",
    coverHeight: 1334,
    coverWidth: 900,
    description:
      "La quarta raccolta del laboratorio di scrittura creativa propone i componimenti di alunni di classe seconda e quarta della scuola elementare di Atella. I bambini danno voce all'immaginazione attraverso la scrittura, creando composizioni che mostrano la loro capacità narrativa ancora in sviluppo, in forme diverse dalla poesia ai giochi di parole.",
    href: "/books/laboratorio-scrittura-creativa-4.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 4",
  },
  {
    anno: 2008,
    cover: "/covers/laboratorio-scrittura-creativa-5.jpg",
    coverHeight: 1285,
    coverWidth: 900,
    description:
      "Raccoglie i testi di bambini della scuola primaria 'Gino Landolfi' di Agropoli, scritti seguendo il laboratorio creativo diretto da Tonio d'Annucci. Gli scritti spaziano da narrazioni brevi a descrizioni di oggetti, paesaggi e stati emotivi, con esercizi di osservazione e fantasia. Il tema della quinta edizione, 'Dal puer televisivus al puer ludens', segna il passaggio dalla cultura dell'immagine televisiva al gioco della creazione letteraria.",
    href: "/books/laboratorio-scrittura-creativa-5.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Laboratorio di Scrittura Creativa 5",
  },
  {
    anno: 2009,
    cover: "/covers/fabulandia-1.jpg",
    coverHeight: 1419,
    coverWidth: 900,
    description:
      "Raccolta di fiabe e microstorie create da bambini di scuola primaria sotto la supervisione di Tonio d'Annucci ed Emy Rosati. I giovani autori inventano storie incantate, popolate di miti, simboli e mondi fantastici, tessendo narrazioni che mescolano fantasia e quotidianità. Primo volume pensato per lettori di tutte le età.",
    href: "/books/fabulandia-1.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Fabulandia 1",
  },
  {
    anno: 2009,
    cover: "/covers/fabulandia-2.jpg",
    coverHeight: 1810,
    coverWidth: 1214,
    description:
      "Favole e racconti inventati dai bambini della scuola primaria di Agropoli, curati da Tonio d'Annucci. Il puer fabulator, bambino narratore e creativo, costruisce storie popolate di miti, simboli e creature magiche, strumenti per resistere all'usura della realtà ordinaria e quotidiana.",
    href: "/books/fabulandia-2.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Fabulandia 2",
  },
  {
    anno: 2010,
    cover: "/covers/lunicchio.jpg",
    coverHeight: 1786,
    coverWidth: 1168,
    description:
      "Una serie di racconti brevi dove Lunicchio vive avventure fantastiche scandite dalle fasi lunari. Nato come laboratorio di scrittura creativa all'interno di una scuola, il volume raccoglie le storie create da studenti, mescolando la realtà quotidiana con elementi di favola e mistero.",
    href: "/books/lunicchio.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Titicchio Taticchio detto Lunicchio",
  },
  {
    anno: 2011,
    cover: "/covers/bottega-delle-risposte.jpg",
    coverHeight: 1330,
    coverWidth: 900,
    description:
      "Progetto didattico di laboratorio di scrittura creativa realizzato con studenti di scuola secondaria. Utilizza il concetto di Google Craftmade come pretesto per generare risposte immaginifiche a questioni ordinarie, trasformando ricerche banali in esercizi di fantasia linguistica. Raccoglie i risultati della sperimentazione creativa nei Laboratori di Scrittura Creativa.",
    href: "/books/bottega-delle-risposte.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "La Bottega delle risposte immaginifiche",
  },
  {
    anno: 2012,
    cover: "/covers/creo-ergo-sum.jpg",
    coverHeight: 1792,
    coverWidth: 1184,
    description:
      "Raccolta di esercizi e laboratori di scrittura creativa sviluppati in una scuola secondaria di primo grado. Il volume propone attività didattiche che guidano gli studenti a scoprire le proprie capacità creative, rielaborando miti, testi narrativi e giochi linguistici. Un manuale pratico per insegnanti interessati all'insegnamento della scrittura come strumento di comunicazione.",
    href: "/books/creo-ergo-sum.pdf",
    tags: ["Scrittura Creativa"],
    titolo: "Creo, ergo sum",
  },
  {
    anno: 2021,
    cover: "/covers/fedora.jpg",
    coverHeight: 1517,
    coverWidth: 900,
    description:
      "Memoriale dedicato alla memoria di Fedora, sorella dell'autore, donna coltissima che amava i fiori, la letteratura, l'opera e la filosofia. Attraverso brevi meditazioni e profili, il testo rifiuta la celebrazione agiografica per offrire un ritratto sobrio e intimamente affettuoso. Il titolo evoca un paradosso: ciò che affascina può anche tradire.",
    editore: "Basiliskos",
    href: "/books/fedora.pdf",
    tags: ["Memoriale"],
    titolo: "Fedora, la donna tradita da un fiore",
  },
  {
    anno: 2023,
    description:
      "Commedia in dialetto atellano-rionerese sulla superstizione popolare e i conflitti di classe nella Napoli degli anni quaranta e cinquanta. Lo spettacolo affronta il ridicolo delle credenze magiche e la disistima verso le donne e le classi inferiori, attraverso la storia di una figura femminile al centro delle ossessioni e dei conflitti di un ambiente popolare.",
    href: "/books/bianchina.pdf",
    tags: ["Teatro"],
    titolo: "Bianchina affatturata",
  },
  {
    anno: 2023,
    cover: "/covers/affacci-novecento.jpg",
    coverHeight: 1728,
    coverWidth: 1116,
    description:
      "Serie di storie brevi che ritraggono la provincia italiana nel Novecento. D'Annucci osserva con ironia episodi comici e drammatici della vita ordinaria, catturando usi, costumi e dinamiche umane attraverso personaggi locali e situazioni quotidiane che compongono il tessuto sociale della comunità rurale.",
    href: "/books/affacci-novecento.pdf",
    tags: ["Satira in Vernacolo"],
    titolo: "Affacci sul Novecento",
  },
  {
    anno: 2024,
    cover: "/covers/100-piu-novecento.jpg",
    coverHeight: 1840,
    coverWidth: 1208,
    description:
      "Raccolta di scritti satirici in vernacolo che prosegue l'indagine sul Novecento italiano. L'autore delinea attraverso personaggi, aneddoti e accadimenti della società contemporanea gli stereotipi e gli archetipi umani, offrendo uno sguardo ironico sulle vicende storiche e politiche del secolo.",
    href: "/books/100-piu-novecento.pdf",
    tags: ["Satira in Vernacolo"],
    titolo: "100 e più del Novecento",
  },
  {
    anno: 2026,
    cover: "/covers/tre-finestre-sul-cortile-minimale.jpg",
    coverHeight: 1668,
    coverWidth: 1086,
    description:
      "Raccolta di scritti satirici e aforismi che attraversano il paesaggio contemporaneo, dalle vicende politiche alla banalità delle miserie umane. D'Annucci intrattiene il lettore con uno sguardo che alterna l'ironia della satira alla riflessione filosofica, proponendo una ricerca dei significati ultimi che abitano la realtà ordinaria.",
    editore: "Edizioni Basiliskos",
    href: "/books/tre-finestre-sul-cortile-minimale.pdf",
    tags: ["Satira", "Poesia"],
    titolo: "Tre finestre sul cortile minimale",
  },
];

/** The one place the number of works lives. Never hardcode it in a component. */
export const BOOK_COUNT = books.length;
