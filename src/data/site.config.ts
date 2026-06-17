import type { SiteConfig } from "./types";

/**
 * Configuración global del sitio — ÚNICA fuente de verdad de marca y contacto.
 * TODO: reemplazar los datos placeholder por los reales de Codesotec.
 */
export const SITE: SiteConfig = {
  brand: {
    name: "Codesotec",
    suffix: "",
  },

  email: "hello@codesotec.com", // TODO: dato real
  phone: "+1 000 000 0000", // TODO: dato real
  phoneHref: "tel:+10000000000", // TODO: dato real
  address: "Remote-first · LATAM", // TODO: dato real

  languages: [
    { code: "EN", active: false },
    { code: "ES", active: true },
  ],

  nav: [
    { label: "Inicio", href: "#top" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Ofertas del Mes", href: "#ofertas" },
    { label: "Servicios", href: "#servicios" },
    { label: "Leasing/Alquiler", href: "#leasing" },
    { label: "Contacto", href: "#contacto" },
  ],

  social: [
    { label: "LinkedIn", href: "#", external: true },
    { label: "GitHub", href: "#", external: true },
    { label: "Instagram", href: "#", external: true },
    { label: "X / Twitter", href: "#", external: true },
    { label: "Dribbble", href: "#", external: true },
  ],

  legal: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],

  reviews: {
    count: 14,
    platform: "Clutch",
  },

  copyright: "© 2018 – 2026 All rights reserved. Codesotec Ltd.",
};

/** Enlaces del pie: primeras 3 opciones de nav + Blog + las restantes. */
export const FOOTER_MENU: SiteConfig["nav"] = [
  ...SITE.nav.slice(0, 3),
  { label: "Blog", href: "#" },
  ...SITE.nav.slice(3),
];
