import type { WorkItem } from "./types";

/**
 * Portafolio. Datos de ejemplo editables (placeholders del rebrand).
 * Añadir un proyecto = añadir un objeto aquí. La sección Work itera y renderiza,
 * y el contador "NN / total" se calcula solo a partir de la longitud del array.
 */
export const WORK: readonly WorkItem[] = [
  {
    title: "HerrBebe",
    tags: ["UX/UI", "Development", "E-commerce"],
    description:
      "We crafted a digital journey that supports parents, simplifies planning, and brings the mission of age-based nutrition to life.",
    gradient: ["#1f8053", "#3ec091"],
  },
  {
    title: "Ikigai",
    tags: ["UX/UI Design"],
    description:
      "We built a modern and intuitive website that streamlines the ordering process while staying true to the brand's identity.",
    gradient: ["#0c2a22", "#2ca77a"],
  },
  {
    title: "My Intellect",
    tags: ["UX/UI", "Development"],
    description:
      "We rebuilt the app — a modern, intuitive mobile experience that makes learning on the go effortless.",
    gradient: ["#13243a", "#3ec091"],
  },
  {
    title: "Persenk",
    tags: ["UX/UI", "Development"],
    description: "A new digital face for an established brand in pavements and concrete solutions.",
    gradient: ["#2b2b2b", "#7a7a7a"],
  },
  {
    title: "eDrogeria",
    tags: ["UX/UI", "Development", "E-commerce"],
    description: "A clear and convenient digital experience for health product retail.",
    gradient: ["#073b2b", "#00c758"],
  },
  {
    title: "Break A Leg",
    tags: ["UX/UI", "Development"],
    description:
      "Building a vibrant website that connects audiences with live theatre shows — making culture more accessible and engaging.",
    gradient: ["#3a1330", "#ff0f43"],
  },
  {
    title: "Black Friday Campaign",
    tags: ["UX/UI", "Development"],
    description:
      "Launching a bold campaign that drives engagement and sales — bringing exclusive offers to the spotlight.",
    gradient: ["#141414", "#2ca77a"],
  },
  {
    title: "Pay Forward Foundation",
    tags: ["UX/UI", "Development"],
    description: "Creating a clean and confident digital presence that reflects a non-profit mission.",
    gradient: ["#0e2e24", "#bdf8d5"],
  },
  {
    title: "Compliance Navi",
    tags: ["UX/UI", "Development"],
    description:
      "Designing a clear, trustworthy website that helps businesses navigate AML and compliance with confidence and ease.",
    gradient: ["#13243a", "#1f8053"],
  },
];
