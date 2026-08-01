import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://tonio-dannucci.vercel.app",
    languages: {
      "it-IT": "https://tonio-dannucci.vercel.app",
    },
  },
  authors: [{ name: "Tonio d'Annucci" }],
  category: "Education, Literature, Culture",
  classification: "Biography, Educational Innovation, Italian Literature",
  creator: "Tonio d'Annucci",
  description:
    "Antonio 'Tonio' d'Annucci (1944-): maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 20 pubblicazioni e 43 anni di carriera didattica (1968-2011). Creatore dei laboratori di scrittura creativa apprezzati da Kenneth Koch (Columbia University).",
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
  openGraph: {
    description:
      "Maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 20 pubblicazioni e laboratori di scrittura creativa.",
    images: [
      {
        alt: "Tonio d'Annucci - Maestro e autore lucano",
        height: 800,
        url: "/tonio.jpg",
        width: 800,
      },
    ],
    locale: "it_IT",
    siteName: "Tonio d'Annucci - Sito Ufficiale",
    title: "Tonio d'Annucci - Maestro, Autore e Innovatore Pedagogico Lucano",
    type: "profile",
    url: "https://tonio-dannucci.vercel.app",
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
    default: "Tonio d'Annucci - Maestro, Autore e Innovatore Pedagogico Lucano",
    template: "%s | Tonio d'Annucci",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata.",
    images: ["/tonio.jpg"],
    title: "Tonio d'Annucci - Maestro, Autore e Innovatore Pedagogico Lucano",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    alternateName: "Tonio d'Annucci",
    alumniOf: "Scuola Normale",
    author: [
      {
        "@type": "CreativeWork",
        datePublished: "1996",
        name: "Atella del villaggio pre-globale (1900-1960)",
        publisher: "Basiliskos",
      },
      {
        "@type": "CreativeWork",
        datePublished: "1997",
        name: "Laboratorio di Scrittura Creativa 2",
        publisher: "Basiliskos",
      },
      {
        "@type": "CreativeWork",
        datePublished: "2003",
        name: "Le Stanze della Memoria",
      },
      {
        "@type": "CreativeWork",
        datePublished: "2012",
        name: "Creo, ergo sum",
      },
      {
        "@type": "CreativeWork",
        datePublished: "2023",
        name: "Affacci sul Novecento",
      },
      {
        "@type": "CreativeWork",
        datePublished: "2024",
        name: "100 e più del Novecento",
      },
      {
        "@type": "CreativeWork",
        datePublished: "2026",
        name: "Tre finestre sul cortile minimale",
        publisher: "Edizioni Basiliskos",
      },
    ],
    award: [
      "Riconoscimento di Kenneth Koch (Columbia University)",
      "Collaborazione con Ministero di Grazia e Giustizia",
      "Citazione bibliografica in opere di Gian Antonio Stella",
    ],
    birthDate: "1944-05-26",
    birthPlace: {
      "@type": "Place",
      addressCountry: "IT",
      addressRegion: "Basilicata",
      name: "Atella",
    },
    description:
      "Maestro elementare, autore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 20 pubblicazioni e 43 anni di carriera didattica.",
    image: "https://tonio-dannucci.vercel.app/tonio.jpg",
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
    nationality: "Italian",
    sameAs: [
      "https://www.youtube.com/@toniodannucci9485/videos",
      "http://tonio-dannucci.github.io",
    ],
    url: "https://tonio-dannucci.vercel.app",
    worksFor: {
      "@type": "Organization",
      name: "Scuole della Provincia di Potenza",
    },
  };

  return (
    <html lang="it-IT">
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as raw text; the payload is a static object built above.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
        <link href="https://tonio-dannucci.vercel.app" rel="canonical" />
        <meta
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          name="robots"
        />
        <meta
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          name="googlebot"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
