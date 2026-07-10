import { SERVICES } from "@/constants";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/organisms/PageHeader";
import Container from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SmartPhone01Icon } from "hugeicons-react";
import { Separator } from "@/components/ui/separator";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemTitle } from "@/components/ui/item";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Si no hay imágenes, usamos un placeholder. Si hay una o más, usamos esas.
  const images = service.images && service.images.length > 0
    ? service.images
    : ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"];

  const renderImage = (img: string, title: string, index: number, containerClass: string) => (
    <Dialog>
      <DialogTrigger render={<div className={`${containerClass} cursor-zoom-in hover:opacity-90 transition-opacity`} />}>
        <img src={img} alt={`${title} ${index}`} className="object-cover w-full h-full absolute inset-0" />
      </DialogTrigger>
      <DialogContent className="!max-w-none !w-fit !h-fit p-0 !bg-transparent !border-none !shadow-none !ring-0 flex justify-center items-center">
        <DialogTitle className="sr-only">Imagen de {title}</DialogTitle>
        <img
          src={img}
          alt={`${title} ${index}`}
          className="object-contain drop-shadow-2xl"
          style={{ width: "90vw", height: "85vh" }}
        />
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <PageHeader
        title={service.title}
        description="Conoce más detalles sobre este servicio y cómo podemos ayudarte a optimizar tus procesos."
      />
      <section className="py-24 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* GALERÍA DE IMÁGENES ESTILO BENTO / MASONRY */}
            <div className="w-full">
              {images.length === 1 && (
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border">
                  {renderImage(images[0], service.title, 1, "w-full h-full relative")}
                </div>
              )}

              {images.length === 2 && (
                <div className="grid grid-cols-2 gap-4 aspect-[4/3] sm:aspect-video">
                  {images.map((img, idx) => (
                    renderImage(img, service.title, idx + 1, "relative rounded-xl overflow-hidden shadow-md border")
                  ))}
                </div>
              )}

              {images.length === 3 && (
                <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-square sm:aspect-[4/3]">
                  {renderImage(images[0], service.title, 1, "row-span-2 relative rounded-xl overflow-hidden shadow-md border")}
                  {renderImage(images[1], service.title, 2, "relative rounded-xl overflow-hidden shadow-md border")}
                  {renderImage(images[2], service.title, 3, "relative rounded-xl overflow-hidden shadow-md border")}
                </div>
              )}

              {images.length >= 4 && (
                <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-square sm:aspect-[4/3]">
                  {images.slice(0, 4).map((img, idx) => (
                    renderImage(img, service.title, idx + 1, "relative rounded-xl overflow-hidden shadow-md border")
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <Text variant="h2">{service.title}</Text>
                <Text variant="p" >{service.description}</Text>
              </div>


              <Separator />

              <div className="grid gap-5">
                <Text variant="large">¿Necesitas cotizar este servicio?</Text>
                <Text variant="p" className="mt-0!" >Déjanos tus datos o contáctanos directamente para brindarte una asesoría personalizada y un presupuesto a la medida.</Text>
                <Link href={`/contacto?servicio=${slug}`}>
                  <Button size="lg" className="w-fit">
                    <SmartPhone01Icon />
                    Cotizar {service.title}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}
