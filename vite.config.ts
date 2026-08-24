import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves this project from /slim-vitrine/.
  base: "/slim-vitrine/",
  preview: {
    allowedHosts: ["4173-i74o0gmm7kgn6n7q52t33-9a8b5c72.us4.manus.computer"],
  },
  plugins: [react(), tailwindcss()],
});
