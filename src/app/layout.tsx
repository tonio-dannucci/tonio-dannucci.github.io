import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { books } from "@/lib/books";
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Tonio d'Annucci", url: SITE_URL }],
  category: "Education, Literature, Culture",
  creator: "Tonio d'Annucci",
  description: SITE_DESCRIPTION,
  keywords: [
    "Tonio d'Annucci",
    "Antonio d'Annucci",
    "maestro elementare",
    "Basilicata",
    "Atella",
    "scrittura creativa",
    "pedagogia",
    "innovazione didattica",
    "letteratura lucana",
    "dialetto lucano",
    "Laboratori di Scrittura Creativa",
    "Kenneth Koch",
    "Giuseppe Lupo",
    "Gian Antonio Stella",
    "educazione",
    "scuola primaria",
    "Affacci sul Novecento",
    "Atella del villaggio pre-globale",
    "Creo ergo sum",
    "Fabulandia",
    "cultura lucana",
    "tradizioni orali",
    "demo-antropologia",
  ],
  // Resolves every relative asset URL below against the canonical origin.
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description:
      "Maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 20 pubblicazioni e laboratori di scrittura creativa.",
    images: [OG_IMAGE],
    locale: "it_IT",
    siteName: `${SITE_NAME} - Sito Ufficiale`,
    title: SITE_TITLE,
    type: "profile",
    url: "/",
  },
  publisher: "Tonio d'Annucci",
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  twitter: {
    // The portrait is square: a wide card would crop straight through his face.
    card: "summary",
    description:
      "Maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata.",
    images: [OG_IMAGE.url],
    title: SITE_TITLE,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const PERSON_ID = `${SITE_URL}/#person`;

/**
 * One `@graph` instead of a bare Person: schema.org has no `author` property on
 * Person, so the books are separate nodes pointing back at him by `@id`.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${SITE_URL}/#website`,
      "@type": "WebSite",
      description: SITE_DESCRIPTION,
      inLanguage: "it-IT",
      name: `${SITE_NAME} - Sito Ufficiale`,
      publisher: { "@id": PERSON_ID },
      url: SITE_URL,
    },
    {
      "@id": PERSON_ID,
      "@type": "Person",
      alternateName: "Tonio d'Annucci",
      award: [
        "Riconoscimento di Kenneth Koch (Columbia University)",
        "Collaborazione con Ministero di Grazia e Giustizia",
        "Citazione bibliografica in opere di Gian Antonio Stella",
      ],
      birthDate: "1944-05-26",
      birthPlace: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IT",
          addressLocality: "Atella",
          addressRegion: "Basilicata",
        },
        name: "Atella",
      },
      description:
        "Maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 20 pubblicazioni e 43 anni di carriera didattica.",
      image: `${SITE_URL}${OG_IMAGE.url}`,
      jobTitle: [
        "Maestro elementare",
        "Autore",
        "Promotore culturale",
        "Innovatore pedagogico",
      ],
      knowsAbout: [
        "Pedagogia",
        "Scrittura creativa",
        "Letteratura italiana",
        "Dialetto lucano",
        "Demo-antropologia",
        "Tradizioni orali",
        "Cultura lucana",
      ],
      name: "Antonio d'Annucci",
      nationality: { "@type": "Country", name: "Italia" },
      sameAs: ["https://www.youtube.com/@toniodannucci9485/videos"],
      url: SITE_URL,
      worksFor: {
        "@type": "Organization",
        name: "Scuole della Provincia di Potenza",
      },
    },
    ...books.map((book) => ({
      "@id": `${SITE_URL}${book.href}`,
      "@type": "Book",
      abstract: book.description,
      author: { "@id": PERSON_ID },
      datePublished: String(book.anno),
      encodingFormat: "application/pdf",
      genre: book.tags,
      inLanguage: "it",
      name: book.titolo,
      url: `${SITE_URL}${book.href}`,
      ...(book.editore && {
        publisher: { "@type": "Organization", name: book.editore },
      }),
      ...(book.ISBN && { isbn: book.ISBN }),
    })),
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it-IT">
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as raw text; the payload is a static object built above.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
