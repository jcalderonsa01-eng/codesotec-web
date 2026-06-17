import type { AwardItem } from "./types";

/**
 * Premios y reconocimientos (marquesina). Placeholders editables.
 * En el original eran tuplas [titulo, fuente]; aquí objetos tipados (más legible).
 */
export const AWARDS: readonly AwardItem[] = [
  { title: "#1 Mobile App", source: "BGWeb · 2023" },
  { title: "2× Nominee", source: "Awwwards" },
  { title: "Innovation Award", source: "CSSDA · 2025" },
  { title: "#2 Startup", source: "BGWeb · 2024" },
  { title: "UX Award", source: "CSSDA · 2025" },
  { title: "#1 Charity", source: "Computer Space · 2024" },
  { title: "#2 Corporate", source: "BGWeb · 2023" },
  { title: "UI Award", source: "CSSDA · 2025" },
  { title: "#2 SaaS", source: "BGWeb · 2022" },
  { title: "Site of the Day", source: "CSSWinner · 2025" },
];
