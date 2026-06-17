# Codesotec — Web 2026

Sitio corporativo construido con **Astro 5 · Tailwind CSS v4 · TypeScript (strict) · GSAP**.
Migración del prototipo estático `fundamental-studio-clone.html` a una arquitectura escalable, por
componentes, con principios SOLID y sin código repetitivo (DRY).

## Scripts

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:4321)
npm run build    # build estático en /dist
npm run preview  # sirve el build de producción
npm run check    # astro check (chequeo de tipos)
npm run format   # prettier
```

## Arquitectura

```
src/
├─ pages/index.astro          → compone las secciones, única ruta
├─ layouts/BaseLayout.astro   → <head>, SEO, CSS global, entry de cliente
├─ styles/                    → tokens (@theme), base, keyframes, utilidades
├─ data/                      → ÚNICA fuente de verdad, tipada (DRY)
├─ lib/
│  ├─ constants.ts            → contrato DOM (SELECTORS / DATA-attrs)
│  └─ animations/             → capa GSAP (Registry + Strategy + Manager)
├─ scripts/main.client.ts     → único entry de JS de cliente
└─ components/
   ├─ ui/                     → primitivos reutilizables (Button, Marquee, …)
   ├─ layout/                 → chrome (Navbar, Footer, Preloader, Cursor)
   └─ sections/               → una sección de la home por archivo (SRP)
```

### Principios aplicados

- **SRP** — cada `.astro` solo renderiza markup; los datos viven en `data/`, la animación en
  `lib/animations/`, los tokens en `styles/theme.css`. Un archivo, una razón para cambiar.
- **OCP** — añadir un efecto = añadir una factory a `lib/animations/registry.ts`; añadir un proyecto
  = añadir un objeto a `data/work.ts`. No se edita el orquestador ni los componentes.
- **DIP** — `AnimationManager` depende del contrato `Animation`, nunca de un efecto concreto.
- **DRY** — un solo `Marquee.astro` para los 3 tickers; una sola fuente de datos por lista.

### Capa de animación (patrón Registry + Strategy)

Cada comportamiento (cursor, reveal, contadores, parallax…) implementa la interfaz `Animation`
(`init`/`destroy`, política de `prefers-reduced-motion`). El `AnimationManager` (composition root):

1. crea un único `gsap.context()` (teardown en una llamada),
2. aplica el gate global de movimiento reducido,
3. inicializa cada estrategia del `registry`.

Los componentes emiten *hooks* declarativos (`data-reveal`, `data-magnetic`, `data-count`) definidos
en `lib/constants.ts`; las animaciones solo leen esos selectores. Markup y comportamiento quedan
desacoplados.

## Personalización

- **Marca / contacto:** `src/data/site.config.ts` (revisar los `// TODO: dato real`).
- **Proyectos, logos, premios, stats:** `src/data/{work,logos,awards,stats}.ts`.
- **Colores / tipografía / easing:** `src/styles/theme.css` (`@theme`).
- **Fuente Acari Sans:** dejar los `.woff2` en `public/assets/fonts/` (ver `.gitkeep`). Sin la fuente
  se usa el stack de sistema automáticamente.

## Notas

- El toggle de idioma EN/ES es presentacional; i18n real (rutas Astro i18n) queda fuera de alcance.
- El prototipo original `fundamental-studio-clone.html` se conserva en la raíz como referencia.
