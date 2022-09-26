import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   esbuildOptions: {
  //     define: {
  //       global: "globalThis",
  //     },
  //     plugins: [
  //       ,
  //     ],
  //   },
  // },
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
      http: "stream-http",
      https: "https-browserify",
      os: "os-browserify/browser",
      buffer: "buffer",
      url: "url",
      path: "path-browserify",
    },
  },
  define: {
    global: {},
    path: {},
    "process.env": {},
  },
});
