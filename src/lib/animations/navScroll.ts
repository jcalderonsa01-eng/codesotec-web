import type { Animation, AnimationFactory } from "./types";
import { $ } from "../dom";
import { SELECTORS, CSS_CLASS } from "../constants";

/**
 * Scroll state del nav:
 * - `unified`: cuando el Hero sale del viewport → nav pasa a cápsula unificada.
 * - `scrolled`: fondo difuminado tras 40 px.
 * - `hide`: ocultar al bajar pasados 400 px.
 */
export const createNavScroll: AnimationFactory = (): Animation => ({
  name: "navScroll",
  reducedMotion: "ignore",

  init({ root, onCleanup }) {
    const nav = $(SELECTORS.nav, root);
    const hero = $(SELECTORS.hero, root);
    if (!nav) return;

    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // Fallback Infinity: si no existe [data-hero], asumimos que siempre estamos en él
      const heroBottom = hero?.getBoundingClientRect().bottom ?? Infinity;
      const belowHero = heroBottom <= 0;
      nav.classList.toggle(CSS_CLASS.navUnified, belowHero);
      nav.classList.toggle(CSS_CLASS.navScrolled, y > 40);

      lastY = y;
    };

    // Evaluar estado inicial (si la página carga con scroll)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  },
});
