import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tonio d'Annucci - Maestro, Scrittore e Innovatore Pedagogico Lucano",
    template: "%s | Tonio d'Annucci"
  },
  description: "Antonio 'Tonio' d'Annucci (1944-): maestro elementare, scrittore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 30 pubblicazioni e 43 anni di carriera didattica (1968-2011). Creatore dei laboratori di scrittura creativa apprezzati da Kenneth Koch (Columbia University).",
  keywords: [
    "Tonio d'Annucci", "Antonio d'Annucci", "maestro elementare", "Basilicata", "Atella",
    "scrittura creativa", "pedagogia", "innovazione didattica", "letteratura lucana",
    "dialetto lucano", "Laboratori di Scrittura Creativa", "Kenneth Koch",
    "Giuseppe Lupo", "Gian Antonio Stella", "educazione", "scuola primaria",
    "Affacci sul Novecento", "Atella del villaggio pre-globale", "Creo ergo sum",
    "Fabulandia", "cultura lucana", "tradizioni orali", "demo-antropologia"
  ],
  authors: [{ name: "Tonio d'Annucci" }],
  creator: "Tonio d'Annucci",
  publisher: "Tonio d'Annucci",
  category: "Education, Literature, Culture",
  classification: "Biography, Educational Innovation, Italian Literature",
  openGraph: {
    type: "profile",
    locale: "it_IT",
    siteName: "Tonio d'Annucci - Sito Ufficiale",
    title: "Tonio d'Annucci - Maestro, Scrittore e Innovatore Pedagogico Lucano",
    description: "Maestro elementare, scrittore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 30 pubblicazioni e laboratori di scrittura creativa.",
    url: "https://tonio-dannucci.vercel.app",
    images: [
      {
        url: "/tonio.jpg",
        width: 800,
        height: 800,
        alt: "Tonio d'Annucci - Maestro e scrittore lucano",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonio d'Annucci - Maestro, Scrittore e Innovatore Pedagogico Lucano",
    description: "Maestro elementare, scrittore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata.",
    images: ["/tonio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://tonio-dannucci.vercel.app",
    languages: {
      'it-IT': 'https://tonio-dannucci.vercel.app',
    },
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
    "name": "Antonio d'Annucci",
    "alternateName": "Tonio d'Annucci",
    "birthDate": "1944-05-26",
    "birthPlace": {
      "@type": "Place",
      "name": "Atella",
      "addressRegion": "Basilicata",
      "addressCountry": "IT"
    },
    "nationality": "Italian",
    "jobTitle": [
      "Maestro elementare",
      "Scrittore",
      "Promotore culturale",
      "Innovatore pedagogico"
    ],
    "description": "Maestro elementare, scrittore e promotore culturale lucano. Pioniere dell'innovazione pedagogica in Basilicata con oltre 30 pubblicazioni e 43 anni di carriera didattica.",
    "alumniOf": "Scuola Normale",
    "worksFor": {
      "@type": "Organization",
      "name": "Scuole della Provincia di Potenza"
    },
    "award": [
      "Riconoscimento di Kenneth Koch (Columbia University)",
      "Collaborazione con Ministero di Grazia e Giustizia",
      "Citazione bibliografica in opere di Gian Antonio Stella"
    ],
    "knowsAbout": [
      "Pedagogia",
      "Scrittura creativa",
      "Letteratura italiana",
      "Dialetto lucano",
      "Demo-antropologia",
      "Tradizioni orali",
      "Cultura lucana"
    ],
    "author": [
      {
        "@type": "CreativeWork",
        "name": "Atella del villaggio pre-globale (1900-1960)",
        "datePublished": "1996",
        "publisher": "Basiliskos"
      },
      {
        "@type": "CreativeWork", 
        "name": "Laboratorio di Scrittura Creativa 2",
        "datePublished": "1997",
        "publisher": "Basiliskos"
      },
      {
        "@type": "CreativeWork",
        "name": "Le Stanze della Memoria", 
        "datePublished": "2003"
      },
      {
        "@type": "CreativeWork",
        "name": "Creo, ergo sum",
        "datePublished": "2012"
      },
      {
        "@type": "CreativeWork",
        "name": "Affacci sul Novecento",
        "datePublished": "2023"
      },
      {
        "@type": "CreativeWork",
        "name": "100 e più del Novecento", 
        "datePublished": "2024"
      }
    ],
    "url": "https://tonio-dannucci.vercel.app",
    "sameAs": [
      "https://www.youtube.com/@toniodannucci9485/videos",
      "http://tonio-dannucci.github.io"
    ],
    "image": "https://tonio-dannucci.vercel.app/tonio.jpg"
  };

  return (
    <html lang="it-IT">
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://tonio-dannucci.vercel.app" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
