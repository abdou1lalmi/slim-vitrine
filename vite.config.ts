import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves this project from /slim-vitrine/.
  base: "/slim-vitrine/",
  plugins: [react(), tailwindcss()],
});
