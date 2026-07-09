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
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
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
              {NAV_LINKS.map((link) => (
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
              ))}
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
              <nav className="flex flex-col gap-2 mt-6 p-4">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Button
                      render={<Link href={link.href} />}
                      key={link.label}
                      variant={isActive ? "default" : "outline"}
                    >
                      {link.label}
                    </Button>
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
