/**
 * Contrato DOM — el "seam" que desacopla markup de comportamiento.
 *
 * Los componentes .astro emiten estos hooks de forma declarativa.
 * Las animaciones (lib/animations/*) SOLO leen estos selectores.
 * Renombrar un hook = cambiar un único archivo.
 */

/** Atributos data-* que los componentes emiten. */
export const DATA = {
  reveal: "data-reveal",
  delay: "data-d",
  magnetic: "data-magnetic",
} as const;

/** Selectores que las animaciones consultan. */
export const SELECTORS = {
  preloader: "[data-preloader]",
  preloaderPct: "[data-preloader-pct]",
  hero: "[data-hero]",
  blob: "[data-blob]",
  signal: "[data-signal]",
  nav: "[data-nav]",
  burger: "[data-burger]",
  mobileMenu: "[data-mobile-menu]",
  reveal: `[${DATA.reveal}]`,
  magnetic: `[${DATA.magnetic}]`,
} as const;

/** Clases que el JS conmuta (estilizadas en el CSS de cada componente). */
export const CSS_CLASS = {
  preloaderDone: "done",
  heroIn: "in",
  revealIn: "in",
  signalIn: "in",
  navScrolled: "scrolled",
  navUnified: "unified",
  menuOpen: "open",
  burgerActive: "x",
  noScroll: "no-scroll",
} as const;

/** Eventos de dominio (desacoplan el handshake entre animaciones). */
export const EVENTS = {
  /** El preloader terminó → el hero puede entrar. */
  loaded: "codesotec:loaded",
} as const;
