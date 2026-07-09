import { Contact } from "@/components/organisms/Contact";
import { PageHeader } from "@/components/organisms/PageHeader";
import { CONTACT_DATA } from "@/constants";

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
