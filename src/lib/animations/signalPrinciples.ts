import type { Animation, AnimationFactory } from "./types";
import { $, $$ } from "../dom";
import { SELECTORS, CSS_CLASS } from "../constants";
import { ScrollTrigger } from "./gsap";

/**
 * Signal / Principles section: line-mask headline reveal, staggered cards,
 * gradient underlines, hover micro-interactions and ambient glow drift.
 *
 * Keeps the legacy `data-signal` + `.in` handshake so existing tests still pass.
 */
export const createSignalPrinciples: AnimationFactory = (): Animation => ({
  name: "signalPrinciples",
  reducedMotion: "degrade",

  init({ gsap, root, reducedMotion, onCleanup }) {
    const section = $(SELECTORS.signal, root);
    if (!section) return;

    const lines = $$(".signal-line", section);
    const fades = $$(".head-fade", section);
    const cards = $$(".principle-card", section);
    const unders = cards.map((c) => $(".card-underline", c)).filter(Boolean) as HTMLElement[];
    const glow = $(".head-glow", section);

    /* ---- Legacy handshake: tests expect `.in` on [data-signal] ---- */
    const legacyTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => section.classList.add(CSS_CLASS.signalIn),
    });
    onCleanup(() => legacyTrigger.kill());

    if (reducedMotion) {
      gsap.set(lines, { yPercent: 0, autoAlpha: 1 });
      gsap.set(fades, { autoAlpha: 1, y: 0 });
      gsap.set(cards, { autoAlpha: 1, y: 0 });
      gsap.set(unders, { scaleX: 1 });
      section.classList.add(CSS_CLASS.signalIn);
      return;
    }

    /* ---- Hover micro-interactions (GSAP-only, no CSS transitions) ---- */
    const hoverCleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const glowLayer = $(".card-glow", card);
      const icon = $(".card-icon", card);

      const hover = gsap.timeline({ paused: true });
      hover
        .to(
          card,
          {
            y: -6,
            borderColor: "rgba(34,171,207,0.55)",
            duration: 0.32,
            ease: "power2.out",
          },
          0,
        )
        .to(glowLayer, { autoAlpha: 1, duration: 0.32, ease: "power2.out" }, 0)
        .to(
          icon,
          {
            scale: 1.08,
            color: "#38D4F8",
            borderColor: "rgba(34,171,207,0.5)",
            duration: 0.32,
            ease: "power2.out",
          },
          0,
        );

      const enter = () => hover.play();
      const leave = () => hover.reverse();
      card.addEventListener("pointerenter", enter);
      card.addEventListener("pointerleave", leave);
      hoverCleanups.push(() => {
        card.removeEventListener("pointerenter", enter);
        card.removeEventListener("pointerleave", leave);
        hover.kill();
      });
    });
    onCleanup(() => hoverCleanups.forEach((fn) => fn()));

    /* ---- Entrance reveals ---- */
    gsap.from(lines, {
      yPercent: 110,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".signal-head",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(fades, {
      autoAlpha: 0,
      y: 18,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".signal-head",
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });

    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".signal-cards",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    cardsTl
      .from(cards, {
        autoAlpha: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      })
      .from(
        unders,
        {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
        },
        "-=0.5",
      );

    /* ---- Ambient glow drift ---- */
    if (glow) {
      gsap.to(glow, {
        xPercent: 14,
        yPercent: -10,
        scale: 1.18,
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  },
});
