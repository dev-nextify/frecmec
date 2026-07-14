import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, ABBREVIATION_NAME, ADRESS, PHONE, EMAIL, LOGO_URL } from "../constants";
import { cn } from "@/lib/utils";

const spaceGroteskHeading = Space_Grotesk({subsets:['latin'],variable:'--font-heading'});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.frecmec.com"),
  title: {
    default: `${ABBREVIATION_NAME} | Soluciones Industriales Metalmecánicas`,
    template: `%s | ${ABBREVIATION_NAME}`,
  },
  description: "Especialistas en la fabricación, recuperación y mantenimiento de componentes mecánicos industriales. Rectificado, torneado, fresado y soldadura de precisión.",
  keywords: ["metalmecánica", "torneado", "fresado", "rectificado", "soldadura", "fabricación de engranajes", "mantenimiento industrial", "recuperación de componentes", "Perú", "Ate"],
  authors: [{ name: ABBREVIATION_NAME, url: "https://www.frecmec.com" }],
  creator: ABBREVIATION_NAME,
  publisher: ABBREVIATION_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${ABBREVIATION_NAME} | Soluciones Industriales Metalmecánicas`,
    description: "Especialistas en la fabricación, recuperación y mantenimiento de componentes mecánicos industriales.",
    url: "https://www.frecmec.com",
    siteName: ABBREVIATION_NAME,
    images: [
      {
        url: "/logo/logo-square.png",
        width: 800,
        height: 800,
        alt: `${ABBREVIATION_NAME} Logo`,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${ABBREVIATION_NAME} | Soluciones Industriales Metalmecánicas`,
    description: "Especialistas en la fabricación, recuperación y mantenimiento de componentes mecánicos industriales.",
    images: ["/logo/logo-square.png"],
    creator: "@frecmec", // Update if there is a real twitter handle
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo/logo-square.png",
    apple: "/logo/logo-square.png",
  },
  manifest: "/manifest.webmanifest", // Next.js automatically outputs manifest.webmanifest for app/manifest.ts
};

import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", outfit.variable, spaceGroteskHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": BUSINESS_NAME,
              "image": LOGO_URL || "https://www.frecmec.com/logo/logo-square.png",
              "@id": "https://www.frecmec.com",
              "url": "https://www.frecmec.com",
              "telephone": PHONE,
              "email": EMAIL,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": ADRESS,
                "addressLocality": "Ate",
                "addressRegion": "Lima",
                "addressCountry": "PE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -12.025345, // Approximation, adjust if exact coordinates are needed
                "longitude": -76.885061 // Approximation
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [] // Populate with social links if any
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
        <TooltipProvider>
          <MainLayout>{children}</MainLayout>
        </TooltipProvider>
      </body>
    </html>
  );
}
