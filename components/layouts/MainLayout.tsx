import { ReactNode } from "react";
import { Navbar } from "../organisms/Navbar";
import { Footer } from "../organisms/Footer";
import { WhatsAppButton } from "../molecules/WhatsAppButton";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
