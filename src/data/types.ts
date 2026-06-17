/**
 * Contratos de datos del sitio.
 * Estas interfaces son la "forma" sobre la que dependen los componentes
 * (Dependency Inversion): las secciones consumen tipos, no arrays concretos.
 */

/** Proyecto del portafolio. */
export interface WorkItem {
  /** Título del proyecto. */
  readonly title: string;
  /** Etiquetas/servicios (UX/UI, Development, …). */
  readonly tags: readonly string[];
  /** Descripción breve. */
  readonly description: string;
  /** Gradiente de la portada: [color inicial, color final]. */
  readonly gradient: readonly [from: string, to: string];
  /** Destino al hacer click (por defecto "#contact"). */
  readonly href?: string;
}

/** Premio / reconocimiento (marquesina). */
export interface AwardItem {
  /** Nombre del premio o posición. */
  readonly title: string;
  /** Fuente y año (ej. "CSSDA · 2025"). */
  readonly source: string;
}

/** Estadística con contador animado. */
export interface StatItem {
  /** Valor numérico objetivo del contador. */
  readonly value: number;
  /** Sufijo (ej. "×"). */
  readonly suffix: string;
  /** Etiqueta principal. */
  readonly label: string;
  /** Subtítulo (mono). */
  readonly sub: string;
}

/** Enlace de navegación / pie / social. */
export interface NavLink {
  readonly label: string;
  readonly href: string;
  /** Abre en pestaña nueva (enlaces externos). */
  readonly external?: boolean;
}

/** Configuración global del sitio (marca, contacto, navegación). */
export interface SiteConfig {
  readonly brand: {
    readonly name: string;
    readonly suffix: string;
  };
  readonly email: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly address: string;
  readonly languages: readonly { readonly code: string; readonly active: boolean }[];
  readonly nav: readonly NavLink[];
  readonly social: readonly NavLink[];
  readonly legal: readonly NavLink[];
  readonly reviews: {
    readonly count: number;
    readonly platform: string;
  };
  readonly copyright: string;
}
