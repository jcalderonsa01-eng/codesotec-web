# Revisión del Proyecto Codesotec

> **Fecha:** 2026-06-18
> **Herramientas:** Chrome DevTools (Lighthouse, Console, Network), Astro Check, TypeScript

---

## Índice

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Errores de TypeScript](#2-errores-de-typescript)
3. [Lighthouse — Accesibilidad](#3-lighthouse--accesibilidad)
4. [Lighthouse — SEO](#4-lighthouse--seo)
5. [Código no usado / warnings](#5-código-no-usado--warnings)
6. [Arquitectura y diseño](#6-arquitectura-y-diseño)
7. [Visual / UX](#7-visual--ux)
8. [Datos placeholder](#8-datos-placeholder)
9. [Construcción y bundle](#9-construcción-y-bundle)
10. [Issues detallados](#10-issues-detallados)

---

## 1. Resumen Ejecutivo

| Métrica | Valor |
|---------|-------|
| **Lighthouse Accessibility** | 96/100 |
| **Lighthouse Best Practices** | 100/100 |
| **Lighthouse SEO** | 91/100 |
| **Errores TypeScript** | 2 |
| **Warnings TypeScript** | 4 |
| **Build** | ✅ Sin errores |
| **Bundle JS** | 120 kB (gzip: 47 kB) |

---

## 2. Errores de TypeScript

### ISSUE-001: `parseFloat` type mismatch en cursor.ts

**Archivo:** `src/lib/animations/cursor.ts:49-50`

**Descripción:** `parseFloat` recibe `string | number` porque `ring.dataset.y` es `string | undefined` y `initY` es `number`. El operador `??` produce un tipo unión que `parseFloat` no acepta.

**Código actual:**
```typescript
let ringX: (n: number) => void = (n) => placeRing(n, parseFloat(ring.dataset.y ?? initY));
let ringY: (n: number) => void = (n) => placeRing(parseFloat(ring.dataset.x ?? initX), n);
```

**Solución:**
```typescript
let ringX: (n: number) => void = (n) => placeRing(n, parseFloat(ring.dataset.y ?? String(initY)));
let ringY: (n: number) => void = (n) => placeRing(parseFloat(ring.dataset.x ?? String(initX)), n);
```

**Severidad:** 🔴 Alta — bloquea el tipo check estricto.

---

## 3. Lighthouse — Accesibilidad

### ISSUE-002: Jerarquía de encabezados incorrecta (`heading-order`)

**Puntuación Lighthouse:** 0/1

**Descripción:** La página tiene múltiples `<h1>` y salta niveles de heading.

**Jerarquía actual:**
```
<h1> "CODESOTEC"                    → Hero.astro:37
<h1> "Áreas de negocio"            → Work.astro:38
<h1> "Las secuelas de lo asombroso" → AwardsMarquee.astro:82
<h2> "In a world of digital noise…" → Signal.astro:8
<h2> "Work that gets noticed"       → Stats.astro (vía SectionHeading)
<h4> "MENU"                         → Footer.astro:28
<h4> "SOCIAL"                        → Footer.astro:28
<h4> "LEGAL"                         → Footer.astro:28
```

**Archivos involucrados:**
- `src/components/sections/Hero.astro:37` — cambiar a `h1` (correcto, es el principal)
- `src/components/sections/Work.astro:38` — cambiar a `h2`
- `src/components/sections/AwardsMarquee.astro:82` — cambiar a `h2`
- `src/components/layout/Footer.astro:28` — cambiar a `h3`
- `src/components/ui/SectionHeading.astro` — verificar nivel de heading

**Solución:** Debe haber un único `<h1>` por página. El resto debe seguir una jerarquía descendente sin saltos.

**Severidad:** 🟠 Media — impacto directo en accesibilidad y SEO.

---

### ISSUE-003: Falta skip link (`skip-link`)

**Puntuación Lighthouse:** 0/1

**Descripción:** No hay un enlace de salto ("Skip to content") al inicio del `<body>`. Los usuarios de teclado y lectores de pantalla deben navegar por toda la barra de navegación antes de llegar al contenido principal.

**Archivo:** `src/layouts/BaseLayout.astro`

**Solución:** Agregar al inicio del `<body>`:
```astro
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>
```
Y agregar `id="main-content"` al contenedor principal del slot. El `skip-link` debe estar visible al recibir foco (típicamente posicionado fuera de pantalla y traído con `:focus`).

**Severidad:** 🟠 Media — requerido para accesibilidad por teclado.

---

### ISSUE-004: `lang="en"` en contenido en español

**Archivo:** `src/layouts/BaseLayout.astro:24`

**Descripción:** El atributo `lang` del `<html>` está en `"en"` pero todo el contenido del sitio está en español.

**Código actual:**
```astro
<html lang="en">
```

**Solución:**
```astro
<html lang="es">
```

**Severidad:** 🟡 Baja — afecta lectores de pantalla y SEO internacional.

---

## 4. Lighthouse — SEO

### ISSUE-005: Enlaces sin texto descriptivo (`link-text`)

**Puntuación Lighthouse:** 0/1

**Descripción:** Varios enlaces apuntan a `#` sin proporcionar información significativa sobre su destino.

**Archivos involucrados:**
- `src/data/site.config.ts:33-37` — enlaces sociales (`LinkedIn`, `GitHub`, `Instagram`, `X / Twitter`, `Dribbble`) con `href: "#"`
- `src/data/site.config.ts:41-43` — enlaces legales (`Terms of Use`, `Privacy Policy`, `Cookie Policy`) con `href: "#"`
- `src/data/site.config.ts:57` — `Blog` con `href: "#"`

**Solución:** Reemplazar los `href: "#"` por las URLs reales de los perfiles sociales y páginas legales. Si son placeholders temporales, agregar `aria-label` descriptivo.

**Severidad:** 🟠 Media — impacto en SEO y usabilidad.

---

### ISSUE-006: Teléfono placeholder

**Archivo:** `src/data/site.config.ts:14-15`

**Código actual:**
```typescript
phone: "+1 000 000 0000",
phoneHref: "tel:+10000000000",
```

**Severidad:** 🟡 Baja — placeholder de datos reales.

---

## 5. Código no usado / warnings

### ISSUE-007: `SITE` importado pero no usado en Hero.astro

**Archivo:** `src/components/sections/Hero.astro:2`

```typescript
import { SITE } from "@/data/site.config"; // ← no se usa
```

### ISSUE-008: `Button` importado pero no usado en Hero.astro

**Archivo:** `src/components/sections/Hero.astro:3`

```typescript
import Button from "@/components/ui/Button.astro"; // ← no se usa
```

### ISSUE-009: `lastY` declarado pero nunca leído

**Archivo:** `src/lib/animations/navScroll.ts:20`

```typescript
let lastY = window.scrollY; // ← se asigna pero nunca se lee
```

### ISSUE-010: Interface `Props` declarada pero no usada

**Archivo:** `src/components/ui/Reveal.astro:6`

```typescript
interface Props { ... } // ← declarada pero no referenciada
```

---

## 6. Arquitectura y diseño

### Puntos fuertes ✅

| Aspecto | Detalle |
|---------|---------|
| **Animation Manager** | Patrón Strategy + Dependency Inversion con `AnimationFactory`/`Animation` |
| **Contrato DOM** | `constants.ts` centraliza selectores, clases y eventos — DRY |
| **Reduced Motion** | Gate global `prefersReducedMotion()` con política `"skip" | "degrade" | "ignore"` |
| **GSAP + ScrollTrigger** | Integración limpia, plugins registrados en un solo punto (`gsap.ts`) |
| **Tailwind v4** | Design tokens con `@theme`, CSS nativo sin PostCSS |
| **Separación markup/lógica** | Componentes `.astro` solo emiten hooks `data-*`, las animaciones los consumen |

### Observaciones ⚠️

### ISSUE-011: `createCursor` no registrado en el registry

**Archivo:** `src/lib/animations/registry.ts`

**Descripción:** El módulo `cursor.ts` implementa un cursor personalizado completo, pero `createCursor` **no está incluido** en `animationRegistry`. El cursor nunca se activa.

**Solución:** Si es intencional, eliminar el archivo. Si se quiere activar, agregarlo al registry y crear el CSS necesario para ocultar el cursor nativo.

---

### ISSUE-012: `has-custom-cursor` sin CSS asociado

**Archivo:** `src/lib/animations/cursor.ts:70`

**Descripción:** El código agrega `document.documentElement.classList.add("has-custom-cursor")` pero no hay ninguna regla CSS que oculte el cursor nativo:
```css
html.has-custom-cursor,
html.has-custom-cursor * {
  cursor: none !important;
}
```

---

### ISSUE-013: Doble animación del preloader

**Archivos:**
- `src/components/layout/Preloader.astro:54` — keyframe CSS `load` anima la barra
- `src/lib/animations/preloader.ts` — GSAP anima el porcentaje

**Descripción:** La barra de progreso se anima con CSS (`@keyframes load`) mientras que el contador numérico se anima con GSAP. No compiten directamente (CSS anima el ancho, GSAP el texto), pero hay una leve desconexión visual: la barra termina en 2.4s (CSS) mientras GSAP también dura 2.4s. Alinean por duración pero no hay garantía de sincronización perfecta.

---

## 7. Visual / UX

### ISSUE-014: Sección Collaborate sin formulario de contacto real

**Archivo:** `src/components/sections/Collaborate.astro`

**Descripción:** La sección `#contact` solo contiene un ticker decorativo con "Trabajemos juntos" repetido. No hay formulario de contacto, enlace a email, ni ninguna CTA funcional. El navbar tiene un enlace "Contacto" que lleva aquí, pero el usuario no encuentra qué hacer.

**Sugerencia:** Agregar un formulario de contacto o al menos un botón/email visible.

---

### ISSUE-015: Videos en Work con blur inicial

**Archivo:** `src/components/sections/Work.astro:167`

**Descripción:** Los videos de la sección Work inician con `filter: blur(8px)` y se aclaran al hover. En dispositivos táctiles (sin hover), los videos siempre se ven borrosos. Además, el `preload="none"` combinado con `IntersectionObserver` + `load()` puede causar un delay notable.

---

## 8. Datos placeholder

### ISSUE-016: Placeholders marcados como TODO

**Archivo:** `src/data/site.config.ts`

```typescript
brand: { name: "Codesotec", suffix: "" },
email: "hello@codesotec.com",      // TODO: dato real
phone: "+1 000 000 0000",          // TODO: dato real
phoneHref: "tel:+10000000000",     // TODO: dato real
address: "Remote-first · LATAM",   // TODO: dato real
```

### ISSUE-017: Enlaces sociales y legales sin URL

**Archivo:** `src/data/site.config.ts`

- `social`: LinkedIn, GitHub, Instagram, X/Twitter, Dribbble → todos `href: "#"`
- `legal`: Terms of Use, Privacy Policy, Cookie Policy → todos `href: "#"`
- `FOOTER_MENU` incluye `Blog` → `href: "#"`

### ISSUE-018: Datos de contenido placeholder

| Archivo | Contenido |
|---------|-----------|
| `src/data/stats.ts` | 37 awards, 10 BGWeb, 4 CSSDA, 2 Awwwards |
| `src/data/awards.ts` | 10 premios de ejemplo |
| `src/data/work.ts` | 9 proyectos de ejemplo (HerrBebe, Ikigai, etc.) |
| `src/data/chaos.ts` | 9 frases decorativas |
| `src/data/logos.ts` | 8 nombres de clientes sin imágenes |

---

## 9. Construcción y bundle

| Métrica | Valor |
|---------|-------|
| **Build** | ✅ Exitoso |
| **Tiempo de build** | 4.09 s |
| **Páginas generadas** | 1 (index.html) |
| **Bundle JS** | 120.08 kB (47.19 kB gzip) |
| **Módulos transformados** | 23 |

---

## 10. Issues detallados

| ID | Severidad | Archivo | Línea | Descripción |
|----|-----------|---------|-------|-------------|
| ISSUE-001 | 🔴 Alta | `src/lib/animations/cursor.ts` | 49-50 | `parseFloat` recibe `string \| number` |
| ISSUE-002 | 🟠 Media | `Hero.astro`, `Work.astro`, `AwardsMarquee.astro`, `Footer.astro` | Múltiples | Jerarquía de headings incorrecta |
| ISSUE-003 | 🟠 Media | `src/layouts/BaseLayout.astro` | - | Falta skip-link |
| ISSUE-004 | 🟡 Baja | `src/layouts/BaseLayout.astro` | 24 | `lang="en"` para contenido en español |
| ISSUE-005 | 🟠 Media | `src/data/site.config.ts` | 33-43 | Enlaces sociales/legales sin destino real |
| ISSUE-006 | 🟡 Baja | `src/data/site.config.ts` | 14-15 | Teléfono placeholder |
| ISSUE-007 | 🟢 Info | `src/components/sections/Hero.astro` | 2 | `SITE` importado no usado |
| ISSUE-008 | 🟢 Info | `src/components/sections/Hero.astro` | 3 | `Button` importado no usado |
| ISSUE-009 | 🟢 Info | `src/lib/animations/navScroll.ts` | 20 | `lastY` declarado no leído |
| ISSUE-010 | 🟢 Info | `src/components/ui/Reveal.astro` | 6 | `Props` declarado no usado |
| ISSUE-011 | 🟡 Baja | `src/lib/animations/registry.ts` | - | `createCursor` no registrado |
| ISSUE-012 | 🟡 Baja | `src/lib/animations/cursor.ts` | 70 | Falta CSS para `has-custom-cursor` |
| ISSUE-013 | 🟢 Info | `Preloader.astro` / `preloader.ts` | - | Doble animación CSS + GSAP |
| ISSUE-014 | 🟡 Baja | `src/components/sections/Collaborate.astro` | - | Sin formulario de contacto |
| ISSUE-015 | 🟢 Info | `src/components/sections/Work.astro` | 167 | Videos borrosos en táctil |
| ISSUE-016 | 🟡 Baja | `src/data/site.config.ts` | 13-16 | Placeholders de contacto |
| ISSUE-017 | 🟡 Baja | `src/data/site.config.ts` | 33-43, 57 | Enlaces sin destino |
| ISSUE-018 | 🟢 Info | `src/data/*.ts` | - | Datos de contenido placeholder |

---

## Leyenda de severidad

| Severidad | Significado |
|-----------|-------------|
| 🔴 Alta | Error o bloqueante |
| 🟠 Media | Impacto en accesibilidad/SEO/funcionalidad |
| 🟡 Baja | Mejora recomendada |
| 🟢 Info | Observación informativa |
