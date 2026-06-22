/**
 * Contratos de datos del sitio.
 * Estas interfaces son la "forma" sobre la que dependen los componentes
 * (Dependency Inversion): las secciones consumen tipos, no arrays concretos.
 */

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
  readonly phones: readonly string[];
  readonly schedule: string;
  readonly languages: readonly { readonly code: string; readonly active: boolean }[];
  readonly nav: readonly NavLink[];
  readonly social: readonly NavLink[];
  readonly legal: readonly NavLink[];
  readonly copyright: string;
}
