import type { Animation, AnimationFactory } from "./types";
import { $$ } from "../dom";
import { SELECTORS } from "../constants";

/**
 * Parallax de los blobs del hero según la posición del puntero.
 * Se anima `marginLeft/marginTop` (no `transform`) para no chocar con las
 * keyframes `drift*` que ya animan el transform de cada blob.
 */
export const createHeroParallax: AnimationFactory = (): Animation => ({
  name: "heroParallax",
  reducedMotion: "skip",

  init({ gsap, root, onCleanup }) {
    const blobs = $$(SELECTORS.blob, root);
    if (!blobs.length) return;

    const movers = blobs.map((blob, i) => ({
      factor: (i + 1) * 14,
      x: gsap.quickTo(blob, "marginLeft", { duration: 0.6, ease: "power2.out" }),
      y: gsap.quickTo(blob, "marginTop", { duration: 0.6, ease: "power2.out" }),
    }));

    const onMove = (e: PointerEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      for (const m of movers) {
        m.x(cx * m.factor);
        m.y(cy * m.factor);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    onCleanup(() => window.removeEventListener("pointermove", onMove));
  },
});
