# Animación hover del navbar de Fundamental

Fuente revisada: https://fundamental.bg/en

## Qué se ve

En el navbar de Fundamental, cada opción (`Work`, `Services`, `Culture`, `Contact Us`) tiene un hover tipo **staggered letter slide**: las letras no cambian todas al mismo tiempo, sino que se desplazan una detrás de otra con un retraso mínimo. El resultado se percibe como una subida en escalera.

La transición tiene dos momentos que ocurren casi pegados:

1. El texto visible sube y desaparece por arriba, letra por letra.
2. Una copia del mismo texto entra desde abajo, también letra por letra, hasta ocupar la posición original.

Como el movimiento es muy rápido y con easing suave, no se siente como un salto, sino como un reemplazo fluido del texto.

## Pista técnica del DOM

Al extraer el contenido de la página, los links aparecen duplicados visualmente en texto plano, por ejemplo:

```text
Work Work
Services Services
Culture Culture
Contact Us Contact Us
```

Eso sugiere una estructura de dos capas o dos líneas por enlace: una capa inicial y una capa hover. Ambas contienen las mismas letras, pero están colocadas verticalmente dentro de un contenedor recortado.

## Nombre del patrón

Este efecto puede describirse como:

- `staggered text reveal`
- `split text hover`
- `letter-by-letter vertical rollover`
- `masked text slide`

En español: **hover de texto dividido por letras con desplazamiento vertical escalonado**.

## Cómo está construido conceptualmente

La idea principal es envolver cada enlace en una ventana de una línea de alto:

```html
<a class="nav-link" href="#">
  <span class="nav-link__mask">
    <span class="nav-link__row nav-link__row--top">
      <span style="--i: 0">W</span>
      <span style="--i: 1">o</span>
      <span style="--i: 2">r</span>
      <span style="--i: 3">k</span>
    </span>

    <span class="nav-link__row nav-link__row--bottom">
      <span style="--i: 0">W</span>
      <span style="--i: 1">o</span>
      <span style="--i: 2">r</span>
      <span style="--i: 3">k</span>
    </span>
  </span>
</a>
```

El contenedor `.nav-link__mask` oculta todo lo que sale de la línea visible. La fila superior empieza en `translateY(0)`. La fila inferior empieza debajo, en `translateY(100%)`. En hover, ambas suben:

```css
.nav-link {
  display: inline-flex;
  color: inherit;
  text-decoration: none;
}

.nav-link__mask {
  position: relative;
  display: inline-block;
  height: 1em;
  line-height: 1;
  overflow: hidden;
}

.nav-link__row {
  display: inline-flex;
  white-space: nowrap;
}

.nav-link__row span {
  display: inline-block;
  transition:
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 220ms ease;
  transition-delay: calc(var(--i) * 18ms);
  will-change: transform;
}

.nav-link__row--bottom {
  position: absolute;
  left: 0;
  top: 0;
}

.nav-link__row--bottom span {
  transform: translateY(100%);
}

.nav-link:hover .nav-link__row--top span {
  transform: translateY(-100%);
}

.nav-link:hover .nav-link__row--bottom span {
  transform: translateY(0);
}
```

## Por qué se siente como escalera

El efecto no depende de una animación compleja, sino del `transition-delay` aplicado por letra:

```css
transition-delay: calc(var(--i) * 18ms);
```

Si `W` tiene `--i: 0`, `o` tiene `--i: 1`, `r` tiene `--i: 2`, etc., cada letra arranca unos milisegundos después de la anterior. Ese desfase crea la sensación de escalera.

Valores recomendados para replicarlo:

- Duración por letra: `240ms` a `320ms`.
- Delay entre letras: `14ms` a `28ms`.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` o `power2.out` si se usa GSAP.
- Altura de máscara: `1em` o el alto exacto de línea del link.
- Propiedades animadas: solo `transform` y, opcionalmente, `opacity`.

## Variante con GSAP

Si el proyecto usa GSAP, la misma animación puede hacerse creando spans por letra y animando con `stagger`:

```ts
const chars = link.querySelectorAll(".char");

const tl = gsap.timeline();

tl.to(chars, {
  yPercent: -100,
  duration: 0.28,
  ease: "power2.in",
  stagger: {
    each: 0.02,
    from: "start",
  },
});

tl.fromTo(
  chars,
  { yPercent: 100 },
  {
    yPercent: 0,
    duration: 0.28,
    ease: "power2.out",
    stagger: {
      each: 0.02,
      from: "start",
    },
  },
  0.06,
);
```

Para que sea idéntico al comportamiento observado, conviene que existan dos grupos de caracteres: uno para el texto saliente y otro para el texto entrante. Si se usa un solo grupo, habría que resetearlo entre fases, y el resultado puede sentirse menos continuo.

## Detalles que hacen que se vea pulido

- La máscara debe recortar perfectamente el texto; si la altura es mayor a la línea, se verá el texto inferior antes del hover.
- Las letras deben ser `inline-block`; un texto normal no permite transformar letra por letra.
- Los espacios deben convertirse en `&nbsp;` para que `Contact Us` mantenga la separación.
- El hover debe cancelar o sobrescribir la animación anterior si el usuario entra y sale rápido.
- Para accesibilidad, en `prefers-reduced-motion: reduce` se debería desactivar el desplazamiento y dejar solo un cambio simple de color.

## Resumen

La animación del navbar de Fundamental es un **rollover vertical de texto partido por caracteres**. Duplica el texto, lo apila en dos filas dentro de una máscara, y al hacer hover mueve la fila visible hacia arriba mientras una segunda fila entra desde abajo. El efecto de escalera aparece por un `stagger` muy corto aplicado a cada letra.
