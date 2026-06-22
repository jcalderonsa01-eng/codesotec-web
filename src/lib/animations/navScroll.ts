import type { Animation, AnimationFactory } from "./types";
import { $ } from "../dom";
import { SELECTORS, CSS_CLASS } from "../constants";

/**
 * Scroll state del nav:
 * - `unified`: cuando el Hero sale del viewport → nav pasa a cápsula unificada.
 * - `scrolled`: fondo difuminado tras 40 px.
 */
export const createNavScroll: AnimationFactory = (): Animation => ({
  name: "navScroll",
  reducedMotion: "ignore",

  init({ root, onCleanup }) {
    const nav = $(SELECTORS.nav, root);
    const hero = $(SELECTORS.hero, root);
    if (!nav) return;

    const onScroll = () => {
      const y = window.scrollY;

      const heroBottom = hero?.getBoundingClientRect().bottom ?? Infinity;
      const belowHero = heroBottom <= 0;
      nav.classList.toggle(CSS_CLASS.navUnified, belowHero);
      nav.classList.toggle(CSS_CLASS.navScrolled, y > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  },
});
