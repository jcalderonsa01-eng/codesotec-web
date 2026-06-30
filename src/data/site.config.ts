import type { SiteConfig } from "./types";

/**
 * Configuración global del sitio — ÚNICA fuente de verdad de marca y contacto.
 */
export const SITE: SiteConfig = {
  brand: {
    name: "Codesotec",
    suffix: "",
  },

  email: "ventas@codesotec.com",
  phone: "+(51) 997441958",
  phoneHref: "tel:+51997441958",
  address: "Calle Ficaria 3856 - Urbanización Las Palmeras, Los Olivos",
  phones: ["+(51) 997441958", "+(51) 979 890 845", "(01) 7702212"],
  schedule: "Lunes - Sábados · 9.00 hrs - 19.00 hrs",

  languages: [
    { code: "EN", active: false },
    { code: "ES", active: true },
  ],

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Productos", href: "/productos" },
    { label: "Partners", href: "/partners" },
  ],

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/codesotec", external: true },
    { label: "GitHub", href: "https://github.com/codesotec", external: true },
    { label: "Instagram", href: "https://instagram.com/codesotec", external: true },
    { label: "X / Twitter", href: "https://x.com/codesotec", external: true },
    { label: "Dribbble", href: "https://dribbble.com/codesotec", external: true },
  ],

  legal: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],

  copyright: "© 2018 – 2026 All rights reserved. Codesotec Ltd.",
};
