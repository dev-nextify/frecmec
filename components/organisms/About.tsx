"use client";

import { ABOUT_DATA } from "@/constants";
import { motion } from "framer-motion";
import { Text } from "../ui/text";
import Container from "../ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { TickDouble01Icon, AnalyticsUpIcon, UserMultipleIcon, Clock01Icon, StarIcon } from "@hugeicons/core-free-icons";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item";

const statIcons: Record<string, any> = {
  "Años de Experiencia": Clock01Icon,
  "Proyectos Exitosos": AnalyticsUpIcon,
  "Clientes Satisfechos": UserMultipleIcon,
};

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <Text variant="h2" className="text-primary mb-4">
                Sobre Nosotros
              </Text>
              <Text variant="p" className="text-muted-foreground">
                {ABOUT_DATA.description}
              </Text>
            </div>

            <Tabs defaultValue="mision" className="w-full">
              <TabsList>
                <TabsTrigger value="mision">Misión</TabsTrigger>
                <TabsTrigger value="vision">Visión</TabsTrigger>
              </TabsList>
              <TabsContent value="mision">
                <Item variant="solid">
                  <ItemContent>
                    <ItemTitle>Nuestra Misión</ItemTitle>
                    <ItemDescription>{ABOUT_DATA.mission}</ItemDescription>
                  </ItemContent>
                </Item>
              </TabsContent>
              <TabsContent value="vision">
                <Item variant="solid">
                  <ItemContent>
                    <ItemTitle>Nuestra Visión</ItemTitle>
                    <ItemDescription>{ABOUT_DATA.vision}</ItemDescription>
                  </ItemContent>
                </Item>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 mt-12">
                <Card className="overflow-hidden border-0 shadow-lg py-0">
                  <AspectRatio ratio={3 / 4}>
                    <img
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"
                      alt="Soldadura Industrial"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </Card>
              </div>
              <div className="flex flex-col gap-4">
                <Card className="overflow-hidden border-0 shadow-lg py-0">
                  <AspectRatio ratio={3 / 4}>
                    <img
                      src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop"
                      alt="Torno CNC"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </Card>
              </div>
            </div>
            {/* Flotante */}
            <Item variant="solid" className="absolute -bottom-8 -left-8 max-md:hidden w-fit">
              <ItemMedia variant="image">
                <div className="p-2 bg-accent/10 rounded-full">
                  <HugeiconsIcon icon={StarIcon} className="text-accent w-8 h-8" />
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Calidad</ItemTitle>
                <ItemDescription>Estándares Internacionales</ItemDescription>
              </ItemContent>
            </Item>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {ABOUT_DATA.values.map((value, idx) => (
            <Item key={value.title} variant="default">
              <ItemMedia variant="image">
                <div className="p-2 bg-accent/10 rounded-full">
                  <HugeiconsIcon icon={TickDouble01Icon} className="text-accent w-8 h-8" />
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{value.title}</ItemTitle>
                <ItemDescription>{value.description}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_DATA.stats.map((stat, idx) => {
            const Icon = statIcons[stat.label] || TickDouble01Icon;
            return (
              <Card key={stat.label} className="bg-primary text-primary-foreground text-center">
                <CardContent className="flex flex-col items-center gap-4">
                  <HugeiconsIcon icon={Icon} className="w-12 h-12 opacity-80" />
                  <Text variant="h2" className="text-white">
                    +{stat.value}
                  </Text>
                  <Text variant="h4">
                    {stat.label}
                  </Text>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
