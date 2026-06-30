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

    cards.forEach((card) => {
      gsap.set(card, { transformOrigin: "center top" });
    });

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      // Scale down current card & accumulate shadow as next one stacks on top
      ScrollTrigger.create({
        trigger: cards[i + 1],
        start: "top bottom",
        end: "top 80px",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(card, { scale: 1 - 0.04 * p });

          const shadows: string[] = [];
          if (p > 0.33) shadows.push("0 -8px 0 0 #1a1a1a");
          if (p > 0.66) shadows.push("0 -16px 0 0 #161616");
          if (p >= 1) shadows.push("0 -24px 0 0 #121212");
          gsap.set(card, {
            boxShadow: shadows.length ? shadows.join(", ") : "none",
          });
        },
      });

      // Fade out & blur card[i] as card[i+4] enters sticky position
      if (cards[i + 4]) {
        ScrollTrigger.create({
          trigger: cards[i + 4],
          start: "top 50%",
          end: "top 80px",
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.set(card, {
              opacity: 1 - p,
              filter: `blur(${p * 6}px)`,
            });
          },
        });
      }
    });
  },
});
