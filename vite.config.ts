import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist/client",
    target: "es2022",
    sourcemap: true,
  },
});
