import { Contact } from "@/components/organisms/Contact";
import { PageHeader } from "@/components/organisms/PageHeader";
import { CONTACT_DATA } from "@/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con FRECMEC S.A.C. Solicita una cotización, asesoría técnica o resuelve cualquier duda sobre nuestros servicios metalmecánicos.",
  openGraph: {
    title: "Contacto | FRECMEC S.A.C",
    description: "Ponte en contacto con FRECMEC S.A.C. Solicita una cotización o asesoría técnica.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader 
        title={CONTACT_DATA.title}
        description={CONTACT_DATA.description}
      />
      <Contact />
    </>
  );
}
