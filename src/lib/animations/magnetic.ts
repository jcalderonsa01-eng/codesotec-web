import type { Animation, AnimationFactory } from "./types";
import { $$ } from "../dom";
import { SELECTORS } from "../constants";
import { isCoarsePointer } from "./reducedMotion";

/**
 * Efecto magnético: los `[data-magnetic]` se desplazan hacia el cursor y
 * vuelven a su sitio al salir. gsap.quickTo owna el transform (el CSS de
 * Button no transiciona transform para no duplicar el suavizado).
 */
export const createMagnetic: AnimationFactory = (): Animation => ({
  name: "magnetic",
  reducedMotion: "skip",

  init({ gsap, root, onCleanup }) {
    if (isCoarsePointer()) return;

    for (const el of $$(SELECTORS.magnetic, root)) {
      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.4);
        yTo((e.clientY - r.top - r.height / 2) * 0.5);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      onCleanup(() => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
    }
  },
});
