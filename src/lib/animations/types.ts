import type { Gsap } from "./gsap";

/**
 * Todo lo que una animación puede necesitar, INYECTADO por el manager.
 * Las animaciones dependen de esta abstracción, nunca de globals (DIP).
 */
export interface AnimationContext {
  /** Instancia de GSAP con plugins ya registrados. */
  readonly gsap: Gsap;
  /** Raíz sobre la que acotar las consultas (por defecto document). */
  readonly root: Document | HTMLElement;
  /** true si el usuario pidió movimiento reducido al inicializar. */
  readonly reducedMotion: boolean;
  /** Registra una función de limpieza; el manager las llama en orden inverso. */
  readonly onCleanup: (fn: () => void) => void;
}

/**
 * Política frente a `prefers-reduced-motion`:
 *  - "skip":   el manager NO inicializa la animación con movimiento reducido.
 *  - "degrade": la animación se inicializa pero se auto-reduce.
 *  - "ignore": la preferencia es irrelevante (p.ej. abrir/cerrar el menú).
 */
export type ReducedMotionPolicy = "skip" | "degrade" | "ignore";

/** Un comportamiento animado, autocontenido y con ciclo de vida uniforme (Strategy). */
export interface Animation {
  /** Identificador estable (logging / debug / tests). */
  readonly name: string;
  /** Política de movimiento reducido. */
  readonly reducedMotion: ReducedMotionPolicy;
  /** Conecta listeners / timelines / ScrollTriggers. */
  init(ctx: AnimationContext): void;
  /** Teardown opcional adicional (el manager además revierte el gsap.context). */
  destroy?(): void;
}

/** Factory perezosa de animaciones; el registry es una lista de estas. */
export type AnimationFactory = () => Animation;
