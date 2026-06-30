export interface NosotrosSection {
  id: string;
  title: string;
  body: string;
  image: { src: string; alt: string };
}

export interface NosotrosData {
  banner: { heading: string; sub: string; logo: string; image: { src: string; alt: string } };
  sections: NosotrosSection[];
}

export const NOSOTROS: NosotrosData = {
  banner: {
    heading: "+5 años contigo",
    sub: "Tecnología que impulsa el crecimiento de empresas líderes en Latinoamérica.",
    logo: "/logo.png",
    image: {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&auto=format&fit=crop",
      alt: "Equipo tecnológico trabajando en oficina moderna",
    },
  },
  sections: [
    {
      id: "descripcion",
      title: "Descripción de la empresa",
      body: "Somos una empresa especializada en la integración, provisión y desarrollo de soluciones tecnológicas dirigidas a medianas y grandes empresas. Nuestro equipo se dedica a ofrecer soluciones estables y de alto rendimiento que son escalables en el tiempo. Nos comprometemos a agregar valor a los modelos de negocio de nuestros clientes, maximizando beneficios y optimizando la productividad y rentabilidad.",
      image: {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop",
        alt: "Profesional analizando datos en pantalla",
      },
    },
    {
      id: "mision",
      title: "Misión",
      body: "Desarrollar, proporcionar e integrar soluciones y servicios de TI que generen un valor significativo a las diversas unidades de negocio de clientes.",
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop",
        alt: "Equipo colaborando en sala de reuniones",
      },
    },
    {
      id: "vision",
      title: "Visión",
      body: "Ser reconocidos como líderes en el mercado peruano, estableciendo relaciones duraderas con nuestros clientes, proveedores y colaboradores.",
      image: {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop",
        alt: "Red digital futurista representando tecnología avanzada",
      },
    },
  ],
};
