"use client";

import { SERVICES_DATA } from "@/constants";
import { SectionHeading } from "../atoms/SectionHeading";
import { ServiceCard } from "../molecules/ServiceCard";
import Container from "../ui/container";

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <Container>
        <SectionHeading 
          title="Soluciones Integrales" 
          subtitle="Ofrecemos un amplio catálogo de servicios metalmecánicos con maquinaria de última generación y personal altamente calificado."
          alignment="center"
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              imageUrl={service.imageUrl}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
