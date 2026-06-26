export interface Partner {
  name: string;
  category: string;
  description: string;
  accent: string;
}

export const PARTNERS: Partner[] = [
  { name: "Lenovo",    category: "Hardware · Servidores",          description: "Soluciones de computo empresarial, servidores ThinkSystem y estaciones de trabajo de alto rendimiento.",  accent: "#e60012" },
  { name: "Dell",      category: "Hardware · Infraestructura",     description: "Infraestructura TI completa: servidores PowerEdge, almacenamiento y soluciones de virtualizacion.",       accent: "#007db8" },
  { name: "ASUS",      category: "Hardware · Networking",          description: "Equipos de networking empresarial, routers, switches y dispositivos de computo profesional.",              accent: "#00539b" },
  { name: "Acer",      category: "Hardware · Computo",             description: "Computadoras, laptops y monitores para entornos corporativos con soporte empresarial dedicado.",          accent: "#83b81a" },
  { name: "HP",        category: "Hardware · Impresion",           description: "Equipos de impresion, laptops EliteBook y soluciones de gestion documental para empresas.",               accent: "#0096d6" },
  { name: "Advance",   category: "Hardware · Perifericos",         description: "Perifericos y accesorios tecnologicos para el mercado corporativo latinoamericano.",                      accent: "#f47920" },
  { name: "LG",        category: "Displays · Signage",             description: "Monitores profesionales, pantallas de senalizacion digital y soluciones de visualizacion empresarial.",   accent: "#a50034" },
  { name: "Samsung",   category: "Displays · Movil",               description: "Dispositivos moviles corporativos, monitores profesionales y pantallas interactivas.",                    accent: "#1428a0" },
  { name: "Sony",      category: "AV · Proyeccion",                description: "Equipos audiovisuales profesionales, proyectores de alta resolucion y soluciones de presentacion.",       accent: "#ffffff" },
  { name: "Logitech",  category: "Perifericos · Videoconferencia", description: "Dispositivos de videoconferencia, teclados, ratones y accesorios para espacios de trabajo modernos.",    accent: "#00b3e6" },
  { name: "ViewSonic", category: "Displays · Proyeccion",          description: "Monitores, proyectores y pantallas interactivas para educacion y entornos corporativos.",                accent: "#ff6600" },
];
