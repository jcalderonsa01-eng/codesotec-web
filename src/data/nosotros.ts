export interface NosotrosSection {
  id: string;
  title: string;
  body: string;
  image: { src: string; alt: string };
}

export interface NosotrosData {
  banner: { heading: string; sub: string; image: { src: string; alt: string } };
  sections: NosotrosSection[];
}

export const NOSOTROS: NosotrosData = {
  banner: {
    heading: "+5 años contigo",
    sub: "Tecnología que impulsa el crecimiento de empresas líderes en Latinoamérica.",
    image: {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&auto=format&fit=crop",
      alt: "Equipo tecnológico trabajando en oficina moderna",
    },
  },
  sections: [
    {
      id: "descripcion",
      title: "Descripción de la empresa",
      body: "Codesotec es una consultora tecnológica peruana especializada en integración, desarrollo y provisión de soluciones TI de alto rendimiento. Desde 2018 acompañamos a medianas y grandes empresas en su transformación digital, diseñando arquitecturas escalables que maximizan la eficiencia operativa y reducen los costos de infraestructura.",
      image: {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop",
        alt: "Profesional analizando datos en pantalla",
      },
    },
    {
      id: "mision",
      title: "Misión",
      body: "Empoderar a las organizaciones con tecnología de vanguardia, entregando soluciones robustas, seguras y adaptadas a cada contexto de negocio. Nos comprometemos a ser el aliado estratégico que convierte los desafíos tecnológicos en ventajas competitivas reales y medibles.",
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop",
        alt: "Equipo colaborando en sala de reuniones",
      },
    },
    {
      id: "vision",
      title: "Visión",
      body: "Ser la consultora tecnológica de referencia en Latinoamérica, reconocida por la excelencia técnica, la innovación continua y el impacto positivo que generamos en los negocios de nuestros clientes. Aspiramos a construir un ecosistema digital más eficiente, conectado y sostenible.",
      image: {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop",
        alt: "Red digital futurista representando tecnología avanzada",
      },
    },
  ],
};
