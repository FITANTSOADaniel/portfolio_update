import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// SPA Vite + React + React Router. `npm run build` produit un dossier `dist/`
// avec index.html + assets/ — déployable sur n'importe quel hébergeur statique.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: true,
    port: 8080,
  },
});
