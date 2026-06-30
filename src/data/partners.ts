export interface Partner {
  name: string;
  category: string;
  description: string;
  accent: string;
  logo?: string; // simple-icons slug
}

export const PARTNERS: Partner[] = [
  // Hardware
  { name: "Lenovo",    category: "Hardware · Servidores",          description: "Soluciones de computo empresarial, servidores ThinkSystem y estaciones de trabajo de alto rendimiento.",  accent: "#e60012", logo: "lenovo" },
  { name: "Dell",      category: "Hardware · Infraestructura",     description: "Infraestructura TI completa: servidores PowerEdge, almacenamiento y soluciones de virtualizacion.",       accent: "#007db8", logo: "dell" },
  { name: "ASUS",      category: "Hardware · Networking",          description: "Equipos de networking empresarial, routers, switches y dispositivos de computo profesional.",              accent: "#00539b", logo: "asus" },
  { name: "Acer",      category: "Hardware · Computo",             description: "Computadoras, laptops y monitores para entornos corporativos con soporte empresarial dedicado.",          accent: "#83b81a", logo: "acer" },
  { name: "HP",        category: "Hardware · Impresion",           description: "Equipos de impresion, laptops EliteBook y soluciones de gestion documental para empresas.",               accent: "#0096d6", logo: "hp" },
  { name: "Advance",   category: "Hardware · Perifericos",         description: "Perifericos y accesorios tecnologicos para el mercado corporativo latinoamericano.",                      accent: "#f47920" },
  // Displays
  { name: "LG",        category: "Displays · Signage",             description: "Monitores profesionales, pantallas de senalizacion digital y soluciones de visualizacion empresarial.",   accent: "#a50034", logo: "lg" },
  { name: "Samsung",   category: "Displays · Movil",               description: "Dispositivos moviles corporativos, monitores profesionales y pantallas interactivas.",                    accent: "#1428a0", logo: "samsung" },
  { name: "AOC",       category: "Displays · Monitores",           description: "Monitores de alta resolucion para oficina y uso profesional con tecnologia de panel avanzada.",          accent: "#d40000" },
  { name: "ViewSonic", category: "Displays · Proyeccion",          description: "Monitores, proyectores y pantallas interactivas para educacion y entornos corporativos.",                accent: "#ff6600", logo: "viewsonic" },
  // AV & Perifericos
  { name: "Sony",      category: "AV · Proyeccion",                description: "Equipos audiovisuales profesionales, proyectores de alta resolucion y soluciones de presentacion.",       accent: "#ffffff", logo: "sony" },
  { name: "Logitech",  category: "Perifericos · Videoconferencia", description: "Dispositivos de videoconferencia, teclados, ratones y accesorios para espacios de trabajo modernos.",    accent: "#00b3e6", logo: "logitech" },
  { name: "Jabra",     category: "Audio · Conferencia",            description: "Soluciones de audio profesional, auriculares y dispositivos de conferencia para empresas.",               accent: "#009fe3", logo: "jabra" },
  { name: "Poly",      category: "Audio · Videoconferencia",       description: "Equipos de videoconferencia, headsets y soluciones de comunicacion unificada empresarial.",               accent: "#d4010d", logo: "poly" },
  { name: "JBL",       category: "Audio · Portatil",               description: "Altavoces y accesorios de audio de alta calidad para entornos profesionales y presentaciones.",          accent: "#f37021", logo: "jbl" },
  { name: "Creative",  category: "Audio · Perifericos",            description: "Soluciones de sonido, auriculares y accesorios multimedia para el entorno corporativo.",                 accent: "#ef3e23", logo: "creativetechnology" },
  { name: "Klipxtreme",category: "Audio · Accesorios",             description: "Accesorios y perifericos de audio con excelente relacion calidad-precio para el mercado empresarial.",    accent: "#00a651" },
  // Impresion
  { name: "Epson",     category: "Impresion · Proyeccion",         description: "Impresoras, proyectores y escaneres de alta precision para entornos de oficina y presentaciones.",        accent: "#003087", logo: "epson" },
  { name: "Xerox",     category: "Impresion · Documental",         description: "Soluciones de impresion y gestion documental para empresas de todos los tamanos.",                       accent: "#e32119", logo: "xerox" },
  { name: "Brother",   category: "Impresion · Oficina",            description: "Impresoras laser y de etiquetas con soluciones de conectividad para entornos de oficina modernos.",       accent: "#00adef", logo: "brother" },
  { name: "Kyocera",   category: "Impresion · Multifuncional",     description: "Equipos multifuncionales de largo ciclo de vida con bajo costo por pagina para empresas.",               accent: "#e30614", logo: "kyocera" },
  // UPS & Energia
  { name: "APC",       category: "UPS · Energia",                  description: "Soluciones de alimentacion ininterrumpida, PDU y proteccion energetica para infraestructura critica.",   accent: "#73af3e", logo: "apc" },
  { name: "Forza",     category: "UPS · Energia",                  description: "UPS y reguladores de voltaje para proteger equipos electronicos en entornos corporativos.",              accent: "#003087" },
  { name: "Vertiv",    category: "Infraestructura · Energia",      description: "Soluciones criticas de infraestructura digital: energia, enfriamiento y gestion de TI.",                 accent: "#e4002b", logo: "vertiv" },
  { name: "CDP",       category: "UPS · Energia",                  description: "Unidades de poder ininterrumpible y supresores de voltaje para proteccion de equipos.",                  accent: "#0050a0" },
  // Networking
  { name: "Aruba",     category: "Networking · WiFi",              description: "Soluciones de red inalambrica empresarial, switching y seguridad de acceso para organizaciones.",        accent: "#ff8300", logo: "aruba" },
  { name: "Cisco",     category: "Networking · Seguridad",         description: "Infraestructura de red, switches, routers y soluciones de seguridad para empresas.",                    accent: "#1ba0d7", logo: "cisco" },
  { name: "D-Link",    category: "Networking · SMB",               description: "Equipos de red para pequenas y medianas empresas: switches, access points y routers.",                   accent: "#0070bb", logo: "dlink" },
  { name: "MikroTik",  category: "Networking · Routers",           description: "Routers y switches de alto rendimiento con sistema operativo RouterOS para redes avanzadas.",            accent: "#e31937", logo: "mikrotik" },
  { name: "Targus",    category: "Accesorios · Movilidad",         description: "Maletines, hubs USB-C y accesorios de movilidad para profesionales en entornos corporativos.",           accent: "#003087" },
  { name: "Gnius",     category: "Perifericos · Oficina",          description: "Teclados, ratones y accesorios de computo para entornos de oficina a precios competitivos.",             accent: "#0066b3" },
  { name: "Xtech",     category: "Perifericos · Accesorios",       description: "Amplia gama de perifericos y accesorios tecnologicos para el mercado corporativo.",                      accent: "#00b4d8" },
  // Almacenamiento
  { name: "Kingston",  category: "Almacenamiento · Memoria",       description: "Memorias RAM, unidades SSD y soluciones de almacenamiento flash para servidores y estaciones.",          accent: "#d4222a", logo: "kingstontechnology" },
  { name: "Seagate",   category: "Almacenamiento · HDD/SSD",       description: "Discos duros, SSD y soluciones de almacenamiento empresarial de alta capacidad y rendimiento.",         accent: "#14c04d", logo: "seagate" },
  { name: "WD",        category: "Almacenamiento · NAS",           description: "Soluciones de almacenamiento Western Digital para NAS empresarial, SSD y discos de alto rendimiento.",  accent: "#007fc0", logo: "westerndigital" },
  { name: "TeamGroup", category: "Almacenamiento · Memoria",       description: "Memorias RAM y SSD de alto rendimiento para servidores y estaciones de trabajo corporativas.",           accent: "#e4002b" },
  // Seguridad / CCTV
  { name: "Dahua",     category: "Seguridad · CCTV",               description: "Camaras IP, NVR y soluciones de videovigilancia inteligente para instalaciones empresariales.",         accent: "#e4002b" },
  { name: "Hikvision", category: "Seguridad · CCTV",               description: "Sistemas de videovigilancia, control de acceso y seguridad electronica para empresas y gobierno.",       accent: "#d00000" },
  { name: "Axis",      category: "Seguridad · Videovigilancia",    description: "Camaras de red y soluciones de video inteligente con analitica avanzada para entornos criticos.",        accent: "#5a9bd5" },
  { name: "Teros",     category: "Accesorios · Computo",           description: "Accesorios de computo, fundas y perifericos de calidad para entornos profesionales.",                   accent: "#0060a9" },
  { name: "Elise",     category: "Networking · Accesorios",        description: "Soluciones de conectividad y accesorios de red para infraestructuras empresariales.",                   accent: "#006eb6" },
];
