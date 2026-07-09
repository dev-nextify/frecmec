import { Logo } from "../atoms/Logo";
import { SocialButton } from "../molecules/SocialButton";
import { BUSINESS_NAME, ABBREVIATION_NAME, CONTACT_DATA, PHONE, ADRESS } from "@/constants";
import Link from "next/link";
import { Text } from "../ui/text";
import Container from "../ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted pt-20 pb-10 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Logo />
            <Text variant="muted">
              {BUSINESS_NAME}. Expertos en fabricación y recuperación de componentes mecánicos para la industria.
            </Text>
            <div className="flex gap-1">
              <SocialButton href="#" iconName="Facebook01Icon" label="Facebook" />
              <SocialButton href="#" iconName="Linkedin01Icon" label="LinkedIn" />
              <SocialButton href="#" iconName="InstagramIcon" label="Instagram" />
            </div>
          </div>

          <div>
            <Text variant="h4" className="mb-6">Enlaces Rápidos</Text>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Text variant="h4" className="mb-6">Servicios</Text>
            <ul className="flex flex-col gap-1">
              <li className="text-muted-foreground text-sm">Fabricación de Componentes</li>
              <li className="text-muted-foreground text-sm">Recuperación de Piezas</li>
              <li className="text-muted-foreground text-sm">Ferretería Industrial</li>
              <li className="text-muted-foreground text-sm">Asesoría Técnica</li>
            </ul>
          </div>

          <div>
            <Text variant="h4" className="mb-6">Contacto</Text>
            <ul className="flex flex-col gap-1">
              <li className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="font-medium text-foreground">Dir:</span> {ADRESS}
              </li>
              <li className="text-muted-foreground text-sm flex items-center gap-2">
                <span className="font-medium text-foreground">Tel:</span> {PHONE}
              </li>
              <li className="text-muted-foreground text-sm flex items-center gap-2">
                <span className="font-medium text-foreground">Email:</span> {CONTACT_DATA.email}
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Text variant="muted">
            &copy; {currentYear} {ABBREVIATION_NAME}. Todos los derechos reservados.
          </Text>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Políticas de Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
