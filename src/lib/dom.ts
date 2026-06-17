/** Helpers tipados de consulta DOM (evitan repetir querySelector/Array.from). */

/** Primer elemento que coincide, o null. */
export function $<T extends Element = HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T | null {
  return root.querySelector<T>(selector);
}

/** Todos los elementos que coinciden, como array tipado. */
export function $$<T extends Element = HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}
