"use client";

import { CONTACT_DATA, PHONE, ADRESS } from "@/constants";
import { SectionHeading } from "../atoms/SectionHeading";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, SmartPhone01Icon as Phone01Icon, Location01Icon, Time02Icon } from "@hugeicons/core-free-icons";
import Container from "../ui/container";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "../ui/item";
import { Label } from "../ui/label";
import { Field, FieldGroup, FieldLabel } from "../ui/field";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <ItemGroup className="grid sm:grid-cols-2 gap-6">
              <Item variant="solid">
                <ItemMedia>
                  <HugeiconsIcon icon={Phone01Icon} className="text-accent" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Teléfono</ItemTitle>
                  <ItemDescription>{PHONE}</ItemDescription>
                </ItemContent>
              </Item>

              <Item variant="solid">
                <ItemMedia>
                  <HugeiconsIcon icon={Mail01Icon} className="text-accent" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Correo</ItemTitle>
                  <ItemDescription>{CONTACT_DATA.email}</ItemDescription>
                </ItemContent>
              </Item>

              <Item variant="solid" className="col-span-2">
                <ItemMedia>
                  <HugeiconsIcon icon={Location01Icon} className="text-accent" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Dirección</ItemTitle>
                  <ItemDescription>{ADRESS}</ItemDescription>
                </ItemContent>
              </Item>

              <Item variant="solid" className="col-span-2">
                <ItemMedia>
                  <HugeiconsIcon icon={Time02Icon} className="text-accent" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Horario</ItemTitle>
                  <ItemDescription>{CONTACT_DATA.schedule}</ItemDescription>
                </ItemContent>
              </Item>
            </ItemGroup>

            {/* Map */}
            <div className="w-full h-[300px] sm:h-[400px] bg-muted rounded-2xl overflow-hidden border border-border relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300.1230919890141!2d-76.84657378361463!3d-12.005403531254213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c26f0078c629%3A0xce00b08da4e4c9d2!2sEJM%20Cardenas%20SAC!5e1!3m2!1ses!2spe!4v1783575082702!5m2!1ses!2spe"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("name") || "No especificado";
                  const company = formData.get("company") || "No especificada";
                  const email = formData.get("email") || "No especificado";
                  const phoneInput = formData.get("phone") || "No especificado";
                  const message = formData.get("message") || "Sin mensaje";

                  // Format number for WA API (removing spaces and adding 51 prefix for Peru if missing)
                  let cleanPhone = PHONE.replace(/\D/g, "");
                  if (!cleanPhone.startsWith("51")) cleanPhone = "51" + cleanPhone;

                  const text = `Hola FRECMEC, me gustaría solicitar información:\n\n*Nombre:* ${name}\n*Empresa:* ${company}\n*Correo:* ${email}\n*Teléfono:* ${phoneInput}\n\n*Mensaje:*\n${message}`;
                  
                  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
                  window.open(waUrl, "_blank");
                }} className="space-y-6">
                  <FieldGroup className="grid grid-cols-2 gap-x-2 gap-y-6">
                    <Field>
                      <FieldLabel htmlFor="name">Nombre completo</FieldLabel>
                      <Input id="name" name="name" placeholder="Ej. Juan Pérez" required />
                    </Field>
                    <Field>
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" name="company" placeholder="Nombre de tu empresa" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Correo corporativo</FieldLabel>
                      <Input id="email" name="email" type="email" placeholder="juan@empresa.com" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Teléfono</FieldLabel>
                      <Input id="phone" name="phone" type="tel" placeholder="+51 999 999 999" />
                    </Field>
                    <Field className="col-span-2">
                      <FieldLabel htmlFor="message">Mensaje o requerimiento</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                        className="min-h-32"
                        required
                      />
                    </Field>
                  </FieldGroup>
                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensaje por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
