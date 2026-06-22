# Code Review: Codesotec 2026 Web

> **Fecha:** 2026-06-22  
> **Proyecto:** Astro 5 + Tailwind v4 + TypeScript (strict) + GSAP  
> **Review general** de todo el código fuente (`src/`), excluyendo `node_modules`, `dist`, `public/vendor`.  
> **Herramienta:** Code Review Skill (opencode)

---

## Índice

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Puntos fuertes](#2-puntos-fuertes)
3. [🔴 Bloqueantes](#3--bloqueantes)
4. [🟠 Importantes](#4--importantes)
5. [🟡 Mejoras recomendadas](#5--mejoras-recomendadas)
6. [🟢 Observaciones](#6--observaciones)
7. [Vista general de severidad](#7-vista-general-de-severidad)
8. [Dead Code —— Resumen completo](#8-de-code--resumen-completo)

---

## 1. Resumen Ejecutivo

| Métrica | Resultado |
|---------|-----------|
| **Arquitectura** | ✅ Sólida — Registry + Strategy + Manager en animaciones, SRP/OCP/DIP aplicados |
| **TypeScript strict** | ⚠️ 1 error 🔴, 2 variables muertas, ~6 componentes/data sin importar |
| **Dead code** | ⚠️ Significativo: 5 componentes `.astro` + 2 archivos de datos + 1 módulo de animación + 2 keyframes sin usar |
| **Accesibilidad** | ⚠️ 3 issues 🟠 (headings, skip-link, lang) |
| **Bundle** | ✅ 120 kB / 47 kB gzip — razonable para GSAP |
| **Build** | ✅ Sin errores |
| **Tests** | ✅ Playwright — 11 tests que cubren preloader, hero, nav, reveal, signal, cursor, magnetic, menú móvil |
| **Archivos analizados** | 33 archivos fuente (`src/`) |

---

## 2. Puntos fuertes

### Arquitectura de animaciones

La capa de animación sigue el patrón **Registry + Strategy + Manager**:

- `AnimationManager` (orchestrator.ts) depende solo del contrato `Animation`, nunca de una implementación concreta (DIP).
- Cada comportamiento (cursor, reveal, parallax, etc.) implementa `Animation` con `init`/`destroy` y política `reducedMotion`.
- `animationRegistry` es el único punto de extensión (OCP).
- `gsap.context()` permite teardown completo en una llamada.
- Gate global de `prefers-reduced-motion` con política por animación (`"skip" | "degrade" | "ignore"`).

### Contrato DOM

`src/lib/constants.ts` centraliza:

```ts
SELECTORS → "[data-preloader]", "[data-hero]", "[data-reveal]", …
CSS_CLASS → "done", "in", "scrolled", "hide", "unified", …
EVENTS   → "codesotec:loaded"
```

Los componentes emiten hooks declarativos; las animaciones solo los consumen. **Markup y comportamiento desacoplados.**

### Otros aciertos

- **GSAP + ScrollTrigger:** Registro único en `gsap.ts`, sin `registerPlugin` repetido.
- **Tailwind v4 `@theme`:** Design tokens como única fuente de verdad de color/tipografía/easing.
- **Tipado estricto:** `SiteConfig`, `Animation`, `AnimationFactory`, `AnimationContext` bien definidos en `types.ts`.
- **`dom.ts`:** Helpers `$` y `$$` tipados que evitan repetir `querySelector`/`Array.from`.
- **`reducedMotion.ts`:** Consultas de preferencias encapsuladas en funciones reutilizables.
- **Playwright tests:** Cubren preloader, hero intro, nav scroll/hide, reveal, signal, cursor, magnetic, menú móvil y errores de consola.

---

## 3. 🔴 Bloqueantes

### B-01: Error de tipo en `cursor.ts:49-50`

**Archivo:** `src/lib/animations/cursor.ts:49-50`

**Descripción:** `parseFloat` recibe `string | number` porque `ring.dataset.y` es `string | undefined` y `initY` es `number`. El operador `??` produce un tipo unión que `parseFloat` no acepta en TypeScript strict.

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

---

## 4. 🟠 Importantes

### I-01: Jerarquía de headings incorrecta

**Archivos:**
- `src/components/sections/Hero.astro:37`
- `src/components/sections/Work.astro:62`
- `src/components/sections/AwardsMarquee.astro:82`
- `src/components/layout/Footer.astro:28`

**Descripción:** La página tiene múltiples `<h1>` y saltos de nivel.

**Jerarquía actual:**

```
<h1> "CODESOTEC"                    → Hero.astro (correcto — es el principal)
<h1> "Áreas de negocio"            → Work.astro       → debe ser <h2>
<h1> "Las secuelas de lo asombroso" → AwardsMarquee.astro → debe ser <h2>
<h4> "MENU" / "SOCIAL" / "LEGAL"   → Footer.astro     → deben ser <h3>
```

**Impacto:** Directo en accesibilidad (lectores de pantalla) y SEO. Lighthouse puntúa 0/1.

### I-02: Falta skip-link

**Archivo:** `src/layouts/BaseLayout.astro`

**Descripción:** No hay un enlace "Saltar al contenido principal" al inicio del `<body>`. Usuarios de teclado y lectores de pantalla deben navegar por toda la barra de navegación antes de llegar al contenido.

**Solución:**

```astro
<!-- Al inicio del <body> en BaseLayout.astro -->
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>
```

Y agregar `id="main-content"` al contenedor del `<slot />`. El skip-link debe tener estilo `position: absolute; left: -9999px` que cambie a `left: 0` en `:focus`.

### I-03: `lang="en"` con contenido en español

**Archivo:** `src/layouts/BaseLayout.astro:24`

```astro
<html lang="en">  <!-- debe ser lang="es" -->
```

**Impacto:** Afecta lectores de pantalla (pronunciación) y SEO internacional.

### I-04: Enlaces sociales/legales sin destino real

**Archivo:** `src/data/site.config.ts:33-57`

```
LinkedIn     → href: "#"
GitHub       → href: "#"
Instagram    → href: "#"
X / Twitter  → href: "#"
Dribbble     → href: "#"
Blog         → href: "#"
Terms of Use → href: "#"
Privacy      → href: "#"
Cookie       → href: "#"
```

**Impacto:** Lighthouse penaliza enlaces sin texto descriptivo (`link-text`). Además, son inutilizables para el usuario.

---

## 5. 🟡 Mejoras recomendadas

### M-01: Dead code — 5 componentes `.astro` sin usar

| Componente | Archivo | Estado |
|-----------|---------|--------|
| `WorkCard.astro` | `src/components/sections/WorkCard.astro` | ❌ No se importa en ningún lado |
| `Eyebrow.astro` | `src/components/ui/Eyebrow.astro` | ❌ No se importa en ningún lado |
| `SectionHeading.astro` | `src/components/ui/SectionHeading.astro` | ❌ No se importa en ningún lado |
| `Reveal.astro` | `src/components/ui/Reveal.astro` | ❌ No se importa; sistema usa `data-reveal` directo |

**Acción:** Eliminar o migrar al patrón actual si se necesita.

### M-02: Dead code — 2 archivos de datos sin consumir

| Archivo | Export | Consumido en |
|---------|--------|-------------|
| `src/data/awards.ts` | `AWARDS: readonly AwardItem[]` | ❌ En ningún lado |
| `src/data/work.ts` | `WORK: readonly WorkItem[]` | ❌ En ningún lado |

`Work.astro` tiene sus propios datos inline (`businessAreas`). `AwardsMarquee.astro` tiene reviews inline. Los datos tipados existen pero no se usan.

### M-03: Dead code — Módulo `signalReveal.ts`

**Archivo:** `src/lib/animations/signalReveal.ts`

El módulo exporta `createSignalReveal` pero **no se importa en `registry.ts`** ni en ningún otro archivo. La funcionalidad de Signal la cubre `signalPrinciples.ts`.

**Acción:** Eliminar el archivo si no se va a usar.

### M-04: Variables declaradas pero nunca leídas

**Archivo:** `src/lib/animations/navScroll.ts:20-21`

```typescript
let lastY = window.scrollY;            // escrita en línea 40, nunca leída
let lastDirection: "up" | "down" = "down"; // escrita en línea 41, nunca leída
```

**Acción:** Eliminar ambas variables (o implementar la lógica de dirección si era intencional).

### M-05: Keyframes CSS sin referencia

**Archivo:** `src/styles/keyframes.css`

- `@keyframes drift3` (línea 19) — definido pero no usado en ningún `animation-name`
- `@keyframes cue` (línea 62) — definido pero no usado en ningún `animation-name`

### M-06: Theme toggle sin funcionalidad

**Archivo:** `src/components/layout/Navbar.astro:31`

```astro
<button class="nav-theme" id="themeToggle" aria-label="Cambiar tema">🌙</button>
```

El botón existe en el DOM con un ID y aria-label, pero **no hay ningún event listener ni script** que maneje el cambio de tema oscuro/claro. No existe lógica de tema en `main.client.ts` ni en ningún animation module.

**Acciones posibles:**
- Implementar toggle dark/light mode
- O eliminar el botón si no va a haber cambio de tema

### M-07: Imports no usados en Hero.astro

**Archivo:** `src/components/sections/Hero.astro:2-3`

```typescript
import { SITE } from "@/data/site.config";   // no se usa en el template
import Button from "@/components/ui/Button.astro"; // no se usa en el template
```

**Acción:** Eliminar ambos imports.

### M-08: Sección `#contact` sin CTA funcional

**Archivo:** `src/components/sections/Collaborate.astro`

**Descripción:** La sección con `id="contact"` solo contiene un ticker decorativo con "Trabajemos juntos" repetido. No hay:
- Formulario de contacto
- Botón de email
- Enlace a `mailto:`
- Ninguna llamada a la acción

El navbar tiene un enlace "Contacto" que apunta a `#contact`, pero el usuario no encuentra qué hacer al llegar.

**Sugerencia:** Agregar al menos un botón con `href="mailto:..."` o un formulario básico.

---

## 6. 🟢 Observaciones

### O-01: Doble animación del preloader

**Archivos:**
- `src/components/layout/Preloader.astro:54` — CSS `@keyframes load` anima el ancho de la barra
- `src/lib/animations/preloader.ts` — GSAP anima el contador numérico

Coinciden en duración (2.4s) y easing (`var(--ease-brand)` / `power2.inOut`), pero no hay sincronización forzada entre CSS y JS. En la práctica funciona, pero es frágil ante cambios de duración.

### O-02: Videos en modo escala de grises en táctil (Work)

**Archivo:** `src/components/sections/Work.astro:136-144`

Los `<video>` de Work inician con `filter: grayscale(100%) brightness(0.62)` y se aclaran al `.active` (hover). En dispositivos táctiles sin hover, los videos siempre se ven en blanco y negro y oscuros.

**Sugerencia:** Considerar un `matchMedia("(hover: hover)")` para aplicar el filtro solo en dispositivos con hover.

### O-03: Datos placeholder con TODO

**Archivo:** `src/data/site.config.ts:13-16`

```typescript
email: "hello@codesotec.com",       // TODO: dato real
phone: "+1 000 000 0000",           // TODO: dato real
phoneHref: "tel:+10000000000",      // TODO: dato real
address: "Remote-first · LATAM",    // TODO: dato real
```

### O-04: utilidades CSS potencialmente no usadas

**Archivo:** `src/styles/utilities.css`

`px-fluid`, `border-hair`, `border-hair-soft`, `text-gradient` están definidas como `@utility`. No aparecen en el markup de los componentes revisados. Verificar si se usan en producción.

### O-05: Footer duplica enlaces legales

**Archivo:** `src/components/layout/Footer.astro`

Las columnas (líneas 26-43) incluyen la columna "Legal" con `SITE.legal`. Luego el `foot-bottom` (líneas 49-53) vuelve a renderizar `SITE.legal`. Hay duplicación de los mismos enlaces.

### O-06: `lastDirection` declarada en navScroll.ts

Especificado en M-04, pero vale la pena notar que la lógica de esconder/mostrar navbar según dirección (`down`/`up`) **está a medias**: la intención era probablemente ocultar al bajar y mostrar al subir, pero `lastDirection` nunca se usa para comparar. Solo se usa `y > 400` como umbral fijo, lo que puede dar comportamientos extraños al hacer scroll rápido.

### O-07: Collab carousel-track sin `data-reveal`

La sección Collaborate no tiene ningún hook `data-reveal` ni animación de entrada. Aparece de golpe sin transición.

---

## 7. Vista general de severidad

| ID | Severidad | Archivo | Línea(s) | Descripción |
|----|-----------|---------|----------|-------------|
| B-01 | 🔴 | `cursor.ts` | 49-50 | `parseFloat` type mismatch (string \| number) |
| I-01 | 🟠 | `Hero.astro`, `Work.astro`, `AwardsMarquee.astro`, `Footer.astro` | Múltiples | Jerarquía de headings incorrecta (3× h1, saltos de nivel) |
| I-02 | 🟠 | `BaseLayout.astro` | — | Falta skip-link para navegación por teclado |
| I-03 | 🟠 | `BaseLayout.astro` | 24 | `lang="en"` para contenido 100% en español |
| I-04 | 🟠 | `site.config.ts` | 33-57 | 9 enlaces sociales/legales con `href: "#"` |
| M-01 | 🟡 | 5 componentes `.astro` | — | Dead code — componentes sin importar |
| M-02 | 🟡 | `awards.ts`, `work.ts` | — | Dead code — datos exportados sin consumir |
| M-03 | 🟡 | `signalReveal.ts` | — | Dead code — módulo de animación no registrado |
| M-04 | 🟡 | `navScroll.ts` | 20-21 | `lastY` y `lastDirection` escritas, nunca leídas |
| M-05 | 🟡 | `keyframes.css` | 19, 62 | `drift3` y `cue` definidos sin referencia |
| M-06 | 🟡 | `Navbar.astro` | 31 | Theme toggle (`#themeToggle`) sin JS conectado |
| M-07 | 🟡 | `Hero.astro` | 2-3 | `SITE` y `Button` importados sin usar |
| M-08 | 🟡 | `Collaborate.astro` | — | Sección `#contact` sin formulario ni CTA |
| O-01 | 🟢 | `Preloader.astro` / `preloader.ts` | 54 / 31-38 | Barra CSS + contador GSAP sin sincronización |
| O-02 | 🟢 | `Work.astro` | 136-144 | Videos en escala de grises en táctil (sin hover) |
| O-03 | 🟢 | `site.config.ts` | 13-16 | Datos de contacto placeholder (TODOs) |
| O-04 | 🟢 | `utilities.css` | — | Posibles `@utility` sin uso en markup |
| O-05 | 🟢 | `Footer.astro` | 27-43, 49-53 | Enlaces legales renderizados dos veces |
| O-06 | 🟢 | `navScroll.ts` | 20-21 | Lógica de scroll direction incompleta |
| O-07 | 🟢 | `Collaborate.astro` | — | Sin animación de entrada (`data-reveal`) |

---

## 8. Dead Code — Resumen completo

| Archivo | Tipo | ¿Por qué está muerto? |
|---------|------|-----------------------|
| `src/components/sections/WorkCard.astro` | Componente | Work.astro usa markup inline, no importa WorkCard |
| `src/components/ui/Eyebrow.astro` | Componente | No se importa en ninguna sección |
| `src/components/ui/SectionHeading.astro` | Componente | No se importa en ninguna sección |
| `src/components/ui/Reveal.astro` | Componente | No se importa; el sistema usa `data-reveal` directo |
| `src/data/awards.ts` | Datos | AWARDS exportado pero nunca importado |
| `src/data/work.ts` | Datos | WORK exportado pero nunca importado |
| `src/lib/animations/signalReveal.ts` | Animación | createSignalReveal no está en el registry |
| `src/styles/keyframes.css` (`drift3`, `cue`) | CSS | Definidos pero no referenciados en `animation-name` |
| `src/lib/animations/navScroll.ts:20-21` | Variables | `lastY`, `lastDirection`: escritas, nunca leídas |

**Total estimado de líneas muertas:** ~280 líneas (sin contar `node_modules`).

---

## 9. Conclusión

La base del proyecto es **sólida y bien diseñada**: la arquitectura de animaciones, el contrato DOM, y la separación markup/lógica son ejemplares. Sin embargo, hay una **cantidad significativa de dead code** (~280 líneas en 9 ubicaciones) que sugiere que la migración desde el prototipo estático quedó incompleta en algunos frentes (componentes migrados y luego reemplazados, datos tipados que nunca se conectaron).

Las prioridades recomendadas:

1. **🔴** Corregir el error de tipo en `cursor.ts` (bloquea el type check).
2. **🟠** Arreglar la jerarquía de headings, agregar skip-link y cambiar `lang="es"`.
3. **🟡** Limpiar dead code: eliminar componentes, datos y módulos sin usar.
4. **🟡** Conectar los placeholders de `site.config.ts` con datos reales de Codesotec.
5. **🟡** Implementar funcionalidad en la sección `#contact` y en el theme toggle, o eliminarlos.
