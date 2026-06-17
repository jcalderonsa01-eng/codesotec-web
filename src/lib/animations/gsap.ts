/**
 * Punto único de import y registro de GSAP.
 * Importar solo lo necesario (core + ScrollTrigger) mantiene el bundle ligero
 * y centraliza el registerPlugin (no se repite por módulo).
 */
import gsapCore from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsapCore.registerPlugin(ScrollTrigger);

export const gsap = gsapCore;
export { ScrollTrigger };

/** Tipo del instance de GSAP, para tipar el AnimationContext. */
export type Gsap = typeof gsapCore;
