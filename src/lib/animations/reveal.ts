import type { Animation, AnimationFactory } from "./types";
import { $$ } from "../dom";
import { SELECTORS } from "../constants";
import { ScrollTrigger } from "./gsap";

/**
 * Reveal al entrar en viewport para todos los `[data-reveal]`.
 * Reemplaza el IntersectionObserver original por `ScrollTrigger.batch`,
 * agrupando elementos cercanos para un stagger natural.
 *
 * GSAP toma el control total y se anula la transición CSS para evitar
 * doble animación. El estado inicial oculto lo provee el CSS global.
 */
export const createReveal: AnimationFactory = (): Animation => ({
  name: "reveal",
  reducedMotion: "skip",

  init({ gsap, root }) {
    const els = $$(SELECTORS.reveal, root);
    if (!els.length) return;

    els.forEach((el) => (el.style.transition = "none"));

    ScrollTrigger.batch(SELECTORS.reveal, {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: true,
        }),
    });
  },
});
