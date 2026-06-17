import type { Animation, AnimationFactory } from "./types";
import { $ } from "../dom";
import { SELECTORS, CSS_CLASS, EVENTS } from "../constants";

/**
 * Intro del hero: al recibir `loaded`, añade `.in` para que el CSS revele
 * el titular letra a letra. La transición la owna el CSS (scoped en Hero).
 */
export const createHeroIntro: AnimationFactory = (): Animation => ({
  name: "heroIntro",
  reducedMotion: "ignore",

  init({ gsap, root, onCleanup }) {
    const hero = $(SELECTORS.hero, root);
    if (!hero) return;

    const reveal = () => {
      hero.classList.add(CSS_CLASS.heroIn);

      // Animación para los blobs de fondo
      const blobs = hero.querySelectorAll("[data-blob]");
      gsap.from(blobs, {
        scale: 0.8,
        opacity: 0,
        duration: 2.5,
        stagger: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener(EVENTS.loaded, reveal, { once: true });
    onCleanup(() => window.removeEventListener(EVENTS.loaded, reveal));
  },
});
