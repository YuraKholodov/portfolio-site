import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      png: {
        quality: 100,
      },
      jpeg: {
        quality: 90,
      },
      jpg: {
        quality: 90,
      },
    }),
  ],
  root: "./src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      // input: { main: "./src/index.html" },
      output: {
        // Настройка вывода для разных типов файлов
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          if (/css/i.test(extType)) {
            extType = "css";
          }
          if (/js/i.test(extType)) {
            extType = "js";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
