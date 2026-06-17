import type { Animation, AnimationFactory } from "./types";
import { $ } from "../dom";
import { SELECTORS, CSS_CLASS, EVENTS } from "../constants";

/**
 * Preloader: cuenta de 0→100%, se desvanece y emite el evento `loaded`.
 * El handshake con el hero es por evento (no por acoplamiento temporal).
 */
export const createPreloader: AnimationFactory = (): Animation => ({
  name: "preloader",
  reducedMotion: "ignore",

  init({ gsap, root, reducedMotion, onCleanup }) {
    const loader = $(SELECTORS.preloader, root);
    const pct = $(SELECTORS.preloaderPct, root);

    const finish = () => {
      loader?.classList.add(CSS_CLASS.preloaderDone);
      window.dispatchEvent(new CustomEvent(EVENTS.loaded));
    };

    // Sin loader o con movimiento reducido: resolver ya, pero diferido
    // (rAF) para que los listeners registrados más tarde reciban el evento.
    if (!loader || reducedMotion) {
      if (pct) pct.textContent = "100%";
      requestAnimationFrame(finish);
      return;
    }

    const progress = { v: 0 };
    const tween = gsap.to(progress, {
      v: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (pct) pct.textContent = `${Math.round(progress.v)}%`;
      },
      onComplete: () => gsap.delayedCall(0.6, finish),
    });

    onCleanup(() => tween.kill());
  },
});
