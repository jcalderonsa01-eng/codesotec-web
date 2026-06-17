import type { Animation, AnimationFactory } from "./types";
import { $, $$ } from "../dom";
import { SELECTORS, CSS_CLASS } from "../constants";

/**
 * Menú móvil: el burger abre/cierra el overlay y bloquea el scroll del body.
 * Al pulsar cualquier enlace, se cierra.
 */
export const createMobileMenu: AnimationFactory = (): Animation => ({
  name: "mobileMenu",
  reducedMotion: "ignore",

  init({ root, onCleanup }) {
    const burger = $(SELECTORS.burger, root);
    const menu = $(SELECTORS.mobileMenu, root);
    if (!burger || !menu) return;

    const setOpen = (open: boolean) => {
      menu.classList.toggle(CSS_CLASS.menuOpen, open);
      burger.classList.toggle(CSS_CLASS.burgerActive, open);
      document.body.classList.toggle(CSS_CLASS.noScroll, open);
    };
    const toggle = () => setOpen(!menu.classList.contains(CSS_CLASS.menuOpen));
    const close = () => setOpen(false);

    burger.addEventListener("click", toggle);
    const links = $$("a", menu);
    links.forEach((a) => a.addEventListener("click", close));

    onCleanup(() => {
      burger.removeEventListener("click", toggle);
      links.forEach((a) => a.removeEventListener("click", close));
    });
  },
});
