/**
 * Único entry de JavaScript de cliente (composition root).
 * BaseLayout lo importa una vez; Astro lo bundlea y lo difiere.
 */
import { AnimationManager } from "../lib/animations/orchestrator";
import { animationRegistry } from "../lib/animations/registry";

const start = (): void => {
  new AnimationManager(animationRegistry).init();
};

if (document.readyState !== "loading") start();
else document.addEventListener("DOMContentLoaded", start, { once: true });
