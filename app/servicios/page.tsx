import { Services } from "@/components/organisms/Services";
import { PageHeader } from "@/components/organisms/PageHeader";
import { MACHINES_DATA, MATERIALS_DATA, PIECES_DATA } from "@/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import Container from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { Item, ItemContent, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Generales",
  description: "Explora nuestra amplia gama de servicios: rectificado, torneado, fresado, soldadura y recuperación de componentes mecánicos.",
  openGraph: {
    title: "Nuestros Servicios | FRECMEC S.A.C",
    description: "Explora nuestra amplia gama de servicios y soluciones metalmecánicas con maquinaria de alta tecnología.",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        title="Nuestros Servicios"
        description="Soluciones metalmecánicas integrales con alta precisión. Conoce nuestras capacidades y la tecnología con la que trabajamos."
      />
      <Services />

      {/* Capabilities Details */}
      <section className="py-24 bg-background border-t">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            <MaterialCard items={MACHINES_DATA} title="Maquinaria" />
            <MaterialCard items={MATERIALS_DATA} title="Materiales" />
            <MaterialCard items={PIECES_DATA} title="Piezas Fabricadas" />
          </div>
        </Container>
      </section>
    </>
  );
}

const MaterialCard = ({ items, title }: { items: string[], title: string }) => {
  return (
    <div>
      <Text variant="h3" className="mb-6 flex items-center gap-2">
        <span className="w-6 h-1 bg-primary inline-block rounded-full"></span>
        {title}
      </Text>
      <ItemGroup>
        {items.map((item, idx) => (
          <Item key={idx} size="xs" variant="outline">
            <ItemMedia variant="image">
              <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-primary" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{item}</ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}