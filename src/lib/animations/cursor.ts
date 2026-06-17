import type { Animation, AnimationFactory } from "./types";
import { $, $$ } from "../dom";
import { SELECTORS, CSS_CLASS } from "../constants";
import { isCoarsePointer } from "./reducedMotion";

/**
 * Cursor personalizado animado.
 *
 * Robusto por diseño:
 *  - El dot se posiciona con style.transform directo en cada pointermove
 *    (no depende de GSAP para aparecer → es visible desde el primer
 *    movimiento aunque GSAP falle).
 *  - El ring y la trail usan gsap.quickTo con un proxy {x,y} + onUpdate
 *    para mantener la sensación de inercia sin pisar el transform.
 *  - El cursor nativo solo se oculta cuando este módulo arranca OK
 *    (degradación elegante si JS falla).
 *  - En punteros coarse (táctil) no se inicializa.
 */
export const createCursor: AnimationFactory = (): Animation => ({
  name: "cursor",
  reducedMotion: "skip",

  init({ gsap, root, onCleanup }) {
    if (isCoarsePointer()) return;

    const dot = $(SELECTORS.cursorDot, root);
    const ring = $(SELECTORS.cursorRing, root);
    if (!dot || !ring) return;

    // Tamaño de cada elemento (debe coincidir con el CSS).
    const DOT = 12;
    const RING = 40;

    const placeDot = (x: number, y: number) => {
      dot.style.transform = `translate3d(${x - DOT / 2}px, ${y - DOT / 2}px, 0)`;
    };
    const placeRing = (x: number, y: number) => {
      ring.style.transform = `translate3d(${x - RING / 2}px, ${y - RING / 2}px, 0)`;
    };

    // Posición inicial = centro del viewport, para que sea visible sin esperar al mouse.
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    placeDot(initX, initY);
    placeRing(initX, initY);

    // GSAP quickTo: anima un proxy {x,y} y aplicamos el transform en onUpdate.
    // Fallback: si GSAP no está, escribir transform directo (sin lag).
    let ringX: (n: number) => void = (n) => placeRing(n, parseFloat(ring.dataset.y ?? initY));
    let ringY: (n: number) => void = (n) => placeRing(parseFloat(ring.dataset.x ?? initX), n);

    if (gsap?.quickTo) {
      const ringProxy = { x: initX, y: initY };
      ring.dataset.x = String(initX);
      ring.dataset.y = String(initY);
      const ringUpdate = () => placeRing(ringProxy.x, ringProxy.y);
      ringX = gsap.quickTo(ringProxy, "x", {
        duration: 0.22,
        ease: "power3",
        onUpdate: ringUpdate,
      });
      ringY = gsap.quickTo(ringProxy, "y", {
        duration: 0.22,
        ease: "power3",
        onUpdate: ringUpdate,
      });
    }

    // Confirmamos que el custom está vivo → ocultamos el cursor nativo.
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      // Dot: inmediato (sin lag).
      placeDot(e.clientX, e.clientY);
      // Ring: smooth.
      ringX(e.clientX);
      ringY(e.clientY);
      ring.dataset.x = String(e.clientX);
      ring.dataset.y = String(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const targets = $$(SELECTORS.cursorHover, root);
    const enter = () => {
      ring.classList.add(CSS_CLASS.cursorHover);
    };
    const leave = () => {
      ring.classList.remove(CSS_CLASS.cursorHover);
    };
    targets.forEach((t) => {
      t.addEventListener("mouseenter", enter);
      t.addEventListener("mouseleave", leave);
    });

    onCleanup(() => {
      window.removeEventListener("pointermove", onMove);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", enter);
        t.removeEventListener("mouseleave", leave);
      });
      document.documentElement.classList.remove("has-custom-cursor");
    });
  },
});
