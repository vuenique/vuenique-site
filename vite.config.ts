import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    "/": {
      target: "http://localhost:8080/",
      changeOrigin: true,
      configure: (proxy, options) => {
        // proxy will be an instance of 'http-proxy'
      }
    }
  }
});
