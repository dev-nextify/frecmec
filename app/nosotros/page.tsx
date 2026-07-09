import { About } from "@/components/organisms/About";
import { PageHeader } from "@/components/organisms/PageHeader";
import { ABOUT_DATA } from "@/constants";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Text } from "@/components/ui/text";
import Container from "@/components/ui/container";

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        title={ABOUT_DATA.title}
        description="Conoce nuestra historia, misión y los valores que nos impulsan a ser líderes en soluciones metalmecánicas."
      />
      <About />

      {/* CTA Banner */}
      <section className="py-20 bg-muted">
        <Container className="text-center">
          <Text variant="h3">¿Quieres trabajar con los mejores?</Text>
          <Text variant="p" className="mb-8">
            Nuestro equipo está listo para ofrecerte soluciones mecánicas de la más alta precisión.
          </Text>
          <Button render={<Link href="/contacto" />}>
            Contáctanos Ahora
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Button>
        </Container>
      </section>
    </>
  );
}
