import type { Animation, AnimationFactory } from "./types";
import { $$ } from "../dom";
import { SELECTORS } from "../constants";
import { ScrollTrigger } from "./gsap";

/**
 * Stacking cards: as each card enters the viewport, the previous card
 * shrinks slightly (scale + opacity) via a scrubbed ScrollTrigger.
 * Position:sticky in CSS handles the visual stacking; GSAP adds the depth.
 */
export const createPartnersStack: AnimationFactory = (): Animation => ({
  name: "partnersStack",
  reducedMotion: "skip",

  init({ gsap }) {
    const cards = $$(SELECTORS.stackCard) as HTMLElement[];
    if (cards.length < 2) return;

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      ScrollTrigger.create({
        trigger: cards[i + 1],
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(card, {
            scale: 1 - 0.06 * self.progress,
            transformOrigin: "center top",
          });
        },
      });
    });
  },
});
