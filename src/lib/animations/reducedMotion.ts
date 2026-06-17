/** Consultas de preferencias del usuario / capacidades del dispositivo. */

/** ¿El usuario pidió movimiento reducido? */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** ¿Puntero grueso (táctil)? Para no pagar JS de cursor/magnético en móvil. */
export function isCoarsePointer(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
}
