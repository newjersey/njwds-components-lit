import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    assetsInlineLimit: 0,
    lib: {
      name: "dist",
      entry: {
        "components/nj-button/nj-button": "src/nj-button.ts",
        "components/nj-icon/nj-icon": "src/nj-icon.ts",
      },
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        globals: {
          lit: "lit",
        },
        format: "es",
      },
    },
  },
});
