"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatisticCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export function StatisticCard({ value, label, prefix = "", suffix = "+", delay = 0 }: StatisticCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold tracking-tighter">
            {prefix}{count}{suffix}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{label}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
