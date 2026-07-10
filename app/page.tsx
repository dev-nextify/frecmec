import { Text } from "@/components/ui/text";
import { Hero } from "@/components/organisms/Hero";
import { Companies } from "@/components/organisms/Companies";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { ABOUT_DATA, SERVICES, SERVICES_DATA } from "@/constants";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Target01Icon, Factory01Icon } from "@hugeicons/core-free-icons";
import Container from "@/components/ui/container";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />

      {/* About Snippet */}
      <section className="py-24 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title={ABOUT_DATA.title}
                subtitle={ABOUT_DATA.description}
                className="mb-8"
              />
              <AnimatedText delay={0.2} className="mb-8">
                <ItemGroup>
                  <Item variant="solid" className="w-fit">
                    <ItemMedia>
                      <HugeiconsIcon icon={Target01Icon} className="text-primary" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Más de 15 años de experiencia</ItemTitle>
                      <ItemDescription>Liderando el sector metalmecánico.</ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item variant="solid" className="w-fit">
                    <ItemMedia>
                      <HugeiconsIcon icon={Factory01Icon} className="text-primary" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Soluciones Integrales</ItemTitle>
                      <ItemDescription>De la fabricación a la recuperación.</ItemDescription>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <Button render={<Link href="/nosotros" />} variant="outline">
                  Conoce más de nosotros
                  <HugeiconsIcon icon={ArrowRight02Icon} />
                </Button>
              </AnimatedText>
            </div>

            <AnimatedText delay={0.4} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
              <Item variant="solid" className="absolute bottom-8 left-8 right-8 w-fit">
                <ItemContent>
                  <ItemTitle>+850</ItemTitle>
                  <ItemDescription>Proyectos Exitosos</ItemDescription>
                </ItemContent>
              </Item>
            </AnimatedText>
          </div>
        </Container>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-muted">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <SectionHeading
              title="Nuestros Servicios"
              subtitle="Especialistas en la rama metalmecánica para impulsar tu producción."
            />
            <Button render={<Link href="/servicios" />}>
              Ver todos los servicios
            </Button>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {SERVICES.map((service, idx) => (
                <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link href={`/servicios/${service.slug}`} className="block h-full">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      iconName="Settings01Icon"
                      imageUrl={service.images && service.images.length > 0 ? service.images[0] : "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"}
                      delay={0}
                    />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Container>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-10"></div>
        </div>
        <Container className="relative text-center">
          <AnimatedText delay={0.1}>
            <Text variant="h2" className="mb-6 text-white">
              ¿Listo para optimizar tu producción?
            </Text>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <Text variant="p" className="mb-10 text-primary-foreground/80">
              Contáctanos hoy y descubre cómo nuestras soluciones de fabricación y recuperación mecánica pueden reducir tus costos operativos.
            </Text>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <Button render={<Link href="/contacto" />} variant="outline">
              Solicitar una Cotización
              <HugeiconsIcon icon={ArrowRight02Icon} />
            </Button>
          </AnimatedText>
        </Container>
      </section>
    </>
  );
}
