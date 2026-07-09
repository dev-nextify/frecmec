"use client";

import { ABOUT_DATA } from "@/constants";
import { motion } from "framer-motion";
import { Text } from "../ui/text";
import Container from "../ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { TickDouble01Icon, AnalyticsUpIcon, UserMultipleIcon, Clock01Icon } from "@hugeicons/core-free-icons";

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
              <Text variant="lead" className="text-muted-foreground">
                {ABOUT_DATA.description}
              </Text>
            </div>

            <Tabs defaultValue="mision" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mision">Misión</TabsTrigger>
                <TabsTrigger value="vision">Visión</TabsTrigger>
              </TabsList>
              <TabsContent value="mision" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Nuestra Misión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text variant="p">{ABOUT_DATA.mission}</Text>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="vision" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-accent">Nuestra Visión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text variant="p">{ABOUT_DATA.vision}</Text>
                  </CardContent>
                </Card>
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
                <Card className="overflow-hidden border-0 shadow-lg">
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
                <Card className="overflow-hidden border-0 shadow-lg">
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
            <Card className="absolute -bottom-8 -left-8 bg-background shadow-2xl border-l-4 border-l-accent p-4 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <HugeiconsIcon icon={TickDouble01Icon} className="text-accent w-8 h-8" />
                </div>
                <div>
                  <Text variant="h4" className="mb-0">Calidad</Text>
                  <Text variant="small" className="text-muted-foreground">Estándares Internacionales</Text>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {ABOUT_DATA.values.map((value, idx) => (
            <Card key={value.title} className="hover:shadow-md transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-lg">{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_DATA.stats.map((stat, idx) => {
            const Icon = statIcons[stat.label] || TickDouble01Icon;
            return (
              <Card key={stat.label} className="bg-primary text-primary-foreground border-0 text-center">
                <CardContent className="pt-8 pb-6 flex flex-col items-center gap-4">
                  <HugeiconsIcon icon={Icon} className="w-12 h-12 opacity-80" />
                  <Text variant="h2" className="text-white drop-shadow-md">
                    +{stat.value}
                  </Text>
                  <Text variant="h4" className="font-normal opacity-90">
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
