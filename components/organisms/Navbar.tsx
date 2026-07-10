"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Download02Icon } from "@hugeicons/core-free-icons";
import { Logo } from "../atoms/Logo";
import { Button } from "../ui/button";
import { SmartPhone01Icon } from "hugeicons-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { SERVICES } from "@/constants";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { cn } from "@/lib/utils";
import Container from "../ui/container";
import { Text } from "../ui/text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // All pages start with a dark Hero or PageHeader, so text should be white until scrolled
  const isLightText = !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-3",
        isScrolled
          ? "bg-background"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo isLight={isLightText} variant="navbar" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map((link) => {
                if (link.label === "Servicios") {
                  return (
                    <NavigationMenuItem key={link.label}>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent",
                          isLightText
                            ? "text-white/90 hover:!bg-accent/10 hover:text-white focus:!bg-accent/10 focus:text-white data-[state=open]:!bg-accent/20 data-[state=open]:text-white data-[active=true]:!bg-accent/20 data-[active=true]:text-white"
                            : "text-foreground hover:bg-accent/10 focus:bg-accent/10 data-[state=open]:bg-accent/10 data-[active=true]:bg-accent/10"
                        )}
                      >
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {SERVICES.map((service) => (
                          <ListItem
                            key={service.title}
                            title={service.title}
                            href={`/servicios/${service.slug}`}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      render={<Link href={link.href} />}
                      data-active={pathname === link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent",
                        isLightText
                          ? "text-white/90 hover:!bg-accent/10 hover:text-white focus:!bg-accent/10 focus:text-white data-[active=true]:!bg-accent/20 data-[active=true]:text-white"
                          : "text-foreground hover:bg-accent/10 focus:bg-accent/10 data-[active=true]:bg-accent/10"
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-1">
            <Button
              render={<Link href="#" />}
              variant={isLightText ? "outline" : "secondary"}
              className={cn(isLightText && "text-white border-white/30 hover:bg-white/10 bg-transparent hover:text-white")}
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add real PDF link
              }}
            >
              <HugeiconsIcon icon={Download02Icon} />
              Brochure
            </Button>
            <Button
              render={<Link href="/contacto" />}
              variant={isLightText ? "outline" : "default"}
            >
              <SmartPhone01Icon />
              Cotizar
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className={isLightText ? "text-white hover:bg-white/20 hover:text-white" : ""} />
            }>
              <HugeiconsIcon icon={Menu01Icon} size={28} />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
              <SheetHeader>
                <SheetTitle>
                  <Logo isLight={false} />
                </SheetTitle>
              </SheetHeader>
              <nav className="grid gap-2 px-4">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;

                  if (link.label === "Servicios") {
                    return (
                      <Accordion key={link.label}>
                        <AccordionItem value="servicios">
                          <AccordionTrigger>
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            {SERVICES.map((service) => (
                              <Link href={`/servicios/${service.slug}`}>
                                <Button
                                  key={service.title}
                                  variant="ghost"
                                  className="w-full justify-start truncate"
                                >
                                  {service.title}
                                </Button>
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  }

                  return (
                    <Link href={link.href}>
                      <Button
                        key={link.label}
                        variant={isActive ? "default" : "outline"}
                        className="justify-start w-full"
                      >{link.label}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
              <SheetFooter>
                <Button
                  render={<Link href="#" />}
                  variant="outline"
                >
                  <HugeiconsIcon icon={Download02Icon} />
                  Descargar Brochure
                </Button>
                <Button
                  render={<Link href="/contacto" />}
                  variant="default"
                >
                  <SmartPhone01Icon />
                  Cotizar Ahora
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <NavigationMenuLink
      render={<Link href={href} />}
      className="grid"
      {...props}
    >
      {title}
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
