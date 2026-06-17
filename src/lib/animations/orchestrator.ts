import type { Animation, AnimationContext, AnimationFactory } from "./types";
import { gsap } from "./gsap";
import { prefersReducedMotion } from "./reducedMotion";

/**
 * Composition root de la capa de animación (patrón Manager / Mediator).
 *
 * - Depende solo de `readonly AnimationFactory[]` y del contrato `Animation`,
 *   nunca de un efecto concreto (Dependency Inversion).
 * - Crea un único `gsap.context()` → todo el teardown en una sola llamada.
 * - Aplica el gate global de `prefers-reduced-motion`.
 */
export class AnimationManager {
  private readonly instances: Animation[] = [];
  private readonly cleanups: Array<() => void> = [];
  private context?: ReturnType<typeof gsap.context>;

  constructor(
    private readonly factories: readonly AnimationFactory[],
    private readonly root: Document | HTMLElement = document,
  ) {}

  /** Inicializa cada estrategia dentro del contexto compartido de GSAP. */
  init(): void {
    const reducedMotion = prefersReducedMotion();

    this.context = gsap.context(() => {
      for (const create of this.factories) {
        const animation = create();

        if (reducedMotion && animation.reducedMotion === "skip") continue;

        const ctx: AnimationContext = {
          gsap,
          root: this.root,
          reducedMotion,
          onCleanup: (fn) => this.cleanups.push(fn),
        };

        animation.init(ctx);
        this.instances.push(animation);
      }
    });
  }

  /** Revierte todo: listeners, instancias y tweens/ScrollTriggers del contexto. */
  destroy(): void {
    while (this.cleanups.length) this.cleanups.pop()?.();
    for (const animation of this.instances) animation.destroy?.();
    this.instances.length = 0;
    this.context?.revert();
    this.context = undefined;
  }
}
