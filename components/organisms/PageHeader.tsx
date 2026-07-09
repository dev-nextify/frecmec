"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../atoms/AnimatedText";
import { Text } from "../ui/text";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-3xl space-y-4">
        <AnimatedText delay={0.1}>
          <Text variant="h1">
            {title}
          </Text>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <Text variant="p">
            {description}
          </Text>
        </AnimatedText>
      </div>
    </section>
  );
}
