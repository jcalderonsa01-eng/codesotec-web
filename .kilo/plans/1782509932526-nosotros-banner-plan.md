# Banner Design Plan for /nosotros Section

## Overview
Design a banner for the "Nosotros" section of a corporate technology consultancy website. The banner should feature a prominent header "+5 años contigo" and three informational sections: Descripción de la empresa, Misión, and Visión. The design must be professional, modern, and legible, suitable for a technology consulting audience.

## Layout
- **Overall Structure**: Vertical stack on mobile, horizontal row on desktop (flexbox/grid).
- **Header**: Full-width banner background with the heading "+5 años contigo" centered (or left-aligned with padding). Use a large, bold typeface.
- **Three Sections**: Below the header, display three equal-width columns (on desktop) or stacked cards (on mobile) containing the three text blocks.
  - Each section can be presented as a card with subtle padding, background color variation, or a left accent bar to differentiate.
  - Ensure ample whitespace between sections for readability.
- **Alignment**: Text left-aligned within each section; headings slightly larger than body text.
- **Responsive Behavior**: 
  - Desktop (≥1024px): header + three-column row.
  - Tablet (768‑1023px): header + two columns + one full-width below, or all stacked.
  - Mobile (<768px): header stacked above each section in vertical order.

## Typography Hierarchy
- **Font Family** (recommended, web‑safe or Google Fonts): 
  - Primary: **Inter** or **Roboto** (clean, modern, highly legible).
  - Fallback: system UI sans-serif.
- **Header (+5 años contigo)**:
  - Size: 2.5rem (40px) on desktop, scaling to 2rem (32px) on tablet, 1.75rem (28px) on mobile.
  - Weight: 800 (extra‑bold) or 900 (black).
  - Letter‑spacing: -0.5px to tighten slightly.
  - Color: primary brand color (see palette).
- **Section Titles** (Descripción de la empresa, Misión, Visión):
  - Size: 1.5rem (24px) desktop, 1.25rem (20px) tablet, 1.125rem (18px) mobile.
  - Weight: 600 (semi‑bold).
  - Color: secondary dark gray or primary color.
- **Body Text**:
  - Size: 1rem (16px) desktop, 0.94rem (15px) tablet, 0.875rem (14px) mobile.
  - Weight: 400 (regular).
  - Color: dark gray (#333 or #2b2b2b) for high contrast.
- **Line Height**: 1.6 for body, 1.2 for headings.

## Color Palette (Technology Consulting)
| Role | Hex | Usage |
|------|-----|-------|
| Primary (Brand) | #0066CC | Strong corporate blue – used for header text, section titles, accent bars. |
| Secondary | #004C99 | Darker blue for hover states or deeper emphasis. |
| Accent | #00C9A7 | Teal/cyan for subtle highlights (e.g., icons, divider lines). |
| Background | #F8FAFC | Very light gray‑blue – maintains a clean, airy feel. |
| Card Background | #FFFFFF | White for content cards to ensure maximum readability. |
| Text Primary | #212529 | Almost black for body copy. |
| Text Secondary | #495057 | Medium gray for secondary info or meta text. |
| Divider / Border | #E2E8F0 | Light gray for separators if needed. |

**Rationale**: Blue conveys trust, stability, and technology; teal adds a modern, innovative touch; neutral grays keep the interface professional and reduce visual noise.

## Visual Enhancements
- **Subtle Shadow**: Apply a soft drop‑shadow (0 2px 6px rgba(0,0,0,0.08)) to each card to lift them off the background.
- **Divider**: Optional vertical thin line (1px, #E2E8F0) between columns on desktop to separate sections.
- **Icons**: Consider small, line‑style icons (e.g., building for description, target for mission, eye for vision) in the accent color to the left of each section title.
- **Hover Effect** (if interactive): Slight scale (1.02) or background tint change on cards for desktop; not required if purely static.

## Implementation Notes (for next agent)
- Use CSS Flexbox or Grid for layout; define breakpoints as above.
- Define CSS variables for colors and font sizes to ease theming.
- Ensure contrast ratios meet WCAG AA (≥4.5:1 for text).
- Provide fallback fonts and consider loading fonts via `<link>` to Google Fonts or self‑hosted.
- Keep the banner height flexible; let content dictate vertical padding (e.g., 4rem padding top/bottom on desktop, 2rem on mobile).

## Acceptance Criteria
- [ ] Header "+5 años contigo" clearly visible with correct typography and color.
- [ ] Three sections present with correct copy (as provided).
- [ ] Layout adapts gracefully from mobile to desktop.
- [ ] Color palette matches the proposed professional technology theme.
- [ ] Text is legible (contrast ≥ 4.5:1).
- [ ] No horizontal overflow; content fits viewport.