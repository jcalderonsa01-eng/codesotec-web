import type { Animation, AnimationFactory } from "./types";
import { $ } from "../dom";
import { SELECTORS, CSS_CLASS } from "../constants";
import { ScrollTrigger } from "./gsap";

/**
 * Reveal línea a línea del titular "signal". ScrollTrigger solo dispara la
 * clase `.in`; el CSS scoped de la sección anima cada `.reveal-line > span`.
 */
export const createSignalReveal: AnimationFactory = (): Animation => ({
  name: "signalReveal",
  reducedMotion: "skip",

  init({ root }) {
    const signal = $(SELECTORS.signal, root);
    if (!signal) return;

    ScrollTrigger.create({
      trigger: signal,
      start: "top 75%",
      once: true,
      onEnter: () => signal.classList.add(CSS_CLASS.signalIn),
    });
  },
});
