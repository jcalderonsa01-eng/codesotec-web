// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Tailwind v4 se integra como plugin de Vite (no PostCSS / no tailwind.config.js).
// Output estático por defecto: es una landing, no necesita adapter SSR.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
