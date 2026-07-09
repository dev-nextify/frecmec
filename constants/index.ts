const ADRESS: string = "AV. NICOLAS AYLLON KM. 15.5 MZA. A LOTE 23 KM. 15.5 - ATE";
const PHONE: string = "910137958";
const BUSINESS_NAME: string = "FABRICACIÓN Y RECUPERACIÓN DE COMPONENTES MECÁNICOS";
const ABBREVIATION_NAME: string = "FRECMEC S.A.C";
const RUC: string = "20607050924";
const GOOGLE_MAPS_URL: string = "https://maps.app.goo.gl/5sULmiafL6TfjGQJ8";
const LOGO_URL: string = "";
const CUSTOMERS: { name: string, logo_url?: string, website_url?: string, invert?: boolean }[] = [{
    name: "FRUMSA S.R.L",
    logo_url: "https://frumsaperu.com/web/image/res.company/6/logo?unique=e312c49",
    website_url: "https://frumsaperu.com"
}, {
    name: "JEBES Y ANEXOS S.R.LTDA",
    logo_url: "",
    website_url: ""
}, {
    name: "R&CH MECANICA INDUSTRIAL Y PROYECTOS SOCIEDAD ANONIMA CERRADA",
    logo_url: "https://rych.com.pe/wp-content/uploads/2018/12/LOGO-RYCH.png",
    website_url: "https://rych.com.pe"
}, {
    name: "MANUFACTURA TECNI STYLE E.I.R.L",
    logo_url: "https://tecni-style.com/wp-content/uploads/2022/09/TECNISTYLE_LOGO-2048x1035.png",
    website_url: "https://tecni-style.com"
}, {
    name: "WEST INGENIERIA Y CONSTRUCCION S.A.C",
    logo_url: "",
    website_url: "https://www.westingenieros.com/"
}, {
    name: "INDUSTRIAL BETA S.A.",
    logo_url: ""
}, {
    name: "INTECH S.A",
    logo_url: "https://www.intech-sa.com/wp-content/uploads/2022/02/LOGO-INTECH_2022_Negativo.png",
    website_url: "https://www.intech-sa.com",
    invert: true
}];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Especialistas en Fabricación y Recuperación Mecánica",
    subtitle: "Brindamos servicios de alta precisión y calidad en la rama metalmecánica. Experiencia, eficiencia y seguridad para la industria peruana.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    primaryCta: "Cotizar ahora",
    secondaryCta: "Descargar Brochure",
  },
  {
    id: 2,
    title: "Soluciones Integrales para la Industria",
    subtitle: "Maquinaria especializada y personal altamente calificado para resolver los desafíos de producción más exigentes.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
    primaryCta: "Conocer Servicios",
    secondaryCta: "Contáctanos",
  },
  {
    id: 3,
    title: "Innovación y Precisión Garantizada",
    subtitle: "Cumplimos con las tolerancias más estrictas para garantizar la operatividad continua de tu empresa.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    primaryCta: "Ver Proyectos",
    secondaryCta: "Solicitar Asesoría",
  }
];

export const HERO_DATA = {
  title: "Especialistas en Fabricación y Recuperación Mecánica",
  subtitle: "Brindamos servicios de alta precisión y calidad en la rama metalmecánica. Experiencia, eficiencia y seguridad para la industria peruana.",
  primaryCta: "Cotizar ahora",
  secondaryCta: "Descargar Brochure",
};

export const ABOUT_DATA = {
  title: "Sobre Nosotros",
  description: "Somos una empresa especializada, eficiente y experimentada en reparación, mejoras y fabricación de piezas industriales. Nuestro objetivo es cumplir con los más altos estándares de calidad, puntualidad y seguridad.",
  mission: "Brindar excelentes servicios de fabricación de alta precisión y calidad, garantizando seguridad, eficiencia y la total satisfacción de nuestros clientes.",
  vision: "Ser una empresa líder en el sector metalmecánico, reconocida por su innovación, puntualidad, calidad de servicio y sólido compromiso industrial.",
  values: [
    { title: "Calidad & Precisión", description: "Cumplimos con estrictas tolerancias en la fabricación de cada pieza." },
    { title: "Puntualidad", description: "Respetamos los tiempos de entrega para no detener tu producción." },
    { title: "Seguridad", description: "Garantizamos operaciones seguras y confiables en todos nuestros servicios." },
    { title: "Innovación", description: "Mejoramos continuamente nuestros procesos metalmecánicos." },
  ],
  stats: [
    { label: "Años de Experiencia", value: 15 },
    { label: "Proyectos Exitosos", value: 850 },
    { label: "Clientes Satisfechos", value: 120 },
  ]
};

export const SERVICES_DATA = [
  {
    id: "fabricacion",
    title: "Fabricación de Piezas Industriales",
    description: "Fabricamos piezas conforme a planos (acoples, poleas, engranajes, coronas, ejes, etc.) para industrias como la minera, papelera, automotriz y alimenticia.",
    iconName: "Settings02Icon",
    imageUrl: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "recuperacion",
    title: "Recuperación por Soldeo",
    description: "Recuperamos componentes mecánicos sometidos a desgaste severo mediante procesos especializados de soldeo, prolongando su vida útil.",
    iconName: "Wrench01Icon",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "mecanizado",
    title: "Mecanizado de Precisión",
    description: "Mecanizamos materiales como acero inoxidable, bronce, fundición gris, nylon, fibra de vidrio y aluminio con maquinaria especializada.",
    iconName: "DashboardSquare01Icon",
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
  }
];

export const MACHINES_DATA = [
  "Torno 1 m ½ - 2m",
  "Cepillo de codo – 350 mm de carrera",
  "Fresadora n°2 - 3",
  "Maquina de soldar",
  "Generadora",
  "Rectificadora cilíndrica"
];

export const MATERIALS_DATA = [
  "Acero Inoxidable", "Acero al Carbono", "Fundición Gris", 
  "Bronce y Aluminio", "Baquelita y Nylon", "Fibra de Vidrio y Caucho"
];

export const PIECES_DATA = [
  "Acoples y Poleas Dentadas", "Poleas en V y Polines", 
  "Todo tipo de Engranajes", "Ejes Estriados y Coronas", 
  "Bujes Cónicos y Bridas", "Piñón de Cadena e Injertos"
];

export const CONTACT_DATA = {
  title: "Contáctanos",
  description: "Estamos listos para ser tu aliado estratégico en la industria metalmecánica. Déjanos tus datos y te atenderemos a la brevedad.",
  email: "contacto@frecmec.com",
  schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM",
};

export { ADRESS, PHONE, BUSINESS_NAME, ABBREVIATION_NAME, RUC, GOOGLE_MAPS_URL, LOGO_URL, CUSTOMERS };