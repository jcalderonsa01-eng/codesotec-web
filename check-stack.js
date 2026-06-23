() => {
  const h1 = document.querySelector("h1");
  const heroContent = h1.closest(".hero-content");
  const hero = h1.closest(".hero");
  return {
    h1: { z: getComputedStyle(h1).zIndex, pos: getComputedStyle(h1).position },
    heroContent: { z: getComputedStyle(heroContent).zIndex, pos: getComputedStyle(heroContent).position },
    hero: { z: getComputedStyle(hero).zIndex, pos: getComputedStyle(hero).position },
    body: { z: getComputedStyle(document.body).zIndex, pos: getComputedStyle(document.body).position },
  };
}
