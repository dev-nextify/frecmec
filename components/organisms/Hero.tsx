"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_SLIDES } from "@/constants";
import { Button } from "../ui/button";
import { AnimatedText } from "../atoms/AnimatedText";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Download02Icon } from "@hugeicons/core-free-icons";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item";
import { Certificate01Icon } from "hugeicons-react";
import Container from "../ui/container";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  const { scrollY } = useScroll();
  // Translate the image down as we scroll down to simulate background-attachment: fixed
  const y = useTransform(scrollY, [0, 1000], [0, 1000]);

  return (
    <section id="hero" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-background">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full ml-0">
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full w-full pl-0 relative">
              <div className="absolute inset-0 z-0">
                <motion.img
                  style={{ y }}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover origin-top"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <Container className="relative z-10 h-full flex items-center">
                <div className="max-w-3xl flex flex-col gap-6 pt-20">
                  <AnimatedText delay={0.1}>
                    <Badge variant="secondary" className="w-fit">
                      Líderes en el rubro metalmecánico
                    </Badge>
                  </AnimatedText>
                  <AnimatedText delay={0.2}>
                    <Text variant="h1" className="text-white">
                      {slide.title}
                    </Text>
                  </AnimatedText>

                  <AnimatedText delay={0.3}>
                    <Text variant="lead" className="text-white/90">
                      {slide.subtitle}
                    </Text>
                  </AnimatedText>

                  <AnimatedText delay={0.4}>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <Button render={<Link href="/contacto" />} size="lg" variant="default">
                        {slide.primaryCta}
                        <HugeiconsIcon icon={ArrowRight02Icon} />
                      </Button>
                      <Button
                        render={<Link href="#" />}
                        size="lg"
                        variant="secondary"
                        onClick={(e) => {
                          e.preventDefault();
                          // TODO: Add real PDF link
                        }}
                      >
                        <HugeiconsIcon icon={Download02Icon} />
                        {slide.secondaryCta}
                      </Button>
                    </div>
                  </AnimatedText>
                </div>
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious className="left-8" />
          <CarouselNext className="right-8" />
        </div>
      </Carousel>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 hidden lg:block z-20"
      >
        <Item variant="solid">
          <ItemMedia>
            <Certificate01Icon className="text-primary" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Calidad Garantizada</ItemTitle>
            <ItemDescription>100% Precisión</ItemDescription>
          </ItemContent>
        </Item>
      </motion.div>
    </section>
  );
}
