import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, ABBREVIATION_NAME } from "../constants";
import { cn } from "@/lib/utils";

const spaceGroteskHeading = Space_Grotesk({subsets:['latin'],variable:'--font-heading'});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${ABBREVIATION_NAME} | Soluciones Industriales`,
  description: BUSINESS_NAME,
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
        <TooltipProvider>
          <MainLayout>{children}</MainLayout>
        </TooltipProvider>
      </body>
    </html>
  );
}
