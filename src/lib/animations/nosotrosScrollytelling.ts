import type { Animation, AnimationFactory } from "./types";
import { $, $$ } from "../dom";
import { SELECTORS } from "../constants";
import { ScrollTrigger } from "./gsap";

export const createNosotrosScrollytelling: AnimationFactory = (): Animation => ({
  name: "nosotrosScrollytelling",
  reducedMotion: "degrade",

  init({ gsap, root, reducedMotion, onCleanup }) {
    const page = $(SELECTORS.nosotrosPage, root);
    if (!page) return;

    const banner = $(SELECTORS.nosotrosBanner, page);
    const sections = $$(SELECTORS.nosotrosSection, page);
    if (!banner) return;

    const heading = $("[data-banner-heading]", banner);
    const logo = $("[data-banner-logo]", banner);
    const bannerScene = $("[data-scene='banner']", banner);

    /* ---- Reduced motion: handled by CSS media queries, return early ---- */
    if (reducedMotion) {
      return;
    }

    /* =====================================================
       ESTADO INICIAL DE TODOS LOS ELEMENTOS
       ===================================================== */
    const isMobile = window.innerWidth <= 768;

    // Configuración inicial de posiciones (para mobile / desktop)
    const headingPhase1 = {
      x: isMobile ? 0 : -80,
      y: isMobile ? -50 : 0, // Desplazado ligeramente hacia arriba en mobile para dejar espacio visual
      opacity: 1,
    };

    const headingPhase2 = {
      x: 0,
      y: 0,
      opacity: 1,
    };

    // Aplicar estado inicial: el heading empieza visible y centrado sin scroll
    if (heading) {
      gsap.set(heading, { x: headingPhase1.x, y: headingPhase1.y, opacity: 1 });
    }

    if (logo) {
      gsap.set(logo, { x: 80, y: 0, opacity: 0 });
    }

    // Configurar secciones de contenido ocultas con desenfoque
    sections.forEach((section) => {
      const title = $("[data-section-title]", section);
      const body = $("[data-section-body]", section);
      gsap.set(section, { autoAlpha: 0 });
      if (title) {
        gsap.set(title, { y: 0, opacity: 0, filter: "blur(12px)" });
      }
      if (body) {
        gsap.set(body, { y: 0, opacity: 0, filter: "blur(12px)" });
      }
    });

    /* =====================================================
       PINNING & TIMELINE
       ===================================================== */

    // Timeline principal sincronizada con el scroll y con pin integrado en el contenedor
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: banner,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=600%", // Incrementamos el rango de scroll para acomodar la velocidad x2
        scrub: 1.0,
        anticipatePin: 1,
      },
    });

    /* -- 1. Desplazamiento del Heading y aparición del Logo (Duración x2) -- */
    if (heading) {
      tl.to(heading, {
        x: headingPhase2.x,
        y: headingPhase2.y,
        duration: 2.4, // x2 (antes 1.2)
        ease: "power2.inOut",
      });
    }

    if (logo) {
      tl.to(
        logo,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2.4, // x2 (antes 1.2)
          ease: "power2.out",
        },
        "<", // Se ejecuta simultáneamente con el movimiento del heading
      );
    }

    // Mantener la fase 2 un instante
    tl.to({}, { duration: 1.6 }); // x2 (antes 0.8)

    /* -- 2. Salida del Banner principal (Duración x2) -- */
    if (bannerScene) {
      tl.to(bannerScene, {
        opacity: 0,
        y: -50,
        filter: "blur(6px)",
        duration: 2.0, // x2 (antes 1.0)
        ease: "power2.in",
      });
      tl.to(bannerScene, { opacity: 0, duration: 0.01 });
    }

    /* -- 3. Ciclo de las secciones Nosotros (Descripción, Misión, Visión) -- */
    sections.forEach((section, idx) => {
      const title = $("[data-section-title]", section);
      const body = $("[data-section-body]", section);

      // A. Entrada de la sección y su título con blurred-fade-in
      tl.to(section, { autoAlpha: 1, duration: 0.01 });

      if (title) {
        tl.to(title, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 2.4, // x2 (antes 1.2)
          ease: "power2.out",
        });
      }

      // Pausa con solo el título visible
      tl.to({}, { duration: 1.2 }); // x2 (antes 0.6)

      // B. El título sube y la descripción entra por abajo con blurred-fade-in
      if (title) {
        tl.to(title, {
          y: -40,
          duration: 2.4, // x2 (antes 1.2)
          ease: "power2.inOut",
        });
      }

      if (body) {
        tl.fromTo(
          body,
          { y: 35, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 2.4, // x2 (antes 1.2)
            ease: "power2.out",
          },
          "<0.4", // x2 delay (antes 0.2)
        );
      }

      // Pausa con título y descripción visibles
      tl.to({}, { duration: 3.0 }); // x2 (antes 1.5)

      // C. Salida de la sección (se mueven hacia arriba y se desvanecen)
      const exitTargets = [title, body].filter(Boolean);
      if (exitTargets.length > 0) {
        tl.to(exitTargets, {
          opacity: 0,
          y: (i) => (i === 0 ? -80 : -45),
          filter: "blur(6px)",
          duration: 2.0, // x2 (antes 1.0)
          ease: "power2.in",
        });
      }
      tl.to(section, { autoAlpha: 0, duration: 0.01 });
    });

    // Refrescar ScrollTrigger para recalcular posiciones correctamente
    ScrollTrigger.refresh();
  },
});
