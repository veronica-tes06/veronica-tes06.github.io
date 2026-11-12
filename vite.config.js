import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// viteSingleFile inlines all JS, CSS and images into dist/index.html,
// so the built portfolio is ONE file that opens with a double-click
// (no server needed) and also works when hosted on GitHub Pages.
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
});
