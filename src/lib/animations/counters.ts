import type { Animation, AnimationFactory } from "./types";
import { $$ } from "../dom";
import { SELECTORS, DATA } from "../constants";
import { ScrollTrigger } from "./gsap";

/**
 * Contadores count-up para `[data-count]` al entrar en viewport.
 * Con movimiento reducido (degrade) muestra el valor final sin animar.
 */
export const createCounters: AnimationFactory = (): Animation => ({
  name: "counters",
  reducedMotion: "degrade",

  init({ gsap, root, reducedMotion }) {
    const els = $$(SELECTORS.count, root);

    els.forEach((el) => {
      const target = Number(el.getAttribute(DATA.count) ?? "0");
      const suffix = el.getAttribute(DATA.suffix) ?? "";

      if (reducedMotion) {
        el.textContent = `${target}${suffix}`;
        return;
      }

      const proxy = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(proxy, {
            v: target,
            duration: 1.1,
            ease: "power2.out",
            onUpdate: () => (el.textContent = `${Math.round(proxy.v)}${suffix}`),
          }),
      });
    });
  },
});
