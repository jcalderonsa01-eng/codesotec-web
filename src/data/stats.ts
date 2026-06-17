import type { StatItem } from "./types";

/**
 * Métricas con contador animado (count-up al entrar en viewport).
 * Placeholders editables.
 */
export const STATS: readonly StatItem[] = [
  { value: 37, suffix: "×", label: "Total awards", sub: "International + local" },
  { value: 10, suffix: "×", label: "BGWeb awards", sub: "2022 – 2024" },
  { value: 4, suffix: "×", label: "CSS Design Awards", sub: "2025" },
  { value: 2, suffix: "×", label: "Awwwards nominee", sub: "Honorable mentions" },
];
