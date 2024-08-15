import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import netlify from "vite-plugin-netlify";

export default defineConfig({
  plugins: [react(), netlify()],
  base: "/",
});
