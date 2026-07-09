"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter, CardAction } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import * as CoreIcons from "@hugeicons/core-free-icons";
import { AspectRatio } from "../ui/aspect-ratio";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { ArrowRight01Icon, InformationCircleIcon } from "@hugeicons/core-free-icons";
import { Text } from "../ui/text";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
  delay?: number;
}

export function ServiceCard({ title, description, iconName, imageUrl, delay = 0 }: ServiceCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconObject = (CoreIcons as any)[iconName] || CoreIcons.Settings01Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group pt-0 h-full">
        {imageUrl ? (
          <div className="relative overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-4 left-4 p-2 bg-background/20 backdrop-blur-md rounded-full">
              <HugeiconsIcon icon={IconObject} className="text-white w-6 h-6" />
            </div>
          </div>
        ) : (
          <div className="bg-primary/5 p-6 pb-0">
            <HugeiconsIcon icon={IconObject} className="text-primary w-12 h-12 mb-4" />
          </div>
        )}

        <CardHeader className="pb-4">
          <CardTitle className="group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
          <CardAction>
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline" size="icon-xs" >
                  <HugeiconsIcon icon={InformationCircleIcon} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 space-y-2">
                <Text variant="small">{title}</Text>
                <Text variant="muted">
                  Este servicio está ejecutado bajo los más altos estándares de calidad industrial, garantizando durabilidad y eficiencia técnica.
                </Text>
              </HoverCardContent>
            </HoverCard>
          </CardAction>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
