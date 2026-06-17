import type { AnimationFactory } from "./types";
import { createPreloader } from "./preloader";
import { createHeroIntro } from "./heroIntro";
import { createNavScroll } from "./navScroll";
import { createMobileMenu } from "./mobileMenu";
import { createReveal } from "./reveal";
import { createSignalReveal } from "./signalReveal";
import { createCounters } from "./counters";
import { createHeroParallax } from "./heroParallax";
import { createMagnetic } from "./magnetic";

/**
 * Único punto de extensión de la capa de animación.
 * Añadir un comportamiento = añadir una factory aquí (Open/Closed).
 * El orden importa: preloader resuelve → heroIntro reacciona al evento.
 */
export const animationRegistry: readonly AnimationFactory[] = [
  createPreloader,
  createHeroIntro,
  createNavScroll,
  createMobileMenu,
  createReveal,
  createSignalReveal,
  createCounters,
  createHeroParallax,
  createMagnetic,
];
